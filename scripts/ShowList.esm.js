import { Common } from "./Common.esm.js";

import { mainRecipe } from "./MainRecipe.esm.js";

const WISH_ID = 'wish';
const WISH_BTN_ID = 'wishBtn';


export class WishList extends Common{
    constructor() {
        super();
        this.wish = this.bindElement(WISH_ID);
        this.closeBtn = this.bindElement(WISH_BTN_ID);
        this.mainRecipe = mainRecipe;
        this.eventHandler();
    }

    displayWishList() {
        this.wish.style.display = 'block';
        
    }
    
    closeWishList() {
        console.log(this)
        this.wish.style.display = 'none';
    }

    eventHandler() {
        this.closeBtn.addEventListener('click',  () => this.closeWishList());
    }

    
};












