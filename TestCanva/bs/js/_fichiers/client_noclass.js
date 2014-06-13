

/* Utiliser le DOM pour modifier plutôt qu'INNERHTML */
// http://lit-shore-5364.herokuapp.com


/** Permet l heritage **/
var __hasProp = {}.hasOwnProperty,
__extends = function(child, parent) { 
	for (var key in parent) { 
		if (__hasProp.call(parent, key)) child[key] = parent[key]; 
	} 
	function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); 
	child.__super__ = parent.prototype; return child; 
};




var adresse = ""

/* Login */
function login() {
	var username = document.getElementById("LoginUsername").value; 
	var password = document.getElementById("LoginPassword").value;
	// log
	adresse = "http://lit-shore-5364.herokuapp.com";
	var data = {};
	data.username = username;
	data.password = password;
	post("/login", callback_login, data);
}


/* Logout */
function logout() {
	post("/logout", callback_logout, null);
}
	
/* Traitement si connecte */
function callback_login(data){

	console.log('Bien co');

	/* Permet le jeu d'affichage/disparition des boutons de logout/login */

	document.getElementById("loginForm").style.display = "None";
	document.getElementById("logoutButton").style.display = "";
	document.getElementById("divVid").innerHTML = "Veuillez choisir une video";
	
	/* Met a jour le menu des videos disponibles */
	update_menuVid();
}

/* Traitement si deconnecte */
function callback_logout(data){

	console.log('Bien deco');
	
	/* Permet le jeu d'affichage/disparition des boutons de login/logout */
	document.getElementById("loginForm").style.display = "";
	document.getElementById("logoutButton").style.display = "None";
		

	/* Mise a jour du menu des videos disponibles */
	document.getElementById('menuVid').innerHTML = "<li class=\"dropdown-header\"> Veuillez vous connecter pour avoir accès à la liste des vidéos disponibles</li>";
	
	
	/* Fait disparaitre la video */
	var divMedia =  document.getElementById('divVid');
	divMedia.innerHTML = "";

	/* Fait disparaitre le chemin */
	var divChemin =  document.getElementById('divChemin');
	divChemin.innerHTML = "";
}

/* Gestion des erreurs */ 
function error(status, errorThrown, textStatus){
	alert(textStatus + " " + status +" : " + errorThrown);	
}



/* Met a jour le menu des videos en fonction des droits */
function update_menuVid(){
	document.getElementById('menuVid').innerHTML = ""
	get("/corpus", 
		function(data){
			/* Boucle qui recupere tous les nom de corpus */
			var menuVid = document.getElementById('menuVid');
			var temp = "";
			for(var val in data){
				
				if (val != 0){
					temp += "<li class=\"divider\"></li>";
				}
				temp += "<li class=\"dropdown-header\"> <a href=\"#\" onclick=\"javascript:test(\" "+ data[val].name +" \")\">" + data[val].name + "</a></li>";
				
				
				/* Recuperation du nom des medias pour chaque corpus */
				update_menuVid_medias(data[val]._id, data[val].name);
				//alert(menuVid.innerHTML + "id : " + data[val]._id);
			}
			menuVid.innerHTML  += temp;
		}
	)
					

}
function test(text){
	alert(text);

}

/* Get Media */
function update_menuVid_medias(corpusID, corpusName){
	get("/corpus/"+corpusID+"/media", 
		function(data){
			/* Boucle qui recupere tous les nom de medias */
			var menuVid = document.getElementById('menuVid');
			var temp = "";
			for(var val in data){
				temp += "<li><a href=\"#\" onclick=\"javascript:update_Med('http://"+ data[val].url+ "','" + corpusName + "','" + data[val].name+ "')\"> " + data[val].name + " </a></li>";
				
			}
			menuVid.innerHTML += temp;
		}
	)
}

