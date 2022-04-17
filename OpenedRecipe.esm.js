import {
    Common
} from "./scripts/Common.esm.js";

import {
    MAIN_ID,
    HEADER_ICON_ID,
    CONTENT_PARAGRAPH,
    mainRecipe
} from "./scripts/MainRecipe.esm.js";

import {
    P
} from "./scripts/FrontRecipe.esm.js";

import { DeleteBtn } from "./scripts/deleteBtn.esm.js";
import { recipes } from "./scripts/recipes.esm.js";

const FRONT_BTN_ID = '#frontBtn';
const PREPARATION_TXT = 'Preparation:';
const INGREDIENTS_TXT = 'ingredients';
const ID = 'id';
export const KEY_STORAGE = 'array';

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
                const number = this.numberOfElementToDisplay(frontRecipeElement);
                this.openRecipe(this.details);
                this.closeButton();
                this.closeRecipe();
                this.deleteBtn = new DeleteBtn(number);
                console.log(recipes.randomRecipesDetails);
                // console.log(this.deleteBtn);

            })
        });
    }

    numberOfElementToDisplay(element) {
        element = Number(element[element.length - 1]);
        this.getDetailsToDisplay(element);
        return element;
    }

    getDetailsToDisplay(number) {
        this.details = JSON.parse(localStorage.getItem(KEY_STORAGE))[number];
    }

    openRecipe(element) {
        this.mainRecipe.createMainRecipeHTMLElements();
        this.mainRecipe.createRecipeToOpen();
        this.main = this.bindElement(MAIN_ID);
        this.displayIngredients(element);
        this.elementsToDisplay(element);
    }

    elementsToDisplay(element) {
        this.insertContentToElements(this.mainRecipe.headerHeading, element.strMeal);
        this.insertContentToElements(this.mainRecipe.secondBottomParagraph, element.strInstructions);
        this.insertImageToElement(this.mainRecipe.contentImg, element.strMealThumb);
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