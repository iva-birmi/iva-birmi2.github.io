let test=document.getElementById('test');
test.addEventListener("dragstart",function(){
	this.style.borderColor="red";
});
test.addEventListener("dragend",function(){
	this.style.borderColor="blue";
});
test.addEventListener("drag",function(){
	document.body.innerHTML+="!<br>";
});
let ot=document.getElementById('test1');
let pr=document.getElementById('testpr');
pr.addEventListener("dragover",function(e){
	e.preventDefault();
	this.style.borderStyle="dotted";
});
pr.addEventListener("drop",function(e){
	this.style.borderColor="red";
});
pr.addEventListener("dragenter",function(e){
	this.innerHTML+="!";
});
pr.addEventListener("dragleave",function(e){
	this.innerHTML=" ";
});
let ofX;
let ofY;
ot.addEventListener('dragstart',function(e){
	ot.style.position="absolute";
	ofX=e.offsetX;
	ofY=e.offsetY;
});
ot.addEventListener('dragend',function(e){
	ot.style.top=(e.pageY-ofY)+"px";
	ot.style.left=(e.pageX-ofX)+"px";
});