/* Update Media */
/* VOIR SI CE SERAIT PAS MIEUX DE CARREMENT PAS METTRE DEXTENTION AU URLS ET DE TOUJOURS TOUT METTRE AVEC LE MEME NOM */
function update_Med(urlMed, corpusID, vidName){
	var divMedia =  document.getElementById('divVid');
	divMedia.innerHTML = "";
	var urlmed2 = urlMed.slice(0, urlMed.length-4);
	var temp = 
		  "<video id=\"vid\" width = 1005 height = 788 style=\"height:650px; color:white\"> "
		+ "<source src=\" " + urlMed + "\" type=\"video/webm\" /> "
		+ "<source src=\" " + urlmed2 + "mp4\" type=\"video/mp4\" /> " 
		+ " Format de video non valide pour votre browser " 
		+ "</vid> "
	divMedia.innerHTML = temp;	
	//console.log( document.getElementById('vid').innerHTML);	
	elVid();
	var divChemin =  document.getElementById('divChemin');
	divChemin.innerHTML = ""; 
	
	divChemin.innerHTML = corpusID + "/" + vidName;
}

/* Get */
function get(route, callback){
	$j.ajax({
		url: adresse + route,
		type: 'GET',
		success: function(data) {
			callback(data);
		},
		//async: false, // Oblige le get a etre synchrone : non compatible avec le WithCredentials
		crossDomain: true,
		//dataType: 'json', // A remettre quand ce sera partout du JSON
		xhrFields: {
			withCredentials: true
		},
		error: function(jqXHR, textStatus, errorThrown) {
			error(jqXHR.status, errorThrown, textStatus);
		}
	});
	
}


/* Delete */
function del(route, callback){  // Route avec l id ou le nom de ce qu'on veut effacer
	$j.ajax({
		url:  adresse + route,
		type: 'DELETE',
		data: JSON.stringify(data),
		contentType: 'application/json',
		success: function(data) {
			callback(data);
		},
		crossDomain: true,
		//dataType: 'json', // Format de ce qu'on recoit : on recoit pas de json la
		xhrFields: {
			withCredentials: true
		},
		error: function(jqXHR, textStatus, errorThrown) {
			error(jqXHR.status);
		}
	});	
}

/* Post */
function post(route, callback, data){
	if (data != null){ // Pour les requetes telles que login
		//console.log(adresse)
		$j.ajax({
			url:  adresse + route,
			type: 'POST',
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function(data) {
				callback(data);
			},
			//async: false, // Faire  une version synchrone et asynchrone ? Exemple : pour login synchrone, le reste asynchrone.
			crossDomain: true,
			//dataType: 'json', // Format de ce qu'on recoit : on recoit pas de json la
			xhrFields: {
				withCredentials: true
			},
			error: function(jqXHR, textStatus, errorThrown) {
			    error(jqXHR.status, errorThrown, textStatus);
			}
		});
	} else { // Pour les requetes telles que logout
		$j.ajax({
			url:  adresse + route,
			type: 'POST',
			success: function(data) {
				callback(data);
			},
			crossDomain: true,
			//dataType: 'json', // Format de ce qu'on recoit : on recoit pas de json la
			xhrFields: {
				withCredentials: true
			},
			error: function(jqXHR, textStatus, errorThrown) {
				error(jqXHR.status, errorThrown, textStatus);
			}
		});
	}
}


/* Put */
function put(route, data, callback){
	$j.ajax({
		url:  adresse + route,
		type: 'PUT',
		data: JSON.stringify(data),
		contentType: 'application/json',
		success: function(data) {
			callback(data);
		},
		crossDomain: true,
		//dataType: 'json', // Format de ce qu'on recoit : on recoit pas de json la
		xhrFields: {
			withCredentials: true
		},
		error: function(jqXHR, textStatus, errorThrown) {
			error(jqXHR.status);
		}
	});
}


/* Create User */
function create_user(name, password, affiliation){
	var data = {};
	data.username = name;
	data.password = password;
	data.affiliation = affiliation;
	post("/user", callback_create_user, data);
}


/* Traitement si user bien cree */
function callback_create_user(data){
	/* A remplir par l'utilisateur */
	console.log(data);
}


