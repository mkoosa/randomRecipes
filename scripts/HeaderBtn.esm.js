import {
    Common
} from "./Common.esm.js";

const HEADER_BTN_ID = 'headerBtn';

class HeaderBtn extends Common {
    constructor() {
        super();
        this.createButton();
        this.eventHandler();
    }

    createButton() {
        this.headerBtn = this.bindElement(HEADER_BTN_ID);

    };
    showHideBtn(elements) {
        if (elements) {
            this.headerBtn.style.display = 'block';
        } else {
            this.headerBtn.style.display = 'none';
        }
    };

    eventHandler() {
        this.headerBtn.addEventListener('click', () => this.showWishList())
    }

    showWishList() {
        console.log('wishList');
    }
    
}



export const headerBtn = new HeaderBtn();