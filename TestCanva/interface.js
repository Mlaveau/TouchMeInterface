
/* Utiliser le DOM pour modifier plutôt qu'INNERHTML */
/* Factoriser les messages dans les menus pour dire de se connecter */

interface = function(){
       
	/**
	 * Description
	 * @method interface
	 * @return 
	 */
	function interface(){
		
	}

  /* Variables globales */
  var posleft, postop; // Position par rapport à la gauche et au top de la video et du svg
  var username; // Username de l'utilisateur courant

  /* Div d'affichage */
  var time, // Div d'affichage du temps courant
  tmp, // Div d'affichage de la duree
  pos; // Div d'affichage de la position
    
  /**
   * Initialisation de l'interface 
   * @method init
   * @return 
   */
  interface.init = function() {
    // A enlever quand j'aurai fini les tests
		document.getElementById("LoginUsername").value = "root";
		document.getElementById("LoginPassword").value = "camomile";

		// Initialise des variables concernant la segm en plan
		comportement.decalage = 0; // Pour le moment, aucun decalage
		comportement.segm = "";
        
		// Affichage du temps/position/temps courant
		interface.time = document.getElementById("curtime");
		interface.pos = document.getElementById("position");
		interface.tmp = document.getElementById("temps");
        
    /* Ajout des evenements sur les boutons */
    /// Bouton du logout
    var el = document.getElementById("logoutButton");
    if (el.addEventListener){
        el.addEventListener("click", interface.tologout, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', interface.tologout);
    }
    
    /// Boutons de la barre du bas
    // Video : Saut au plan suivant
    var el = document.getElementById("fwd");
    if (el.addEventListener){
        el.addEventListener("click", comportement.fwd, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.fwd);
    }
    
    // Video : Plus rapide
    var el = document.getElementById("faster");
    if (el.addEventListener){
        el.addEventListener("click", comportement.faster, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.faster);
    }
    
    // Video : Plus lentement
    var el = document.getElementById("slower");
    if (el.addEventListener){
        el.addEventListener("click", comportement.slower, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.slower);
    }
    
    // Video : Retour au plan precedent
    var el = document.getElementById("bwd");
    if (el.addEventListener){
        el.addEventListener("click", comportement.bwd, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.bwd);
    }
    
    // Video : Stop la video
    var el = document.getElementById("stop");
    if (el.addEventListener){
        el.addEventListener("click", comportement.stop, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.stop);
    }
    
    /// Fenetre modale des layers 
    // Cree un layer
    var el = document.getElementById("creerLayer");
    if (el.addEventListener){
        el.addEventListener("click", annotations.creerLayer, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.creerLayer);
    }

    /// Boutons de la fenetre modale des annotations
    // Envoie et continue la lecture normale de la video
    var el = document.getElementById("envoyerAnnotNext");
    if (el.addEventListener){
        el.addEventListener("click", annotations.envoyer, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.envoyer);
    }
    
    // Envoie les annotations et revient au plan precedent
    var el = document.getElementById("envoyerAnnotPrevious");
    if (el.addEventListener){
        el.addEventListener("click", annotations.envoyerprevious, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.envoyerprevious);
    }

    // Annule l'enregistrement de l'annotation en court
    var el = document.getElementById("annulerAnnot");
    if (el.addEventListener){
        el.addEventListener("click", annotations.reset, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.reset);
    }
	}
    
	/**
	 * Recupere les info pour le log 
	 * @method tologin
	 * @return 
	 */
	interface.tologin = function() {
    interface.username= "";
		// Log
		camomile.login(interface.callback_login, document.getElementById("LoginUsername").value, document.getElementById("LoginPassword").value, "http://lit-shore-5364.herokuapp.com" );
    interface.username = document.getElementById("LoginUsername").value;
	}
  
