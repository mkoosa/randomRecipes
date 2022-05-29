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
    DeleteBtn
} from "./DeleteBtn.esm.js";

import {
    EditBtn
} from "./EditBtn.esm.js";

import {
    recipes
} from "./Recipes.esm.js";

const HEADER_BTN_CLOSE_ID = 'headerCloseBtn';
const HEADER_BTN_OPEN_ID = 'headerOpenBtn';
const WISH_ID = 'wish';
const UL = 'ul';
const LI = 'li';
const UL_CLASSES = ['wish__list', 'container-fluid', 'd-flex',
    'flex-column', 'justify-content-evenly', 'align-items-center', 'flex-wrap', 'py-3', 'active'
];
const LI_CLASS = 'wish__item';
const LI_ATTRIBUTE = 'data'

export class MyList extends Common {
    constructor() {
        super();
        this.headerCloseBtn = this.bindElement(HEADER_BTN_CLOSE_ID);
        this.headerOpenBtn = this.bindElement(HEADER_BTN_OPEN_ID);
        this.wish = this.bindElement(WISH_ID);
        this.mainRecipe = mainRecipe;
        this.frontRecipe = mainRecipe.frontRecipe;
        this.openedRecipe = openedRecipe;
        this.recipes = recipes;
        this.listElements = [];
    };

    displayWishList() {
        this.wish.classList.add('active');
        this.headerOpenBtn.style.display = 'none';
        this.headerCloseBtn.style.display = 'block';
        this.getDetails();
        this.headerCloseBtn.addEventListener('click', () => this.closeWishList());
    };
    
    closeWishList() {
        this.wish.classList.remove('active');
        this.headerOpenBtn.style.display = 'block';
        this.headerCloseBtn.style.display = 'none';
        this.headerOpenBtn.addEventListener('click', () => this.displayWishList());
        this.ulList.remove();
    };

    getDetails() {
        this.details = JSON.parse(localStorage.getItem(WISH_ID));
    };

    createWishList() {
        this.displayWishList();
        this.ulList = document.createElement(UL);
        this.frontRecipe.createClassesInElement(this.ulList, UL_CLASSES);
        this.wish.appendChild(this.ulList);
        for (let i = 0; i < this.details.length; i++) {
            this.listElement = this.frontRecipe.createHtmlElement(LI, LI_CLASS);
            this.listElement.setAttribute(LI_ATTRIBUTE, i);
            this.ulList.appendChild(this.listElement).textContent = this.details[i].strMeal;
            this.listElements.push(this.listElement);
        };
        this.getAttribute();  
    };

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
        console.log(target);
        this.target = target;
        const recipe = this.details[this.target];
        this.openedRecipe.openRecipe(recipe);
        this.openedRecipe.closeButton();
        this.openedRecipe.closeRecipe();
        this.deleteBtn = new DeleteBtn(this.target);
        this.editBtn = new EditBtn(this.target);
        this.fitMethodToDeleteBtn(this.deleteBtn);
        this.fitMethodToEditBtn(this.editBtn);
    };

    fitMethodToDeleteBtn(element) {
        element.changeValuesInStorage = this.changeValuesInStorage;
        element.removeHtmlElement = this.removeHtmlElement;
    };

    fitMethodToEditBtn(element) {
        this.number = element.number;
        element.saveMyChanges = this.saveMyChanges
    };

    saveMyChanges() {
        const elements = JSON.parse(localStorage.getItem('wish'));
        elements[this.number].strInstructions = this.preparation.textContent;
        localStorage.setItem('wish', JSON.stringify(elements));
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
    };
};

export const myList = new MyList();