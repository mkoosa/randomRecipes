import {
    Common
} from "./Common.esm.js";
import {
    random
} from "./random.esm.js";
import {
    myList
} from "./MyList.esm.js";

export const HEADER_BTN_ID = 'headerBtn';

class HeaderBtn extends Common {
    constructor() {
        super();
        this.random = random;
        this.createButton();
        this.eventHandler();
        this.showHideBtn();
    };
    createButton() {
        this.headerBtn = this.bindElement(HEADER_BTN_ID);
    };
    
    showHideBtn() {
        if (!this.random.oldItems) return;
        if (this.random.oldItems) {
            this.headerBtn.style.display = 'block';
        };
        if (!this.random.oldItems.length) {
            this.headerBtn.style.display = 'none';
        };
    };

    eventHandler() {
        this.headerBtn.addEventListener('click', () => this.showWishList())
    };

    showWishList() {
        this.myList = myList;
        this.myList.createWishList();
    };
};

export const headerBtn = new HeaderBtn();