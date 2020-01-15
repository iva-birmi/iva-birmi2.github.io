let img = new Image();
img.src="ball.png";
let dragElems = document.querySelectorAll(".dragElem");
let dropElem = document.querySelector("#dropElem");
dragElems.forEach(function(elem, index)
{
  elem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', index);
    event.dataTransfer.setDataImage(img,10,10);
  })
})
dropElem.addEventListener('drop', function(event)
{
  let item = dragElems[event.dataTransfer.getData('text')];
  this.appendChild(item);
})
dropElem.addEventListener('dragover', function(event)
{
  event.preventDefault();
})