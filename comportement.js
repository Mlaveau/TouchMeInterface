/* 
 * Gestion de la video et du multitouch
 */

comportement = function(){

	/* Variables */ 

	// Element HTML 5
	var vid; // Video

    // Timer 
	var vidTimer; // pour l'affichage des annotations, du temps courant et la detection de changement de plan (Toutes les 100 ms)

	// Segmentation
	var segm; // Tableau contenant le numero des frames de changement de plan
	var planActuel; // Index dans segm du prochain changement de plan

	// Multitouch
	var hammertime; // Objet qui gere le multitouch
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
	"pinchout"]; // Ensemble des evenements reconaissables

	var events_annot = ["dragstart",
	"drag",
	"dragend", 
	"hold", 
	"release"]; // Evenements analyses pour lenregistrement d'annotations
    
    /**
 	 * Constructeur 
 	 * @method comportement
 	 * @return 
 	 */
 	function comportement (){
	 }


    /**
 	 * Initialise les elements de la page qui ont besoin de la video pour fonctionner 
 	 * @method elVid
 	 * @return 
 	 */
 	comportement.elVid = function(){
	 	/* Initialisation des variables */
		// Pour les annotations : initialisation des tableaux de nom, position, evenements multiples
        annotations.temp_evMulti = []; // Tableau des evenements qui sont sur la meme frame
        annotations.temp_name = []; // Tableau des noms deja utilises
        annotations.temp_pos = []; // Tableau des positions		
        annotations.colorName = ['red', 
			                    'purple', 
			                    'green', 
			                    'orange', 
			                    'blue', 
			                    'black', 
			                    'aqua', 
			                    'white', 
			                    'lime', 
			                    'yellow', 
			                    'maroon', 
			                    'fuschia', 
			                    'navy', 
			                    'silver', 
			                    'gray', 
			                    'olive', 
			                    'teal']; 
		// Pour le comportement 
		comportement.vid = document.getElementById("vid"); // Element HTML5 video
        comportement.vid.addEventListener('ended', comportement.vidEnd, false); // Listener sur ce qu'il y a a faire en fin de video
        comportement.vidTimer = ""; 
        comportement.planActuel = 0;

        /* Mise en place du multitouch */
		// Sur le svg
		var svgDiv = document.getElementById("affichAnnot"); // Recupere lelement svg 
		comportement.hammertime = Hammer(svgDiv); // Associe le Hammer a l'element svg
		// Gestion des differents mouvements
		// Play/pause
		comportement.hammertime.on("doubletap", 
			function(e){ 
				// En fonction de la ou on tape : 
				if(comportement.segm != ""){ // Si une segmentation est chargee
					var posX = Math.round((((e.gesture.center.pageX - interface.posleft) * 100) / comportement.vid.width) * 100) / 100;
					if(posX < 25){ // Dans le quart gauche :
						comportement.bwd(); // On revient au plan precedent
					} else if(posX > 75) { // Dans le quart droite :
						comportement.fwd() // On va au prochain plan
					} else { // Dans les deux quarts du milieu :
						comportement.playVideo(); // Lance la video
					}
				} else { // S'il n'y en a pas
					comportement.playVideo(); // Lance la video
				}
			}
		); 
		
		// Stop
		comportement.hammertime.on("pinchin", 
			function(e){
				comportement.stop(); // Stop la video
			}
		); 

		// Pour tous les evenements de events_annot (enregistrement des annotations)
		comportement.hammertime.on(events_annot.join(" "), 
			function(e){
	            // Position en % de la hauteur et de la largeur
	            var posX = Math.round((((e.gesture.center.pageX - interface.posleft) * 100) / comportement.vid.width) * 100) / 100;
	            var posY = Math.round((((e.gesture.center.pageY - interface.postop) * 100) / comportement.vid.height) * 100) / 100;
	            comportement.showPos(posX, posY);
	            if((comportement.vid.paused == false && e.type != "release")){
	            	comportement.showCurrentPos(e.gesture.center.pageX - interface.posleft, e.gesture.center.pageY - interface.postop);
	            }else if (e.type == "release"){
	            	 document.getElementById("currentPosUser").style.display = "None";
	            }
	            annotations.enregistre_pos(Math.round(comportement.vid.currentTime * 25), e.type, posX, posY);
			}
		);
	}
	
	/**
	 * Gere le cercle d'affichage de l'endroit pointe 
	 * @method showCurrentPos
	 * @param int cx // (<= 100 && >= 0)
	 * @param int cy // (<= 100 && >= 0)
	 * @return 
	 */
	comportement.showCurrentPos = function(cx, cy){
		// change la position du cercle selon les x,y passes
		var gCircle = document.getElementById("currentPosUser");
		gCircle.setAttributeNS(null, "cx", cx);
    	gCircle.setAttributeNS(null, "cy", cy);
    	// Si pas affiche, s'affiche
    	if(gCircle.style.display != ""){ 
    		gCircle.style.display = "";
    	}
	}
	/**
 	 * Enregistre la segmentation en plan 
 	 * @method update_segm
 	 * @param Array[int, int, …] data
 	 * @return 
 	 */
 	comportement.update_segm = function(data){
	 	document.getElementById("butonPrevious").style.display = "";
	 	comportement.segm = data;
	 }

	/**
 	 * Affiche la position dans la barre du bas (En pourcentages) 
 	 * @method showPos
 	 * @param int posX
 	 * @param int posY
 	 * @return 
 	 */
 	comportement.showPos = function(posX, posY){
	 	interface.pos.innerHTML = " (" + posX + "," + posY + ") ";
	 }


    /**
 	 * Met a jour l'affichage du temps de la video 
 	 * @method curtime
 	 * @return 
 	 */
 	comportement.curtime = function(){
	 	// Affichage du temps courant
	 	interface.time.innerHTML = Math.floor(comportement.vid.currentTime/60) + ":" + Math.floor(comportement.vid.currentTime%60);
	 	// Affichage de la duree totale
		if(comportement.vid.currentTime > 0 && comportement.vid.currentTime <= 1){ 
			if (Math.round(comportement.vid.duration/60) >0) {
				interface.tmp.innerHTML = Math.floor(comportement.vid.duration/60) + ":" ; // Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming
			}
			interface.tmp.innerHTML = interface.tmp.innerHTML + Math.floor(comportement.vid.duration%60);
		}
	}

