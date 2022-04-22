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

    };

    getSaveBtn(element, id) {
        element = this.bindElement(id);
        console.log(element);
        element.addEventListener('click', () => this.saveItemInStorage());

    };

    saveItemInStorage() {
        let details = this.random.storage.details[this.number];
        if (items.includes(details)) {
            // console.log('bylo')
            items.pop();
        
        } else {
            // console.log('nie bylo')
            this.oldItems.push(details);
            this.random.storage.createNewStorageItems('wish', this.oldItems);
        };
        items.push(details);





    }

};