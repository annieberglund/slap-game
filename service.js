function GameService() {
//PRIVATE
console.log("Where are we?");
var slapService = this;	
var mike = new Player("Mike Tyson");

    function Player(name) {
	this.name = name;
	this.health = 100;
	this.hits = 0;
	this.items = [];
}



function Items(asset, modifier, description) {
	this.asset = asset;
	this.modifier = modifier;
	this.description = description;
}

var items = {
	dodge: new Items("Dodge", 0.3, "Feel the power of my sword."),
	block: new Items("Block", 0.1, "Feel the power of my sword."),
	powerGlove: new Items("Power Glove", 0.5, "I love the Power Glove. It's so bad!")
}
//PUBLIC
this.getMike = function getMike() {
	var mikeCopy = JSON.parse(JSON.stringify(mike))
	return mikeCopy
}

function addMods() {
	var playerMods = mike.items;
	var modTotal = 1;
	for(var i = 0; i < playerMods.length; i++) {
		modTotal += playerMods[i].modifier;
	} return modTotal;
}

slapService.attack = function attack(attackDamage) {
	console.log("Damage from service");
	mike.health -= attackDamage * addMods();
	mike.hits += 1;

}

slapService.newAsset = function newAsset(newItem) {
	mike.items.push(items[newItem]);
}

}