function GameController() {
    var slapService = new GameService();


	//PRIVATE
function update() {
	var mike = slapService.getMike();
	document.getElementById("health").textContent = mike.health.toFixed(2);
	document.getElementById("hits").innerHTML = mike.hits;
}



//PUBLIC




this.newGame = function newGame() {
	mike.health = 100;
	mike.hits = 0;
	update();

}

this.attack = function attack(attackDamage) {
	slapService.attack(attackDamage);
	update();
	console.log("Damage from Controller");
}

this.newAsset = function newAsset(newItem) {
	slapService.newAsset(newItem);
	update();
	console.log("Items from Controller");

}


update();
}