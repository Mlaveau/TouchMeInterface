/* Gestion de la video */

/* REFAIRE LA GESTION DU PLAN ACTUEL AVEC UNE DEDUCTION DU PLAN A PARTIR DE LA SEGMENTATION. PAS EN COMPTANT : */
comportement = function(){
	// Variables
	var vid, time, tmp, vit, pos;

	// Timer 
	var vidTimer;
	var decalage;

	// Segmentation
	var segm;
	
	// Plans
	var planActuel;
	// Pour le multitouch
	var hammertime;

	// Affichage de la position
	//var can, ctx;
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
	function comportement (){

	}

	comportement.init = function() {
		document.getElementById("LoginUsername").value = "root"; 
		document.getElementById("LoginPassword").value = "camomile";
		// Initialise decalage
		comportement.decalage = 0.1;
		comportement.segm = "";
		// Canvas, context et document  A REMETTRE SI UN JOUR CA VEUT BIEN FONCTIONNER
		//can = document.getElementById("can");
		//ctx = can.getContext("2d");

		// Affichages 
		comportement.time = document.getElementById("curtime");
		comportement.pos = document.getElementById("position");
		comportement.tmp = document.getElementById("temps");	
		comportement.vit = document.getElementById("vitesse");
	}


	comportement.elVid = function(){
		// Objects : button et video 
		comportement.vid = document.getElementById("vid");
		var can = document.getElementById("can");
		comportement.vid.addEventListener('ended', comportement.vidEnd, false);

		comportement.vidTimer = "";
		comportement.planActuel = 0;

		/* Gestion du multitouch */
		comportement.hammertime = Hammer(can);

		// Gestion des differents mouvements
		comportement.hammertime.on("doubletap", function(e){comportement.playVideo(); comportement.touchXY(e);}); // Play/pause
		comportement.hammertime.on("pinchin", function(e){comportement.stop(); comportement.touchXY(e);}); // Stop
		comportement.hammertime.on("swiperight", function(e){comportement.bwd(); comportement.touchXY(e);}); // Avance de 10 secs -> Faire plutot passer au plan suivant ?
		comportement.hammertime.on("swipeleft", function(e){comportement.fwd(); comportement.touchXY(e);}); // Recule de 10 secs -> Faire plutot revenir au plan precedent ?
		comportement.hammertime.on("touch", function(e){comportement.touchXY(e);}); 
		comportement.hammertime.on(all_events.join(" "), function(e){var posX = e.gesture.center.pageX - interface.posleft; var posY = e.gesture.center.pageY - interface.postop; comportement.showPos(posX, posY); console.log(comportement.vid.currentTime, posX, posY); annotations.enregistre(posX, posY)}); 
	}
	
	comportement.update_segm= function(data){
		comportement.segm = data;
		comportement.vidTimer = window.setInterval("comportement.plans()", 1);
	}

	// Affiche la position
	comportement.touchXY = function(e) {

		comportement.pos.innerHTML = comportement.planActuel + " : ";
		/*// Lance l'enregistrement de la position jusqu'au lever du doigt si la video tourne
		if(comportement.vid.paused != true){
			console.log("yeah");//annotations.enregistre();
	
		}*/
	}

	comportement.release = function(e){
		//annotation.stopenregistre();
		console.log("stop");
	}

	// Affiche la position et le cercle sous le doigt
	comportement.showPos = function(canX, canY){
	  	comportement.pos.innerHTML = " (" + canX + "," + canY + ") ";
		/*//A remettre quand j'aurai enfin le canvas. 
		ctx.clearRect(0, 0, document.width, document.height);

		ctx.beginPath();
		ctx.arc(canX, canY, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill(); */
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
		if((comportement.vid.currentTime > tmp)){ /* OU changer le if ici ? */
			comportement.planActuel +=1;
			comportement.vid.pause();
		}	
	}

	// Play 
	comportement.playVideo = function() {
		if(document.getElementById('sidebar').style.display != ""){ // Peut être lancee que si le menu est cache (Pour les annotations
			if (comportement.vid.paused == true) {
				comportement.vid.play();
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
		comportement.playButton.value = "Play";
		comportement.vid.playbackRate = 1;
		clearTimeout(comportement.vidTimer)
	}
	return comportement;	
}();