  /**
	 * Deconnexion au serveur 
	 * @method tologout
	 * @return 
	 */
	interface.tologout = function(){
		camomile.logout(interface.callback_logout);
	}
    
	
	/**
	 * Traitement si connexion sucessfull 
	 * @method callback_login
	 * @param JSON data Resultat de la requete
	 * @return 
	 */
	interface.callback_login = function(data){
        
		console.log('Co');
    /* Affiche l'utilisateur courant */
		//var menuSlideButton = document.getElementById("slideMenuButton");
    var username = document.getElementById("userName");
    username.innerHTML ='User : ' + interface.username;
        
		/* Permet le jeu d'affichage/disparition des boutons de logout/login */
		document.getElementById("loginForm").style.display = "None";
		document.getElementById("logoutDiv").style.display = "";
		/* Message a la place de la video */
		document.getElementById("divVid").innerHTML = "Veuillez choisir un corpus";
        
		/* Met a jour le menu des Corpus disponibles et l'affiche */
		interface.update_menuCorpus();
	}
    
	/**
	 * Traitement si deconnexion sucessfull 
	 * @method callback_logout
	 * @param JSON data Resultat de la requete
	 * @return 
	 */
	interface.callback_logout = function(data){
        
		console.log('Deco');
        
		/* Permet le jeu d'affichage/disparition des boutons de login/logout */
		document.getElementById("loginForm").style.display = "";
		document.getElementById("logoutDiv").style.display = "None";
		
        
		/* Mise a jour du contenu de la div de la video */
		document.getElementById('menuVid').innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des vidéos disponibles</li>";
        
        
		/* Fait disparaitre la video */
		document.getElementById('divVid').innerHTML = "";
        
		/* Remet a l'etat initial le menu Corpus et le fait disparaitre */
		// Le nom
		document.getElementById('corpName').innerHTML = "<i class=\"icon-white icon-folder-open\"></i>   Corpus   <b class=\"caret\"></b>";
		// Le menu
		var menuCorp =  document.getElementById('menuCorpus');
		menuCorp.innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des corpus </li>";
		menuCorp.parentNode.style.display = "None";
        
		/* Remet a l'etat initial le menu Videos et le fait disparaitre  */
		// Le menu
		var menuVid = document.getElementById('menuVid');
		menuVid.parentNode.style.display = "None";
		menuVid.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir un corpus pour avoir accès à la liste des videos </li>";
		// le nom
		document.getElementById('segmName').innerHTML = "<i class=\"icon-white icon-film\"></i>  Segmentation  <b class=\"caret \"></b>";
        
		/* Remet a l'etat initial le menu Segmentation et le fait disparaitre  */
		// Le menu
		var menuSegm = document.getElementById('menuSegm');
		menuSegm.parentNode.style.display = "None";
		menuSegm.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video pour avoir accès à la liste des segmentation </li>";
		// le nom
		document.getElementById('vidName').innerHTML = "<i class=\"icon-white icon-film\"></i>  Videos  <b class=\"caret \"></b>";
	}
    
	/**
	 * Met a jour le menu des corpus -> Appele quand on s'est connecte 
	 * @method update_menuCorpus
	 * @return 
	 */
	interface.update_menuCorpus = function(){
    document.getElementById('corpName').style.display = "";
    camomile.getCorpus(
      function(data){
        /* Boucle qui recupere tous les nom de corpus et les affiche */
        var menuCorp = document.getElementById('menuCorpus');
        menuCorp.parentNode.style.display = "";
        var temp = "";
        for(var val in data){
          temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_menuVid('" + data[val]._id + "','" + data[val].name + "')\">" + data[val].name + "</a></li>";
        }
        menuCorp.innerHTML = temp;
      }
    );
	}
    
