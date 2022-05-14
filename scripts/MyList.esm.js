import {
    openedRecipe
} from "./OpenedRecipe.esm.js";
import {
    Common
} from "./Common.esm.js";
import {
    mainRecipe
} from "./MainRecipe.esm.js";
import {
    headerBtn
} from "./HeaderBtn.esm.js";
import {
    random
} from "./random.esm.js";
import {
    DeleteBtn
} from "./Delete.esm.js";
import {
    SaveBtn
} from "./Save.esm.js";

import {
    Edit
} from "./Edit.esm.js";

import {
    recipes
} from "./Recipes.esm.js";




const WISH_ID = 'wish';
const WISH_BTN_ID = 'wishBtn';
const UL = 'ul';
const LI = 'li';
const UL_CLASS = 'wish__list';
const LI_CLASS = 'wish__item';
const LI_ATTRIBUTE = 'data'

export class MyList extends Common {
    constructor() {
        super();
        this.wish = this.bindElement(WISH_ID);
        this.closeBtn = this.bindElement(WISH_BTN_ID);
        this.mainRecipe = mainRecipe;
        this.frontRecipe = mainRecipe.frontRecipe;
        this.openedRecipe = openedRecipe;
        this.headerBtn = headerBtn;
        this.recipes = recipes;
        this.listElements = [];
        this.eventHandler();
    };

    displayWishList() {
        this.getDetails();
        this.wish.style.display = 'block';
    };

    closeWishList() {
        this.wish.style.display = 'none';
        this.ulList.remove();
        this.showHideBtn()
    };

    eventHandler() {
        this.closeBtn.addEventListener('click', () => this.closeWishList());
    };

    getDetails() {
        this.details = JSON.parse(localStorage.getItem(WISH_ID));
    }

    createWishList() {
        this.displayWishList();
        this.ulList = this.frontRecipe.createHtmlElement(UL, UL_CLASS);
        this.wish.appendChild(this.ulList);
        for (let i = 0; i < this.details.length; i++) {
            this.listElement = this.frontRecipe.createHtmlElement(LI, LI_CLASS);
            this.listElement.setAttribute(LI_ATTRIBUTE, i);
            this.ulList.appendChild(this.listElement).textContent = this.details[i].strMeal;
            this.listElements.push(this.listElement);
        }
        this.getAttribute();

    }

    getAttribute() {
        const liElements = [...document.getElementsByClassName(LI_CLASS)];
        liElements.forEach(el => {
            el.addEventListener('click', () => {
                let target = el.getAttribute(LI_ATTRIBUTE);
                this.openRecipe(target);
            });
        });
    };

    openRecipe(target) {
        this.target = target;
        const recipe = this.details[this.target];
        this.openedRecipe.openRecipe(recipe);
        this.openedRecipe.closeButton();
        this.openedRecipe.closeRecipe();
        this.deleteBtn = new DeleteBtn(this.target);
        this.deleteBtn.changeValuesInStorage = this.changeValuesInStorage;
        this.deleteBtn.removeHtmlElement = this.removeHtmlElement;
    };

    changeValuesInStorage = () => {
        this.details.splice(this.target, 1);
        localStorage.setItem('wish', JSON.stringify(this.details));
        this.ulList.remove();
        this.createWishList();
        this.closeWishList();
    };

    removeHtmlElement() {
        return
    }

    showHideBtn() {
        if (!this.details.length) {
            this.headerBtn.headerBtn.style.display = 'none'
        } else {
            this.headerBtn.headerBtn.style.display = 'block'
        }
    }
};

export const myList = new MyList();