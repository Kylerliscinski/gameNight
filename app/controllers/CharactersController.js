import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharacterService.js";



export class CharactersController {
  constructor() {
    this.drawCharacters()
    this.drawButtons()
  }

  drawCharacters() {
    let characterHTML = ''
    AppState.characters.forEach(character => characterHTML += `<div class="border border-dark"> ${character.name} </div>`)
    let characterElem = document.getElementById('character-name')
    characterElem.innerHTML = characterHTML
  }

  drawButtons() {
    let buttonHTML = ''
    AppState.characters.forEach(button => buttonHTML += `
    <div>
    <button class="border border-dark rounded text-dark" onclick="app.CharactersController.removePointsFromCharacter('${button.name}')"> -1 </button> 
    <span> ${button.score} </span> 
    <button class="border border-dark rounded text-dark" onclick="app.CharactersController.addPointsToCharacter('${button.name}')"> +1 </button> 
    </div>`)
    let buttonElem = document.getElementById('button')
    buttonElem.innerHTML = buttonHTML
  }

  addPlayer() {

  }

  removePointsFromCharacter(characterName) {
    charactersService.removePointsFromCharacter(characterName)
    this.drawCharacters()
    this.drawButtons()
  }
  addPointsToCharacter(characterName) {
    charactersService.addPointsToCharacter(characterName)
    this.drawCharacters()
    this.drawButtons()
  }
}