annotations = function(){
    
    var temp_pos; // Tableau des positions [(X,Y), ...]
    var tempEvMulti; // Cache pour les frames ayant plusieurs positions
    var temp_name; // Enregistre les noms deja vus[[nom, couleur], ..]
    var tabColor; // Tableau des couleurs pour l'affichage des noms
    
    // Id des corpus/media/layer
    var idCorp, idMed, idLay;
	function annotations (){
        
    }
	
	annotations.enregistre_pos = function(frame, type, posX, posY){
        if(!comportement.vid.paused){
            if(type == "release" && annotations.temp_pos.length == 0){
                // Si c'est le release d'après doubletap, dont on ne veut pas garder la trace, on ne fais rien
            } else { // Dans tous les autres cas, on enregistre, en extrapolant les positions pour les frames manquantes
                // l'index de la derniere position enregistree
                var indexprec = annotations.temp_pos.length-1;
                switch(type){// NB : Possibilite d'un drag apres un hold/touch mais pas l'inverse. -> Peut poser des probs.
                    case "drag" : // Si c'est un drag, il y a forcement avant un drag ou un dragstart -> extrapoler les positions des frames intermediaires
                        if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                            annotations.extrapol(indexprec, frame, posX, posY, type);
                            
                        }else if(annotations.temp_pos[indexprec][0] == frame){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }else {
                            console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un drag");
                        }
                        break;
                    case "dragend" : //Drag ou dragstart avant : seulement extrapoler
                        if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                            annotations.extrapol(indexprec, frame, posX, posY, type);
                            
                        } else if(annotations.temp_pos[indexprec][0] == frame){
                            annotations.save(indexprec, frame, posX, posY, type);
                        } else {
                            console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un dragend");
                        }
                        break;
                    case "dragstart" : // possibilite d'un touch ou hold juste avant -> Extrapoler
                        if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                            annotations.extrapol(indexprec, frame, posX, posY, type);
                            
                        }else if(annotations.temp_pos[indexprec][0] == frame){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }else { //Si c'est pas le cas, c'est que c'est un vrai debut donc on push
                            annotations.save (indexprec, frame, posX, posY, type);
                        }
                        break;
                    case "hold" : // un touch juste avant
                        if((annotations.temp_pos[indexprec][1] == "touch") && annotations.temp_pos[indexprec][0] !=frame){
                            annotations.extrapol(indexprec, frame, posX, posY, type);
                            
                        }else if(annotations.temp_pos[indexprec][0] == frame){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }else  {
                            console.log("Je me suis gouree quelquepart il n'y a pas forcement un touch avant un hold");
                        }
                        break;
                    case "touch" : // Juste enregistrer la position/frame
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "release" : // Concerne le cas du release post touch ou hold pour avoir le temps pour le même endroit (Aussi du drag, mais dans ce cas, vu que'il y a deja le dragend, c'est deja extrapole. Il suffit juste de demander si on veut enregistrer les positions
                        // Le release peut ne pas etre exactement au meme endroit que le touch ou le hold
                        // release -> Popu pour enregistrer les pos (Noms, layer nom, etc)
                        // Vider le tableau temp_pos
                        
                        if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                            annotations.extrapol(indexprec, frame, posX, posY, type);
                        }else if(annotations.temp_pos[indexprec][0] == frame){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }
                        interface.popup();
                        comportement.playVideo();
                        break;
                }
            }
        }
    }
    
    
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
        console.log(annotations.temp_pos.length);
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
    
    /* Envoyer les annotations au serveur puis efface le temp_pos */
    annotations.envoyer = function(persoName) {
        if(persoName == undefined){
            persoName = document.getElementById("namePerso").value;
        }
        if(persoName != ""){
            var vu = false;
            for(var i = 0; i<annotations.temp_name.length; i++){
                if(annotations.temp_name[i][0] == persoName){
                    vu = true;
                }
            }
            
            if(!vu) {
                annotations.temp_name.push([persoName, annotations.tabColor[annotations.temp_name.length%annotations.tabColor.length]]);
            }
        }
        
        // l'annotation
        // Enregistrer l'annotation dans le bon layer
        
        var fragment = [annotations.temp_pos[0][0],annotations.temp_pos[annotations.temp_pos.length-1][0]]; // Interval de temps
        var pos = [];
        for (var i = 0; i < annotations.temp_pos.length; i++){
            pos.push([annotations.temp_pos[i][2], annotations.temp_pos[i][3]]);
        }
        var dat = [persoName, pos ]; // [name, [(posX,posY), ...]]
        camomile.create_annotation(function(data){console.log(data + " Ok ");}, annotations.idCorp, annotations.idMed, annotations.idLay, fragment, dat);
        
        // Reinitialisation du champ du nom et du tableau de positions
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
    }
    
    
    annotations.reset = function(){
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
    }
    
	return annotations;
}();

