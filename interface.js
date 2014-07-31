/* 
 * Gere l'affichage de l'interface
 * (menus, video,... )
 */

interface = function(){
       
	/**
	 * Constructeur
	 * @method interface
	 * @return 
	 */
	function interface(){
		
	}

  /* Variables globales */
  var posleft, postop; // Position par rapport à la gauche et au top de la video et du svg
  var username; // Username de l'utilisateur courant
  var url;

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
    document.getElementById("LoginUsername").value = "root";
    document.getElementById("LoginPassword").value = "5h3Ld0n";

		// Initialise des variables concernant la segm en plan
		comportement.decalage = 0; // Pour le moment, aucun decalage
		comportement.segm = Array();
        
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
    
    //Fait afficher la doc d'utilisation
    var el = document.getElementById("infoButton");
    if (el.addEventListener){
        el.addEventListener("click", interface.popupAide, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', interface.popupAide);
    }

    //Fait afficher la fenetre modale de segmentation
    var el = document.getElementById("segmButton");
    if (el.addEventListener){
        el.addEventListener("click", interface.popupSegm, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', interface.popupSegm);
    }
    
    /// Boutons de la fenetre modale des annotations
    // Envoie et continue la lecture normale de la video
    var el = document.getElementById("envoyerAnnotNext");
    if (el.addEventListener){
        el.addEventListener("click", annotations.envoyernext, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.envoyernext);
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

    // Bouton de la fenetre modale du remove
    // Delete l'annotation selectionnee
    var el = document.getElementById("validDeleteButton");
    if (el.addEventListener){
        el.addEventListener("click", annotations.deleteAnnot, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.deleteAnnot);
    }

    // Bouton de la fenetre modale du choix du nom du layer
    // valide le nom
    var el = document.getElementById("validerNomLayer");
    if (el.addEventListener){
        el.addEventListener("click", annotations.creerLayer, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', annotations.creerLayer);
    }

    /// Bonton de la fenetre modale des segmentations
    // Valide le choix de la segmentation
    var el = document.getElementById("validerSegm");
    if (el.addEventListener){
        el.addEventListener("click", comportement.getSegmentation, false);
    }else if (el.attachEvent){
        el.attachEvent('onclick', comportement.getSegmentation);
    }

	}
    
	/**
	 * Recupere les info pour le log 
	 * @method tologin
	 * @return 
	 */
	interface.tologin = function() {
    interface.username = "";
    // Adresse du serveur
    interface.url = "https://flower.limsi.fr/dev/data";
		// Log
		camomile.login(interface.callback_login, document.getElementById("LoginUsername").value, document.getElementById("LoginPassword").value, interface.url);
    interface.username = document.getElementById("LoginUsername").value;
	}
	
	/**
	 * Traitement si connexion sucessfull 
	 * @method callback_login
	 * @param JSON data
	 * @return 
	 */
	interface.callback_login = function(data){
    /* Affiche l'utilisateur courant dans le bouton */
    document.getElementById("logoutButton").innerHTML += interface.username;

        
		/* Permet le jeu d'affichage/disparition des boutons de logout/login */
		document.getElementById("loginForm").style.display = "None";
		document.getElementById("logoutDiv").style.display = "";
		/* Message a la place de la video */
		document.getElementById("divVid").innerHTML = "Veuillez choisir un corpus";
        
		/* Met a jour le menu des Corpus disponibles et l'affiche */
		interface.update_menuCorpus();
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
	 * Traitement si deconnexion sucessfull 
	 * @method callback_logout
	 * @param JSON data
	 * @return 
	 */
	interface.callback_logout = function(data){

		/* Permet le jeu d'affichage/disparition des boutons de login/logout */
		document.getElementById("loginForm").style.display = "";
		document.getElementById("logoutDiv").style.display = "None";
        
		/* Mise a jour du contenu de la div de la video */
		document.getElementById('menuVid').innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des vidéos disponibles</li>";
        
        
		/* Fait disparaitre la video */
		document.getElementById('divVid').innerHTML = "";
        
		/* Remet a l'etat initial le menu Corpus et le fait disparaitre */
		// Le nom
		document.getElementById('corpName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-folder-open\"></i> Corpus";
		// Le menu
		var menuCorp =  document.getElementById('menuCorp');
		menuCorp.innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des corpus </li>";
		menuCorp.parentNode.style.display = "None";
        
		/* Remet a l'etat initial le menu Videos et le fait disparaitre  */
		// Le menu
		var menuVid = document.getElementById('menuVid');
		menuVid.parentNode.style.display = "None";
		menuVid.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir un corpus pour avoir accès à la liste des videos </li>";
		// le nom
		document.getElementById('annotName').innerHTML = "<b class=\"care<b class=\"caret\"></b>t\"></b><i class=\"icon-white icon-file\"></i>  Annotation";
        
		/* Remet a l'etat initial le menu Segmentation et le fait disparaitre  */
		// Le menu
		var menuAnnot = document.getElementById('menuAnnot');
		menuAnnot.parentNode.style.display = "None";
		menuAnnot.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video pour avoir accès à la liste des layers d'annotations </li>";
		// le nom
		document.getElementById('vidName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-film\"></i> Videos";
    document.getElementById('logoutButton').childNodes[2].remove();
    document.getElementById("timelineAffich").style.display = "None";    
	}
    
	/**
	 * Met a jour le menu des corpus -> Appele quand on s'est connecte 
	 * @method update_menuCorpus
	 * @return 
	 */
	interface.update_menuCorpus = function(){
    document.getElementById('corpName').style.display = "";
    // Recupere les corpus disponibles sur le serveur
    camomile.getCorpus(
      function(data){
        var menuCorp = document.getElementById('menuCorp');
        menuCorp.parentNode.style.display = "";
        var temp = "";
        // Recupere les nom de corpus et les affiche dans le menu 
        for(var val in data){
          temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_menuVid('" + data[val]._id + "', '" + data[val].name + "')\">" + data[val].name + "</a></li>";
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
    // Enregistre l'Id du corpus
    annotations.idCorp = corpusId;
    // Met a jour le nom du menu des corpus
    document.getElementById('corpName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-folder-open\"></i> " + corpusName;

    camomile.getMedias(
      function(data){
        // Affiche la timeline
        document.getElementById("timelineAffich").style.display = "None";
        // Fait disparaître la video s'il y en avait une 
        document.getElementById('divVid').innerHTML = "";
        // Boucle qui recupere tous les nom de medias 
        var menuVid = document.getElementById('menuVid');
        var temp = "";
        if (data.length != 0){
          for(var val in data){
            temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_Med('" + data[val].name + "', '" +  data[val]._id + "'); interface.update_menuAnnot('" + corpusId + "','" + data[val]._id + "');\"> " + data[val].name + " </a></li>";
          }
        }else {
          temp += "<li class=\"dropdown-header\"> Pas de videos disponibles pour ce corpus </li>";
        }
        menuVid.innerHTML = temp;
        menuVid.parentNode.style.display = "";

        /* Reinitialise le nom du menu des videos */
        document.getElementById('vidName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-film\"></i> Videos";

        /* Reinitialisation du menu Segmentation */
        // Le menu
        document.getElementById('menuAnnot').innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video </li>";
        // Le nom
        var divAnnotName = document.getElementById('annotName');
        divAnnotName.innerHTML = "<b class=\"caret\"></b> <i class=\"icon-white icon-file\"></i> Annotations";
        // Visibilite
        divAnnotName.parentNode.style.display = "None";
      },
      corpusId
    );
    interface.reinitialiseSegm();
    // Si une svg de timeline existe, on la supprime
    if(document.getElementById('svgTimeline') != null){
      document.getElementById('svgTimeline').remove();
    }
    // Affichage le button permettant de voir les segmentations 
    document.getElementById("segmButton").style.display = "None";
  }

  /**
   * Permet d'enlever le bouton de plans et reinitialise le tableau des segmentations
   * @method reinitialiseSegm
   * @return 
   */
  interface.reinitialiseSegm = function(){
    // Reinitialise la segmentation et enleve le bouton
    comportement.segm = Array();
    document.getElementById('butonPrevious').style.display = "None";
  }
    
	/**
	 * Met a jour le menu des segmentations -> Appele quand on a choisi une video 
	 * @method update_menuAnnot
	 * @param String corpusId
	 * @param String vidId
	 * @return 
	 */
	interface.update_menuAnnot = function(corpusId, vidId){
    // Enregistre l'Id du media
    annotations.idMed = vidId;

		/* Affichage des layers d'annotations disponibles */
		camomile.getLayers(
      function(data){
        var menuAnnot = document.getElementById('menuAnnot');
       /* Boucle qui recupere tous l'id du layer pour les annotations */ 
        tmp =  " <li><a href='#' onclick='javascript:interface.popupCreerLayer()'> Nouveau Layer </a></li>";
        // S'il y a des layes
        if(data.length != 0){
          for(var val in data){
            // Qui sont des layers d'annotations
            if (data[val].fragment_type == "annotations" && data[val].data_type == "tracking"){
              // Ajout au menu
              var date = data[val].history[0].date.substring(0, 10);
              tmp +=  "<li><a href='#' onclick='javascript:interface.update_Annot(\"" + data[val]._id + "\", \"" + data[val].layer_type + "\", \"" + data[val].source + "\");'> " + data[val].layer_type + "[" + data[val].source + ", " + date + "]" + " </a></li>";
            } 
          }
        }
        menuAnnot.innerHTML = tmp;
        menuAnnot.parentNode.style.display = "";
      },
      corpusId,
      vidId
    );
	}

  /**
   * Met a jour tout ce qui concerne les annots : l'array, l'affichage de la timeline, le nom du menu 
   * @method update_Annot
   * @param String id
   * @param String name
   * @param String source
   * @return 
   */
  interface.update_Annot = function(id, name, source){
    interface.update_menuNameAnnot(name);
    annotations.recupAnnot(id, name, source);
    timeline.reaffichTimeLine();
  }

  /**
   * Reinitialise le menu d'affichage des segmentations disponibles 
   * @method reinitialiseMenuAnnot
   * @return 
   */
  interface.reinitialiseMenuAnnot = function(){
    var menuAnnot = document.getElementById('menuAnnot');
    var tmp = "";
    tmp +=  "<li class=\"dropdown-header\"> Pas de layer d'annotation disponible pour cette video </li>";
    menuAnnot.innerHTML = tmp;
    menuAnnot.parentNode.style.display = "";
  }
    
	/**
	 * Met a jour le nom du menu -> Appele quand on a choisi une segmentation 
	 * @method update_menuNameAnnot
	 * @param String name
	 * @return 
	 */
	interface.update_menuNameAnnot = function(name){
		document.getElementById('annotName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-file\"></i> " + name;
	}
    
	/**
	 * Affiche la video selectionnee -> Appelee quand on a choisi une video 
	 * @method update_Med
	 * @param String vidName
	 * @param String idmedia
	 * @return 
	 */
	interface.update_Med = function(vidName, idmedia){
    annotations.idMed = idmedia;
		/* Change le nom du menu Vid */
		document.getElementById('vidName').innerHTML = "<b class=\"caret\"></b><i class=\"icon-white icon-film\"></i> " + vidName;
		/* Fait apparaitre la video */
		var divVid = document.getElementById('divVid');
		var temp = "";
		/* Ajout de la video */
		// Sa taille et son placement
		var w = 1019,
		    h = 566;
		interface.postop = 85;
		interface.posleft = 0;
    // Code de la video  
		temp = "<video id=\"vid\" width=" + w + " height=" + h + " style = \"z-index:4; top:" + interface.postop + "px; left:" + interface.posleft + "px; position:absolute\">" // De base : 400/720
        + "<source src=\"" + interface.url + "/corpus/" + annotations.idCorp + "/media/" + annotations.idMed + "/mp4\" type=\"video/mp4\"  />" 
        + "<source src=\"" + interface.url + "/corpus/" + annotations.idCorp + "/media/" + annotations.idMed + "/webm\" type=\"video/webm\" />"
        + "<source src=\"" + interface.url + "/corpus/" + annotations.idCorp + "/media/" + annotations.idMed + "/ogv\" type=\"video/ogv\"  />"
        + "Impossible de lire la video avec votre browser"
        + "</video>";
    divVid.innerHTML = "";
    divVid.innerHTML = temp;
    
    // Creattion du svg qui permet d'afficher les annotations et l'emplacement du doigt
		interface.svg = Snap(1019, 566).attr(
      {
  			'id' : "affichAnnot", 
  			'top' : interface.postop,
  			'left' : interface.posleft
		  }
    );	
    // L'ajoute a la div de la video
		var svg = document.getElementById("affichAnnot");
		divVid.appendChild(svg);
    // Cree dans le svg le cercle de la position courante du doigts
    interface.svg.circle(50, 50, 40).attr(
      {
        stroke: "green", 
        strokeWidth: 5,
        fill : "rgba(0, 0, 0, 0)",
        'display' : 'None', 
        'id' : 'currentPosUser'
      }
    );

    // Remet les annotations a zero 
    annotations.annots = [];
  
    // Initialise le comportement de la video (Multitouch, etc)
    comportement.elVid();

    // Remove la timeline si elle existe
    if(document.getElementById("svgTimeline")){
      document.getElementById("svgTimeline").remove();
    }

    // Reaffiche la timeline. (On efface vu qu'il peut y avoir des annotations/segmentations en plans dont on ne veut pas)
    timeline.affichTimeline(-30, 5, 40, 150, 10)
    timeline.moveSlider(0);

    // Affiche le button de segmentation 
    document.getElementById("segmButton").style.display = "";
    
    // Bidouillage pour pouvoir avoir la duree totale dès le debut
    comportement.playVideo();
    comportement.playVideo();

    // Update le nom du menu des annotations -> Si jamais on revient apres avoir deja choisi une annot
    interface.update_menuNameAnnot("Annotation");
	}
    
  /**
   * Affiche un menu pour envoyer les annotations 
   * @method popupAnnot
   * @return 
   */
  interface.popupAnnot = function(){
    // Affiche dans des badges les noms deja existants dans le layer
    var divBadgesNames = document.getElementById("badgesName");
    divBadgesNames.innerHTML = " ";
    for(var i = 0; i < annotations.temp_name.length; i++){
      divBadgesNames.innerHTML += "<a href=\'#\'><span class=\"badge\" style=\'color:" + annotations.temp_name[i].color + "; background-color:#DDD\' onClick=\"document.getElementById(\'namePerso\').value =\'" +  annotations.temp_name[i].name + "\';\">" + annotations.temp_name[i].name + "</span></a>";
    }
    // Affiche la fenetre modal pour envoyer l'annotations
    $j("#modalAnnots").modal('show');
  }

  /**
   * Affiche un menu pour envoyer les annotations 
   * @method popupSegm
   * @return 
   */
  interface.popupSegm = function(){
    var segmAffich = document.getElementById("segmChoix");
    segmAffich.innerHTML = "Pas de Segmentation disponible pour cette video";

    // Recupere les layers existants et ajoute les radiobuttons correspondants dans la fenêtre modale
    camomile.getLayers(function(data){
      var tmp = "<form id=\"formSegm\"><input type=\"radio\" name=\"segm\" value=\"aucun\">Aucune<br>";
      for (var val in data){
        if(data[val].fragment_type == "segmentation" && data[val].data_type == "tracking"){
          tmp += "<input type=\"radio\" name=\"segm\" value=\"" + data[val]._id + "\">" + data[val].layer_type + "<br>"
        }
      }
      
      if(tmp.length != "<form><input type=\"radio\" name=\"aucun\" value=\"aucun\">Aucune<br>".length){
        segmAffich.innerHTML = tmp +  "</form>";
      }
    }, 
    annotations.idCorp, 
    annotations.idMed);

    // Si ce n'est pas deja le cas -> met la video en pause
    if(comportement.vid){
      comportement.pauseVideo();
    }

    // Affiche la fenetre modal du choix des segmentations
    $j("#modalSegm").modal('show');
  }

  /**
   * Affiche le popup d'aide 
   * @method popupAide
   * @return 
   */
  interface.popupAide = function(){
    // Si ce n'est pas deja le cas -> met la video en pause
    if(comportement.vid){
      comportement.pauseVideo();
    }

    // Affiche la fenetre modal d'aide
    $j("#modalAide").modal('show');
  }

  /**
   * Permet l'affichage du popup de création de layer 
   * @method popupCreerLayer
   * @return 
   */
  interface.popupCreerLayer = function(){
    // Si ce n'est pas deja le cas -> met la video en pause
    if(comportement.vid){
      comportement.pauseVideo();
    }

    // Affiche la fenetre modal pour creer un layer
    $j("#modalNomLayer").modal('show');
  }
	return interface;

}();