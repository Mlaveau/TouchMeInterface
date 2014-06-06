

/* Utiliser le DOM pour modifier plutôt qu'INNERHTML */
/* Factoriser les messages dans les menus pour dire de se connecter */
/* Quand ils veulent changer de medias, meme si yen a pas apres, enlever celui actif ? */
/* Modifier les getCorpus et tout comme dans le vrai client */
/* Prendre en compte les nouvelles fonctions pour modifier la page HTML (Notamment les menus et tout) */
/* Separer en deux fichiers le client et la mise à jour de la page HTML*/

// http://lit-shore-5364.herokuapp.com



interface = function(){
	
	function interface(){
		
	}
	
	
	
	/* Recupere les info pour le log */
	interface.tologin = function() {
		camomile.login(interface.callback_login, document.getElementById("LoginUsername").value, document.getElementById("LoginPassword").value, "http://lit-shore-5364.herokuapp.com" );
	
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
		document.getElementById("divVid").innerHTML = "Veuillez choisir une video";
	
		/* Met a jour le menu des videos disponibles et l'affiche */
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
		var divVidName = document.getElementById('vidName');
		divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i>  Videos  <b class=\"caret \"></b>";
	
	}

	/* Met a jour le menu des videos en fonction des droits */
	interface.update_menuCorpus = function(){
		var divCorpName = document.getElementById('corpName');
		divCorpName.style.display = "";
		camomile.getCorpus(function(data){
				/* Boucle qui recupere tous les nom de corpus */
				var menuCorp = document.getElementById('menuCorpus');
				menuCorp.innerHTML  = " ";
				var temp = " ";
				for(var val in data){
				
					temp += "<li> <a href=\"#\" onclick=\"javascript:interface.update_menuVid('" + data[val]._id + "','" + data[val].name + "')\">" + data[val].name + "</a></li>";
				}
				menuCorp.innerHTML  = temp;
			}
		)
					

	}

	/* Get Media */
	interface.update_menuVid = function(corpusId, corpusName){
		camomile.getMedias(function(data){
				/* Boucle qui recupere tous les nom de medias */
				var menuVid = document.getElementById('menuVid');
				var temp = " ";
				if (data.length != 0){
					for(var val in data){
						temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_Med('http://"+ data[val].url+ "','" + data[val].name+ "')\"> " + data[val].name + " </a></li>";
				
					}
				}else {
					temp +=  "<li class=\"dropdown-header\" > Pas de videos disponibles pour ce corpus </li>"

				}
				menuVid.innerHTML = temp;
				menuVid.parentNode.style.display = "";
				var divCorpName = document.getElementById('corpName');
				divCorpName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i>  " + corpusName + "  <b class=\"caret \"></b>";
				var divVidName = document.getElementById('vidName');
				divVidName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i> Videos  <b class=\"caret \"></b>";
			
			}, 
			corpusId		
		)
	}

	/* Get Media */
	interface.update_Med = function(route, vidName){
		/* Change le nom du menu Vid */
		var divVidName = document.getElementById('vidName');
		divVidName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i>   " + vidName + "   <b class=\"caret \"></b>";

		/* Fait apparaitre la video */
		var divVid = document.getElementById('divVid');
		

		
		var temp = ""; 
		temp = "<video id=\"vid\" width = 1019 height=566 align=\"center\">" // De base : 400/720
			 + "<source src=\"" + route + ".webm\" type=\"video/webm\" /><!-- Chrome10+, Ffx4+, Opera10.6+ -->"  
			 + "<source src=\"" + route + ".mp4\" type=\"video/mp4\"  /> <!-- Safari / iOS, IE9 -->"
			 + "Impossible de lire la video avec votre browser"
			 + "</video>";
		divVid.innerHTML = "";
		divVid.innerHTML = temp;
		/*var vid = document.getElementById('vid');
		vid.style.width = '100%';
 		vid.style.height = 'auto';
		divVid.style.width = '100%';
 		divVid.style.height = 'auto'; */
		comportement.elVid();
	}

	return interface;
}();

