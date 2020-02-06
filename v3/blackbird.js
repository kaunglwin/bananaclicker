

function initMyCanvas() {
	// fetch the body id
	var myBodyId = document.getElementById("myBody")	

	// Create onLoad attribue
	var myAttribute = document.createAttribute("onLoad");       
	myAttribute.value = "myBlackbirdCode()";           
	myBodyId.setAttributeNode(myAttribute);                          

	// Create run event onclick()
	var myAttribute = document.createAttribute("onClick");       
	myAttribute.value = "myPageClick()";           
	myBodyId.setAttributeNode(myAttribute);                          


	// create canvas
	var myElement = document.createElement("canvas");             
	var myAttribute = document.createAttribute("id");       
	myAttribute.value = "myCanvas";           
	myElement.setAttributeNode(myAttribute);                          
	
	// Create attributes, set the value, connect the set
	var myAttribute = document.createAttribute("height");       
	myAttribute.value = "600";           
	myElement.setAttributeNode(myAttribute);                          
	// Create an  attribute, set the value, connect the set
	var myAttribute = document.createAttribute("width");       
	myAttribute.value = "900";           
	myElement.setAttributeNode(myAttribute);                          

	// push cavas to body
	myBodyId.appendChild(myElement);                     
	console.log("empty canvas element appended to body");
}


function rectangleXY(x,y,w,h) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+w,y);  //p2
	ctx.lineTo(x+w,y +h);  //p3
	ctx.lineTo(x   ,y +h);  //p4
	ctx.fillStyle = 'red';
	ctx.fill();
}



function rectangleXYWhite(x,y,w,h) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+w,y);  //p2
	ctx.lineTo(x+w,y +h);  //p3
	ctx.lineTo(x   ,y +h);  //p4
	ctx.fillStyle = 'white';
	ctx.fill();
}





function rectangle(p1,p2,p3,p4) {
	if(typeof p4 == "undefined") {
		rectangleXY(p1.x,p1.y,p2,p3);
		console.log("missing 4th argument");
	} else {
		rectangleXY(p1,p2,p3,p4);

	}
	// use typeof code to check if options object exists
	// https://stackoverflow.com/questions/456177/function-overloading-in-javascript-best-practices
}


function rectangleWhite(p1,p2,p3,p4) {
	if(typeof p4 == "undefined") {
		rectangleXYWhite(p1.x,p1.y,p2,p3);
		console.log("missing 4th argument");
	} else {
		rectangleXYWhite(p1,p2,p3,p4);

	}
	// use typeof code to check if options object exists
	// https://stackoverflow.com/questions/456177/function-overloading-in-javascript-best-practices
}




function image(p1,p2,p3) {
	var img = new Image();   // Create new img element
	img.addEventListener('load', 
		function() {
  		// execute drawImage statements here
			if(typeof p3 == "undefined") {
				img.src = 'myImage.png'; // Set source path
			
				drawImage(p2,p1.x,p1.y);
				console.log("not x,y for image call");
			} else {
				drawImage(p3,p1,p2);
			}
		}, false);

// see 
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
}


initMyCanvas();
// setup glocal variable CTX and canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
console.log("canvas 2d context built");


/*
var canvasOffset=$("#myCanvas").offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
*/



// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
// http://jsfiddle.net/m1erickson/WB7Zu/


function handleMouseDown(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    // Put your mousedown stuff here
    myMouse.x = mouseX;
    myMouse.y = mouseY;

}

function handleMouseUp(e) {
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);
    // Put your mouseup stuff here
    myMouse.x = mouseX;
    myMouse.y = mouseY;
}



// $("#myCanvas").mousedown(function (e) {
//     handleMouseDown(e);
// });

// $("#myCanvas").mouseup(function (e) {
//     handleMouseUp(e);
// });


   
// start of OOP code ====================

function Point(startX, startY) {
   // create a point object 
   this.x = startX;
   this.y = startY;
   this.temp = "hello world";
}

function background(color) {
	w = HTMLCanvasElement.width;
	h = HTMLCanvasElement.height;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+w,y);  //p2
	ctx.lineTo(x+w,y +h);  //p3
	ctx.lineTo(x   ,y +h);  //p4
	ctx.fill();
}

function text(p1,p2,p3){
	// arg1 is x
	// arg2 is y
	// arg3 string like "hellow word"
	var ctx = document.getElementById('myCanvas').getContext('2d');
	ctx.font = '16px serif';
 	ctx.fillText(p3, p1, p2);
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}