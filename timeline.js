/* 
 * Gere l'affichage des annotations et leur mouvement, 
 * avec extrapolation de la position pour les frames dont on a pas de valeur.
 */

timeline = function(){

  /* Variables globales de placement de la timeline */
  var decalageLeft; 
  var decalageBottom;
  var hauteur;
  var longueur;
  var canvas;
  var debordement; // Ce que le slider déborde par rapport a la barre blanche. a diviser par deux vu qu'il y a deux côtés.
  var xstart, xend, ystart, yend, lw, couleur;

  /**
   * Constructeur
   * @method timeline
   * @return 
   */
  function timeline (){
        
  }

  /**
   * Trace une ligne en fonction des paramètres passés 
   * @method drawLine
   * @param {} xstart
   * @param {} ystart
   * @param {} xend
   * @param {} yend
   * @param {} couleur
   * @param {} lw
   * @return 
   */
  timeline.drawLine = function(xstart, ystart, xend, yend, couleur, lw){
    var context = "";
    if (timeline.canvas.getContext){    
      context = timeline.canvas.getContext('2d'); 
    }
    context.beginPath();
    context.moveTo(xstart, ystart);
    context.lineTo(xend, yend);
    context.lineWidth = lw; 
    context.strokeStyle = couleur; 
    context.stroke(); 
    timeline.xend = xend;
    timeline.xstart = xstart;
    timeline.yend = yend;
    timeline.ystart = ystart
    timeline.couleur = couleur;
    timeline.lw = lw;
  }  

  /**
   * Reaffiche la timeline ainsi que tous les plans/segmentations 
   * @method reaffichTimeLine
   * @return 
   */
  timeline.reaffichTimeLine = function(){
    document.getElementById('svgTimeline').remove();
    timeline.affichTimeline(timeline.decalageLeft, timeline.decalageBottom, timeline.hauteur, -timeline.longueur + document.body.clientWidth, timeline.debordement);
    timeline.moveSlider(timeline.longueur * comportement.vid.currentTime / comportement.vid.duration);
    timeline.insertAnnot();
    timeline.insertAffichPlan();
  }  

  /**
   * Affiche la timeline ainsi que le slider 
   * @method affichTimeline
   * @param {} decLeft
   * @param {} decBot
   * @param {} haut
   * @param {} longu
   * @param {} debord
   * @return 
   */
  timeline.affichTimeline = function (decLeft, decBot, haut, longu, debord){
    timeline.decalageLeft = decLeft; 
    timeline.decalageBottom = decBot;
    timeline.hauteur = haut;
    timeline.debordement = debord;
    timeline.longueur = document.body.clientWidth - longu;

    document.getElementById("timelineAffich").style.display = "";
    timeline.canvas = document.getElementById("canvasTimeline"); 
    timeline.canvas.setAttributeNS(null, "width", timeline.longueur); //width="2000" height="40"
    timeline.canvas.setAttributeNS(null, "height", timeline.hauteur);
    timeline.canvas.style.position = "absolute"; 
    timeline.canvas.style.left = timeline.decalageLeft + "px"; 

    // Cree le svg et y insère le slider rouge
    var svg = Snap(timeline.longueur, timeline.hauteur + timeline.debordement).attr(
      {
        'id' : "svgTimeline"
      }
    );  
    var s = svg.line(0, 0, 0, timeline.hauteur + timeline.debordement).attr(
      {
        'id' : "slider", 
        stroke: 'red', 
        strokeWidth: 10,
      }
    );

    // Ajoute le drag sur le slider pour le déplacement le long de la timeline
    s.drag(
      function(dx, dy, x, y){
        timeline.moveSlider(x + timeline.decalageLeft);
        timeline.updateTimeVid(x);
      }, 
      function(data){
      }, 
      function(data){
      }
    );
    var svg = document.getElementById("svgTimeline");
    svg.style.position = "absolute"; 
    svg.style.left = timeline.decalageLeft + "px";
    svg.style.bottom = (-40 - 5) + "px";
    document.getElementById("timeline").appendChild(svg);

    timeline.drawLine(0, timeline.hauteur/2, timeline.longueur, timeline.hauteur/2, 'white', timeline.hauteur);

    // Ajoute le listener pour pouvoir 'sauter' le long de la timeline
    svg.addEventListener('mouseup', function(evt) {
      timeline.moveSlider(evt.clientX + timeline.decalageLeft);
      timeline.updateTimeVid(evt.clientX);
    }, false);
  }
  
  /**
   * Update le temps courant de la video pour se deplacer dedans 
   * @method updateTimeVid
   * @param {} x
   * @return 
   */
  timeline.updateTimeVid = function(x){
    var pos = x + timeline.decalageLeft;
    //Calcul du pourcentage que ça represente
    if(pos > 0 && pos < timeline.longueur){
      var pourcentage = (x + timeline.decalageLeft) / timeline.longueur;
      // Application a la video
      comportement.vid.currentTime =  Math.round(comportement.vid.duration * pourcentage);
      timeline.updateTimeAffich();
    }else if(pos < 0 ){
      comportement.vid.currentTime = 0;
      timeline.updateTimeAffich();
    }else{
      comportement.vid.currentTime = Math.round(comportement.vid.duration);
      timeline.updateTimeAffich();
    }    
  }

  /**
   * Update l'affichage du temps 
   * @method updateTimeAffich
   * @return 
   */
  timeline.updateTimeAffich = function(){
  // A ENLEVER APRES : Mettre a jour qu'une fois les durees totales
    if(comportement.vid.duration >= 0){
      document.getElementById("tempsSecSec").innerHTML = Math.round(comportement.vid.duration);
      document.getElementById("tempsMin").innerHTML = Math.floor(comportement.vid.duration / 60);
      document.getElementById("tempsSec").innerHTML = Math.floor(comportement.vid.duration % 60);
    }else {
      document.getElementById("tempsSecSec").innerHTML = 0;
      document.getElementById("tempsMin").innerHTML = 0;
      document.getElementById("tempsSec").innerHTML = 0;
    }
    document.getElementById("curtimeSecSec").innerHTML = Math.round(comportement.vid.currentTime);
    document.getElementById("curtimeMin").innerHTML = Math.floor(comportement.vid.currentTime / 60);
    document.getElementById("curtimeSec").innerHTML = Math.round(comportement.vid.currentTime % 60);
  }

  /**
   * Bouge le slider le long de la timeline en fonction de x ou x est la position où on veut le bouger 
   * @method moveSlider
   * @param {} x
   * @return 
   */
  timeline.moveSlider = function(x){
    // Application a la video
    var posX =  x;
    var slid = document.getElementById("slider"); 
    if(posX > 0 && posX < timeline.longueur){
      slid.setAttributeNS(null, "x1", posX);
      slid.setAttributeNS(null, "x2", posX);
    }else if(posX <= 0){
      slid.setAttributeNS(null, "x1", 0);
      slid.setAttributeNS(null, "x2", 0);
    } else {
      slid.setAttributeNS(null, "x1", timeline.longueur);
      slid.setAttributeNS(null, "x2", timeline.longueur);
    }
  }  

  /**
   * Insere les plans de la segmentation choisie 
   * @method insertAffichPlan
   * @return 
   */
  timeline.insertAffichPlan = function(){
    var tmp = 0;
    // Si une segmentatione est chargee, on affiche
    if(comportement.segm != ""){
      for(var j = 0; j < comportement.segm.length; j++){
        tmp = (comportement.segm[j] / 25) / comportement.vid.duration * timeline.longueur;
        timeline.drawLine(tmp, timeline.hauteur/2, tmp, timeline.hauteur, 'green', 1);
      }
    }else{ // Sinon, on efface en dessinant un trait blanc par dessus
      timeline.drawLine(0, timeline.hauteur*3/4, timeline.longueur, timeline.hauteur*3/4, 'white', timeline.hauteur/2);
    }
  }


  /**
   * Insere un trait orange pour les annotations dont time debut et end en secondes 
   * @method insertSegmAnnot
   * @param {} timeDebut
   * @param {} timeEnd
   * @return 
   */
  timeline.insertSegmAnnot = function(timeDebut, timeEnd){
    var pourcentageDebut =  timeDebut / comportement.vid.duration;
    var pourcentageFin =  timeEnd / comportement.vid.duration;
    timeline.drawLine(pourcentageDebut * timeline.longueur, 10, pourcentageFin * timeline.longueur, 10, 'orange', timeline.hauteur / 2);
  }

  /**
   * Insere toutes les annotations du layer choisi 
   * @method insertAnnot
   * @return 
   */
  timeline.insertAnnot = function(){
    for(var i = 0; i < annotations.annots.length; i++){
      timeline.insertSegmAnnot(annotations.annots[i].fragment.start / 25, annotations.annots[i].fragment.end / 25);
    }
  }

  return timeline; 
}();