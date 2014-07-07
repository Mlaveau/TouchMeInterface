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
  				var debut = 0 ; 
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
				
  				/*for(var k = 0; k < positions.length-1; k++){
  					// VOIR EXTRAPOLER PLUS TARD AUSSI
  					if(frame > positions[k].t && frame < positions[k+1].t){
  						var dx = positions[k].x/100*comportement.vid.width;
  						var dy = positions[k].y*comportement.vid.height/100;
						gCircle.setAttributeNS(null, "cx", dx);
						gCircle.setAttributeNS(null, "cy", dy);
						gText.setAttributeNS(null, "x", dx-20);
						gText.setAttributeNS(null, "y", dy-10);
  					}
  				}*/
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

		var c1 = interface.svg.circle(50, 50, 50).attr({
			stroke: "red", 
			strokeWidth: 5,
			fill : "rgba(0, 0, 0, 0)",
			'display' : 'None'
		});
		var t = interface.svg.text(30, 30, label).attr({
			stroke: 'white', 
			'display' : 'None', 
			'font-size': 18, 
			fill : 'white'
		});
	
		var g = interface.svg.g(t, c1).attr({ 
			'id': id,
			'font-size': 14
		});
	
  		/*// Namespace de svg
  	    var svgNS="http://www.w3.org/2000/svg";
  	    // Creation des cercles et des textes dans des g avec l'id de l'annot, pour chaque annotation  :
        var circle = document.createElementNS(svgNS,"circle");
		circle.setAttributeNS(null,"cx",50);
		circle.setAttributeNS(null,"cy",50);
		circle.setAttributeNS(null,"r",50);
		circle.setAttributeNS(null,"stroke","red");
		circle.setAttributeNS(null,"stroke-width",5);
		circle.setAttributeNS(null,"fill", "rgba(0, 0, 0, 0)");
		circle.style.display = "None";
		var texte = document.createElementNS(svgNS,"text");
		texte.setAttributeNS(null, "fill", "white");
		texte.setAttributeNS(null, "x", 30);
		texte.setAttributeNS(null, "y", 30);
		texte.innerHTML = label;
		texte.style.display = "None";
		var g = document.createElementNS(svgNS,"g");
		g.setAttributeNS(null, "id", id);
		g.appendChild(circle);
		g.appendChild(texte);
		document.getElementById("affichAnnot").appendChild(g);   */            
    }
    
    return visualisation;
}();