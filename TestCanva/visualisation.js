visualisation = function(){

	function visualisation (){
        
    }
    
  visualisation.afficheAnnot = function(){
  var i = 0;
	var frame = Math.round(comportement.vid.currentTime * 25);
	for(var j = 0; j < annotations.annots.length; j++){
		var annot = annotations.annots[j];
		if((annot.fragment.start < frame) && (annot.fragment.end > frame)){
			if(document.getElementById(annotations.annots[j]._id) == null){
				visualisation.insertCircles(annot._id, annot.data.label);
			}
      var gCircle = document.getElementById(annotations.annots[j]._id).childNodes[1];
      var gText = document.getElementById(annotations.annots[j]._id).firstChild;
      var positions = annot.data.position;

      //Recherche pas dichotomie de l'interval
      var debut = 0; 
      var fin = positions.length - 1;
      var mid = Math.round(fin / 2);
      var dx = 0;
      var dy = 0;
      while(fin-debut > 1){
        if(positions[mid].t > frame){
          fin = mid; 
          mid = Math.round((fin-debut) / 2 + debut);
        }else if(positions[mid].t < frame){
          debut = mid; 
          mid = Math.round((fin-debut) / 2 + debut) ;
        }else{
          dx = positions[mid].x / 100 * comportement.vid.width;
          dy = positions[mid].y * comportement.vid.height / 100;
          break;
        }
      }
      if(fin-debut == 1){
        // extrapolation de la position :
        var dt = (positions[fin].t - positions[debut].t) * (frame - positions[debut].t)/100;  					
        dx = (positions[fin].x + (positions[debut].x - positions[fin].x) * dt) / 100 * comportement.vid.width;
        dy = (positions[fin].y + (positions[debut].y - positions[fin].y) * dt) / 100 * comportement.vid.height;
      }
      gCircle.setAttributeNS(null, "cx", dx);
      gCircle.setAttributeNS(null, "cy", dy);
      gText.setAttributeNS(null, "x", dx - 30);
      gText.setAttributeNS(null, "y", dy - 0);

      gCircle.style.display = "";
      gText.style.display = "";
      }else if((frame > annot.fragment.end || frame < annot.fragment.start) && document.getElementById(annotations.annots[j]._id) != null) {
      var gCircle = document.getElementById(annotations.annots[j]._id).firstChild;
      var gText = document.getElementById(annotations.annots[j]._id).childNodes[1];
      gCircle.style.display = "None";
      gText.style.display = "None";
      }			
    }
  }
    
  visualisation.insertCircles = function(id, label){

    var c1 = interface.svg.circle(50, 50, 50).attr(
      {
      stroke: "red", 
      strokeWidth: 5,
      fill : "rgba(0, 0, 0, 0)",
      'display' : 'None'
      }
    );

    var t = interface.svg.text(30, 30, label).attr(
      {
        stroke: 'white', 
        'display' : 'None', 
        'font-size': 18, 
        fill : 'white'
      }
    );
  	
  	var g = interface.svg.g(t, c1).attr(
      { 
        'id': id,
        'font-size': 14
      }
    );
	}
    
  return visualisation;
}();