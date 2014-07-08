annotations = function(){
    
    var temp_pos; // Tableau des positions [(X,Y), ...]
    var temp_evMulti; // Cache pour les frames ayant plusieurs positions
    var temp_name; // Enregistre les noms deja vus[[nom, couleur], ..]
    var colorName; // Tableau des couleurs pour l'affichage des labels
    
    // Id des corpus/media/layer en court
    var idCorp, idMed, idLay;
    
    // Contient les annotation du layer courant
    var annots;

    /* Constructeur */
	function annotations (){
        
    }
	
    /* Enregistre les positions a chaque evenement dans annots */  
    annotations.enregistre_pos = function(frame, type, posX, posY){
        var indexprec = annotations.temp_pos.length - 1; 
        if(!comportement.vid.paused && annotations.idLay != undefined){ // Si on a un layer courant et que la video joue
            if(type == "release" && annotations.temp_pos.length == 0){
                // Si c'est le release d'après doubletap, dont on ne veut pas garder la trace, on ne fait rien
            } else { // Dans tous les autres cas, on enregistre, en extrapolant les positions pour les frames manquantes
                // l'index de la derniere position enregistree
                switch(type){
                    case "drag" : 
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragend" : 
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragstart" : 
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "hold" : 
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "touch" : 
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "release" : // release -> Popup pour enregistrer les pos
                        // Vider le tableau temp_pos pour la prochaine annotation
                        if(annotations.temp_pos.length > 4){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }
                        var modal = document.getElementById("myModal");
                        // Gere la position de la fenetre en fonction de la position pour pas surperposer
                        if(posY < 50){ // En pourcentage, donc le milieu c'est 50
                            modal.style.bottom = "10px";
                            modal.style.top = "auto";
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "300px";
                                modal.style.right = "";
                            }
                        }else{
                            modal.style.top = "10px";
                            modal.style.bottom = "auto";
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "300px";
                                modal.style.right = "";
                            }
                        }
                        interface.popup();
                        comportement.vid.pause();
                        break;
                }
            }
        } else if (type == "hold" && annotations.idLay != undefined){ // Si la video est en pause
            // Demarage de la video
            comportement.playVideo();
            annotations.save(indexprec, frame, posX, posY, type);
        }
    }

    /* Veirifie que les entiers passe en parametres sont bien compris entre 0 et 100 */
    annotations.verifBornes = function(posX, posY){
    	if (posX >= 0 && posY >= 0 && posX <= 100 && posY <= 100){
    		return true;
    	}else{
    		return false; 
    	}	    
    
    }
    /* Extrapole les positions pour l'affichage des annotations */
    annotations.extrapol = function(i, frame, posX, posY, type) {
        var valeur = annotations.temp_pos[i];
        var espace = frame - valeur[0];
        var decalageX = (valeur[2] - posX) / espace;
        var decalageY = (valeur[3] - posY) / espace;
        for (var i = 1; i < espace; i++){
            annotations.temp_pos.push([valeur[0] + i, "remplissage_auto", valeur[2] + i * decalageX, valeur[3] + i * decalageY]);
        }
        annotations.temp_pos.push([frame, type, posX, posY]);
        annotations.temp_evMulti = [];
        annotations.temp_evMulti.push([frame, type, posX, posY]);
    }
    
    
    /* Enregistre en verifiant qu'il n'y a pas plusieurs evenements pour la meme frame, si c'est le cas, fais la moyenne de tout */
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
            	} else{ // Sinon on enregistre directement
                	annotations.temp_pos.push(temp);
                	annotations.temp_evMulti = [];
                	annotations.temp_evMulti.push(temp);
            	}
        	} else { // Enregsitre directement
            	annotations.temp_pos.push(temp);
            	annotations.temp_evMulti = [];
            	annotations.temp_evMulti.push(temp);
        	}
        }
    }

    /* Envoyer les annotations au serveur puis efface le temp_pos */
    annotations.envoyerprevious = function() {
        annotations.envoyer();
        comportement.bwd();
    }

    /* Envoie l'annotation  dans le layer selectionne*/
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
            fragment.end = annotations.temp_pos[annotations.temp_pos.length-1].t; // Interval de temps
            var pos = [];
            for (var i = 0; i < annotations.temp_pos.length; i++){
                var tmp = {};
                tmp.t = annotations.temp_pos[i].t;
                tmp.x = annotations.temp_pos[i].x;
                tmp.y = annotations.temp_pos[i].y;
                pos.push(tmp);
            }
            var dat = {}; // // data = {label : _, position : [{x : _ , y : _ , t : _ }, ... ]}
            dat.label = persoName;
            dat.position = pos;
            camomile.create_annotation(function(data){annotations.annots.push(data);}, annotations.idCorp, annotations.idMed, annotations.idLay, fragment, dat);
        }
        // Reinitialisation du champ du nom et du tableau de positions
        annotations.reset();
    }
    
    /* Reset le tableau d'annotation et le champ du nom */
    annotations.reset = function(){
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
    }
    
    /* Creer un layer pour enregistrer des annotations */
    annotations.creerLayer = function(){
        // Cree le layer en question avec comme source le username de connexion
        camomile.create_layer(
            function(dat){
                // Enregistre l'id du layer en question
                annotations.idLay = dat._id;
            }, 
            annotations.idCorp, 
            annotations.idMed, 
            "Annotations", 
            "temps", 
            "name pos", 
            interface.username
        );
        annotations.annots = [];
        
    }
    
    /* Recupere les annotations deja presente dans le layer indique*/
    annotations.recupAnnot = function(idLayer, source){
    	annotations.annots = Array();
        annotations.idLay = idLayer;
        document.getElementById("currentLayer").innerHTML = source + " : " + idLayer;
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
                }
                annotations.sortAnnots();
            }, 
            annotations.idCorp,
            annotations.idMed,
            annotations.idLay
        );
    }
    
    /* Range les annotations dans l'ordre chronologique */
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
 /*annotations.idCorp
 , annotations.idMed
 , annotations.idLay*//*);
 
 for(var i = 0; i < id.length ; i++){
    camomile.remove_annotation(function(data){}, "53884ee3682be502003adae7", "53884f84682be502003adaed", "53a99a1519e7aa02005eeac4", id[i]);
 }
 
 */