import {
    Common
} from "./scripts/Common.esm.js";

import {
    MainRecipe,
    MAIN_ID,
    HEADER_ICON_ID, CONTENT_PARAGRAPH
} from "./scripts/MainRecipe.esm.js";

const FRONT_BTN_ID = '#frontBtn';

class OpenedRecipe extends Common {
    constructor() {
        super();
        this.openButtons = this.openButtons();
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
                this.numberOfElementToDisplay(btn.parentElement.getAttribute('id'));
                this.openRecipe();
                this.closeButton();
                this.closeRecipe();
            })
        });

    }

    numberOfElementToDisplay(element) {
        element = Number(element[element.length - 1]);
        this.getDetailsToDisplay(element);
    }

    getDetailsToDisplay(number) {
        this.details = JSON.parse(localStorage.getItem('array'))[number];
    }

    openRecipe() {
        this.mainRecipe = new MainRecipe();
        const {
            strMeal: name,
            strInstructions: preparation,
            strMealThumb: imgRsc
        } = this.details;
        const {
            headerHeading,
            contentImg,
            bottomParagraph,
            secondBottomParagraph,
            contentHeading,
            

        } = this.mainRecipe;
        this.main = this.bindElement(MAIN_ID);

        headerHeading.innerText = name;
        contentImg.src = imgRsc;
        bottomParagraph.innerText = 'Preparation:'
        secondBottomParagraph.innerText = preparation;
        contentHeading.innerText = 'ingredients';

        this.displayIngredients(this.details);

    }

    closeRecipe() {
        this.closeBtn.addEventListener('click', () => {
            this.main.remove();

        })
    }

    displayIngredients(element) {
        if (element === null) return;
        let wrapper = this.mainRecipe.contentWrapper;
        let keysArray = Object.keys(element);
    
        keysArray.forEach(key => {
            if (key.includes('strIngredient')) {
                if (element[key]) {
                    const toDisplay = element[key];
                    const paragraph = document.createElement('p');
                    paragraph.classList.add(CONTENT_PARAGRAPH);
                    paragraph.innerText = toDisplay;
                    wrapper.appendChild(paragraph);
                }
            }
        })
    }


}

export const openedRecipe = new OpenedRecipe();