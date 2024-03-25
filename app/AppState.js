import { Character } from "./models/Character.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  //This is a list of the characters in the game
  characters = [
    new Character("Rob"),
    new Character("Sherwin"),
    new Character("Ricky"),
    new Character("Paul")
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())