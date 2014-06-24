annotations = function(){
    
    var temp_pos; // Tableau des positions [(X,Y), ...]
    var tempEvMulti; // Cache pour les frames ayant plusieurs positions
    var temp_name; // Enregistre les noms deja vus[[nom, couleur], ..]
    var tabColor; // Tableau des couleurs pour l'affichage des noms
    
    // Id des corpus/media/layer
    var idCorp, idMed, idLay;
	function annotations (){
        
    }
	
    // Enregistre les annotations dans le temp /!\ elles doivent être en pourcentages !
	// Enregistre les annotations dans le temp_pos en estrapolant -> Mais on ne veut plus extrapoler
    annotations.enregistre_pos = function(frame, type, posX, posY){
        if(!comportement.vid.paused){
            if(type == "release" && annotations.temp_pos.length == 0){
                // Si c'est le release d'après doubletap, dont on ne veut pas garder la trace, on ne fais rien
            } else { // Dans tous les autres cas, on enregistre, en extrapolant les positions pour les frames manquantes
                // l'index de la derniere position enregistree
                var indexprec = annotations.temp_pos.length-1;
                switch(type){// NB : Possibilite d'un drag apres un hold/touch mais pas l'inverse. -> Peut poser des probs.
                    case "drag" : // Si c'est un drag, il y a forcement avant un drag ou un dragstart -> extrapoler les positions des frames intermediaires
                        /*
                         if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un drag");
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragend" : //Drag ou dragstart avant : seulement extrapoler
                        /*if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         } else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         } else {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un dragend");
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragstart" : // possibilite d'un touch ou hold juste avant -> Extrapoler
                        /*if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else { //Si c'est pas le cas, c'est que c'est un vrai debut donc on push
                         annotations.save (indexprec, frame, posX, posY, type);
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "hold" : // un touch juste avant
                        /* if((annotations.temp_pos[indexprec][1] == "touch") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else  {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un touch avant un hold");
                         } */
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "touch" : // Juste enregistrer la position/frame
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "release" : // Concerne le cas du release post touch ou hold pour avoir le temps pour le même endroit (Aussi du drag, mais dans ce cas, vu que'il y a deja le dragend, c'est deja extrapole. Il suffit juste de demander si on veut enregistrer les positions
                        // Le release peut ne pas etre exactement au meme endroit que le touch ou le hold
                        // release -> Popu pour enregistrer les pos (Noms, layer nom, etc)
                        // Vider le tableau temp_pos
                        /*if(annotations.temp_pos.length  > 4){ // Pour gerer les pauses quand la video tourne
                         if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }
                         interface.popup();
                         comportement.vid.pause();
                         }*/
                        if(annotations.temp_pos.length > 4){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }
                        var modal = document.getElementById("myModal");
                        if(posY < 50){ // En pourcentage, donc le milieu c'est 50
                            modal.style.bottom = "10px";
                            modal.style.top = "auto";
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "10px";
                                modal.style.right = "";
                            }
                        }else{
                            modal.style.top = "10px";
                            modal.style.bottom = "auto";
                            console.log(posY + "Triii" + comportement.vid.height/2);
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "10px";
                                modal.style.right = "";
                            }
                        }
                        interface.popup();
                        comportement.vid.pause();
                        break;
                }
            }
        }else if (type == "hold"){ // Si la video est en pause
            // Demarage de la video
            comportement.vid.play();
        }
    }
    
    // Estrapole les positions -> On veut juste garder les positions recuperees
    annotations.extrapol = function(i, frame, posX, posY, type) {
        var valeur = annotations.temp_pos[i];
        var espace = frame - valeur[0];
        var decalageX = (valeur[2] - posX) / espace;
        var decalageY = (valeur[3] - posY) / espace;
        for (var i = 1; i < espace; i++){
            annotations.temp_pos.push([valeur[0]+i, "remplissage_auto", valeur[2] + i * decalageX, valeur[3] + i * decalageY]);
        }
        annotations.temp_pos.push([frame, type, posX, posY]);
        annotations.tempEvMulti = [];
        annotations.tempEvMulti.push([frame, type, posX, posY]);
    }
    
    
    // Enregistre en verifiant qu'il n'y a pas plusieurs evenements pour la meme frame, si c'est le cas, fais la moyenne de tout
    annotations.save = function(indexprec, frame, posX, posY, type){
        var temp = {};
        temp.x = posX;
        temp.y = posY;
        temp.t = frame;
        temp.type = type;
        
        if(annotations.temp_pos.length > 0){
            if(annotations.temp_pos[indexprec].t == frame){
                annotations.tempEvMulti.push(temp);
                var x = 0;
                var y = 0;
                for (var i = 0; i < annotations.tempEvMulti.length; i++){
                    x += annotations.tempEvMulti[i].x;
                    y += annotations.tempEvMulti[i].y;
                }
                var tmp = {};
                tmp.x = x/annotations.tempEvMulti.length;
                tmp.y = y/annotations.tempEvMulti.length;
                tmp.t = frame;
                tmp.type = type;
                annotations.temp_pos[indexprec] = tmp;
            } else{
                annotations.temp_pos.push(temp);
                annotations.tempEvMulti = [];
                annotations.tempEvMulti.push(temp);
            }
        } else {
            annotations.temp_pos.push(temp);
            annotations.tempEvMulti = [];
            annotations.tempEvMulti.push(temp);
        }
        //console.log(annotations.temp_pos);
    }
    /*
     if(annotations.temp_pos.length > 0){
     if(annotations.temp_pos[indexprec][0] == frame){
     
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     var x = 0;
     var y = 0;
     for (var i = 0; i < annotations.tempEvMulti.length; i++){
     x += annotations.tempEvMulti[i][2];
     y += annotations.tempEvMulti[i][3];
     }
     annotations.temp_pos[indexprec] = [frame, type, x/annotations.tempEvMulti.length, y/annotations.tempEvMulti.length];
     }else{
     annotations.temp_pos.push([frame, type, x, y]);
     annotations.tempEvMulti = [];
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     }
     }else {
     annotations.temp_pos.push([frame, type, posX, posY]);
     annotations.tempEvMulti = [];
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     
     }
     }
     */
    /* Envoyer les annotations au serveur puis efface le temp_pos */
    annotations.envoyer = function(persoName) {
        
        /* Recupere le nom entre et l'enregistre en verifiant qu'il n'y soit pas deja */
        if(persoName == undefined){
            persoName = document.getElementById("namePerso").value;
        }
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
                tmp.color = annotations.tabColor[annotations.temp_name.length % annotations.tabColor.length];
                annotations.temp_name.push(tmp);
            }
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
        camomile.create_annotation(function(data){}, annotations.idCorp, annotations.idMed, annotations.idLay, fragment, dat);
        
        // Reinitialisation du champ du nom et du tableau de positions
        annotations.reset();
    }
    
    
    annotations.reset = function(){
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
    }
    
	return annotations;
}();



/* Remove Annotations
 
 var id = [];
 
 camomile.getAnnotations(function(data){
 for (var i = 0; i < data.length; i ++){
 id.push(data[i]._id);
 }
 }
 , "53884ee3682be502003adae7"
 , "53884f84682be502003adaed"
 , "53a2d76cf698ae02004c4418"
 
 );
 for(var i = 0; i < id.length ; i++){
 camomile.remove_annotation(function(data){
 
 }, "53884ee3682be502003adae7"
 , "53884f84682be502003adaed"
 , "53a2d76cf698ae02004c4418"
 , id[i]);
 }
 
 */