	/**
	 * Met a jour le menu des videos -> Appele quand on a clique sur un corpus  
	 * @method update_menuVid
	 * @param String corpusId
	 * @param String corpusName
	 * @return 
	 */
	interface.update_menuVid = function(corpusId, corpusName){
    annotations.idCorp = corpusId;
    camomile.getMedias(
      function(data){
      /* Fait disparaître la video s'il y en avait une */
      document.getElementById('divVid').innerHTML = "";
      /* Boucle qui recupere tous les nom de medias */
      var menuVid = document.getElementById('menuVid');
      var temp = "";
      if (data.length != 0){
        for(var val in data){
          temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_Med('http://"+ data[val].url+ "','" + data[val].name + "'); interface.update_menuSegm('" + corpusId + "','" + data[val]._id + "');\"> " + data[val].name + " </a></li>";
        }
      }else {
        temp +=  "<li class=\"dropdown-header\" > Pas de videos disponibles pour ce corpus </li>";
      }
      menuVid.innerHTML = temp;
      menuVid.parentNode.style.display = "";

      document.getElementById('corpName').innerHTML = "<i class=\"icon-white icon-folder-open\"></i>  " + corpusName + "  <b class=\"caret \"></b>";
      /* Reinitialise le nom du menu */
      document.getElementById('vidName').innerHTML = "<i class=\"icon-white icon-film\"></i> Videos  <b class=\"caret \"></b>";

      /* Reinitialisation du menu Segmentation */
      // Le menu
      document.getElementById('menuSegm').innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video  </li>";
      // Le nom
      var divSegmName = document.getElementById('segmName');
      divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i>  Segmentation  <b class=\"caret \"></b>";
      // Visibilite
      divSegmName.parentNode.style.display = "None";

      },
      corpusId
    );
    interface.reinitialiseSegm();
	}

  /**
   * Permet d'enlever le bouton de plans et reinitialise le tableau des segmentations
   * @method reinitialiseSegm
   * @return 
   */
  interface.reinitialiseSegm = function(){
    // Reinitialise la segmentation et enleve le bouton
    comportement.segm = "";
    document.getElementById('butonPrevious').style.display = "None";
  }
    
	/**
	 * Met a jour le menu des segmentations -> Appele quand on a choisi une video 
	 * @method update_menuSegm
	 * @param String corpusId
	 * @param String vidId
	 * @return 
	 */
	interface.update_menuSegm = function(corpusId, vidId){
    // Initialise les id pour les annotations :
    annotations.idMed = vidId;
		/* Affichage des segmentations disponibles */
		camomile.getLayers(
      function(data){
       /* Boucle qui recupere tous l'id du layer pour les segmentations */
        if (data.length != 0){
          for(var val in data){
            if (data[val].layer_type == "shotSegmentation"){
              camomile.getAnnotations(
                function(dat) {
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
            } else {
              interface.reinitialiseMenuSegm();
            }
          }
        }else {
          interface.reinitialiseMenuSegm();
        }
       
        document.getElementById('segmName').innerHTML = "<i class=\"icon-white icon-file\"></i> Segmentation  <b class=\"caret \"></b>";
      },
      corpusId,
      vidId
    );
		// Reinitialise la segmentation et enleve le bouton 
		interface.reinitialiseSegm();
        
    // Choix du layer pour enregistrer
    camomile.getLayers(
      function(data){
        var badges = document.getElementById("badgesLayers");
        badges.innerHTML = "";
        if(data.length ==0){
          badges.innerHTML = "Aucun layer d'annotation existant pour cette video";
        } else {
          for(var i = 0; i < data.length; i++){
            if(data[i].layer_type == "Annotations"){
              badges.innerHTML += "<a href=\'#\'><span class=\"badge\" data-dismiss=\'modal\' onClick = \"annotations.recupAnnot(\'" + data[i]._id + "', '" + data[i].source+ "\');\">" + data[i]._id +" : " + data[i].source +  "</span></a>"
            }
          }
        }
      },
      annotations.idCorp,
      annotations.idMed
    );
    $j("#modalLayers").modal('show');        
	}
  
  /**
   * Reinitialise le menu d'affichage des segmentations disponibles 
   * @method reinitialiseMenuSegm
   * @return 
   */
  interface.reinitialiseMenuSegm = function(){
    var menuSegm = document.getElementById('menuSegm');
    var tmp = " ";
    tmp +=  "<li class=\"dropdown-header\" > Pas de segmentation disponible pour cette video </li>";
    menuSegm.innerHTML = tmp;
    menuSegm.parentNode.style.display = "";

  }
    
	/**
	 * Met a jour le nom du menu -> Appele quand on a choisi une segmentation 
	 * @method update_menuNameSegm
	 * @param String name
	 * @return 
	 */
	interface.update_menuNameSegm = function(name){
		var divSegmName = document.getElementById('segmName');
		divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i> " + name + " <b class=\"caret \"></b>";
	}
    
	/**
	 * Affiche la video selectionnee -> Appelee quand on a choisi une video 
	 * @method update_Med
	 * @param String url
	 * @param String vidName
	 * @return 
	 */
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
			interface.postop = 85;
			interface.posleft = 0;
		}else{// S'il est ouvert
			w = 740;
			h = 411;
			interface.postop = 50;
			interface.posleft = 85;
		}
      
