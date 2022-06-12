
import {
    Common
} from "./Common.esm.js";
import {
    MAIN_ID,
    SAVE_BTN_ID
} from "./MainRecipe.esm.js";

import {
    random
} from "./Random.esm.js";

import { headerBtn } from "./HeaderBtn.esm.js";

let items = [];

export class SaveBtn extends Common {
    constructor(number) {
        super();
        let SAVE_BTN = null;
        this.main = this.bindElement(MAIN_ID);
        this.random = random;
        this.oldItems = this.random.oldItems;
        this.saveBtn = this.getSaveBtn(SAVE_BTN, SAVE_BTN_ID);
        this.number = number;
        this.headerBtn = headerBtn;        
    };

    getSaveBtn(element, id) {
        element = this.bindElement(id);
        element.addEventListener('click', () => this.saveItemInStorage());
    };
    
    saveItemInStorage() {
        console.log('save', this.number);
        this.headerBtn.headerBtn.style.display = 'block';
        let details = this.random.randomRecipesDetails[this.number];

        if (items.includes(details)) {
            items.pop();
        } else if (this.random.oldItems) {
            this.random.oldItems.push(details);
            this.setItem();    
        } else {
            this.random.oldItems = [];
            this.random.oldItems.push(details);
            this.setItem();    
        };
        items.push(details);
    };
    
    setItem() {
        localStorage.setItem('wish', JSON.stringify(this.random.oldItems));
    }
};