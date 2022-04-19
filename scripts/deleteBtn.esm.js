import { Common } from "./Common.esm.js";
import { DELETE_BTN_ID } from "./MainRecipe.esm.js";
import { openedRecipe, KEY_STORAGE } from "../OpenedRecipe.esm.js";
import { MAIN_ID } from "./MainRecipe.esm.js";
import { recipes } from "./recipes.esm.js";


const deleteBtn = 'deleteBtn';

export class DeleteBtn extends Common {
    constructor(number) {
        super()
        this.number = number;
        this.main = this.bindElement(MAIN_ID);
        this.openedRecipe = openedRecipe;
        this.getBtn(deleteBtn, DELETE_BTN_ID)
    };
    
    getBtn(element, id) {
        this.element = this.bindElement(id);
        this.element.addEventListener('click', () => this.removeRecipe());
        
    };    
    removeRecipe() {
        let recipes = JSON.parse(localStorage.getItem(KEY_STORAGE));
        recipes.splice(this.number, 1);
        this.changeValuesInStorage(recipes);
        this.main.remove();
        console.log(recipes);
    };
    
    
    changeValuesInStorage(value) {
        localStorage.clear();
        localStorage.setItem('array', JSON.stringify(value));
        
    };
}


