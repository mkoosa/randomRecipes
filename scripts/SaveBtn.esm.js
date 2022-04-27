import {
    Common
} from "./Common.esm.js";
import {
    MAIN_ID,
    SAVE_BTN_ID
} from "./MainRecipe.esm.js";

import {
    random
} from "./random.esm.js";

import { headerBtn } from "./HeaderBtn.esm.js";

let items = [];

export class SaveBtn extends Common {
    constructor(number) {
        let SAVE_BTN = null;
        super();
        this.main = this.bindElement(MAIN_ID);
        this.random = random;
        this.oldItems = this.random.oldItems;
        this.getSaveBtn(SAVE_BTN, SAVE_BTN_ID);
        this.number = number;
        this.headerBtn = headerBtn;        
    };

    getSaveBtn(element, id) {
        element = this.bindElement(id);
        element.addEventListener('click', () => this.saveItemInStorage());
    };
    
    saveItemInStorage() {
        this.headerBtn.headerBtn.style.display = 'block';
        let details = this.random.storage.details[this.number];
        if (items.includes(details)) {
            items.pop();
            
        } else if (this.random.oldItems) {
            this.random.oldItems.push(details);
            this.random.storage.createNewStorageItems('wish', this.oldItems);

        } else {
            this.random.oldItems = [];
            this.random.oldItems.push(details);
            console.log(this.random.oldItems);
            this.random.storage.createNewStorageItems('wish', this.random.oldItems);
            
        };
        items.push(details);
    }
};