
/* Factoriser les parties factorisables */

// http://lit-shore-5364.herokuapp.com



interface = function(){
    
    
	function interface(){
		
	}
	var posleft, postop;
	var visuaAnnot;
    var tempsPosVisualisation;
	var myInterval;
    
	/* Recupere les info pour le log */
	interface.tologin = function() {
        interface.username= "";
        interface.username.innerHTML = "";
		//Pour rester connectee
		camomile.login(interface.callback_login, document.getElementById("LoginUsername").value, document.getElementById("LoginPassword").value, "http://lit-shore-5364.herokuapp.com" );
        
		/* Affiche l'utilisateur courant */
		var logoutDiv = document.getElementById("logoutDiv");
		var menuSlideButton = document.getElementById("slideMenuButton");
        var username = document.getElementById("userName");
        username.innerHTML = "";
        username.innerHTML ='    User : ' + document.getElementById("LoginUsername").value + "        ";
        
	}
    
	interface.tologout = function(){
		camomile.logout(interface.callback_logout);
		
	}
    
	
	/* Traitement si connecte */
	interface.callback_login = function(data){
        
		console.log('Co');
        
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
                           }
                           )
        /* Ajoute l'evenement sur le button -> Le faire sur TOUS !! */
        var el = document.getElementById("visualisation");
        if (el.addEventListener){
            el.addEventListener("click", interface.visualiser, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', interface.visualiser);
        }
	}
    
    interface.visualiser = function(){
        if (interface.visuaAnnot == false || interface.visuaAnnot == undefined){
            interface.visuaAnnot = true;
            camomile.getAnnotations(function(data){
                                    interface.tempPosVisualisation = data[0];
                                    console.log(data);
                                    },
                                    annotations.idCorp,
                                    annotations.idMed,
                                    annotations.idLay);
            

        }else {
            interface.visuaAnnot = false;
            interface.tempsPosVisualisation = [];
        }
        window.open('Visualisation.html','Visualisation','menubar=no, scrollbars=no, top=100, left=100, width=300, height=200');
        
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
        
        camomile.getLayers(function(data){
                           console.log(data);
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
        
		temp = "<video id=\"vid\" width = " + w + " height=" + h + ">" // De base : 400/720
        + "<source src=\"" + url + ".webm\" type=\"video/webm\" /><!-- Chrome10+, Ffx4+, Opera10.6+ -->"
        + "<source src=\"" + url + ".mp4\" type=\"video/mp4\"  /> <!-- Safari / iOS, IE9 -->"
        + "Impossible de lire la video avec votre browser"
        + "</video>";
		/* Ajout du canvas */
		temp += "<canvas id=\"can\" height=" + h + " width=" + w + " style=\"z-index:2; top:" + interface.postop + "px; left:" + interface.posleft + "px; position:absolute; background-color:rgba(255, 255, 255, 0.3)\" align=\"center\"></canvas>";
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
			interface.posleft = 15;	
		}else{ // Pour l'ouvrir
            console.log("PlayVid");
			slidemenu.style.display = "";
			// resize de la video
			vid.height = 411;
			vid.width = 740;
			canvas.height = 411;
			canvas.width = 740;
			canvas.style.left = "85px";	
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
            divBadgesNames.innerHTML += "<a href=\'#\'><span class=\"badge\" data-dismiss=\'modal\' style= \'color:" + annotations.temp_name[i][1] + "; background-color:#DDD\' onClick = \"annotations.envoyer(\'" +  annotations.temp_name[i][0] + "\');\">" + annotations.temp_name[i][0] + "</span></a>";
        }
        $j("#myModal").modal('show');
    }
	return interface;
}();

