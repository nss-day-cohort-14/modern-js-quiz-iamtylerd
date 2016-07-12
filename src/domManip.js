"use strict"

let Constructor = require("./constructor.js")
let ATV = require("./atv.js")
let Cycle = require("./cycle.js")
let Drone = require("./drone.js")
let FL = require("./fightLogic.js")
let $ = require("jquery")

let leftName;
let rightName;
let leftRobot;
let rightRobot;

function robotSelect () {

$("#attack").click(function() {
	leftName = $("#leftNameInput").val();
	rightName = $("#rightNameInput").val();
	leftRobot = $("#leftSelect").val();
	rightRobot = $("#rightSelect").val();


	function leftSelect() {
	if (leftRobot === "powerATV") {
		leftRobot = new ATV.powerATV();
		leftRobot.name = leftName;
	} else if (leftRobot === "speedATV") {
		leftRobot = new ATV.speedATV();
		leftRobot.name = leftName;
	} else if (leftRobot === "fastCycle") {
		leftRobot = new Cycle.fastCycle();
		leftRobot.name = leftName;
	} else if (leftRobot === "slowCycle") {
		leftRobot = new Cycle.slowCycle();
		leftRobot.name = leftName;
	} else if (leftRobot === "quadDrone") {
		leftRobot = new Drone.quadDrone();
		leftRobot.name = leftName;
	} else if(leftRobot === "triDrone") {
		leftRobot = new Drone.triDrone();
		leftRobot.name = leftName;
	};
	console.log(leftRobot.name);
	console.log(leftRobot.type);
	};

	function rightSelect() {
	if (rightRobot === "powerATV") {
		rightRobot = new ATV.powerATV();
		rightRobot.name = rightName;
	} else if (rightRobot === "speedATV") {
		rightRobot = new ATV.speedATV();
		rightRobot.name = rightName;
	} else if (rightRobot === "fastCycle") {
		rightRobot = new Cycle.fastCycle();
		rightRobot.name = rightName;
	} else if (rightRobot === "slowCycle") {
		rightRobot = new Cycle.slowCycle();
		rightRobot.name = rightName;
	} else if (rightRobot === "quadDrone") {
		rightRobot = new Drone.quadDrone();
		rightRobot.name = rightName;
	} else if(rightRobot === "triDrone") {
		rightRobot = new Drone.triDrone();
		rightRobot.name = rightName;
	};
	console.log(rightRobot.name);
	console.log(rightRobot.type);
	};
	leftSelect()
	rightSelect()
	FL.attackLogic(leftRobot, rightRobot);

});
}


module.exports = {robotSelect}









