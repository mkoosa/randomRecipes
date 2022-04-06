import {
    Common
} from "./scripts/Common.esm.js";

import { MainRecipe, MAIN_ID, HEADER_ICON_ID } from "./scripts/MainRecipe.esm.js";

const FRONT_BTN_ID = '#frontBtn';

class OpenedRecipe extends Common{
    constructor() {
        super();
        this.openButtons = this.openButtons();
        this.clickEvents();
    }
    
    openButtons() {
        return document.querySelectorAll(FRONT_BTN_ID)
        
    }

    
    closeButton() {
        this.closeBtn = document.getElementById(HEADER_ICON_ID);
        console.log(this.closeBtn);
    }

    
    clickEvents() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.numberOfElement(btn.parentElement.getAttribute('id'));
                this.openRecipe();
                this.closeButton();
                this.closeRecipe();
                // console.log(this)
            })
        });
        
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
    
    openRecipe() {
        this.bindElement(MAIN_ID).style.display = 'flex';
        this.mainRecipe = new MainRecipe();
    
        
    }
    
    closeRecipe() {
        this.closeBtn.addEventListener('click', () => {
            console.log('close');
            this.bindElement(MAIN_ID).style.display = 'none';
            
        })
    }

   

}

export const openedRecipe = new OpenedRecipe();
