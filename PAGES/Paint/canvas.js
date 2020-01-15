let canva= document.getElementById("canva");
let ctx= canva.getContext('2d');
let ctx1= canva.getContext('2d');
let ctx2= canva.getContext('2d');
let ctx3= canva.getContext('2d');

//rect
/*ctx.fillStyle="red";
ctx.fillRect(25,25,100,100);
ctx.clearRect(45,45,60,60);
ctx.strokeStyle="green";
ctx.strokeRect(50,50,50,50);*/

//практика
/*ctx.fillRect(25,25,100,100);
ctx.clearRect(30,30,45,45);
ctx1.fillStyle="green";
ctx1.fillRect(130,25,100,100);
ctx2.fillStyle="green";
ctx2.fillRect(240,25,50,50);
ctx3.fillStyle="red";
ctx3.fillRect(240,85,50,50);*/

//line
/*ctx.fillStyle="green";
ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(100,100);
ctx.lineTo(100,25);
ctx.fill();
ctx1.fillStyle="white";
ctx1.beginPath();
ctx1.moveTo(70,40);
ctx1.lineTo(110,110);
ctx1.lineTo(90,15);
ctx1.fill();*/
//crug
/*ctx.beginPath();
ctx.arc(75,75,50,0,Math.PI*2,true);
ctx.stroke();
ctx.moveTo(110,75);
ctx.arc(75,75,35,0,Math.PI,false);
ctx.stroke();
ctx.moveTo(65,65);
ctx.arc(75,75,5,0,Math.PI,false);
ctx.stroke();
ctx.moveTo(55,65);
ctx.arc(45,65,10,0,Math.PI*2,false);
ctx.stroke();
ctx.moveTo(115,65);
ctx.arc(105,65,10,0,Math.PI*2,false);
ctx.stroke();

ctx.moveTo(225,75);
ctx.arc(175,75,50,0,Math.PI*2,true);
ctx.moveTo(210,110);
ctx.arc(175,110,35,0,Math.PI,true);
ctx.stroke();

ctx.moveTo(155,65);
ctx.arc(145,65,10,0,Math.PI*2,false);
ctx.stroke();
ctx.moveTo(215,65);
ctx.arc(205,65,10,0,Math.PI*2,false);
ctx.stroke();*/

//кривые без е
ctx.beginPath();
ctx.moveTo(75,40);
ctx.bezierCurveTo(75,37,70,25,50,25);
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
ctx.bezierCurveTo(20,80,40,102,75,120);
ctx.bezierCurveTo(110,102,130,80,130,62.5);
ctx.bezierCurveTo(130,62.5,130,25,100,25);
ctx.bezierCurveTo(85,25,75,37,75,40);
ctx.fillStyle="red";
ctx.fill();