/* Tous les Users */
function all_user(){
	get("/user", callback_all_user);
}

/* Traitement sur l'ensemble des users */
function callback_all_user(data){
	/* A remplir par l'utilisateur */
	console.log("User recus");
	console.log(data);
}

/* Recupere les droits pour un element donne */
function get_acl(url){ // Url en format "/corpus/id [/media/id[...]]"
	get((url + "/acl"), callback_get_acl);
}
/* Traitement sur les droits */
function callback_get_acl(data){
	console.log(data);
}

/* Set ACL*/
function set_acl(url, un, ur){ // Url en format "/corpus/id [/media/id[...]]", "un" : username, "ur" : userright
	var data = {};
	data.username = un;
	data.userright = ur;
	put((url + "/acl"), data, callback_set_acl);
}

/* Traitement si set ACL ok */
function callback_set_acl(data){
	console.log(data);
}




/*** OBJETS ***/
/**************/
/* Utiles ? */

/** DATA **/
var Data = (function(){

	/* Constructeur */
	function Data() {
	}

	/* Get all corpus */
	Data.prototype.corpus = function(callbackFunction){
		var url = "/corpus"; 
		get(url, callbackFunction);
	}

	/* Get corpus by name */
	Data.prototype.corpusById = function(id, callbackFunction){
		var url = "/corpus/" + id;
		get(url, callbackFunction);
	}
	
	/* New corpus */
	Data.prototype.create_corpus = function(name, callbackFunction){
		var data = {};
		data.name = name;
		var url = "/corpus"
		post(url, callbackFunction, data);
	}

	return Data; 
})();




/** CORPUS **/
var Corpus = (function(){

	/* Constructeur */
	function Corpus() {
	}

	/* Get all media */
	Corpus.prototype.medias = function(idCorpus, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media";
		get(url, callbackFunction);
	}

	/* Get media by name */
	Corpus.prototype.mediaById = function(idCorpus, idMedia, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media/" + idMedia;
		get(url , callbackFunction);
	}
	
	/* New corpus */
	Corpus.prototype.create_media = function(idCorpus, data, callbackFunction){ // data format JSON {"name" [, "url"]}
		var url = "/corpus/" + idCorpus + "/media";
		post(url, callbackFunction, data);
	}
	
	return Corpus;
})();


/** MEDIA **/
var Media = (function(){

	/* Constructeur */
	function Media() {
	}

	/* Get all layer */
	Media.prototype.layers = function(idCorpus, idMedia, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer";
		get(url, callbackFunction);
	}

	/* Get media by name */
	Media.prototype.layerById = function(idCorpus, idMedia, idLayer, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer/" + idLayer;
		get(url, callbackFunction);
	}
	
	/* New corpus */
	Media.prototype.create_layer = function(idCorpus, idMedia, data, callbackFunction){// data format JSON {"layer_type", "fragment_type", "data_type", "source"}
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer";
		post(url, callbackFunction, data);
	}
	return Media;
})();



var Layer = (function(){

	/* Constructeur */
	function Layer() {
	}

	/* Get all layer */
	Layer.prototype.annotations = function(idCorpus, idMedia, idLayer, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer/" + idLayer + "/annotation";
		get(url, callbackFunction);
	}

	/* Get media by name */
	Layer.prototype.annotationById = function(idCorpus, idMedia, idLayer, idAnnotation, callbackFunction){
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer/" + idLayer + "/annotation/" + idAnnotation;
		get(url, callbackFunction);
	}
	
	/* New corpus */
	Layer.prototype.create_annotation = function(idCorpus, idMedia, idLayer, data, callbackFunction){// data format JSON {"fragment", "data"}
		var url = "/corpus/" + idCorpus + "/media/" + idMedia + "/layer/" + idLayer + "/annotation";
		post(url, callbackFunction, data);
	}
	return Layer;
})();


var Annotation = (function(){

	/* Constructeur */
	function Annotation() {
	}

	return Annotation;
})();

