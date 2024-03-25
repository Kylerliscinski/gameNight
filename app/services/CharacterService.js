import { AppState } from "../AppState.js";




class CharactersService {


  addPointsToCharacter(characterName) {
    console.log('+1', characterName);
    const characterToAddPoints = AppState.characters.find(character => character.score == characterName)
    console.log('Did you get points?', characterToAddPoints);
    characterToAddPoints.score++
    // console.log(characterToAddPoints);
  }

  removePointsFromCharacter(characterName) {
    console.log('-1', characterName);
    const characterToRemovePoints = AppState.characters.find(character => character.score == characterName)
    console.log('Did you lose points?', characterToRemovePoints);
    characterToRemovePoints.score -= 1
    // console.log(characterToRemovePoints);
  }
}

export const charactersService = new CharactersService()