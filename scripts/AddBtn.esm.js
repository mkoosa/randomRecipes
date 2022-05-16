import { Common } from "./Common.esm.js";
import { mainRecipe } from "./MainRecipe.esm.js";

const ADD_BTN_ID = 'addBtn';

class AddBtn extends Common{
    constructor() {
        super()
        this.addButton = this.bindElement(ADD_BTN_ID);
        this.mainRecipe = mainRecipe
        this.#eventTargets();
    };

    #prepareRecipeDetails() { };
    
    #eventTargets() {
        this.addButton.addEventListener('click', () => this.#prepareRecipeDetails())
        
    };
};

export const addBtn = new AddBtn();


