import {
    Common
} from "./scripts/Common.esm.js";

const FRONT_BTN_ID = '#frontBtn';

class OpenedRecipe {
    constructor() {
        this.openButtons = this.openButton();
        this.clickEvent();
    }

    openButton() {
        return document.querySelectorAll(FRONT_BTN_ID)

    }

    clickEvent() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.numberOfElement(btn.parentElement.getAttribute('id'));
            })
        })
    }

    numberOfElement(element) {
        element = Number(element[element.length - 1]);
        console.log(element)
        this.getDetailsToDisplay(element);
    }

    getDetailsToDisplay(number) {
        const details = JSON.parse(localStorage.getItem('array'))[number];
        console.log(details);

        

    }

}

export const openedRecipe = new OpenedRecipe();