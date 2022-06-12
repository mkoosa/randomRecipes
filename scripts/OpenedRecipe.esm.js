import {
    Common
} from "./Common.esm.js";

import {
    MAIN_ID,
    HEADER_ICON_ID,
    CONTENT_PARAGRAPH_CLASS,
    mainRecipe
} from "./MainRecipe.esm.js";

import {
    P
} from "./FrontRecipe.esm.js";

import {
    DeleteBtn
} from "./DeleteBtn.esm.js";
import {
    SaveBtn
} from "./SaveBtn.esm.js";

import {
    EditBtn
} from "./EditBtn.esm.js";

export const KEY_STORAGE = 'array';

const BLUR_CLASS = 'blur';
const VISIBLE_CLASS = 'visible';
const SHOW_SPINNERS_CLASS = 'showSpinner';
const FRONT_BTN_ID = '#frontBtn';
const PREPARATION_TXT = 'Preparation:';
const INGREDIENTS_TXT = 'ingredients';
const ID = 'id';
const WRAPPER_ID = 'wrapperId'
const SPINNERS_ID = 'spinners';

export class OpenedRecipe extends Common {
    constructor() {
        super();
        this.openButtons = this.openButtons();
        this.wrapper = this.bindElement(WRAPPER_ID);
        this.spinners = this.bindElement(SPINNERS_ID);
        this.mainRecipe = mainRecipe;
        this.clickEvents();
    }

    openButtons() {
        return document.querySelectorAll(FRONT_BTN_ID);
    };

    closeButton() {
        this.closeBtn = document.getElementById(HEADER_ICON_ID);
    };

    clickEvents() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                let frontRecipeElement = btn.parentElement.getAttribute(ID);
                const number = this.numberOfElementToDisplay(frontRecipeElement);
                this.openRecipe(this.details);
                this.closeButton();
                this.closeRecipe();
                this.deleteBtn = new DeleteBtn(number);
                this.saveBtn = new SaveBtn(number);
                this.editBtn = new EditBtn(number);
            })
        });
    };

    numberOfElementToDisplay(element) {
        element = Number(element[element.length - 1]);
        this.getDetailsToDisplay(element);
        return element;
    };

    getDetailsToDisplay(number) {
        this.details = JSON.parse(localStorage.getItem(KEY_STORAGE))[number];
    };

    openRecipe(element) {
        this.activeBlur(this.wrapper);
        this.mainRecipe.createMainRecipeHTMLElements();
        this.mainRecipe.createRecipeToOpen();
        this.main = this.bindElement(MAIN_ID);
        this.displayIngredients(element);
        this.elementsToDisplay(element);
        this.setTimeouts();
    };

    setTimeouts() {
        setTimeout(() => {
            this.activeVisible(this.main);
        }, 2000);

        setTimeout(() => {
            this.activeSpinners(this.spinners);
        }, 100);

        setTimeout(() => {
            this.deactivateSpinners(this.spinners);
        }, 1900);
    };

    activeSpinners(element) {
        element.classList.add(SHOW_SPINNERS_CLASS);
    };

    deactivateSpinners(element) {
        element.classList.remove(SHOW_SPINNERS_CLASS);
    };

    activeVisible(element) {
        element.classList.add(VISIBLE_CLASS);
    };

    activeBlur(element) {
        element.classList.add(BLUR_CLASS);
    };

    elementsToDisplay(element) {
        this.insertContentToElements(this.mainRecipe.headerHeading, element.strMeal);
        this.insertContentToElements(this.mainRecipe.secondBottomParagraph, element.strInstructions);
        this.insertImageToElement(this.mainRecipe.contentImg, element.strMealThumb);
        this.insertTextToElement(this.mainRecipe.bottomParagraph, PREPARATION_TXT);
        this.insertTextToElement(this.mainRecipe.contentHeading, INGREDIENTS_TXT);
    };

    insertContentToElements(element, content) {
        element.innerText = content;
    };

    insertImageToElement(element, image) {
        element.src = image;
    };

    insertTextToElement(element, text) {
        element.innerText = text;
    };

    closeRecipe() {
        this.closeBtn.addEventListener('click', () => {
            this.main.remove();
            this.wrapper.classList.remove(BLUR_CLASS);
        });
    };

    displayIngredients(element) {
        if (element === null) return;
        let ingredients = []
        let ingredientsWrapper = this.mainRecipe.contentWrapper;
        let keysArray = Object.keys(element);
        keysArray.forEach(key => {
            if (key.includes('strIngredient')) {
                if (element[key]) {
                    const toDisplay = element[key];
                    ingredients.push(toDisplay);
                };
            };
        });
        ingredients = ingredients.toString();
        const paragraph = document.createElement(P);
        paragraph.classList.add(CONTENT_PARAGRAPH_CLASS);
        this.insertTextToElement(paragraph, ingredients);
        ingredientsWrapper.appendChild(paragraph);
    };
};

export const openedRecipe = new OpenedRecipe();