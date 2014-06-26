
/* Factoriser les parties factorisables */
/* Mettre en variable de la classe les parties qu'on recup (genre corpName, etc) */

// http://lit-shore-5364.herokuapp.com



interface = function(){
    
    
	function interface(){
		
	}
	var posleft, postop;
    var tempsPosVisualisation;
	var myInterval;
    var username;
    
    /* Initialisation de l'interface */
    interface.init = function() {
		document.getElementById("LoginUsername").value = "root";
		document.getElementById("LoginPassword").value = "camomile";
		// Initialise decalage
		comportement.decalage = 0;
		comportement.segm = "";
        
		// Affichages C'EST DE L'INTERFACE : METTRE LES VARIABLES DANS L'INTERFACE ?
		comportement.time = document.getElementById("curtime");
		comportement.pos = document.getElementById("position");
		comportement.tmp = document.getElementById("temps");
		comportement.vit = document.getElementById("vitesse");
        comportement.annotTimer = "";
        
        /* Ajout des evenements sur les boutons */
        // Boutons du logout/login
        var el = document.getElementById("slideMenuButton");
        if (el.addEventListener){
            el.addEventListener("click", interface.slideMenu, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', interface.slideMenu);
        }
        
        var el = document.getElementById("logoutButton");
        if (el.addEventListener){
            el.addEventListener("click", interface.tologout, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', interface.tologout);
        }
        
        // Boutons de la fenetre modale
        var el = document.getElementById("envoyerAnnot");
        if (el.addEventListener){
            el.addEventListener("click", annotations.envoyer, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', annotations.envoyer);
        }
        
        var el = document.getElementById("annulerAnnot");
        if (el.addEventListener){
            el.addEventListener("click", annotations.reset, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', annotations.reset);
        }
        
        // Boutons de la barre du bas
        var el = document.getElementById("fwd");
        if (el.addEventListener){
            el.addEventListener("click", comportement.fwd, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', comportement.fwd);
        }
        
        var el = document.getElementById("faster");
        if (el.addEventListener){
            el.addEventListener("click", comportement.faster, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', comportement.faster);
        }
        
        var el = document.getElementById("slower");
        if (el.addEventListener){
            el.addEventListener("click", comportement.slower, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', comportement.slower);
        }
        
        var el = document.getElementById("bwd");
        if (el.addEventListener){
            el.addEventListener("click", comportement.bwd, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', comportement.bwd);
        }
        
        var el = document.getElementById("stop");
        if (el.addEventListener){
            el.addEventListener("click", comportement.stop, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', comportement.stop);
        }
        
        var el = document.getElementById("creerLayer");
        if (el.addEventListener){
            el.addEventListener("click", annotations.creerLayer, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', annotations.creerLayer);
        }
	}
    
    
	/* Recupere les info pour le log */
	interface.tologin = function() {
        interface.username= "";
        interface.username.innerHTML = "";
		//Pour rester connectee
		camomile.login(interface.callback_login, document.getElementById("LoginUsername").value, document.getElementById("LoginPassword").value, "http://lit-shore-5364.herokuapp.com" );
        
        interface.username = document.getElementById("LoginUsername").value;
	}
    
	interface.tologout = function(){
		camomile.logout(interface.callback_logout);
	}
    
	
	/* Traitement si connecte */
	interface.callback_login = function(data){
        
		console.log('Co');
        /* Affiche l'utilisateur courant */
		var logoutDiv = document.getElementById("logoutDiv");
		var menuSlideButton = document.getElementById("slideMenuButton");
        var username = document.getElementById("userName");
        username.innerHTML = "";
        username.innerHTML ='    User : ' + interface.username + "        ";
        
		/* Permet le jeu d'affichage/disparition des boutons de logout/login */
		document.getElementById("loginForm").style.display = "None";
		document.getElementById("logoutDiv").style.display = "";
		/* Message a la place de la video */
		document.getElementById("divVid").innerHTML = "Veuillez choisir une video";
        
		/* Met a jour le menu des Corpus disponibles et l'affiche */
		interface.update_menuCorpus();
	}
    
	/* Traitement si deconnecte */
	interface.callback_logout = function(data){
        
		console.log('Deco');
        
		/* Permet le jeu d'affichage/disparition des boutons de login/logout */
		document.getElementById("loginForm").style.display = "";
		document.getElementById("logoutDiv").style.display = "None";
		
        
		/* Mise a jour du menu des videos disponibles */
		document.getElementById('menuVid').innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des vidéos disponibles</li>";
        
        
		/* Fait disparaitre la video */
		var divMedia =  document.getElementById('divVid');
		divMedia.innerHTML = "";
        
		/* Remet a l'etat initial le menu Corpus et le fait disparaitre */
		// Le nom
		var corpName =  document.getElementById('corpName');
		corpName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i>   Corpus   <b class=\"caret\"></b>";
		// Le menu
		var menuCorp =  document.getElementById('menuCorpus');
		menuCorp.innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des corpus </li>";
		menuCorp.parentNode.style.display = "None";
        
		/* Remet a l'etat initial le menu Videos et le fait disparaitre  */
		// Le menu
		var menuVid = document.getElementById('menuVid');
		menuVid.parentNode.style.display = "None";
		menuVid.innerHTML = "";
		// le nom
		var divSegmName = document.getElementById('segmName');
		divSegmName.innerHTML = "<i class=\"icon-white icon-film\"></i>  Segmentation  <b class=\"caret \"></b>";
        
		/* Remet a l'etat initial le menu Segmentation et le fait disparaitre  */
		// Le menu
		var menuSegm = document.getElementById('menuSegm');
		menuSegm.parentNode.style.display = "None";
		menuSegm.innerHTML = "";
		// le nom
		var divVidName = document.getElementById('vidName');
		divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i>  Videos  <b class=\"caret \"></b>";
	}
    
	/* Met a jour le menu des corpus -> Appele quand on s'est connecte */
	interface.update_menuCorpus = function(){
		var divCorpName = document.getElementById('corpName');
		divCorpName.style.display = "";
		camomile.getCorpus(function(data){
                           /* Boucle qui recupere tous les nom de corpus */
                           var menuCorp = document.getElementById('menuCorpus');
                           menuCorp.innerHTML  = " ";
                           menuCorp.parentNode.style.display = "";
                           var temp = " ";
                           for(var val in data){
                           
                           temp += "<li> <a href=\"#\" onclick=\"javascript:interface.update_menuVid('" + data[val]._id + "','" + data[val].name + "')\">" + data[val].name + "</a></li>";
                           }
                           menuCorp.innerHTML  = temp;
                           });
	}
    
    
    
	/* Met a jour le menu des videos -> Appele quand on a clique sur un corpus  */
	interface.update_menuVid = function(corpusId, corpusName){
        annotations.idCorp = corpusId;
		camomile.getMedias(function(data){
                           /* Fait disparaître la video s'il y en avait une */
                           var divVid = document.getElementById('divVid');
                           divVid.innerHTML = "";
                           /* Boucle qui recupere tous les nom de medias */
                           var menuVid = document.getElementById('menuVid');
                           var temp = " ";
                           if (data.length != 0){
                           for(var val in data){
                           temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_Med('http://"+ data[val].url+ "','" + data[val].name + "'); interface.update_menuSegm('" + corpusId + "','" + data[val]._id + "');\"> " + data[val].name + " </a></li>";
                           
                           }
                           }else {
                           temp +=  "<li class=\"dropdown-header\" > Pas de videos disponibles pour ce corpus </li>";
                           
                           }
                           menuVid.innerHTML = temp;
                           
                           menuVid.parentNode.style.display = "";
                           
                           var divCorpName = document.getElementById('corpName');
                           divCorpName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i>  " + corpusName + "  <b class=\"caret \"></b>";
                           /* Reinitialise le nom du menu */
                           var divVidName = document.getElementById('vidName');
                           divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i> Videos  <b class=\"caret \"></b>";
                           
                           /* Reinitialisation du menu Segmentation */
                           // Le menu
                           var divSegmMenu = document.getElementById('menuSegm');
                           divSegmMenu.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video  </li>";
                           // Le nom
                           var divSegmName = document.getElementById('segmName');
                           divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i>  Segmentation  <b class=\"caret \"></b>";
                           // Visibilite
                           divSegmName.parentNode.style.display = "None";
                           
                           },
                           corpusId
                           )
        
		// Reinitialise la segmentation
		comportement.segm = "";
	}
    
    
	/* Met a jour le menu -> Appele quand on a choisi une video */
	interface.update_menuSegm = function(corpusId, vidId){
		/* Affichage des segmentations disponibles */
		camomile.getLayers(function(data){
                           /* Boucle qui recupere tous l'id du layer pour les segmentations */
                           if (data.length != 0){
                           for(var val in data){
                           if (data[val].layer_type == "shotSegmentation"){
                           camomile.getAnnotations(function(dat) {
                                                   if (dat.length != 0){
                                                   var menuSegm = document.getElementById('menuSegm');
                                                   var tmp = " ";
                                                   for(var valeur in dat){
                                                   
                                                   tmp +=  "<li><a href = '#' onclick = 'javascript:comportement.update_segm(" + dat[valeur].data + "); interface.update_menuNameSegm(\"" + dat[valeur].fragment + "\");'> "+ dat[valeur].fragment + " </a></li>";
                                                   menuSegm.innerHTML = tmp;
                                                   menuSegm.parentNode.style.display = "";
                                                   
                                                   }
                                                   }
                                                   },
                                                   corpusId,
                                                   vidId,
                                                   data[val]._id
                                                   );
                           }
                           
                           }
                           }else {
                           var menuSegm = document.getElementById('menuSegm');
                           var tmp = " ";
                           tmp +=  "<li class=\"dropdown-header\" > Pas de segmentation disponible pour cette video </li>";
                           menuSegm.innerHTML = tmp;
                           menuSegm.parentNode.style.display = "";
                           
                           }
                           
                           var divSegmName = document.getElementById('segmName');
                           divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i> Segmentation  <b class=\"caret \"></b>";
                           
                           },
                           corpusId,
                           vidId
                           )
		// Reinitialise la segmentation
		comportement.segm = "";
        
        // Initialise les id pour les annotations :
        annotations.idMed = vidId;
        
        
        // Choix du layer pour enregistrer
        camomile.getLayers(function(data){
                           var badges = document.getElementById("badgesLayers");
                           badges.innerHTML = "Aucun layer d'annotation existant pour cette video";
                           for(var i = 0; i < data.length; i++){
                           if(data[i].layer_type == "Annotations"){
                           badges.innerHTML = "<a href=\'#\'><span class=\"badge\" data-dismiss=\'modal\' onClick = \"annotations.idLay = \'" + data[i]._id + "\';\">" + data[i].layer_type +" : " + data[i].source +  "</span></a>"
                           }
                           }
                           }
                           , annotations.idCorp
                           , annotations.idMed
                           );
         $j("#modalLayers").modal('show');

        
        /*
        camomile.getLayers(function(data){
                           var vu = false;
                           var index = -1;
                           for (var i = 0; i < data.length; i ++){
                           if(data[i].layer_type == "Annotations"){// Si le layer des annotations existe, on enregistre son numéro
                           vu = true;
                           index = data[i]._id;
                           }
                           
                           }
                           
                           if(vu){
                           annotations.idLay = index;
                           } else { // Sinon, il faut le creer
                           console.log("Quand même la");
                           camomile.create_layer(function(dat){
                                                 // Enregistre l'id du layer en question
                                                 annotations.idLay = dat._id;
                                                 }, annotations.idCorp, annotations.idMed, "Annotations", "temps", "name pos", " ");
                           
                           }
                           
                           },
                           annotations.idCorp,
                           annotations.idMed
                           );
         */
        
	}
    
    
	/* Met a jour le nom du menu -> Appele quand on a choisi une segmentation */
	interface.update_menuNameSegm = function(name){
		var divSegmName = document.getElementById('segmName');
		divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i> " + name + " <b class=\"caret \"></b>";
	}
    
	/* Affiche la video selectionnee -> Appelee quand on a choisi une video */
	interface.update_Med = function(url, vidName){
		/* Change le nom du menu Vid */
		var divVidName = document.getElementById('vidName');
		divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i>   " + vidName + "   <b class=\"caret \"></b>";
        
		/* Fait apparaitre la video */
		var divVid = document.getElementById('divVid');
		var temp = "";
		/* Ajout de la video*/
		// Si le menu est pas deja ouvert
		var w, h, t, l;
		if(document.getElementById('sidebar').style.display != ""){ // Si le menu n'est pas déjà ouvert
			w = 1019;
			h = 566;
			interface.postop = 95;
			interface.posleft = 15;
		}else{// S'il est ouvert
			w = 740;
			h = 411;
			interface.postop = 95;
			interface.posleft = 85;
		}
        
		temp = "<video id=\"vid\" width = " + w + " height=" + h + " style=\"top:" + interface.postop + "px; left:" + interface.posleft + "px; position:absolute\" >" // De base : 400/720
        + "<source src=\"" + url + ".webm\" type=\"video/webm\" /><!-- Chrome10+, Ffx4+, Opera10.6+ -->"
        + "<source src=\"" + url + ".mp4\" type=\"video/mp4\"  /> <!-- Safari / iOS, IE9 -->"
        + "Impossible de lire la video avec votre browser"
        + "</video>";
		/* Ajout du canvas */
		temp += "<canvas id=\"can\" height=" + h + " width=" + w + " style=\"z-index:2; top:" + interface.postop + "px; left:" + (interface.posleft + 7) + "px; position:absolute; background-color:rgba(255, 255, 255, 0.3);\"></canvas>";
		divVid.innerHTML = "";
		divVid.innerHTML = temp;
		/* Mise a lechelle de lecran automatiquement -> Fonctionne pas sous iPad.
         var vid = document.getElementById('vid');
         vid.style.width = '100%';
         vid.style.height = 'auto';
         divVid.style.width = '100%';
         divVid.style.height = 'auto'; */
		
        comportement.elVid();
	}
    
	interface.slideMenu = function(){
		var slidemenu = document.getElementById('sidebar');
		var vid = document.getElementById('vid');
		var canvas = document.getElementById('can');
		if (slidemenu.style.display == ""){//Pour le fermer
			slidemenu.style.display = "None";
			// resize de la video et du canvas
			vid.height = 566;
			vid.width = 1019;
			canvas.height = 566;
			canvas.width = 1019;
			canvas.style.left = "15px";
            vid.style.left = "15px";
			interface.posleft = 15;
		}else{ // Pour l'ouvrir
			slidemenu.style.display = "";
			// resize de la video
			vid.height = 411;
			vid.width = 740;
			canvas.height = 411;
			canvas.width = 740;
            canvas.style.left = "85px";
            vid.style.left = "85px";
			interface.posleft = 85;
			// Met la video en pause
			vid.pause();
			if(comportement.vid.paused == false){
				comportement.playVideo();
            }
		}
	}
    
    //Place un menu a cote de la souris pour envoyer les annotations
    interface.popup = function(){
        var divBadgesNames = document.getElementById("badges");
        divBadgesNames.innerHTML = " ";
        for(var i = 0; i < annotations.temp_name.length; i++){
            divBadgesNames.innerHTML += "<a href=\'#\'><span class=\"badge\" data-dismiss=\'modal\' style= \'color:" + annotations.temp_name[i].color + "; background-color:#DDD\' onClick = \"annotations.envoyer(\'" +  annotations.temp_name[i].name + "\');\">" + annotations.temp_name[i].name + "</span></a>";
        }
        $j("#myModal").modal('show');
    }
	return interface;
}();

