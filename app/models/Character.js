import { generateId } from "../utils/GenerateId.js";

//This is a template for the characters in the game
export class Character {
  constructor(name) {
    this.id = generateId()
    this.name = name;
    this.score = 0;
  }


  get playerTemplate() {
    return `
    <div class="row p-1">
      <div class="col-11 border border-dark rounded"> ${this.name}</div>
      <div class="col-1">
        <button onclick="app.CharactersController.deleteCharacter('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button> 
      </div>
    </div>
    `
  }
  get buttonTemplate() {
    return `
    <div class="row p-2">
    <div>
      <button class="border border-dark rounded text-dark" onclick="app.CharactersController.removePointsFromCharacter('${this.name}')"> -1 </button> 
      <span> ${this.score} </span> 
      <button class="border border-dark rounded text-dark" onclick="app.CharactersController.addPointsToCharacter('${this.name}')"> +1 </button> 
    </div>
    </div>
    `
  }

  pointsIncrease() {
    console.log(this.name, '+1')
    this.score++
  }

  get title() {
    return `${this.name} score is ${this.score}`
  }
}