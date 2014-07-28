/* 
 * Gestion des annotations (recuperees et enregistrees)
 */

annotations = function(){    
    var temp_pos; // Tableau des positions [(X,Y), ...]
    var temp_evMulti; // Cache pour les frames ayant plusieurs positions
    var temp_name; // Enregistre les noms deja vus[[nom, couleur], ..]
    var colorName; // Tableau des couleurs pour l'affichage des labels
    
    // Id des corpus/media/layer en court
    var idCorp, idMed, idLay;
    
    // Contient les annotation du layer courant
    var annots;

    // Id de l'annot a remov actuellement
    var annotIDRemov; 

    /**
	 * Constructeur 
	 * @method annotations
	 * @return 
	 */
	function annotations (){
        
    }
	
    /**
     * Enregistre les positions a chaque evenement dans annots 
     * @method enregistre_pos
     * @param int frame // Courante
     * @param string type // type de levenement recupere par Hammer
     * @param int posX // (<= 100 && >= 0)
     * @param int posY // (<= 100 && >= 0)
     * @return 
     */
    annotations.enregistre_pos = function(frame, type, posX, posY){
        var indexprec = annotations.temp_pos.length - 1; 
        if(!comportement.vid.paused && annotations.idLay != undefined){ // Si on a un layer courant et que la video joue
            if(type == "release" && annotations.temp_pos.length == 0){
                // Si c'est le release d'après doubletap, dont on ne veut pas garder la trace, on ne fait rien
            }else{ // Dans tous les autres cas, on enregistre
               if(type == "release"){
                    // release -> Popup pour enregistrer les pos
                    // Vider le tableau temp_pos pour la prochaine annotation
                    if(annotations.temp_pos.length > 4){
                        annotations.save(indexprec, frame, posX, posY, type);
                    }
                    annotations.affichePopup(posX, posY);
                    comportement.pauseVideo();
                }else{
                    annotations.save(indexprec, frame, posX, posY, type);
                }
            }
        }else if (type == "hold" && annotations.idLay != undefined){ // Si la video est en pause
            // Demarage de la video
            comportement.playVideo();
            annotations.save(indexprec, frame, posX, posY, type);
            var tempX = posX * comportement.vid.width / 100;
            var tempY = posY * comportement.vid.height / 100;
            comportement.showCurrentPos(tempX, tempY);
        } else if(type == "touch" && comportement.vid.paused){
            // Met en mode pour effacer l'annotation ! (En calculant la distance au centre de chaque cercle tout en etant moins grande que le rayon pour que ça veuille dire qu'il y en a une de sélectionnée.)
            // -> Fait apparaître une fenetre modale pour demander le droit.

        }
    }

    annotations.affichePopup = function(){
        // revient au 75%ème plan des annotations qu'on a en stock.
        var tmp = Math.round((annotations.temp_pos.length - 1) * 75 / 100);
        var temp_annot = annotations.temp_pos[tmp];
        comportement.vid.currentTime = Math.round(temp_annot.t / 25);
        // Affichage des annotations sur ce plan
        visualisation.afficheAnnot();
        // Affichage de l'annotation courante qu'on enregistre au moment present
        // Insertion d'un cercle 
        // Le placer au bon endroit
        visualisation.insertCircle("annotationCourante", "green");
        var gCircle = document.getElementById("annotationCourante");
        var x =  temp_annot.x / 100 * comportement.vid.width;
        var y =  temp_annot.y / 100 * comportement.vid.height;
        gCircle.setAttributeNS(null, "cx", x);
        gCircle.setAttributeNS(null, "cy", y);
        gCircle.style.display = "";
        // fin des ajouts

        // Gere la position de la fenetre en fonction de la position pour pas surperposer avec l'annotation en question
        var posY = temp_annot.y;
        var posX = temp_annot.x; 
        var modaleAnnot = document.getElementById("modalAnnots");
        if(posY < 50){ // En pourcentage, donc le milieu c'est 50
            modaleAnnot.style.bottom = "10px";
            modaleAnnot.style.top = "auto";
            if(posX < 50){
                modaleAnnot.style.left = "";
                modaleAnnot.style.right = "10px";
            }else{
                modaleAnnot.style.left = "300px";
                modaleAnnot.style.right = "";
            }
        }else{
            modaleAnnot.style.top = "10px";
            modaleAnnot.style.bottom = "auto";
            if(posX < 50){
                modaleAnnot.style.left = "";
                modaleAnnot.style.right = "10px";
            }else{
                modaleAnnot.style.left = "300px";
                modaleAnnot.style.right = "";
            }
        }
        interface.popupAnnot();
    }

    /**
     * Verifie que les entiers passe en parametres sont bien compris entre 0 et 100 
     * @method verifBornes
     * @param int posX
     * @param int posY
     * @return bool 
     */
    annotations.verifBornes = function(posX, posY){
    	if (posX >= 0 && posY >= 0 && posX <= 100 && posY <= 100){
    		return true;
    	}else{
    		return false; 
    	}	    
    
    }
    
    /**
     * Enregistre en verifiant qu'il n'y a pas plusieurs evenements pour la meme frame, si c'est le cas, fais la moyenne de tout 
     * @method save
     * @param int indexprec
     * @param int frame
     * @param int posX
     * @param int posY
     * @param String type
     * @return 
     */
    annotations.save = function(indexprec, frame, posX, posY, type){
        if(annotations.verifBornes(posX, posY)){ // si c'est bien dans les bornes
        	var temp = {};
     	    temp.x = posX;
     	    temp.y = posY;
     	    temp.t = frame;
     	    temp.type = type;
            // S'il y a deja des evenements il faut comparer les frames
			if(annotations.temp_pos.length > 0){
                // Si l'evenement precedent est sur la meme frame
       	 		if(annotations.temp_pos[indexprec].t == frame){
                    // Enregistre en calculant la moyenne de tous les evenements sur cette frame
                	annotations.temp_evMulti.push(temp);
                	var x = 0;
                	var y = 0;
                	for (var i = 0; i < annotations.temp_evMulti.length; i++){
                    	x += annotations.temp_evMulti[i].x;
                    	y += annotations.temp_evMulti[i].y;
                	}
                	var tmp = {};
                	tmp.x = x/annotations.temp_evMulti.length;
                	tmp.y = y/annotations.temp_evMulti.length;
                	tmp.t = frame;
                	tmp.type = type;
                	annotations.temp_pos[indexprec] = tmp;
            	}else{ // Sinon on enregistre directement
                	annotations.temp_pos.push(temp);
                	annotations.temp_evMulti = [];
                	annotations.temp_evMulti.push(temp);
            	}
        	}else{ // Enregsitre directement
            	annotations.temp_pos.push(temp);
            	annotations.temp_evMulti = [];
            	annotations.temp_evMulti.push(temp);
        	}
        }
    }

    /**
     * Envoyer les annotations au serveur puis efface le temp_pos avant de retourner au debut du plan
     * @method envoyerprevious
     * @return 
     */
    annotations.envoyerprevious = function() {
        annotations.envoyer();
        comportement.bwd();
        visualisation.afficheAnnot();      
    }

    /**
     * Envoyer les annotations au serveur puis efface le temp_pos avant de retourner au debut du plan
     * @method envoyerprevious
     * @return 
     */
    annotations.envoyernext = function() {
        var tempTps = annotations.temp_pos[annotations.temp_pos.length - 1].t;
        annotations.envoyer();
        comportement.vid.currentTime = tempTps/25;
        visualisation.afficheAnnot();        
    }

    /**
     * Envoie l'annotation  dans le layer selectionne
     * @method envoyer
     * @return 
     */
    annotations.envoyer = function() {
        // Recupere le nom entre et l'enregistre en verifiant qu'il n'y soit pas deja 
        persoName = document.getElementById("namePerso").value;
        if(persoName != ""){
            var vu = false;
            for(var i = 0; i < annotations.temp_name.length; i++){
                if(annotations.temp_name[i].name == persoName){
                    vu = true;
                }
            }
            
            // Enregistre le nom pour pouvoir le reafficher
            if(!vu) {
                var tmp = {};
                tmp.name = persoName;
                tmp.color = annotations.colorName[annotations.temp_name.length % annotations.colorName.length];
                annotations.temp_name.push(tmp);
            }

            // l'annotation
            // Enregistrer l'annotation dans le bon layer
            var fragment = {}
            fragment.start = annotations.temp_pos[0].t;
            fragment.end = annotations.temp_pos[annotations.temp_pos.length - 1].t; // Interval de temps
            var pos = [];
            for(var i = 0; i < annotations.temp_pos.length; i++){
                var tmp = {};
                tmp.t = annotations.temp_pos[i].t;
                tmp.x = annotations.temp_pos[i].x;
                tmp.y = annotations.temp_pos[i].y;
                pos.push(tmp);
            }
            var dat = {}; // data = {label : _, position : [{x : _ , y : _ , t : _ }, ... ]}
            dat.label = persoName;
            dat.position = pos;
            camomile.create_annotation(function(data){annotations.annots.push(data);}, annotations.idCorp, annotations.idMed, annotations.idLay, fragment, dat);
            timeline.insertSegmAnnot(fragment.start, fragment.end);
        }
        // Reinitialisation du champ du nom et du tableau de positions
        annotations.reset();
    }
    
    /**
     * Reset le tableau d'annotation et le champ du nom 
     * @method reset
     * @return 
     */
    annotations.reset = function(){
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
        if(document.getElementById("annotationCourante")){
            document.getElementById("annotationCourante").remove();
        }
    }
    
    /**
     * Creer un layer pour enregistrer des annotations 
     * @method creerLayer
     * @return 
     */
    annotations.creerLayer = function(){
        var name = document.getElementById("nameLayer").value;
        console.log("Truc" + name);
        // Cree le layer en question avec comme source le username de connexion
        camomile.create_layer(
            function(dat){
                // Enregistre l'id du layer en question
                annotations.idLay = dat._id;
            }, 
            annotations.idCorp, 
            annotations.idMed, 
            name, 
            "annotations", 
            "tracking", 
            interface.username
        );
        annotations.annots = [];
        
    }
    
    /**
     * Recupere les annotations deja presente dans le layer indique
     * @method recupAnnot
     * @param String idLayer
     * @param String source
     * @return 
     */
    annotations.recupAnnot = function(idLayer, source, name){
    	annotations.annots = Array();
        annotations.idLay = idLayer;
        document.getElementById("currentLayer").innerHTML = source + " : " + name;
        camomile.getAnnotations(
            function(dat){
                for(var i = 0; i < dat.length; i++){
                    var vu = false;
                    annotations.annots.push(dat[i]);
                    for(var j = 0; j < annotations.temp_name.length; j++){
                        if(annotations.temp_name[j].name == dat[i].data.label){
                            vu = true;
                        }
                    } 
                    
                    // Enregistre le nom pour pouvoir le reafficher
                    if(!vu) {
                        var tmp = {};
                        tmp.name = dat[i].data.label;
                        tmp.color = annotations.colorName[annotations.temp_name.length % annotations.colorName.length];
                        annotations.temp_name.push(tmp);
                    }
                    timeline.insertAnnot();
                }
                annotations.sortAnnots();
            }, 
            annotations.idCorp,
            annotations.idMed,
            annotations.idLay
        );
    }
    
    /**
     * Range les annotations dans l'ordre chronologique 
     * @method sortAnnots
     * @return 
     */
    annotations.sortAnnots = function(){
    	annotations.annots.sort(
            function(a, b){ 

                var tmp = a.fragment.start-b.fragment.start; 
                if(tmp == 0){
                	tmp = a.fragment.end - b.fragment.end;
                }
    			return tmp; 
            }
        );
    }
           					
    annotations.effaceAnnot = function(posX, posY){
        if(annotations.verifBornes(posX, posY)){
            // Parcourir les annotations représentées à ce moment là 
            // faire la distance au centre pour voir lequel est le plus proche, tout en etant en dessous de diametre des cercles (50 ?)
            // Recuperer l'id
            // L'effacer du serveur et de temps_pos
            var tmp = document.getElementById("affichAnnot").childNodes;
            var tmpX = comportement.vid.width;
            var tmpY = comportement.vid.height;
            var tmpId = "";
            for (var valeur in tmp){
                if(tmp[valeur].localName == "g"){
                    // Calcule
                    var dx = tmp[valeur].childNodes[1].getAttributeNS(null, "cx") - (posX * comportement.vid.width / 100);
                    var dy = tmp[valeur].childNodes[1].getAttributeNS(null, "cy") - (posY * comportement.vid.height / 100);
                    if( ((dx * dx + dy * dy) < (tmpY * tmpY + tmpX * tmpX)) 
                        && 
                        ((dx < 50 && dx > -50) && (dy > -50 && dy < 50))){
                        tmpX = dx; 
                        tmpY = dy;
                        tmpId = tmp[valeur].id;
                        var affichage = document.getElementById("annotRemove");
                        affichage.innerHTML = "<br><b>Nom :</b> " + tmp[valeur].childNodes[0].firstChild.data + "<br>";
                        affichage.innerHTML += "<b>Id :</b> " + tmpId;
                        // MODIDIFIER L'EMPLACEMENT DE LA FENETRE MODALE EN FONCTION DE L'ENDROIT OU ON TOUCHE
                        $j("#modaleRemoveAnnot").modal('show');
                        annotations.annotIDRemov = tmpId;
                    }
                }
            }
        }
    }

    /* Delete Annot function */
    annotations.deleteAnnot = function(){
        camomile.remove_annotation(
            function(data){
                annotations.calbackRemove(data);
            }, 
            annotations.idCorp, 
            annotations.idMed, 
            annotations.idLay, 
            annotations.annotIDRemov);
    }

    /* Callback Remove Annot */
    annotations.calbackRemove = function(data){
        for(var i = 0; i < annotations.annots.length; i++){
            if(annotations.annots[i]._id == annotations.annotIDRemov){
                annotations.annots.splice(i, 1);
                var tmp = document.getElementById(annotations.annotIDRemov);
                tmp.remove();
                break;
            }
        }
    }
    return annotations;
}();



/* Remove all Annotations d'un layer
 
 var id = [];
 
 camomile.getAnnotations(function(data){
    for (var i = 0; i < data.length; i ++){
        id.push(data[i]._id);
    }
 }
 , "53884ee3682be502003adae7", "53884f84682be502003adaed", "53a99a1519e7aa02005eeac4"
 //annotations.idCorp, annotations.idMed, annotations.idLay
);
 
 for(var i = 0; i < id.length ; i++){
    camomile.remove_annotation(function(data){}, "53884ee3682be502003adae7", "53884f84682be502003adaed", "53a99a1519e7aa02005eeac4", id[i]);
 }
 
 */