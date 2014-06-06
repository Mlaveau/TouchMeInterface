
/* Factoriser les parties factorisables */

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

	/* Met a jour le menu des corpus */
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
					

	}

	/* Met a jour le menu des vidéos  */
	interface.update_menuVid = function(corpusId, corpusName){
		camomile.getMedias(function(data){
				/* Fait disparaître la video s'il y en avait une */
				var divVid = document.getElementById('divVid');
				divVid.innerHTML = "";
				/* Boucle qui recupere tous les nom de medias */
				var menuVid = document.getElementById('menuVid');
				var temp = " ";
				if (data.length != 0){
					for(var val in data){
						temp += "<li><a href=\"#\" onclick=\"javascript:interface.update_Med('http://"+ data[val].url+ "','" + data[val].name + "','" + corpusId + "','" + data[val]._id+ "')\"> " + data[val].name + " </a></li>";
				
					}
				}else {
					temp +=  "<li class=\"dropdown-header\" > Pas de videos disponibles pour ce corpus </li>";

				}
				menuVid.innerHTML = temp;
				menuVid.parentNode.style.display = "";
				var divCorpName = document.getElementById('corpName');
				divCorpName.innerHTML = "<i class=\"icon-white icon-folder-open\"></i>  " + corpusName + "  <b class=\"caret \"></b>";
				var divVidName = document.getElementById('vidName');
				divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i> Videos  <b class=\"caret \"></b>";

				/* Reinitialisation du menu Segmentation */
				var divSegmMenu = document.getElementById('menuSegm');
				divSegmMenu.innerHTML = "<li class=\"dropdown-header\"> Veuillez choisir une video  </li>";
				var divSegmName = document.getElementById('segmName');
				divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i>  Segmentation  <b class=\"caret \"></b>";
				divSegmName.parentNode.style.display = "None";
			
			}, 
			corpusId		
		)
	}

	interface.update_menuSegm = function(name){
		var divSegmName = document.getElementById('segmName');
		divSegmName.innerHTML = "<i class=\"icon-white icon-file\"></i> " + name + " <b class=\"caret \"></b>";
		console.log("tdhx");
	}

	/* Get Media */
	interface.update_Med = function(url, vidName, corpusId, vidId){
		/* Change le nom du menu Vid */
		var divVidName = document.getElementById('vidName');
		divVidName.innerHTML = "<i class=\"icon-white icon-film\"></i>   " + vidName + "   <b class=\"caret \"></b>";

		/* Fait apparaitre la video */
		var divVid = document.getElementById('divVid');
		var temp = ""; 
		temp = "<video id=\"vid\" width = 1019 height=566 align=\"center\">" // De base : 400/720
			 + "<source src=\"" + url + ".webm\" type=\"video/webm\" /><!-- Chrome10+, Ffx4+, Opera10.6+ -->"  
			 + "<source src=\"" + url + ".mp4\" type=\"video/mp4\"  /> <!-- Safari / iOS, IE9 -->"
			 + "Impossible de lire la video avec votre browser"
			 + "</video>";
		divVid.innerHTML = "";
		divVid.innerHTML = temp;
		/* Mise a lechelle de lecran automatiquement -> Fonctionne pas sous iPad.
		var vid = document.getElementById('vid');
		vid.style.width = '100%';
 		vid.style.height = 'auto';
		divVid.style.width = '100%';
 		divVid.style.height = 'auto'; */
		comportement.elVid();

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
											
											tmp +=  "<li><a href = '#' onclick = 'javascript:comportement.update_segm(" + dat[valeur].data + "); interface.update_menuSegm(\"" + dat[valeur].fragment + "\");'> "+ dat[valeur].fragment + " </a></li>";


// A remettre si passer le data est trop lourd " + corpusId + "\",\"" + vidId + "\",\"" + data[val]._id + "\",\"" + dat[valeur]._id + "\");'> "+ dat[valeur].fragment + " </a></li>";
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
	}

	return interface;
}();

