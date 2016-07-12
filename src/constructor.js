"use strict"

function Robot () {
	var health;
	var attack;
}

function Drone () {
 	this.health = Math.floor(Math.random() * (50 - 10) + 10);
 	this.type = "Drone";
}

function ATV () {
	this.health = Math.floor(Math.random() * (30 - 20) + 20);
	this.type = "ATV";
}

function Cycle () {
	this.health = Math.floor(Math.random() * (100 - 10) + 10);
	this.type = "Cycle";
}


Drone.prototype = new Robot ();
ATV.prototype = new Robot ();
Cycle.prototype = new Robot ();

module.exports = {Robot, Drone, ATV, Cycle}