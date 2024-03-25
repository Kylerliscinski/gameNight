
//This is a template for the characters in the game
export class Character {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  pointsIncrease() {
    console.log(this.name, '+1')
    this.score++
  }

  get title() {
    return `${this.name} score is ${this.score}`
  }
}