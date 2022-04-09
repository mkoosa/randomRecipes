import {
    Common
} from "./scripts/Common.esm.js";

import {
    MAIN_ID,
    HEADER_ICON_ID,
    CONTENT_PARAGRAPH,
    mainRecipe
} from "./scripts/MainRecipe.esm.js";

import { P } from "./scripts/FrontRecipe.esm.js";

const FRONT_BTN_ID = '#frontBtn';
const PREPARATION_TXT = 'Preparation:';
const INGREDIENTS_TXT = 'ingredients';
const ID = 'id';
const KEY_STORAGE = 'array';

class OpenedRecipe extends Common {
    constructor() {
        super();
        this.openButtons = this.openButtons();
        this.mainRecipe = mainRecipe;
        this.clickEvents();
    }

    openButtons() {
        return document.querySelectorAll(FRONT_BTN_ID);
    }

    closeButton() {
        this.closeBtn = document.getElementById(HEADER_ICON_ID);
    }

    clickEvents() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                let frontRecipeElement = btn.parentElement.getAttribute(ID);
                this.numberOfElementToDisplay(frontRecipeElement);
                this.openRecipe();
                this.closeButton();
                this.closeRecipe();
                console.log(this.mainRecipe);
            })
        });
    }

    numberOfElementToDisplay(element) {
        element = Number(element[element.length - 1]);
        this.getDetailsToDisplay(element);
    }

    getDetailsToDisplay(number) {
        this.details = JSON.parse(localStorage.getItem(KEY_STORAGE))[number];
    }

    openRecipe() {
        this.mainRecipe.createMainRecipeHTMLElements();
        this.mainRecipe.createRecipeToOpen();
        this.main = this.bindElement(MAIN_ID);
        this.displayIngredients(this.details);
        this.elementsToDisplay();
    }

    elementsToDisplay() {
        this.insertContentToElements(this.mainRecipe.headerHeading, this.details.strMeal);
        this.insertContentToElements(this.mainRecipe.secondBottomParagraph, this.details.strInstructions);
        this.insertImageToElement(this.mainRecipe.contentImg, this.details.strMealThumb);
        this.insertTextToElement(this.mainRecipe.bottomParagraph, PREPARATION_TXT);
        this.insertTextToElement(this.mainRecipe.contentHeading, INGREDIENTS_TXT);
    }

    insertContentToElements(element, content) {
        element.innerText = content;
    }

    insertImageToElement(element, image) {
        element.src = image;
    }

    insertTextToElement(element, text) {
        element.innerText = text;
    }

    closeRecipe() {
        this.closeBtn.addEventListener('click', () => {
            this.main.remove();
        })
    }

    displayIngredients(element) {
        if (element === null) return;
        let ingredientsWrapper = this.mainRecipe.contentWrapper;
        let keysArray = Object.keys(element);

        keysArray.forEach(key => {
            if (key.includes('strIngredient')) {
                if (element[key]) {
                    const toDisplay = element[key];
                    const paragraph = document.createElement(P);
                    paragraph.classList.add(CONTENT_PARAGRAPH);
                    this.insertTextToElement(paragraph, toDisplay)
                    ingredientsWrapper.appendChild(paragraph);
                }
            }
        })
    }
}

export const openedRecipe = new OpenedRecipe();