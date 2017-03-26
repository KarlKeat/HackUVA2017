function $(id){
	return document.getElementById(id);
}
var canvas = $('can');
var context = canvas.getContext('2d');
function drawCircle(x,y,radius){
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	var color = ''+ Math.random().toString(16).substring(2,8);
	changeColor('#' +color);
	context.fill();
	changeColor('#000000');
	context.stroke();
}
CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation){
   var numRadsPerLetter = 2*Math.PI / text.length/2;
   this.save();
   this.translate(x,y);
   this.rotate(startRotation);

   for(var i=0;i<text.length;i++){
      this.save();
      this.rotate(i*numRadsPerLetter);

      this.fillText(text[i],0,-radius);
      this.restore();
   }
   this.restore();
}
function startCanvas(){
canvas.width = document.body.clientWidth-50;
canvas.height = document.body.clientHeight- 100;
}
function changeColor(color){
context.fillStyle = color;
}
startCanvas();
drawCircle(300,300,200);
context.font = "bold 20px Serif";
context.fillTextCircle("HERES SOME SHITTY CIRCLE TEXT U HAPPY ",300,300,180,-Math.PI / 2);
changeColor('#000000');
context.beginPath();
context.moveTo(300,300);
context.lineTo(300,100);
context.stroke();
context.closePath();
