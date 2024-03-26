import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharacterService.js";
import { getFormData } from "../utils/FormHandler.js";




export class CharactersController {
  constructor() {
    this.drawCharacters()
    this.drawButtons()
  }

  drawCharacters() {
    let characterHTML = ''
    AppState.characters.forEach(character => characterHTML += character.playerTemplate)
    let characterElem = document.getElementById('character-name')
    characterElem.innerHTML = characterHTML
  }

  drawButtons() {
    const character = AppState.characters
    let characterHTML = ''
    character.forEach(character => characterHTML += character.buttonTemplate)
    let buttonElem = document.getElementById('button')
    buttonElem.innerHTML = characterHTML
  }

  createCharacter() {
    event.preventDefault()
    let characterData = getFormData(event.target)
    charactersService.createCharacter(characterData)
    event.target.reset()
    this.drawCharacters()
  }

  deleteCharacter() {
    charactersService.deleteCharacter(characterId)
    this.drawCharacters()
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