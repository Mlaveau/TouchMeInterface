/* Gestion de la video */

/* REFAIRE LA GESTION DU PLAN ACTUEL AVEC UNE DEDUCTION DU PLAN A PARTIR DE LA SEGMENTATION. PAS EN COMPTANT : */
comportement = function(){
	// Variables
	var vid, time, tmp, vit, pos;
    
	// Timer
	var vidTimer;
    var annotTimer;
	var decalage;
    
	// Segmentation
	var segm;
	
	// Plans
	var planActuel;
	// Pour le multitouch
	var hammertime;
    
	// Recupere tous les evenements
	var all_events = ["touch",
                      "release",
                      "gesture",
                      "hold",
                      "tap",
                      "doubletap",
                      "dragstart",
                      "drag",
                      "dragend",
                      "dragleft",
                      "dragright",
                      "dragup",
                      "dragdown",
                      "swipe",
                      "swipeleft",
                      "swiperight",
                      "swipeup",
                      "swipedown",
                      "transformstart",
                      "transform",
                      "transformend",
                      "rotate",
                      "pinch",
                      "pinchin",
                      "pinchout"];
    
    // Evenements qu'on veut analyser
    var events_annot = ["dragstart",
                        "drag",
                        "dragend", "hold", "release", "touch"];
    
	function comportement (){
	}
    
    
	comportement.elVid = function(){
		// Objects : button et video
		comportement.vid = document.getElementById("vid");
        comportement.vid.addEventListener('ended', comportement.vidEnd, false);
        
        
		comportement.vidTimer = "";
		comportement.planActuel = 0;
        annotations.currentFrame = 0;
        annotations.temp_annot = [];
        annotations.currentIdTab = 0;
        annotations.tempEvMulti = [];
        annotations.temp_name = [];
        //Tableau de couleur de pour l'affichages des noms des annotations
        annotations.tabColor = ['red', 'purple', 'green', 'orange', 'blue', 'black', 'aqua', 'white', 'lime', 'yellow', 'maroon', 'fuschia', 'navy', 'silver', 'gray', 'olive', 'teal']
		/* Gestion du multitouch */
		comportement.hammertime = Hammer(comportement.vid);
        
		// Gestion des differents mouvements
		comportement.hammertime.on("doubletap", function(e){comportement.playVideo(); comportement.touchXY(e); annotations.temp_pos = []; console.log(e.type);}); // Play/pause
		comportement.hammertime.on("pinchin", function(e){comportement.stop(); comportement.touchXY(e);}); // Stop
		comportement.hammertime.on("swiperight", function(e){comportement.bwd(); comportement.touchXY(e);}); // Avance au plan suivant
		comportement.hammertime.on("swipeleft", function(e){comportement.fwd(); comportement.touchXY(e);}); // Recule au plan precedent
		comportement.hammertime.on(events_annot.join(" "), function(e){
                                 
                                   // Position en % de la hauteur et de la largeur
                                   var posX = Math.round((((e.gesture.center.pageX - interface.posleft) * 100) / comportement.vid.width) * 100) / 100;
                                   var posY = Math.round((((e.gesture.center.pageY - interface.postop) * 100) / comportement.vid.height) * 100) / 100;
                                   comportement.showPos(posX, posY);
                                   //console.log(comportement.vid.currentTime * 25, posX, posY, e.type);
                                   annotations.enregistre_pos(Math.round(comportement.vid.currentTime * 25), e.type, posX, posY)
                                   
                                   }); //Trouver un moyen d'automatiser les fps
        annotations.temp_pos = [];
	}
	
	comportement.update_segm= function(data){
		comportement.segm = data;
		comportement.vidTimer = window.setInterval("comportement.plans()", 1);
	}
    
	// Affiche la position
	comportement.touchXY = function(e) {
		comportement.pos.innerHTML = comportement.planActuel + " : ";
	}
    
	// Affiche la position et le cercle sous le doigt
	comportement.showPos = function(posX, posY){
	  	comportement.pos.innerHTML = " (" + posX + "," + posY + ") ";
	}
    
    
    
	comportement.curtime = function(){
        
		comportement.time.innerHTML = Math.floor(comportement.vid.currentTime/60) + ":" + Math.floor(comportement.vid.currentTime%60);
        
		if(comportement.vid.currentTime > 0 && comportement.vid.currentTime <= 1){ // Oblige car au tout debut on a pas la duree. Ce n'est qu'une fois la vidéo lancée
			if (Math.round(comportement.vid.duration/60) >0) {
				comportement.tmp.innerHTML = Math.floor(comportement.vid.duration/60) + ":" ; // Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming
			}
			comportement.tmp.innerHTML = comportement.tmp.innerHTML + Math.floor(comportement.vid.duration%60);
		}
	}
    
    
	/* Gestion de la video */
    
	comportement.plans = function(){
		var tmp = comportement.segm[comportement.planActuel]/25 - comportement.decalage;
		if(comportement.vid.currentTime > tmp){ /* OU changer le if ici ? */
			comportement.planActuel +=1;
			comportement.vid.pause();
            
            // Pour enregistrer les pos si on en a pointe
            if(annotations.temp_pos != ""){
                interface.popup();
            }
		}
	}
    
	// Play
	comportement.playVideo = function() {
        
		comportement.vidTimer = window.setInterval("comportement.curtime()", 1);
		if(document.getElementById('sidebar').style.display != ""){ // Peut être lancee que si le menu est cache (Pour les annotations
			if (comportement.vid.paused == true) {
				comportement.vid.play();
                comportement.vid.muted = true;
                //comportement.annotTimer = window.setInterval("annotations.enregistre_annot()", 1/25); //Faire en fonction du nb de frames
            }
			else {
				comportement.vid.pause();
            }
		}
	}
    
	// Forward
	comportement.fwd = function(){
		comportement.planActuel = comportement.planActuel + 1;
		comportement.vid.currentTime = comportement.segm[comportement.planActuel]/25 - comportement.decalage;
	}
    
	// Backward
	comportement.bwd = function(){
		comportement.planActuel = comportement.planActuel - 1;
		comportement.vid.currentTime = comportement.segm[comportement.planActuel]/25 - comportement.decalage;
	}
    
	// Stop
	comportement.stop = function(){
		comportement.vid.currentTime = 0;
		comportement.planActuel = 0;
		comportement.vid.pause();
	}
    
	// Plus lentement 
	comportement.slower = function(){
		comportement.vid.playbackRate -= 0.25;
		comportement.vid.pause();
		comportement.vid.play();
	}
    
	// Plus rapide 
	comportement.faster = function(){
		comportement.vid.playbackRate += 0.25;
		comportement.vid.pause();
		comportement.vid.play();
	}
    
	// Evenement de fin de video 
	comportement.vidEnd = function() {
		comportement.vid.playbackRate = 1;
		clearTimeout(comportement.vidTimer)
	}
	return comportement;	
}();