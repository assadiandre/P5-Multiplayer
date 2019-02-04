// Background Class
function Background() { 

	this.display = function() {
	 var scaleFactor = 20;
	 var rowCount = windowHeight / scaleFactor;
	 var columnCount = windowWidth / scaleFactor; 
	 stroke(230);
	 for (var i = 0; i < rowCount; i++) {
	 	line(0, (scaleFactor * i), windowWidth, (scaleFactor * i));
	 }
	  for (var i = 0; i < columnCount; i++) {
	 	line((scaleFactor * i), 0 , (scaleFactor * i), windowHeight);
	 }
	}

}

