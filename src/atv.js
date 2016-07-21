"use strict"

let Constructor = require("./constructor.js")

function speedATV () {
	this.speed = 1;
	this.attack = Math.floor(Math.random() * (20 - 10) + 10);
	this.ability = "Jumping on";
}

function powerATV () {
	this.speed = 0;
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.ability = "Ramming into";
}

speedATV.prototype = new Constructor.ATV ();
powerATV.prototype = new Constructor.ATV ();

module.exports = {speedATV, powerATV}