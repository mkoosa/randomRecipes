import { Common } from "./Common.esm.js";
import { MAIN_ID, EDIT_BTN_ID, PREPARATION_ID, MAIN_CONTENT_ID } from "./MainRecipe.esm.js";
import { random } from "./random.esm.js";

export class EditBtn extends Common{
    constructor(number) {
        super()
        this.number = number;
        this.flag = false;
        this.random = random;
        this.main = this.bindElement(MAIN_ID);
        this.preparation = this.bindElement(PREPARATION_ID);
        this.mainContent = this.bindElement(MAIN_CONTENT_ID);
        this.editBtn = this.getEditBtn(); 
        this.eventHandler();
    };

    getEditBtn() {
        return this.bindElement(EDIT_BTN_ID)
        
    };

    prepareToEdit() {
        this.preparation.setAttribute('contenteditable', true); 
        this.preparation.style.borderColor = 'red';
        this.preparation.style.border = 'solid';
        this.preparation.style.borderColor = 'red';
        this.preparation.style.outline = 'none';
        this.flag = true;
        this.showHideEditBtn();
        
    };
    
    removeBorder() {
        this.preparation.style.border = 'none';
        this.flag = false;
        this.showHideEditBtn();
        
    };
    
    showHideEditBtn() {
        if (this.flag) {
            this.editBtn.style.visibility= 'hidden';
            
        } else {
            this.editBtn.style.visibility = 'visible';
            
        }
    }
    
    getPreparation() {
        const preparation = this.random.randomRecipesDetails[this.number].strInstructions;
        console.log(preparation);
        
        
        
    }
    
    eventHandler() {
        this.preparation.addEventListener('mousedown', () => this.prepareToEdit());
        this.mainContent.addEventListener('click', () => this.removeBorder())
        this.getPreparation();
    };



}



