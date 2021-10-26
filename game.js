// oop - object oriented programming
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
console.log(squares.length)
let dice;
const player1 = {
	name: 'Bob',
	color: 'red',
	position: 0,
	cash: 1000,
	move: function () {
		console.log('i am moving 🙀')
		console.log(this)
		dice = 1 + Math.floor(6 * Math.random())
		this.position = (this.position + dice) % squares.length
		this.cash += squares[this.position]
		// check the game end condition
		if (this.cash < 0) {
			console.log(`Game over for ${this.name}`)
		}


	},
	display: function () {
		console.log(`${this.name} has currently ${this.cash}`)
	}
}
player1.move()

const player2 = {
	name: 'Alice',
	color: 'blue',
	position: 0,
	cash: 1000,
	move: function () {
		console.log('i am moving 🙀')
		console.log(this)
		dice = 1 + Math.floor(6 * Math.random())
		this.position = (this.position + dice) % squares.length
		this.cash += squares[this.position]
		// check the game end condition
		if (this.cash < 0) {
			console.log(`Game over for ${this.name}`)
		}


	},
	display: function () {
		console.log(`${this.name} has currently ${this.cash}`)
	}
}



// rolling the dice
dice = 1 + Math.floor(6 * Math.random())

// moving the player 
if ((player1.position + dice) > squares.length - 1) {
	player1.position = player1.position + dice - squares.length
} else {
	player1.position += dice
}

// or simpler
player1.position = (player1.position + dice) % squares.length

// change the amount of cash 
player1.cash += squares[player1.position]

// check the game end condition
if (player1.cash < 0) {
	console.log(`Game over for ${player1.name}`)
}

console.log(player1)


// class Player
// we define a class - this is a blueprint for a player object 

class Player {
	constructor(name, color) {
		this.name = name
		this.color = color
		this.cash = 1000;
		this.position = 0;
	}
	greet() {
		console.log('hello from the player 👋')
	}
	displayName() {
		return `My name is ${this.name}`
	}
}

const player = new Player()
// player.age = 35
console.log(player)
console.log(player.displayName())
// console.log(player)

