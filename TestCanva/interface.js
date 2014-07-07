annotations = function(){
    
    var temp_pos; // Tableau des positions [(X,Y), ...]
    var tempEvMulti; // Cache pour les frames ayant plusieurs positions
    var temp_name; // Enregistre les noms deja vus[[nom, couleur], ..]
    var tabColor; // Tableau des couleurs pour l'affichage des noms
    
    var svg;
    // Id des corpus/media/layer
    var idCorp, idMed, idLay;
    
	function annotations (){
        
    }
	
    // Enregistre les annotations dans le temp /!\ elles doivent être en pourcentages !
	// Enregistre les annotations dans le temp_pos en estrapolant -> Mais on ne veut plus extrapoler
    annotations.enregistre_pos = function(frame, type, posX, posY){
        var indexprec = annotations.temp_pos.length-1;
        console.log(indexprec);
        if(!comportement.vid.paused && annotations.idLay != undefined){
            console.log(frame, type, posX, posY);
            if(type == "release" && annotations.temp_pos.length == 0){
                // Si c'est le release d'après doubletap, dont on ne veut pas garder la trace, on ne fais rien
            } else { // Dans tous les autres cas, on enregistre, en extrapolant les positions pour les frames manquantes
                // l'index de la derniere position enregistree
                switch(type){// NB : Possibilite d'un drag apres un hold/touch mais pas l'inverse. -> Peut poser des probs.
                    case "drag" : // Si c'est un drag, il y a forcement avant un drag ou un dragstart -> extrapoler les positions des frames intermediaires
                        /*
                         if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un drag");
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragend" : //Drag ou dragstart avant : seulement extrapoler
                        /*if((annotations.temp_pos[indexprec][1] == "drag" || annotations.temp_pos[indexprec][1] == "dragstart") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         } else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         } else {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un drag ou dragstart avant un dragend");
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "dragstart" : // possibilite d'un touch ou hold juste avant -> Extrapoler
                        /*if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else { //Si c'est pas le cas, c'est que c'est un vrai debut donc on push
                         annotations.save (indexprec, frame, posX, posY, type);
                         }*/
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "hold" : // un touch juste avant
                        /* if((annotations.temp_pos[indexprec][1] == "touch") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }else  {
                         console.log("Je me suis gouree quelquepart il n'y a pas forcement un touch avant un hold");
                         } */
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "touch" : // Juste enregistrer la position/frame
                        annotations.save(indexprec, frame, posX, posY, type);
                        break;
                    case "release" : // Concerne le cas du release post touch ou hold pour avoir le temps pour le même endroit (Aussi du drag, mais dans ce cas, vu que'il y a deja le dragend, c'est deja extrapole. Il suffit juste de demander si on veut enregistrer les positions
                        // Le release peut ne pas etre exactement au meme endroit que le touch ou le hold
                        // release -> Popu pour enregistrer les pos (Noms, layer nom, etc)
                        // Vider le tableau temp_pos
                        /*if(annotations.temp_pos.length  > 4){ // Pour gerer les pauses quand la video tourne
                         if((annotations.temp_pos[indexprec][1] == "touch" || annotations.temp_pos[indexprec][1] == "hold") && annotations.temp_pos[indexprec][0] !=frame){
                         annotations.extrapol(indexprec, frame, posX, posY, type);
                         }else if(annotations.temp_pos[indexprec][0] == frame){
                         annotations.save(indexprec, frame, posX, posY, type);
                         }
                         interface.popup();
                         comportement.vid.pause();
                         }*/
                        if(annotations.temp_pos.length > 4){
                            annotations.save(indexprec, frame, posX, posY, type);
                        }
                        var modal = document.getElementById("myModal");
                        if(posY < 50){ // En pourcentage, donc le milieu c'est 50
                            modal.style.bottom = "10px";
                            modal.style.top = "auto";
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "300px";
                                modal.style.right = "";
                            }
                        }else{
                            modal.style.top = "10px";
                            modal.style.bottom = "auto";
                            if(posX < 50){
                                modal.style.left = "";
                                modal.style.right = "10px";
                            } else {
                                modal.style.left = "300px";
                                modal.style.right = "";
                            }
                        }
                        interface.popup();
                        comportement.vid.pause();
                        break;
                }
            }
        } else if (type == "hold"){ // Si la video est en pause
            // Demarage de la video
            comportement.playVideo();
            annotations.save(indexprec, frame, posX, posY, type);
        }
    }
    
    // Extrapole les positions -> On veut juste garder les positions recuperees
    annotations.extrapol = function(i, frame, posX, posY, type) {
        var valeur = annotations.temp_pos[i];
        var espace = frame - valeur[0];
        var decalageX = (valeur[2] - posX) / espace;
        var decalageY = (valeur[3] - posY) / espace;
        for (var i = 1; i < espace; i++){
            annotations.temp_pos.push([valeur[0]+i, "remplissage_auto", valeur[2] + i * decalageX, valeur[3] + i * decalageY]);
        }
        annotations.temp_pos.push([frame, type, posX, posY]);
        annotations.tempEvMulti = [];
        annotations.tempEvMulti.push([frame, type, posX, posY]);
    }
    
    
    // Enregistre en verifiant qu'il n'y a pas plusieurs evenements pour la meme frame, si c'est le cas, fais la moyenne de tout
    annotations.save = function(indexprec, frame, posX, posY, type){
        var temp = {};
        temp.x = posX;
        temp.y = posY;
        temp.t = frame;
        temp.type = type;
        
        if(annotations.temp_pos.length > 0){
            if(annotations.temp_pos[indexprec].t == frame){
                annotations.tempEvMulti.push(temp);
                var x = 0;
                var y = 0;
                for (var i = 0; i < annotations.tempEvMulti.length; i++){
                    x += annotations.tempEvMulti[i].x;
                    y += annotations.tempEvMulti[i].y;
                }
                var tmp = {};
                tmp.x = x/annotations.tempEvMulti.length;
                tmp.y = y/annotations.tempEvMulti.length;
                tmp.t = frame;
                tmp.type = type;
                annotations.temp_pos[indexprec] = tmp;
            } else{
                annotations.temp_pos.push(temp);
                annotations.tempEvMulti = [];
                annotations.tempEvMulti.push(temp);
            }
        } else {
            annotations.temp_pos.push(temp);
            annotations.tempEvMulti = [];
            annotations.tempEvMulti.push(temp);
        }
        //console.log(annotations.temp_pos);
    }
    /*
     if(annotations.temp_pos.length > 0){
     if(annotations.temp_pos[indexprec][0] == frame){
     
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     var x = 0;
     var y = 0;
     for (var i = 0; i < annotations.tempEvMulti.length; i++){
     x += annotations.tempEvMulti[i][2];
     y += annotations.tempEvMulti[i][3];
     }
     annotations.temp_pos[indexprec] = [frame, type, x/annotations.tempEvMulti.length, y/annotations.tempEvMulti.length];
     }else{
     annotations.temp_pos.push([frame, type, x, y]);
     annotations.tempEvMulti = [];
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     }
     }else {
     annotations.temp_pos.push([frame, type, posX, posY]);
     annotations.tempEvMulti = [];
     annotations.tempEvMulti.push([frame, type, posX, posY]);
     
     }
     }
     */

    /* Envoyer les annotations au serveur puis efface le temp_pos */
    annotations.envoyer = function(persoName) {
        /* Recupere le nom entre et l'enregistre en verifiant qu'il n'y soit pas deja */
        if(typeof persoName != "string"){
            persoName = document.getElementById("namePerso").value;
        }
        if(persoName != ""){
            var vu = false;
            for(var i = 0; i < annotations.temp_name.length; i++){
                if(annotations.temp_name[i].name == persoName){
                    vu = true;
                }
            }
            
            // Enregistre le nom pour pouvoir le reafficher
            if(!vu) {
                var tmp = {};
                tmp.name = persoName;
                tmp.color = annotations.tabColor[annotations.temp_name.length % annotations.tabColor.length];
                annotations.temp_name.push(tmp);
            }
        }
        
        // l'annotation
        // Enregistrer l'annotation dans le bon layer
        
        var fragment = {}
        fragment.start = annotations.temp_pos[0].t;
        fragment.end = annotations.temp_pos[annotations.temp_pos.length-1].t; // Interval de temps
        var pos = [];
        for (var i = 0; i < annotations.temp_pos.length; i++){
            var tmp = {};
            tmp.t = annotations.temp_pos[i].t;
            tmp.x = annotations.temp_pos[i].x;
            tmp.y = annotations.temp_pos[i].y;
            pos.push(tmp);
        }
        var dat = {}; // // data = {label : _, position : [{x : _ , y : _ , t : _ }, ... ]}
        dat.label = persoName;
        dat.position = pos;
        camomile.create_annotation(function(data){}, annotations.idCorp, annotations.idMed, annotations.idLay, fragment, dat);
        
        // Reinitialisation du champ du nom et du tableau de positions
        annotations.reset();
    }
    
    
    annotations.reset = function(){
        annotations.temp_pos = [];
        document.getElementById("namePerso").value = "";
    }
    
    annotations.creerLayer = function(){
        // Cree le layer en question avec comme source le username de connexion
        camomile.create_layer(function(dat){
                              // Enregistre l'id du layer en question
                              annotations.idLay = dat._id;
                              }, annotations.idCorp, annotations.idMed, "Annotations", "temps", "name pos", interface.username);
        annotations.annots = [];
        
    }
    
    annotations.recupAnnot = function(idLayer){
        annotations.idLay = idLayer;
        camomile.getAnnotations(function(data){
                                console.log(data)
                                }
                                , annotations.idCorp
                                , annotations.idMed
                                , annotations.idLay
                                )
        
        
    }

