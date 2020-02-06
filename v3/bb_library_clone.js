// function buildCanvas() {
	// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	alert("empty canvas built");
//}

function line(x,y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x+15,y);  //p2
	ctx.lineTo(x+15,y +150);  //p3
	ctx.lineTo(x   ,y +150);  //p4
	ctx.fill();
}

function myFunctionMain() {
	console.log("function started...initialize canvas");	
	line(50,50);
	console.log("function done");	
}
