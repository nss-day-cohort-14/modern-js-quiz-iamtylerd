"use strict"

let Constructor = require("./constructor.js")

function fastCycle () {
	this.speed = 1;
	this.attack = Math.floor(Math.random() * (20 - 10) + 10);
	this.ability = "Running Over";
}

function slowCycle () {
	this.speed = 0;
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.ability = "Wheeling on";
}

fastCycle.prototype = new Constructor.Cycle ();
slowCycle.prototype = new Constructor.Cycle ();

module.exports = {fastCycle, slowCycle}