"use strict"

let Constructor = require("./constructor.js")

function quadDrone () {
	this.speed = 1;
	this.attack = Math.floor(Math.random() * (20 - 10) + 10);
	this.ability = "Slicing";
}

function triDrone () {
	this.speed = 0;
	this.attack = Math.floor(Math.random() * (30 - 20) + 20);
	this.ability = "Chopping";
}

quadDrone.prototype = new Constructor.Drone ();
triDrone.prototype = new Constructor.Drone ();

module.exports = {quadDrone, triDrone}