/* Gestion de la video */

/* REFAIRE LA GESTION DU PLAN ACTUEL AVEC UNE DEDUCTION DU PLAN A PARTIR DE LA SEGMENTATION. PAS EN COMPTANT : */
comportement = function(){
	// Variables
	var vid, time, tmp, vit, pos;

	// Timer 
	var vidTimer;
	var decalage;

	// Segmentation A CHANGER POUR LA RECUPERER DYNAMIQUEMENT
	var segm;
	

	var planActuel;
	// Pour le multitouch
	var hammertime;

	// Affichage de la position
	//var can, ctx;
	// Recupere tous les elements
	
	function comportement (){

	}

	comportement.init = function() {
		

		comportement.decalage = 0.0;
		if(typeof JSON!="undefined") { // Verifie Json
			comportement.segm = eval('[0,29,259,315,375,456,600,655,707,834,944,1015,1044,1065,1206,1255,1435,1516,1608,1641,1696,1833,2048,2132,2211,2497,2647,2703,2732,2958,3118,3215,3317,3376,3423,3445,3466,3508,3564,3682,3734,3782,4336,4552,4591,4641,4683,4862,4879,4904,4935,5007,5066,5127,5146,5172,5383,5413,5450,5471,5504,5520,5534,5595,5613,5707,5767,5785,5847,5874,5917,5930,5972,6086,6150,6218,6261,6297,6400,6491,6554,6589,6741,6777,6824,6869,7041,7125,7163,7344,7384,7425,7455,7463,7484,7523,7642,7680,7850,7895,8081,8110,8247,8303,8349,8403,8557,8586,8659,8685,8862,8888,8910,8952,9007,9058,9106,9192,9279,9369,9384,9413,9443,9585,9622,9675,9769,9830,9852,9957,10028,10089,10158,10375,10421,10516,10613,10662,10683,10731,10753,10788,10824,10918,10964,11065,11093,11298,11360,11506,11533,11672,11711,11755,11782,11806,11872,12318,12346,12395,12453,12520,12561,12623,12663,12700,12746,12802,12848,12909,12944,13058,13093,13189,13353,13424,13459,13582,13612,13674,13692,13738,13808,13862,13891,13924,14054,14079,14171,14215,14263,14300,14355,14404,14450,14485,14537,14569,14663,14818,14865,14915,14957,14998,15053,15130,15204,15284,15324,15514,15580,15608,15632,15690,15769,15816,15833,15859,16038,16056,16075,16126,16180,16408,16459,16482,16809,16871,16943,17118,17254,17323,17377,17468,17513,17523,17530,17587,17635,17689,17811,18032,18202,18328,18348,18436,18554,18633,18684,18733,18801,18839,18864,18968,19127,19134,19301,19502,19758,19792,19830,19923,19953,20024,20069,20119,20143,20163,20181,20224,20512,20527,20601,20661,20693,20762,20829,20882,20927,20954,20987,21011,21075,21123,21188,21205,21375,21461,21598,21712,21796,21847,21888,22066,22113,22124,22154,22200,22244,22262,22540,22725,22772,22880,23068,23233,23265,23291,23335,23498,23520,23570,23659,23800,23853,23899,23958,24023,24103,24171,24195,24455,24664,24696,24706,24793,24885,25008,25117,25191,25225,25266,25298,25372,25438,25580,25656,25689,25716,25752,25855,26048,26119,26169,26430,26440,26452,26522,26683,26719,26750,26784,26831,26887,27004,27033,27090,27207,27237,27262,27395,27434,27517,27544,27643,28099,28136,28624,29077,29128,29260,29388,29402,29512,29564,29598,29668,29772,29817,29870,30012,30129,30251,30277,30449,30556,30588,30648,30687,30714,31080,31133,31182,31480,31562,31609,31641,31773,31880,31975,32015,32272,32290,32338,32495,32527,32553,32665,32701,32731,32740,32799,32826,32844,32872,32942]');						
		} else {
			console.log("PROBLEME Json !");
		}
			

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
		comportement.vid.addEventListener('ended', comportement.vidEnd, false);

		comportement.vidTimer = window.setInterval("comportement.plans()",1);
		comportement.planActuel = 0;

		/* Gestion du multitouch */
		comportement.hammertime = Hammer(comportement.vid);
	
		// Gestion des differents mouvements
		comportement.hammertime.on("doubletap", function(e){comportement.playVideo(); comportement.touchXY(e);}); // Play/pause
		comportement.hammertime.on("pinchin", function(e){comportement.stop(); comportement.touchXY(e);}); // Stop
		comportement.hammertime.on("swiperight", function(e){comportement.bwd(); comportement.touchXY(e);}); // Avance de 10 secs -> Faire plutot passer au plan suivant ?
		comportement.hammertime.on("swipeleft", function(e){comportement.fwd(); comportement.touchXY(e);}); // Recule de 10 secs -> Faire plutot revenir au plan precedent ?
		comportement.hammertime.on("touch", function(e){comportement.touchXY(e);}); 
		/** RECUPERER ICI LES SEGMENTATIONS EN PLANS CORRESPONDANTES **/
	}


	// Affiche la position
	comportement.touchXY = function(e) {

		comportement.pos.innerHTML = comportement.planActuel + " : ";
		for (i = 0; i < e.gesture.touches.length; i++) {
	 		x = e.gesture.touches[i].pageX;
			y = e.gesture.touches[i].pageY;
			comportement.showPos(x, y); 
		}
	}

	// Affiche la position et le cercle sous le doigt
	comportement.showPos = function(canX, canY){
	  	comportement.pos.innerHTML = comportement.pos.innerHTML + " (" + canX + "," + canY + ") ";
		/*//A remettre quand j'aurai enfin le canvas. 
		ctx.clearRect(0, 0, document.width, document.height);

		ctx.beginPath();
		ctx.arc(canX, canY, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill(); */
	}



	comportement.curtime = function(){
	
		comportement.time.innerHTML = Math.floor(comportement.vid.currentTime/60) + ":" + Math.floor(comportement.vid.currentTime%60) ;
	
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
		if (comportement.vid.paused == true) {
			comportement.vid.play();
		}
		else {
			comportement.vid.pause();
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

