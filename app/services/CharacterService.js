import { AppState } from "../AppState.js";




class CharactersService {


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