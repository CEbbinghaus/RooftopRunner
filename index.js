var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var KeyMap = {};
var keyEsc = 27;
var keySpace = 32;

var Buildings = [];
var House = [];
var Mouse;

var Scroll = 0;
var j;

var gameState = {
	Menu: 0,
	Game: 1,
	Paused: 2,
	End: 3
};
var currentState = gameState.Game;

var jump = 0;

var Player = document.createElement("img");
Player.src = "Sprites/Player.png";

x = y = 5;
velx = vely = 0;
spd = 0.5
spd2 = 5
gh = 0;
v1 = false;
v2 = false;
v3 = false;

// var player = new Player()
// player.Initialise()


window.addEventListener("keydown", function(evt) { KeyMap[evt.keyCode] = true; }, false);
window.addEventListener("keyup", function(evt) { KeyMap[evt.keyCode] = false; }, false);
window.addEventListener("mousedown", function(evt) { Mouse = true; }, false);
window.addEventListener("mouseup", function(evt) { Mouse = false; }, false);
window.addEventListener("load", onLoad(), false);
//window.addEventListener("mouseup", function(evt){ Mouse = false;}, false);

function onLoad() {
	for(i = 0; i <= 3; i++) {
		var tmp = document.createElement("img");
		tmp.src = "Sprites/House" + i + ".png";
		House.push(tmp)
	};
	Buildings.push([House[0], 0, canvas.height - 400])
};

function R(t, o) {
	if(o == null) {
		o = 0;
	};
	return Math.ceil(Math.random() * t + o);
};

window.setInterval(function() {
	switch(currentState) {
		case 0:
			context.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 1:
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(Player, x, y);
			for(i = 0; i < Buildings.length; i++) {
				context.drawImage(Buildings[i][0], Buildings[i][1], Buildings[i][2]);
			};
			break;

		case 2:
			context.clearRect(0, 0, canvas.width, canvas.height);
			break;
		case 3:
			context.clearRect(0, 0, canvas.width, canvas.height)
			context.drawImage(Player, Scroll + x, y)
			for(i = 0; i < Buildings.length; i++) {
				context.drawImage(Buildings[i][0], Buildings[i][1], Buildings[i][2])
			};
			break
	}
}, 1000 * 1.0 / 60)

window.setInterval(function() {
	switch(currentState) {
		case 0:

			break
		case 1:
			for(i = 0; i < Buildings.length; i++) {
				Buildings[i][1] -= Scroll
			}
			test = false
			prevx = x
			gh = spd2 + -jump * 2
			x += gh
			spd2 += 0.0005
			if(x + Player.width / 2 > canvas.width / 2) {
				x -= Scroll
			}
			vely += spd
			y += vely + jump
			Scroll = x - canvas.width / 2
			if(Scroll < 0)
				Scroll = 0
			if(y > canvas.height - Player.height) {
				y = canvas.height - Player.height
			}
			length = 0;
			if(KeyMap[keySpace]) {
				if(v2) {
					v1 = true
				}
				if(v1) {
					v3 = true
					if(jump > -2.5) {
						jump -= 0.25;
						vely += jump;
						//spd2 -= jump;
					}
					else {
						if(jump <= -2.5) {
							jump = -2.5;
						};
					};
				};
			};
			if(!KeyMap[keySpace]) {
				jump = 0;
				if(v3) {
					v3 = false
					v1 = false
				}
			};

			for(i = 0; i < Buildings.length; i++) {
				if(Buildings[i][1] > x + Player.width && Buildings[i - 1][1] + Buildings[i - 1][0].width < x - 100) {
					if(y + Player.height > Buildings[i][2]) {
						currentState = gameState.End
					};
					break
				}
			};
			v2 = false
			for(i = 0; i < Buildings.length; i++) {
				if(Buildings[i][1] + Buildings[i][0].width < 0) {
					Buildings.splice(i, 1)
				};
				if(x > Buildings[i][1] - Player.width && x < Buildings[i][1] + Buildings[i][0].width && y + Player.height > Buildings[i][2]) {
					vely = 0;
					v2 = true
					y = Buildings[i][2] - Player.height;
				}
				else {
					// v2 = false
				};
			};

			if(Buildings[Buildings.length - 1][1] + Buildings[Buildings.length - 1][0].width < canvas.width) {
				r = R(3)
				Buildings.push([House[r], Buildings[Buildings.length - 1][1] + Buildings[Buildings.length - 1][0].width + R(200, 100), canvas.height - House[r].height])
			};
			break;

		case 2:
			break

		case 3:
			if(!test) {
				x += 3
			}
			vely += spd
			y += vely
			if(y > canvas.height + 50) {
				currentState = gameState.Menu
			}
			for(i = 0; i < Buildings.length; i++) {
				if(x + Player.width - 4 > Buildings[i][1] && x < Buildings[i][1] + Buildings[i][0].width && y + Player.height > Buildings[i][2]) {
					test = true
				};
			}
			break
	}
}, 1000 * 1.0 / 100)





