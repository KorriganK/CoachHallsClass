var ctx = document.getElementById("c").getContext("2d");
var back = new Image();
var rightDown; var leftDown; var zDown;
var action = "select";
var selectf = ['attack','defend', 'parry'];
var selected = 0;
back.src="imgs/back.png";
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
function Astronaut(type) {
	this.type : type;
	this.img = new Image();
	if(type === "reg") {
		this.hp : 10;
		this.pow: 2;
		this.img.src = "imgs/astro.png";
	}
	else if(type === "hevy") {
		this.hp : 14;
		this.pow: 3;
		this.img.src = "imgs/jugg.png";
	}
	else if(type === "charl") {
		this.hp : 8;
		this.pow: 4;
		this.img.src = "imgs/charlatan.png";
	}
	else if(type === "med") {
		this.hp : 18;
		this.pow: 0;
		this.img.src = "imgs/medic.png";
	}
	
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
  	switch(action) {
  		case "select":
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
  			break;
  		case "attack":
  		
  			action = 'off-turn';
  			break;
  		case "parry":
  		
  			action = 'off-turn';
  			break;
  		case "off-turn":
  		
  			action = 'select';
  			break;
  		case "defend":
  			
  			action = 'off-turn';
  			break;
  	}
}
var i = setInterval(draw, 20)
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
