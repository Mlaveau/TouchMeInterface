/* 
 * Gere l'affichage de la timeline (slider, temps courant, ...)
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
   * @param int xstart
   * @param int ystart
   * @param int xend
   * @param int yend
   * @param String couleur
   * @param Reel lw : ligne width
   * @return 
   */
  timeline.drawLine = function(xstart, ystart, xend, yend, couleur, lw){
    var context = "";
    if (timeline.canvas.getContext){    
      context = timeline.canvas.getContext('2d'); 
    }
    // Trace la ligne de la timeline
    context.beginPath();
    context.moveTo(xstart, ystart);
    context.lineTo(xend, yend);
    context.lineWidth = lw; 
    context.strokeStyle = couleur; 
    context.stroke(); 

    // Enregistre les parametres
    timeline.xend = xend;
    timeline.xstart = xstart;
    timeline.yend = yend;
    timeline.ystart = ystart
    timeline.couleur = couleur;
    timeline.lw = lw;
  }  

  /**
   * Reaffiche la timeline ainsi que tous les plans/segmentations (Si changement de video/corpus)
   * @method reaffichTimeLine
   * @return 
   */
  timeline.reaffichTimeLine = function(){
    // Supprime le svg et donc le slider pour le recreer. (Sinon, ça va pas. )
    document.getElementById('svgTimeline').remove();
    timeline.affichTimeline(timeline.decalageLeft, timeline.decalageBottom, timeline.hauteur, -timeline.longueur + document.body.clientWidth, timeline.debordement);
    timeline.moveSlider(timeline.longueur * comportement.vid.currentTime / comportement.vid.duration);
    timeline.insertAffichPlan();
  }  

  /**
   * Affiche la timeline ainsi que le slider 
   * @method affichTimeline
   * @param int decLeft : decalage gauche par rapport au bord
   * @param int decBot : Decalage par rapport au bas
   * @param int haut : 
   * @param int longu
   * @param int debord
   * @return 
   */
  timeline.affichTimeline = function (decLeft, decBot, haut, longu, debord){
    timeline.decalageLeft = decLeft; 
    timeline.decalageBottom = decBot;
    timeline.hauteur = haut;
    timeline.debordement = debord;
    timeline.longueur = document.body.clientWidth - longu;

    // Placement du canvas
    document.getElementById("timelineAffich").style.display = "";
    timeline.canvas = document.getElementById("canvasTimeline"); 
    timeline.canvas.setAttributeNS(null, "width", timeline.longueur);
    timeline.canvas.setAttributeNS(null, "height", timeline.hauteur);
    timeline.canvas.style.position = "absolute"; 
    timeline.canvas.style.left = timeline.decalageLeft + "px"; 

    // Cree le svg et y insere le slider rouge -> On pourrait améliorer en ne recreeant pas a chaque fois
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
        comportement.planActuel = comportement.currentPlan();
      }, 
      function(data){
      }, 
      function(data){
      }
    );
    // Placement du svg qui contient le slider
    var svg = document.getElementById("svgTimeline");
    svg.style.position = "absolute"; 
    svg.style.left = timeline.decalageLeft + "px";
    svg.style.bottom = (-40 - 5) + "px";
    document.getElementById("timeline").appendChild(svg);

    // Trace la ligne blanche de la timeline
    timeline.drawLine(0, timeline.hauteur/2, timeline.longueur, timeline.hauteur/2, 'white', timeline.hauteur);

    // Ajoute le listener pour pouvoir 'sauter' le long de la timeline
    svg.addEventListener('mouseup', function(evt) {
      timeline.moveSlider(evt.clientX + timeline.decalageLeft);
      timeline.updateTimeVid(evt.clientX);
      comportement.planActuel = comportement.currentPlan();
    }, false);
  }
  
  /**
   * Update le temps courant de la video pour se deplacer dedans 
   * @method updateTimeVid
   * @param int x
   * @return 
   */
  timeline.updateTimeVid = function(x){
    // Recupere la position de l'endroit ou l'on a clique ou bouge le slider
    var pos = x + timeline.decalageLeft;
    // Calcul du pourcentage que ça represente et update l'affichage en fonction de ça
    if(pos > 0 && pos < timeline.longueur){ // Si on est bien reste dans la longueur
      var pourcentage = (x + timeline.decalageLeft) / timeline.longueur;
      // Application a la video
      comportement.vid.currentTime =  Math.round(comportement.vid.duration * pourcentage);
      timeline.updateTimeAffich();
    }else if(pos < 0 ){ // Si c'est en dehors avant 
      comportement.vid.currentTime = 0;
      timeline.updateTimeAffich();
    }else{ // Si dehors au bout
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
    // Met a jour la duree totale de la video
    if(comportement.vid.duration >= 0){
      document.getElementById("tempsSecSec").innerHTML = Math.round(comportement.vid.duration);
      document.getElementById("tempsMin").innerHTML = Math.floor(comportement.vid.duration / 60);
      document.getElementById("tempsSec").innerHTML = Math.floor(comportement.vid.duration % 60);
    }else {
      document.getElementById("tempsSecSec").innerHTML = 0;
      document.getElementById("tempsMin").innerHTML = 0;
      document.getElementById("tempsSec").innerHTML = 0;
    }

    // Met a jour le temps courant 
    document.getElementById("curtimeSecSec").innerHTML = Math.round(comportement.vid.currentTime);
    document.getElementById("curtimeMin").innerHTML = Math.floor(comportement.vid.currentTime / 60);
    document.getElementById("curtimeSec").innerHTML = Math.round(comportement.vid.currentTime % 60);
  }

  /**
   * Bouge le slider le long de la timeline en fonction de x ou x est la position où on veut le bouger 
   * @method moveSlider
   * @param int x
   * @return 
   */
  timeline.moveSlider = function(x){
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
        // A chaque plan, on trace un trait en vert au bon endroit sur la timeline
        tmp = comportement.segm[j] / comportement.vid.duration * timeline.longueur;
        timeline.drawLine(tmp, timeline.hauteur/2, tmp, timeline.hauteur, 'green', 1);
      }
    }else{ // Sinon, on efface en dessinant un trait blanc par dessus
      timeline.drawLine(0, timeline.hauteur*3/4, timeline.longueur, timeline.hauteur*3/4, 'white', timeline.hauteur/2);
    }
  }


  /**
   * Insere un trait orange representant une annotation
   * @method insertSegmAnnot
   * @param int timeDebut : en secondes
   * @param int timeEnd : en secondes 
   * @return 
   */
  timeline.insertSegmAnnot = function(timeDebut, timeEnd){
    var pourcentageDebut =  timeDebut / comportement.vid.duration;
    var pourcentageFin =  timeEnd / comportement.vid.duration;
    timeline.drawLine(pourcentageDebut * timeline.longueur, 10, pourcentageFin * timeline.longueur, 10, 'orange', timeline.hauteur / 2);
  }

  /**
   * Parcour les annotations pour toutes les inserer
   * @method insertAnnot
   * @return 
   */
  timeline.insertAnnot = function(){
    console.log(annotations.annots.length, annotations.annots);
    for(var i = 0; i < annotations.annots.length; i++){
      timeline.insertSegmAnnot(annotations.annots[i].fragment.start, annotations.annots[i].fragment.end);
    }
  }

  return timeline; 
}();