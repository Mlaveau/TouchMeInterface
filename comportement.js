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
	var idLayerSegm; // Id du layer contenant les segmentations

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

        // Initialise l'id de l'annot a remov
        annotations.annotIDRemov = "";


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
					var posX = comportement.posX(e);
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

		// Effacer une annotation
		comportement.hammertime.on("tap", 
			function(e){
				if(comportement.vid.paused){// Si la video est en pause
					annotations.effaceAnnot(comportement.posX(e), comportement.posY(e)); 
				}
			}
		); 


		// Pour tous les evenements de events_annot (enregistrement des annotations)
		comportement.hammertime.on(events_annot.join(" "), 
			function(e){
	            // Position en % de la hauteur et de la largeur
	            var posX = comportement.posX(e);
	            var posY = comportement.posY(e);
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
	 * Retourne en pourcentage la position x d'un evenement e 
	 * @method posX
	 * @param evenement e
	 * @return int
	 */
	comportement.posX = function(e){
		return Math.round((((e.gesture.center.pageX - interface.posleft) * 100) / comportement.vid.width) * 100) / 100;
	}
		
	/**
	 * Retourne en pourcentage la position y d'un evenement e 
	 * @method posY
	 * @param evenement e
	 * @return int
	 */
	comportement.posY = function(e){
		return Math.round((((e.gesture.center.pageY - interface.postop) * 100) / comportement.vid.height) * 100) / 100;
	}
	
	/**
	 * Gere le cercle d'affichage de l'endroit pointe 
	 * @method showCurrentPos
	 * @param int cx
	 * @param int cy
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
	  * Récupere la semgnentation en plan selectionnée 
	  * @method getSegmentation
	  * @return 
	  */
	 comportement.getSegmentation = function(){

		var tmp = document.getElementById("formSegm");
		//Cherche la segmentation choisie
		for(var i = 0; i < tmp.childNodes.length; i++){
			if(tmp.childNodes[i].checked == true){
				comportement.idLayerSegm = tmp.childNodes[i].value;
			}
		}

		// Si une segmentation a ete choisie
		if(comportement.idLayerSegm != "aucun"){
			// On recupere l'annotation correspondante
		 	camomile.getAnnotations(function (data){
				comportement.update_segm(data[0].data);
		 	}, 
		 	annotations.idCorp, 
		 	annotations.idMed, 
		 	comportement.idLayerSegm
		 	);
		}else{// Sinon on met a zero
			comportement.update_segm("");
		}
	}

	/**
	  * Enregistre la segmentation en plan 
	  * @method update_segm
	  * @param [] data // "" Si aucune segmentation
	  * @return 
	  */
	 comportement.update_segm = function(data){
		document.getElementById("butonPrevious").style.display = "";
	 	comportement.segm = data;
 		timeline.insertAffichPlan();
	 }

	/**
	  * Gestion Video : arret de la video au changement de plans 
	  * @method plans
	  * @return 
	  */
	 comportement.plans = function(){
 		var plan = comportement.currentPlan();
 		if(plan > comportement.planActuel){ // si on a depasse le prochain plan ou il faut s'arreter par rapport a la derniere fois
 			comportement.pauseVideo(); // video pause
 			comportement.planActuel = plan; // On update le plan actuel
 			if(annotations.temp_pos != ""){ // Si on enregistrait un annotation -> Popup
 				annotations.affichePopup();
        	}
 		}
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
	 * Appelle la mise a jour des affichages d'annotations et de temps courant de la video
	 * @method gestionTimer
	 * @return
	 */
	comportement.gestionTimer = function(){
		// Affiche les annotations
		visualisation.afficheAnnot();
		// Update l'affichage du temps et move le slider
		timeline.updateTimeAffich();
		timeline.moveSlider(timeline.longueur * comportement.vid.currentTime / comportement.vid.duration);
		// Si segmentation en plan -> Verification si on est arrive a un changement de plan
		if(comportement.segm.length > 0){
			comportement.plans();
		}
	}

	/**
	  * Gestion Video : Play si Pause, Pause si Play 
	  * @method playVideo
	  * @return 
	  */
	 comportement.playVideo = function() {
		if (comportement.vid.paused == true) {
			// Lance le timer a chaque play
			comportement.vidTimer = window.setInterval("comportement.gestionTimer()", 100);
			comportement.vid.play();
            annotations.reset();// Reset les temp des annotations pour etre sur qu'il n'en reste pas
            comportement.vid.muted = true;
            annotations.annotIDRemov = "";
        }
        else {
        	comportement.pauseVideo();
        }
    }

	/**
     * Gestion Video : Pause video et clear interval
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
	  * Gestion Video : Forward
	  * @method fwd
	  * @return 
	  */
	 comportement.fwd = function(){ 
	 	var plan = comportement.currentPlan();
		var temp = comportement.segm[plan] / 25 - comportement.vid.currentTime; 
		var indexMaxTab = comportement.segm.length - 1;
	 	if(temp < 2 && temp >= 0){// Verifie si on est deja a une fronctiere ou non (Plus ou moins)
	 		if((plan + 1) < comportement.segm.length){ // Pour pas etre en dehors du tableau. Si oui, 0
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
		var temp = comportement.segm[plan - 1] / 25 - comportement.vid.currentTime; 
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
		 		comportement.vid.currentTime = 0;
				comportement.planActuel = 0;
		 	}
	 	}
		comportement.pauseVideo();

	 	//Affiche les annotations correspondantes au plan auquel on a saute
	 	visualisation.afficheAnnot();
	}

	/**
	  * Gestion Video : Stop 
	  * @method stop
	  * @return 
	  */
	 comportement.stop = function(){
	 	comportement.vid.currentTime = 0;
	 	comportement.vid.pause();
	 	//Affiche les annotations correspondantes -> Ici aucune
	 	visualisation.afficheAnnot();
	 	timeline.moveSlider(0);
	 }

	/**
	  * Gestion Video : Plus lentement NON UTILISE DANS L INTERFACE ACTUELLE
	  * @method slower
	  * @return 
	  */
	 comportement.slower = function(){
	 	comportement.vid.playbackRate -= 0.25;
	 	// Pour que le changement soit effectif
	 	comportement.vid.pause();
	 	comportement.vid.play();
	 }

	/**
	  * Gestion Video : Plus rapide NON UTILISE DANS L INTERFACE ACTUELLE
	  * @method faster
	  * @return 
	  */
	 comportement.faster = function(){
	 	comportement.vid.playbackRate += 0.25;
	 	// Pour que le changement soit effectif
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
	 	timeline.updateTimeAffich();
	 	timeline.moveSlider(0);
       	clearInterval(comportement.vidTimer);
	 }
	 return comportement;	
	}();