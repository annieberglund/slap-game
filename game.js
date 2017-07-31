var health = 100;
var person = "Boxer";
var hits= 0;
var damageTotal = 0; 
var playerItems = 0;

function Phh(health1, person1, hits1) {
	this.person = person;
	this.health = health;
	this.hits = hits;
	this.damageTotal = 0;
	this.items = [];
}
var player = {
	name: "Mike Tyson",
	health: 100,
	hits: 0,
	damageTotal: 0,
	items:[]
	
}
/*var players = {
	player1: new Phh("Rocky", 100, 0),
	player2: new Phh("Rocky", 100, 0),
	player3: new Phh("Rocky", 100, 0),
}
*/


//SECTION FOR SPECIAL ADDING SPECIAL ITEMS//

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

function newAsset(newItem) {
	player.items.push(items[newItem]);
	console.log(player.items);
}

function addMods() {
	var playerMods = player.items;
	var modTotal = 0;
	for(var i = 0; i < playerMods.length; i++) {
		modTotal += playerMods[i].modifier;
	} return modTotal;
}
///BUTTONS AND SPAN UDATE VALUES
function attack(attackDamage) {
	health -= attackDamage * addMods();
	hits += 1;
	update();
	hit();
}

function update() {
	document.getElementById("health").textContent = health;
}
function hit() {
	document.getElementById("hits").innerHTML = hits;
}
function newGame() {
	location.reload();
}
update();
hit();



