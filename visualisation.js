/* 
 * Gere l'affichage des annotations et leur mouvement, 
 * avec extrapolation de la position pour les frames dont on a pas de valeur.
 */

visualisation = function(){

	/**
	 * Constructeur
	 * @method visualisation
	 * @return 
	 */
	function visualisation (){
        
  }
    
  /**
   * Calcule la position du cercle et du text de toutes les annotations 
   * @method afficheAnnot
   * @return 
   */
  visualisation.afficheAnnot = function(){
    if(annotations.annots != undefined){
      var i = 0;
    	var frame = Math.round(comportement.vid.currentTime * 25);
    	for(var j = 0; j < annotations.annots.length; j++){
    		var annot = annotations.annots[j];
    		if((annot.fragment.start < frame) && (annot.fragment.end > frame)){
    			if(document.getElementById(annotations.annots[j]._id) == null){
    				visualisation.insertCircleText(annot._id, annot.data.label);
    			}
          // Recupere le cercle et le text
          var gCircle = document.getElementById(annotations.annots[j]._id+"Circle");
          var gText = document.getElementById(annotations.annots[j]._id+"Text");
          var positions = annot.data.position;

          //Recherche pas dichotomie de l'interval
          var debut = 0; 
          var fin = positions.length - 1;
          var mid = Math.round(fin / 2);
          var dx = 0;
          var dy = 0;
          while(fin-debut > 1){ // tant que l'on a pas trouve l'interval [x, y] ou z est dedans -> Dichotomie
            if(positions[mid].t > frame){ 
              fin = mid; 
              mid = Math.round((fin-debut) / 2 + debut);
            }else if(positions[mid].t < frame){
              debut = mid; 
              mid = Math.round((fin-debut) / 2 + debut) ;
            }else{ // Si par hasard on a un enregistrement pour cette frame la
              dx = positions[mid].x / 100 * comportement.vid.width;
              dy = positions[mid].y * comportement.vid.height / 100;
              break;
            }
          }
          if(fin-debut == 1){ // Si pas d'enregistrement pour la frame mais un interval 
            // extrapolation de la position :
            var dt = (positions[fin].t - positions[debut].t) * (frame - positions[debut].t)/100;  					
            dx = (positions[fin].x + (positions[debut].x - positions[fin].x) * dt) / 100 * comportement.vid.width;
            dy = (positions[fin].y + (positions[debut].y - positions[fin].y) * dt) / 100 * comportement.vid.height;
          }
          // Change la position et affiche le texte et le cercle (Impossible de déplace le g directement.)
          gCircle.setAttributeNS(null, "cx", dx);
          gCircle.setAttributeNS(null, "cy", dy);
          gText.setAttributeNS(null, "x", dx - 30); // Petit decalage de 30 pour que le nom soit au milieu du cercle
          gText.setAttributeNS(null, "y", dy);
          document.getElementById(annotations.annots[j]._id).style.display = "";
        }else if((frame > annot.fragment.end || frame < annot.fragment.start) && document.getElementById(annotations.annots[j]._id) != null) {
          // Fais disparaitre le cercle si on est en dehors du temps couvert par le fragment
          document.getElementById(annotations.annots[j]._id).remove();
        }			
      }
    }
  }
    
  /**
   * Ajoute au svg le cercle de l'annotation dont l'id et le label sont passes en parametre 
   * @method insertCircleText
   * @param {} id
   * @param {} label
   * @return 
   */
  visualisation.insertCircleText = function(id, label){
    // Creations grace a Snap
    // Le cercle dans le svg avec tous ses attributs
   var c1 = visualisation.insertCircle(id + "Circle", "red");
    // Le texte avec tous ses attributs
    var t = interface.svg.text(30, 30, label).attr(
      {
        stroke: 'white', 
        'font-size': 18,
        fill : 'white', 
        'id' : id + "Text"
      }
    );
  	
    // Le g, qui regroupe le texte et le cercle
  	interface.svg.g(t, c1).attr(
      { 
        'id': id,
        'display' : 'None', 
      }
    );
	}

  /**
   * Cree le cercle de l'annotation de la couleur demande 
   * @method insertCircle
   * @param {} id
   * @param {} couleur
   * @return c1
   */
  visualisation.insertCircle = function(id, couleur){
    var c1 = interface.svg.circle(50, 50, 50).attr(
      {
        stroke: couleur, 
        strokeWidth: 5,
        fill : "rgba(0, 0, 0, 0)",
        'id' : id
      }
    );
    return c1;
  }

  return visualisation;
}();