https://dub114.mail.live.com/
	/**
 	 * Gestion Video : arret de la video au changement de plans 
 	 * @method plans
 	 * @return 
 	 */
 	comportement.plans = function(){
 		var plan = comportement.currentPlan();
 		if(plan > comportement.planActuel){
 			comportement.pauseVideo();
 			comportement.planActuel = plan;
 			if(annotations.temp_pos != ""){
 				annotations.affichePopup();
            	interface.popup();
        	}
 		}
    }
    
	/**
 	 * Gestion Video : Play si Pause, Pause si Play 
 	 * @method playVideo
 	 * @return 
 	 */
 	comportement.playVideo = function() {
		if(document.getElementById('sidebar').style.display != ""){ // Peut être lancee que si le menu est cache (Pour les annotations
			if (comportement.vid.paused == true) {
				// Lance le timer a chaque play
				comportement.vidTimer = window.setInterval("comportement.gestionTimer()", 100);
				comportement.vid.play();
                annotations.reset();// Reset les temp des annotations pour etre sur qu'il n'en reste pas
                comportement.vid.muted = true;
            }
            else {
            	comportement.pauseVideo();
            }
        }
    }

	/**
 	 * Gestion Video : Pause et clear interval
 	 * @method pauseVideo
 	 * @return 
 	 */
    comportement.pauseVideo = function(){
		// Reset le timer 
       	clearInterval(comportement.vidTimer);
       	// Met en pause
    	comportement.vid.pause();
    }

	/**
 	 * Appelle la mise a jour des affichages d'annotations et de temps courant de la video 
 	 * @method gestionTimer
 	 * @return 
 	 */
 	comportement.gestionTimer = function(){
	 	visualisation.afficheAnnot();
	 	comportement.curtime();
	 	if(comportement.segm.length > 0){
	 		comportement.plans();
		}
	}

	/**
 	 * Gestion Video : Forward 
 	 * @method fwd
 	 * @return 
 	 */
 	comportement.fwd = function(){ 
	 	var plan = comportement.currentPlan();
		var temp = comportement.segm[plan]/25 - comportement.vid.currentTime; 
		var indexMaxTab = comportement.segm.length - 1;
		console.log(comportement.planActuel, plan, temp, indexMaxTab, comportement.vid.currentTime);
	 	if(temp < 2 && temp >= 0){// Verifie si on est deja a une fronctiere ou non (Plus ou moins)
	 		if(plan + 1 < comportement.segm.length){ // Pour pas etre en dehors du tableau. Si oui, 0
	 			comportement.vid.currentTime = Math.round((comportement.segm[plan + 1]) / 25 * 100) / 100;
				comportement.planActuel = plan + 2 ;
		 	} else { 
		 		comportement.vid.currentTime = Math.round((comportement.segm[indexMaxTab]) / 25 * 100) / 100;
				comportement.planActuel = indexMaxTab;
		 	}
	 	}else { // Sinon, c'est qu'on est au milieu d'un plan donc on va au debut de ce plan
	 		if(plan > indexMaxTab){ // Pour pas etre en dehors du tableau. Sin oui, 0
	 			comportement.vid.currentTime = comportement.vid.duration;
				comportement.planActuel = indexMaxTab + 1;
		 	} else {
		 		comportement.vid.currentTime = Math.round((comportement.segm[plan]) / 25 * 100) / 100;
				comportement.planActuel = plan + 1;
		 	}
	 	}	 
	 	console.log(comportement.planActuel, comportement.vid.currentTime);
		comportement.pauseVideo();

	 	//Affiche les annotations correspondantes au plan auquel on a saute
	 	visualisation.afficheAnnot();
	 }

	/**
 	 * Gestion Video : Backward 
 	 * @method bwd
 	 * @return 
 	 */
 	comportement.bwd = function(){
	 	var plan = comportement.currentPlan();
		var temp = comportement.segm[plan - 1]/25 - comportement.vid.currentTime; 
	 	if(temp > -0.5 && temp < 2){// Verifie si on est deja a une fronctiere ou non (Plus ou moins)
	 		if(plan - 2 >= 0){ // Pour pas etre en dehors du tableau. Si oui, 0
	 			comportement.vid.currentTime = Math.round((comportement.segm[plan - 2]) / 25 * 100) / 100;
				comportement.planActuel = plan - 1;
		 	} else { // Si inférieur
		 		comportement.vid.currentTime = 0;
				comportement.planActuel = 0;
		 	}
	 	}else { // Sinon, c'est qu'on est au milieu d'un plan donc on va au debut de ce plan
	 		if(plan - 1 >= 0){ // Pour pas etre en dehors du tableau. Sin oui, 0
		 		comportement.vid.currentTime = Math.round((comportement.segm[plan - 1]) / 25 * 100) / 100;
				comportement.planActuel = plan;
		 	} else {
		 		comportement.vid.currentTime = 0;//Math.round((comportement.segm[0]) / 25 * 100) / 100;
				comportement.planActuel = 0;
		 	}
	 	}
		comportement.pauseVideo();

	 	//Affiche les annotations correspondantes au plan auquel on a saute
	 	visualisation.afficheAnnot();
	}

	/**
 	 * Renvoit l'index dans comportement.segm du prochain plan où il faudra s'arreter en fonction de vid.currentTime 
 	 * @method currentPlan
 	 * @return fin
 	 */
 	comportement.currentPlan = function(){
		//Recherche dichotomique du plan courant 
		// Plan courant : numero de l'index dans segm du prochain point d'arret 
		var debut = 0; 
		var fin = comportement.segm.length - 1;
		var mid = Math.round(fin / 2);
		var curr = comportement.vid.currentTime;
		while(fin - debut > 1){
			if(comportement.segm[debut] / 25 > curr){
				return debut;
			}if(comportement.segm[mid] / 25 > curr){
				fin = mid; 
				mid = Math.round((fin-debut) / 2 + debut);
			}else if(comportement.segm[mid] / 25 < curr){
				debut = mid; 
				mid = Math.round((fin-debut) / 2 + debut) ;
			}else{ // Si c'est exactement egal 
				mid = mid + 1;
				return mid;
			}
		}
		return fin; 
	}

	/**
 	 * Gestion Video : Stop 
 	 * @method stop
 	 * @return 
 	 */
 	comportement.stop = function(){
	 	comportement.vid.currentTime = 0;
	 	comportement.vid.pause();
	 }

	/**
 	 * Gestion Video : Plus lentement 
 	 * @method slower
 	 * @return 
 	 */
 	comportement.slower = function(){
	 	comportement.vid.playbackRate -= 0.25;
	 	comportement.vid.pause();
	 	comportement.vid.play();
	 }

	/**
 	 * Gestion Video : Plus rapide 
 	 * @method faster
 	 * @return 
 	 */
 	comportement.faster = function(){
	 	comportement.vid.playbackRate += 0.25;
	 	comportement.vid.pause();
	 	comportement.vid.play();
	 }

	/**
 	 * Gestion Video : Remet a zero la video
 	 * @method vidEnd
 	 * @return 
 	 */
 	comportement.vidEnd = function() {
	 	comportement.vid.playbackRate = 1;
	 	comportement.vid.currentTime = 0;
	 }
	 return comportement;	
	}();