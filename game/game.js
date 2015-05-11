var draw = require('jsi-gamelib').map;
var prompt = require('prompt')
var map = require('./map.json');
var readline = require('readline')

var game = draw(map);

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
/*
prompt.start();

prompt.get(['name'],function(err,result){
	console.log('Your name is : ' + result.name)
})

map.rooms.[]

*/
//console.log(map.rooms)


var currentRoom = map.rooms[0];

console.log("You are in room " + currentRoom.name);

function whatsAroundYou(currentRoom){
	var numMoves;
	var directions = []
	for(var x = 0; x < map.rooms.length; x++){
		if(currentRoom.name === map.rooms[x].north){
			directions.push('south')
			numMoves++;
		}
		if(currentRoom.name === map.rooms[x].south){
			directions.push('north')
			numMoves++;
		}
		if(currentRoom.name === map.rooms[x].west){
			directions.push('east')
			numMoves++;
		}
		if(currentRoom.name === map.rooms[x].east){
			directions.push('west')
			numMoves++;
		}
	}
	if(directions.length === 0){
	console.log("You have no moves. You are DEAD")
	rl.close()
	}else{
		console.log("You can move " + directions.toString() + '.')
	}
};

function move(currentRoom,move){
	
	currentRoom = currentRoom.move
}








whatsAroundYou(currentRoom);
move('south')
console.log(currentRoom.name)
rl.close();
