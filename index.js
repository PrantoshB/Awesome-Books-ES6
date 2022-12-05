import './modules/button_function.js'
import './modules/time.js'
import {addBooks} from './modules/add_and_remove.js'
import {CheckLocalStorage, Books } from './modules/onload.js'
import './modules/extrafunctions.js'


window.onload = () => {
  CheckLocalStorage();
  addBooks(Books);
};


