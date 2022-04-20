import {
    Common
} from "./Common.esm.js";
import {
    DELETE_BTN_ID
} from "./MainRecipe.esm.js";
import {
    openedRecipe,
    KEY_STORAGE
} from "./OpenedRecipe.esm.js";
import {
    MAIN_ID
} from "./MainRecipe.esm.js";
import {
    random
} from "./random.esm.js";



const deleteBtn = 'deleteBtn';

export class DeleteBtn extends Common {
    constructor(number) {
        super()
        this.random = random;
        this.number = number;
        this.main = this.bindElement(MAIN_ID);
        this.openedRecipe = openedRecipe;
        this.getDeleteBtn(deleteBtn, DELETE_BTN_ID);
        this.recipes = recipes;
    };

    getDeleteBtn(element, id) {
        element = this.bindElement(id);
        element.addEventListener('click', () => this.removeRecipe());

    };
    removeRecipe() {
        let recipes = this.random.storage.details;
        recipes.splice(this.number, 1);
        this.changeValuesInStorage(recipes);
        this.main.remove();
        this.removeHtmlElement();
    };

    removeHtmlElement() {
        let element = document.getElementById(`FrontId-${this.number}`);
        element.remove();
        this.changeFrontIdAttribute();
    }


    changeValuesInStorage(value) {
        localStorage.clear();
        localStorage.setItem('array', JSON.stringify(value));
    };

    changeFrontIdAttribute() {
        let elements = document.querySelectorAll('div.front');
        elements.forEach((element, i) => {
            element.setAttribute('id', `FrontId-${i}`);
        })

    }




}