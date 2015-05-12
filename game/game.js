var draw = require('jsi-gamelib').map;
var newMap = require('jsi-gamelib').map.drawMap;
var prompt = require('prompt')
var map = require('./map.json');
var map2 = require('./map.json');
var readline = require('readline')

var game = draw(map);

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var currentRoom = map.rooms[0];

function whatsAroundYou(currentRoom){
	var numMoves;
	var directions = [];
	var compass = ['north','south','east','west']
		compass.forEach(function (way){
			if(null !== currentRoom[way]){
				directions.push(way);
				numMoves++;
			}
		});
	console.log("You can move " + directions.toString() + '.')
}	

function move(move){
	for(var x = 0; x < map.rooms.length; x++){
		if(map.rooms[x].name === currentRoom[move]){
			currentRoom = map.rooms[x]
			console.log("You are now in room " + currentRoom.name + ".")
			break;
		}
	}
}

function play(){
		//prints new map
		newMap(map2);
		//what ways can you move
		whatsAroundYou(currentRoom)
		if(currentRoom.treasure !== false){
			console.log("You've found the treasure!")
			rl.close()
		} else{
			rl.question("You are in room " + currentRoom.name + ".\n" +
			"What direction do you want to go?", function(direction){
				console.log("You are moving " + direction + ".");
				move(direction)
				currentRoom.visited = true
				play()
			})
		}	
}

play();
