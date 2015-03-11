var ctx = document.getElementById("c").getContext("2d");
var back = new Image();
var rightDown; var leftDown; var zDown;
var action = "select";
var selectf = ['attack','defend', 'parry'];
var selected = 0;
back.src="https://cloud.githubusercontent.com/assets/7268773/6169905/2634dea6-b296-11e4-9db6-b0b7733d9bc6.png";
function onKeyDown(e) {
	if (e.keyCode == 68 || e.keyCode == 100) rightDown = true;
	else if (e.keyCode == 65 || e.keyCode == 97) leftDown = true;
	else if (e.keyCode == 90) zDown = true;
}
function onKeyUp(e) {
	if (e.keyCode == 68 || e.keyCode == 100) rightDown = false;
	else if (e.keyCode == 65 || e.keyCode == 97) leftDown = false;
	else if (e.keyCode == 90) zDown = false;
}
function Squirrel() {
	var hp = 10;
	var pow = 3;
}
function Astronaut() {
	var hp = 10;
	var pow = 2;
	
}
function clear() {
 	ctx.clearRect(0,0,600,600);
}
function background() {
	ctx.drawImage(back, 0, 0);
}
function draw() {
	clear();
  	background();
  	if(action == "select") {
  		if(rightDown == true) {
  			if(selected <= 2) {
  				selected++;	
  			}
  		}
  		else if(leftDown == true) {
  			if(selected > 0) {
  				selected--;	
  			}		
  		}
  		else if(zDown == true) {
  			action = selectf[selected];
  		}
  	} 
  	else if(action == "attack") {
  		
  		action = 'off-turn';
  	}
  	else if(action == "parry") {
  		
  		action = 'off-turn';
  	}
  	else if(action == "off-turn") {
  		
  		action = 'select';
  	} 
  	else if(action == "defend") {
  		
  		action = 'off-turn';
  	}
}
var i = setInterval(draw, 20)
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
