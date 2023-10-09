import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: null
  },
  {
    path: '#/about',
    controller: AboutController,
    view: AboutView
  }
]