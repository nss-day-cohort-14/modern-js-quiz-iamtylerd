// var robot = require("./constructor.js")



describe("The specification for basic app", function() {
	  it("should have a Drone function", function() {
	    expect(Drone).toBeDefined();
  })});

describe("The specification for basic app", function() {
	  it("should have a fastCycle function", function() {
	  	let cycle = new Cycle();
	  	let testCycle = new fastCycle();
	  	let slow = new slowCycle();

	  	console.log(testCycle)
	    expect(testCycle).toBeDefined();
		expect(testCycle.attack).toBeGreaterThan(9);
		expect(slow.attack).toBeGreaterThan(19);
		expect(cycle.health).toBeGreaterThan(9);
  });
});


describe("The specification for basic app", function() {
	  it("should have a quadDrone function", function() {
	  	let drone = new Drone();
	  	let quad = new quadDrone();
	  	let tri = new triDrone();

	  	console.log(quad)
	    expect(quad).toBeDefined();
		expect(quad.attack).toBeGreaterThan(9);
		expect(tri.attack).toBeGreaterThan(19);
		expect(drone.health).toBeGreaterThan(9);
  });
});


describe("The specification for basic app", function() {
	  it("should have a speedATV function", function() {
	  	let atv = new ATV();
	  	let speed = new speedATV();
	  	let power = new powerATV();

	    expect(speed).toBeDefined();
		expect(speed.attack).toBeGreaterThan(9);
		expect(power.attack).toBeGreaterThan(19);
		expect(atv.health).toBeGreaterThan(9);
  });
});




