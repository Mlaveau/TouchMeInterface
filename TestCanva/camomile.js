
// http://lit-shore-5364.herokuapp.com


camomile = function(){
	var adresse = ""
	
	function camomile(){
	}
	
	/* Login */
	camomile.login = function(callback, username, password, adr) {
		// log
		adresse= adr
		var data = {};
		data.username = username;
		data.password = password;
		camomile.post("/login", data, callback);
	}
    
    
	/* Logout */
	camomile.logout = function(callback) {
		camomile.post("/logout", null, callback);
	}
    
    
	/* Popup error */
	camomile.error = function(status, errorThrown, textStatus){
		alert(textStatus + " " + status +" : " + errorThrown);
		/* Pourrait etre etoffe */
	}
    
	/* Get */
	camomile.get = function(route, callback){
		$j.ajax(
			{
                url: adresse + route,
                type: 'GET',
                success: function(data) {
					callback(data);
                },
                crossDomain: true,
                //dataType: 'json', // Format of the answer
                xhrFields: {
					withCredentials: true
                },
                error: function(jqXHR, textStatus, errorThrown) {
					camomile.error(jqXHR.status, errorThrown, textStatus);
                }
            }
        );
	}
    
    
	/* Delete */
	camomile.del = function(route, callback){
		$j.ajax(
			{
                url:  adresse + route,
                type: 'DELETE',
                success: function(data) {
					callback(data);
                },
                crossDomain: true,
                //dataType: 'json',  // Format of the answer
                xhrFields: {
					withCredentials: true
                },
                error: function(jqXHR, textStatus, errorThrown) {
					camomile.error(jqXHR.status);
                }
            }
        );
	}
    
	/* Post */
	camomile.post = function(route, data, callback){
		if (data != null){ // For request as login
			$j.ajax(
				{
                    url:  adresse + route,
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    success: function(data) {
						callback(data);
                    },
                    crossDomain: true,
                    //dataType: 'json',  // Format of the answer
                    xhrFields: {
						withCredentials: true
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
				    	camomile.error(jqXHR.status, errorThrown, textStatus);
                    }
                }
            );
		} else { // For request as logout
			$j.ajax(
				{
                    url:  adresse + route,
                    type: 'POST',
                    success: function(data) {
						callback(data);
                    },
                    crossDomain: true,
                    //dataType: 'json',  // Format of the answer
                    xhrFields: {
						withCredentials: true
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
						camomile.error(jqXHR.status, errorThrown, textStatus);
                    }
                }
            );
		}
	}
    
    
	/* Put */
	camomile.put = function(route, data, callback){
		$j.ajax(
			{
                url:  adresse + route,
                type: 'PUT',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function(data) {
					callback(data);
                },
                crossDomain: true,
                //dataType: 'json',  // Format of the answer
                xhrFields: {
					withCredentials: true
                },
                error: function(jqXHR, textStatus, errorThrown) {
					camomile.error(jqXHR.status);
                }
            }
        );
	}
    
	/* Create User */
	camomile.create_user = function(callback, name, password, affiliation){
		var data = {};
		data.username = name;
		data.password = password;
		data.affiliation = affiliation;
		camomile.post("/user", data, callback);
	}
    
	/* See All User */
	camomile.all_user = function(callback){
		camomile.get("/user", callback);
	}
    
    
	/* Get ACL for an element */
	camomile.get_ACL = function(callback, idCorpus, idMedia, idLayer, idAnnotation){
		camomile.get((route(idCorpus, idMedia, idLayer, idAnnotation) + "/acl"), callback);
	}
    
	/* Set ACL for an element */
	camomile.set_ACL = function(callback, un, ur, idCorpus, idMedia, idLayer, idAnnotation){
		var data = {};
		data.username = un;
		data.userright = ur;
		camomile.put((route(idCorpus, idMedia, idLayer, idAnnotation) + "/acl"), data, callback);
	}
    
    
	/* Route builder */
	camomile.route = function(idCorpus, idMedia, idLayer, idAnnotation){
		var url = "";
		if(idCorpus != null){
			url += "/corpus/" + idCorpus;
			if(idMedia != null){
				url += "/media/" + idMedia;
				if(idLayer != null){
					url += "/layer/" + idLayer;
					if(idAnnotation != null){
						url += "/annotation/" + idAnnotation;
					}
				}
			}
		}
		return url;
	}
    
	/************/
	/** CORPUS **/
	/************/
    
	/* Corpus builder */
	camomile.corpus = function(name){
		var data = {};
		data.name = name;
		return data;
	}
	/* Get all corpus */
	camomile.getCorpus = function(callbackFunction){
		camomile.get("/corpus", callbackFunction);
	}
    
	/* Get corpus by name */
	camomile.corpusById = function(callbackFunction, idCorpus){
		camomile.get(camomile.route(idCorpus), callbackFunction);
	}
    
	/* New corpus */
	camomile.create_corpus = function(callbackFunction, name){
		camomile.post("/corpus", camomile.corpus(name), callbackFunction);
	}
    
	/* Set Corpus */
	camomile.set_corpus = function(callbackfunction, idCorpus, name){
		camomile.put(camomile.route(idCorpus), camomile.corpus(name), callbackfunction);
	}
    
	/* Remove Corpus*/
	camomile.remove_corpus = function(callbackFunction, idCorpus){
		camomile.del(camomile.route(idCorpus), callbackFunction);
        
	}
    
	/***********/
	/** MEDIA **/
	/***********/
    
	/* Media builder */
	camomile.media = function(name, url){
		var data = {};
		data.name = name;
		data. url = url;
		return data;
	}
    
	/* Get all media */
	camomile.getMedias = function(callbackFunction, idCorpus){
		camomile.get(camomile.route(idCorpus) + "/media", callbackFunction);
	}
    
	/* Get media by name */
	camomile.mediaById = function(callbackFunction, idCorpus, idMedia ){
		camomile.get(camomile.route(idCorpus, idMedia) , callbackFunction);
	}
    
	/* New Media */
	camomile.create_media = function(callbackFunction, idCorpus, name, url){
		camomile.post(camomile.route(idCorpus) + "/media", camomile.media(name, url), callbackFunction);
	}
    
	/* Set Media */
	camomile.set_media = function(callbackFunction, idCorpus, idMedia, name, url){
		camomile.put(camomile.route(idCorpus, idMedia), camomille.media(name, url), callbackFunction);
	}
    
	/* Remove Media*/
	camomile.remove_media = function(callbackFunction, idCorpus, idMedia){
		camomile.del(camomile.route(idCorpus, idMedia), callbackFunction);
        
	}
    
	/***********/
	/** LAYER **/
	/***********/
    
	/* Layer builder */
	camomile.layer = function(layertype, fragmenttype, datatype, source){
		var data = {}
		data.layer_type = layertype;
		data.fragment_type = fragmenttype;
		data.data_type = datatype;
		data.source = source;
		return data;
	}
	/* Get all layer */
	camomile.getLayers = function(callbackFunction, idCorpus, idMedia){
		camomile.get(camomile.route(idCorpus, idMedia) + "/layer", callbackFunction);
	}
    
	/* Get Layer by name */
	camomile.layerById = function(callbackFunction, idCorpus, idMedia, idLayer){
		camomile.get(camomile.route(idCorpus, idMedia, idLayer), callbackFunction);
	}
    
	/* New Layer */
	camomile.create_layer = function(callbackFunction, idCorpus, idMedia, layertyp, fragmenttyp, datatyp, source){
		camomile.post(camomile.route(idCorpus, idMedia) + "/layer", camomile.layer(layertyp, fragmenttyp, datatyp, source), callbackFunction);
	}
    
	/* Set Layer */
	camomile.set_layer = function(callbackFunction, idCorpus, idMedia, idLayer, layertyp, fragtyp, datatyp, source){
		camomile.put(camomile.route(idCorpus, idMedia, idLayer), camomile.layer(layertyp, fragtyp, datatyp, source), callbackFunction);
	}
    
	/* Remove Layer*/
	camomile.remove_layer = function(callbackFunction, idCorpus, idMedia, idLayer, callbackFunction){
		camomile.del(camomile.route(idCorpus, idMedia, idLayer), callbackFunction);
        
	}
    
	/****************/
	/** ANNOTATION **/
	/****************/
    
	/* Annotation builder */
	camomile.annotation = function(fragmenttyp, datatyp){
		var data = {};
		data.fragment = fragmenttyp;
		data.data = datatyp;
		return data;
	}
    
	/* Get all Annotation */
	camomile.getAnnotations = function(callbackFunction, idCorpus, idMedia, idLayer){
		camomile.get(camomile.route(idCorpus, idMedia, idLayer) + "/annotation", callbackFunction);
	}
    
	/* Get Annotation by name */
	camomile.annotationById = function(callbackFunction, idCorpus, idMedia, idLayer, idAnnotation){
		camomile.get(camomile.route(idCorpus, idMedia, idLayer, idAnnotation), callbackFunction);
	}
    
	/* New Annotation */
	camomile.create_annotation = function(callbackFunction, idCorpus, idMedia, idLayer, frag, dat){
        var annot = camomile.annotation(frag, dat);
        console.log(annot);
		camomile.post(camomile.route(idCorpus, idMedia, idLayer) + "/annotation",annot, callbackFunction);
	}
    
	/* Set Annotation*/
	camomile.set_annotation = function(callbackFunction, idCorpus, idMedia, idLayer, idAnnotation, frag, dat){
		camomile.put(camomile.route(idCorpus, idMedia, idLayer, idAnnotation), camomile.annotation(frag, dat), callbackFunction);
	}
    
	/* Remove Annotation*/
	camomile.remove_annotation = function(callbackFunction, idCorpus, idMedia, idLayer, idAnnotation){
		camomile.del(camomile.route(idCorpus, idMedia, idLayer, idAnnotation), callbackFunction);
	}
	return camomile;
}();

