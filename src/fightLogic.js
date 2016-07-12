"use strict"

let Constructor = require("./constructor.js")
let ATV = require("./atv.js")
let Cycle = require("./cycle.js")
let Drone = require("./drone.js")
let $ = require("jquery")


function attackLogic (left, right) {
	console.log(left, right)

	if (left.health <= 0) {
		$(".resultContainer").html(`<h1>${right.name} is the winner by ${left.ability} ${left.name}</h1>`)
	} else if (right.health <= 0) {
		$(".resultContainer").html(`<h1>${left.name} is the winner by ${right.ability} ${right.name}</h1>`)
	} else {
		left.health = left.health - right.attack;	
		right.health = right.health - left.attack;
		attackLogic(left, right);
	}
	// do {
	// 	console.log(left.health, right.health)
	// } while (left.health >= 0 && right.health >=0);
}

module.exports = {attackLogic}