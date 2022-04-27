import {
    Common
} from "./Common.esm.js";
import { random } from "./random.esm.js";
import { myList } from "./MyList.esm.js";

const HEADER_BTN_ID = 'headerBtn';

class HeaderBtn extends Common {
    constructor() {
        super();
        this.random = random;
        this.createButton();
        this.eventHandler();
        this.showHideBtn();
    }
    
    createButton() {
        this.headerBtn = this.bindElement(HEADER_BTN_ID);
    };
    showHideBtn() {
        if (this.random.oldItems) {
            this.headerBtn.style.display = 'block';
        } else {
            this.headerBtn.style.display = 'none';
        }''
    };

    eventHandler() {
        this.headerBtn.addEventListener('click', () => this.showWishList())
    };

    showWishList() {
        // console.log('wishList');
        this.myList = myList
        // console.log(myList.createWishList());
        this.myList.createWishList()
    };
    
};

export const headerBtn = new HeaderBtn();