return annotations;
}();



/* Remove Annotations
 
 var id = [];
 
 camomile.getAnnotations(function(data){
    for (var i = 0; i < data.length; i ++){
        id.push(data[i]._id);
    }
 }
 , annotations.idCorp
 , annotations.idMed
 , annotations.idLay);
 
 for(var i = 0; i < id.length ; i++){
    camomile.remove_annotation(function(data){}, annotations.idCorp, annotations.idMed, annotations.idLay, id[i]);
 }
 
 */


/* "<svg width=\"500\" height=\"500\" style=\"position:relative; z-index=10\; background-color:rgba(255, 255, 255, 0.3)\"><circle id=\"truc\" cx=\"200\" cy=\"200\" r=\"40\" stroke=\"green\" stroke-width=\"6\" fill-opacity= \"0\"/></svg>"*/
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
        /*var el = document.getElementById("slideMenuButton");
        if (el.addEventListener){
            el.addEventListener("click", interface.slideMenu, false);
        }else if (el.attachEvent){
            el.attachEvent('onclick', interface.slideMenu);
        }*/
        
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
        						//console.log(data);
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
        
        //temp += "<svg id = \"affichAnnot\" width=\"1019\" height=\"566\" style=\"top:" + interface.postop + "px; left:" + interface.posleft + "px; position:absolute\"></svg>";
           
		interface.svg = Snap(1019, 566).attr({
					'id' : "affichAnnot", 
					'top' : interface.postop,
					'left' : interface.posleft
				});	
		
		divVid.innerHTML = "";
		divVid.innerHTML = temp;
		var svg = document.getElementById("affichAnnot");
		divVid.appendChild(svg);
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
    
    // Affiche un menu pour envoyer les annotations
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

