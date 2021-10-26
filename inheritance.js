class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}

	makeSound() {
		console.log(this.sound)
	}
}
class Cat extends Animal {
	constructor(name, sound, numberOfLives) {
		// we need to use super to call the constructor 
		// in Animal and pass the arguments
		super(name, sound)
		this.numberOfLives = numberOfLives
	}
	// this is overriding (sic!) the parent makeSound() method
	// this method get's used now
	makeSound() {
		// explicitly call a method from the parent class
		super.makeSound()
		console.log('this is the cats own sound')
	}
}

class Bird extends Animal {
	constructor(name, sound) {
		super(name, sound)
	}
	fly() {
		console.log('i am flying')
	}
}


const bird = new Bird('Pete', 'peep')
const cat = new Cat('Tom', 'meow', 9)
console.log(bird)
console.log(cat)
cat.makeSound()