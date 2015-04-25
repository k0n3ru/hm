var map;

function init(){

  var slideout = new Slideout({
	    'panel': document.getElementById('map'),
	    'menu': document.getElementById('menu'),
	    'padding': 256,
	    'tolerance': 70,
	    'edgeWidth': 50
	  });
	  // Toggle button
	  document.querySelector('.slideout-toggle').addEventListener('click', function() {
	    slideout.toggle();
	  });
  
  map = new ol.Map({
        target:'map',
        renderer:'canvas',
    	view: new ol.View({
    		projection: 'EPSG:900913',
    		center:[0,0],
    		zoom:5
    	})
    });
    
    var newLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    map.addLayer(newLayer);
}