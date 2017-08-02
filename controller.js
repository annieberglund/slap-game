function GameController() {
    var slapService = new GameService();


	//PRIVATE
function update() {
	var mike = slapService.getMike();
	document.getElementById("name").textContent = mike.name;
	document.getElementById("health").textContent = mike.health.toFixed(2);
	document.getElementById("hits").innerHTML = mike.hits;
	if (mike.health <= 0) {
		if (confirm("KNOCKED OUT, SUCKA!") == true) {
			slapService.newGame();
			update();
		} 
			
	}
	console.log(mike);
}

//PUBLIC

this.newGame = function newGame() {
	slapService.newGame();
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