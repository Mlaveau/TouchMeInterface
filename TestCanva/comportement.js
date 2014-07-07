 // TODO : Trouver un moyen d'automatiser les fps de la video

/* Gestion de la video et du multitouch */
comportement = function(){

	/* Variables */ 

	// Element HTML 5
	var vid, // Video
		time, // Div d'affichage du temps courant
		tmp, // Div d'affichage de la duree
		pos; // Div d'affichage de la position

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
				comportement.playVideo(); // Lance la video
			}
		); 
		
		// Stop
		comportement.hammertime.on("pinchin", 
			function(e){
				comportement.stop(); // Stop la video
			}
		); 

		// Avance au plan suivant	
		comportement.hammertime.on("swiperight", 
			function(e){
				comportement.bwd(); //Revient au plan precedent
			}
		); 
		
		// Recule au plan precedent
		comportement.hammertime.on("swipeleft", 
			function(e){
				comportement.fwd(); // Avance au plan suivant
			}
		); 

		// Pour tous les evenements de events_annot
		comportement.hammertime.on(events_annot.join(" "), 
			function(e){
	            // Position en % de la hauteur et de la largeur
	            var posX = Math.round((((e.gesture.center.pageX - interface.posleft) * 100) / comportement.vid.width) * 100) / 100;
	            var posY = Math.round((((e.gesture.center.pageY - interface.postop) * 100) / comportement.vid.height) * 100) / 100;
	            comportement.showPos(posX, posY);
	            annotations.enregistre_pos(Math.round(comportement.vid.currentTime * 25), e.type, posX, posY);
			}
		);
	}
	
	/**
	 * Enregistre la segmentation en plan 
	 * @method update_segm
	 * @param {} data
	 * @return 
	 */
	 comportement.update_segm= function(data){
	 	comportement.segm = data;
	 }

	/**
	 * Affiche le plan actuel -> A supprimer  
	 * @method touchXY
	 * @param {} e
	 * @return 
	 */
	 comportement.touchXY = function(e) {
	 	comportement.pos.innerHTML = comportement.planActuel + " : ";
	 }

	/**
	 * Affiche la position dans la barre du bas (En pourcentages) 
	 * @method showPos
	 * @param {} posX
	 * @param {} posY
	 * @return 
	 */
	 comportement.showPos = function(posX, posY){
	 	comportement.pos.innerHTML = " (" + posX + "," + posY + ") ";
	 }


    /**
	 * Met a jour l'affichage du temps de la video 
	 * @method curtime
	 * @return 
	 */
	 comportement.curtime = function(){

	 	comportement.time.innerHTML = Math.floor(comportement.vid.currentTime/60) + ":" + Math.floor(comportement.vid.currentTime%60);

		if(comportement.vid.currentTime > 0 && comportement.vid.currentTime <= 1){ // Oblige car au tout debut on a pas la duree. Ce n'est qu'une fois la vidéo lancée
			if (Math.round(comportement.vid.duration/60) >0) {
				comportement.tmp.innerHTML = Math.floor(comportement.vid.duration/60) + ":" ; // Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming
			}
			comportement.tmp.innerHTML = comportement.tmp.innerHTML + Math.floor(comportement.vid.duration%60);
		}
	}


	/**
	 * Gestion Video : arret de la video au changement de plans 
	 * @method plans
	 * @return 
	 */
	 comportement.plans = function(){
	 	var tmp = comportement.segm[comportement.planActuel] / 25;
		if(comportement.vid.currentTime > tmp){  //OU changer le if ici ? 
			comportement.planActuel += 1;
			comportement.vid.pause();
            // Pour enregistrer les pos si on en a pointe
            if(annotations.temp_pos != ""){
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
				comportement.vidTimer = window.setInterval("comportement.gestionTimer()", 100);
				comportement.vid.play();
				comportement.vid.muted = true;
                annotations.reset();// Reset les temp des annotations
            }
            else {
            	clearInterval(comportement.vidTimer);
            	comportement.vid.pause();
            }
        }
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
	 	if(plan < comportement.segm.length){
	 		comportement.planActuel = plan;
	 		comportement.vid.currentTime = Math.round(comportement.segm[plan] / 25 * 100) / 100;
	 		console.log(comportement.planActuel, comportement.vid.currentTime);
	 	}

	 }

	/**
	 * Gestion Video : Backward 
	 * @method bwd
	 * @return 
	 */
	 comportement.bwd = function(){
	 	var plan = comportement.currentPlan();
	 	var temp = comportement.segm[plan - 1]/25 - comportement.vid.currentTime; 
	 	if(temp > -2 && temp < 2){
	 		comportement.planActuel = plan - 1;
	 		comportement.vid.currentTime = Math.round(comportement.segm[plan - 2] / 25 * 100) / 100;
	 		console.log(plan, comportement.vid.currentTime);
	 	}else {
	 		comportement.planActuel = plan;
	 		comportement.vid.currentTime = Math.round(comportement.segm[plan - 1] / 25 * 100) / 100;
	 	}

		/*if(comportement.planActuel > 0){
			var t = comportement.segm[comportement.planActuel] / 25 - comportement.vid.currentTime;
			if( t > 2){
				comportement.planActuel = comportement.planActuel - 2;
			}else {
				comportement.planActuel = comportement.planActuel - 1;
			}
			comportement.vid.currentTime = Math.round(comportement.segm[comportement.planActuel] / 25 * 100) / a;
		}*/

	}

	/**
	 * Renvoit l'index dans comportement.segm du prochain plan où il faudra s'arreter en fonction de vid.currentTime 
	 * @method currentPlan
	 * @return fin
	 */
	 comportement.currentPlan = function(){
		//Recherche dichotomique du plan courant 
		// Plan courant : numero de l'index dans segm du prochain point d'arret 
		var debut = 0 ; 
		var fin = comportement.segm.length - 1;
		var mid = Math.round(fin / 2);
		var curr = comportement.vid.currentTime;
		while(fin-debut > 1){
			console.log(debut, mid, fin);
			if(comportement.segm[mid] / 25 > curr){
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
	 	comportement.planActuel = 0;
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