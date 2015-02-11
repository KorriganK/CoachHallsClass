var ctx = document.getElementById("c").getContext("2d"); 
function onKeyDown(e) {
	if (e.keyCode == 68 || e.keyCode == 100) rightDown = true;
	else if (e.keyCode == 65 || e.keyCode == 97) leftDown = true;
	else if (e.keyCode == 119 || e.keyCode == 87) upDown = true;
	else if (e.keyCode == 115 || e.keyCode == 83) downDown = true;
}
function onKeyUp(e) {
	if (e.keyCode == 68 || e.keyCode == 100) rightDown = false;
	else if (e.keyCode == 65 || e.keyCode == 97) leftDown = false;
	else if (e.keyCode == 87 || e.keyCode == 119) upDown = false;
	else if (e.keyCode == 115 || e.keyCode == 83) downDown = false;
}
function clear() {
  ctx.clearRect(0,0,600,600);
}
function draw() {
  clear();
}
var i = setInterval(draw, 20)
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
