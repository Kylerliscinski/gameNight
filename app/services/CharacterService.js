import { AppState } from "../AppState.js";
import { Character } from "../models/Character.js";




class CharactersService {
  createCharacter(characterData) {
    const createdCharacter = new Character(characterData)
    AppState.characters.push(createdCharacter)
    this.saveCharacter()
  }

  saveCharacter() {
    let dataString = JSON.stringify(AppState.characters)
    localStorage.setItem('character', dataString)
  }

  deleteCharacter(characterId) {
    let indexToDelete = AppState.characters.findIndex(character => character.id == characterId)
    AppState.characters.splice(indexToDelete, 1)
    this.saveCharacter
  }

  loadCharacter() {
    let dataString = localStorage.getItem('character')
    const characterData = JSON.parse(dataString)
    if (characterData == null) return

    const character = characterData.map(character => new Character(character))
    AppState.characters = character
  }
  addPointsToCharacter(characterName) {
    const characterToAddPoints = AppState.characters.find(character => character.name == characterName)
    characterToAddPoints.score++
  }

  removePointsFromCharacter(characterName) {
    const characterToRemovePoints = AppState.characters.find(character => character.name == characterName)
    characterToRemovePoints.score -= 1
  }
}

export const charactersService = new CharactersService()