		temp = "<video id=\"vid\" width = " + w + " height=" + h + " style=\"z-index:4; top:" + interface.postop + "px; left:" + interface.posleft + "px; position:absolute\" >" // De base : 400/720
        + "<source src=\"" + url + ".webm\" type=\"video/webm\" /><!-- Chrome10+, Ffx4+, Opera10.6+ -->"
        + "<source src=\"" + url + ".mp4\" type=\"video/mp4\"  /> <!-- Safari / iOS, IE9 -->"
        + "Impossible de lire la video avec votre browser"
        + "</video>";
    divVid.innerHTML = "";
    divVid.innerHTML = temp;
    /* Insertion du svg qui permet d'afficher les annotations et l'emplacement du doigt*/
		interface.svg = Snap(1019, 566).attr(
      {
  			'id' : "affichAnnot", 
  			'top' : interface.postop,
  			'left' : interface.posleft
		  }
    );	
		var svg = document.getElementById("affichAnnot");
		divVid.appendChild(svg);
    var c1 = interface.svg.circle(50, 50, 40).attr(
      {
        stroke: "green", 
        strokeWidth: 5,
        fill : "rgba(0, 0, 0, 0)",
        'display' : 'None', 
        'id' : 'currentPosUser'
      }
    );

    // Ajout
    comportement.elVid();
	}
    
  /**
	 * Fait apparaître le menu slide 
	 * @method slideMenu
	 * @return 
	 */
	interface.slideMenu = function(){
		var slidemenu = document.getElementById('sidebar');
		var vid = document.getElementById('vid');
		if (slidemenu.style.display == ""){//Pour le fermer
			slidemenu.style.display = "None";
			// resize de la video
			vid.height = 566;
			vid.width = 1019;
      vid.style.left = "0px";
			interface.posleft = 0;
		}else{ // Pour l'ouvrir
			slidemenu.style.display = "";
			// resize de la video
			vid.height = 411;
			vid.width = 740;
            vid.style.left = "85px";
			interface.posleft = 85;
			// Met la video en pause
			vid.pause();
			if(comportement.vid.paused == false){
				comportement.playVideo();
      }
		}
	}
    
  /**
   * Affiche un menu pour envoyer les annotations 
   * @method popup
   * @return 
   */
  interface.popup = function(){
    var divBadgesNames = document.getElementById("badges");
    divBadgesNames.innerHTML = " ";
    for(var i = 0; i < annotations.temp_name.length; i++){
      divBadgesNames.innerHTML += "<a href=\'#\'><span class=\"badge\" style= \'color:" + annotations.temp_name[i].color + "; background-color:#DDD\' onClick = \"document.getElementById(\'namePerso\').value =\'" +  annotations.temp_name[i].name + "\';\">" + annotations.temp_name[i].name + "</span></a>";
    }
    $j("#modalAnnots").modal('show');
  }

	return interface;
}();