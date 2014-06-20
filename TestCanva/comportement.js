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

	// Recupere tous les elements
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
    
    var events_annot = ["dragstart",
                        "drag",
                        "dragend", "hold", "release", "touch"];
	function comportement (){

	}

	comportement.init = function() {
		document.getElementById("LoginUsername").value = "root"; 
		document.getElementById("LoginPassword").value = "camomile";
		// Initialise decalage
		comportement.decalage = 0.1;
		comportement.segm = "";
        
		// Affichages 
		comportement.time = document.getElementById("curtime");
		comportement.pos = document.getElementById("position");
		comportement.tmp = document.getElementById("temps");	
		comportement.vit = document.getElementById("vitesse");
        comportement.annotTimer = "";
        
        
       
	}


	comportement.elVid = function(){
		// Objects : button et video 
		comportement.vid = document.getElementById("vid");
        comportement.vid.addEventListener('ended', comportement.vidEnd, false);
        var can = document.getElementById("can");


		comportement.vidTimer = "";
		comportement.planActuel = 0;
        annotations.currentFrame = 0;
        annotations.temp_annot = [];
        annotations.currentIdTab = 0;
        annotations.tempEvMulti = [];
        annotations.temp_name = [];
        console.log(annotations.tempEvMulti);
        annotations.tabColor = ['red', 'purple', 'green', 'orange', 'blue', 'black', 'aqua', 'white', 'lime', 'yellow', 'maroon', 'fuschia', 'navy', 'silver', 'gray', 'olive', 'teal']
		/* Gestion du multitouch */
		comportement.hammertime = Hammer(can);

		// Gestion des differents mouvements
		comportement.hammertime.on("doubletap", function(e){comportement.playVideo(); comportement.touchXY(e);}); // Play/pause
		comportement.hammertime.on("pinchin", function(e){comportement.stop(); comportement.touchXY(e);}); // Stop
		comportement.hammertime.on("swiperight", function(e){comportement.bwd(); comportement.touchXY(e);}); // Avance au plan suivant
		comportement.hammertime.on("swipeleft", function(e){comportement.fwd(); comportement.touchXY(e);}); // Recule au plan precedent
		comportement.hammertime.on(events_annot.join(" "), function(e){
                                   if (interface.visuaAnnot == false||interface.visuaAnnot == undefined){
                                   var posX = e.gesture.center.pageX - interface.posleft;
                                   var posY = e.gesture.center.pageY - interface.postop;
                                   comportement.showPos(posX, posY);
                                   console.log(comportement.vid.currentTime * 25, posX, posY, e.type);
                                   annotations.enregistre_pos(Math.round(comportement.vid.currentTime * 25), e.type, posX, posY)
                                   }
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
	comportement.showPos = function(canX, canY){
	  	comportement.pos.innerHTML = " (" + canX + "," + canY + ") ";
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
		comportement.curtime();
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

