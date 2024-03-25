import { CharactersController } from "./controllers/CharactersController.js";
import { router } from './router-config.js';

class App {

  router = router

  CharactersController = new CharactersController()

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
