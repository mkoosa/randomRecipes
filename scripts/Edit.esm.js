import { Common } from "./Common.esm.js";
import { MAIN_ID, EDIT_BTN_ID, PREPARATION_ID, MAIN_CONTENT_ID, SAVE_BTN_ID, FOOTER_PARAGRAPH_ID } from "./MainRecipe.esm.js";
import { random } from "./random.esm.js";

export class Edit extends Common{
    constructor(number) {
        super()
        this.number = number;
        this.flag = false;
        this.random = random;
        this.main = this.bindElement(MAIN_ID);
        this.preparation = this.bindElement(PREPARATION_ID);
        this.mainContent = this.bindElement(MAIN_CONTENT_ID);
        this.textBtn = this.bindElement(FOOTER_PARAGRAPH_ID)
        this.editBtn = this.getEditBtn();
        this.saveBtn = this.getSaveBtn();
        this.eventHandler();
    };

    getEditBtn() {
        return this.bindElement(EDIT_BTN_ID)
        
    };
    getSaveBtn() {
        return this.bindElement(SAVE_BTN_ID)
        
    };

    prepareToEdit() {
        this.preparation.setAttribute('contenteditable', true); 
        this.preparation.style.borderColor = 'red';
        this.preparation.style.border = 'solid';
        this.preparation.style.borderColor = 'red';
        this.preparation.style.outline = 'none';
        this.editBtn.style.backgroundColor = 'red';
        this.textBtn.textContent = 'save'
        this.flag = true;
        this.showHideSaveBtn();
        
    };
    
    removeBorder() {
        this.preparation.style.border = 'none';
        this.flag = false;
        this.textBtn.textContent = 'edit'
        this.editBtn.style.backgroundColor = '#369ee4';
        this.showHideSaveBtn();
        
    };
    
    showHideSaveBtn() {
        if (this.flag) {
            this.saveBtn.style.visibility= 'hidden';
            
        } else {
            this.saveBtn.style.visibility = 'visible';
            
        }
    }
    
    getPreparation() {
        const preparation = this.random.randomRecipesDetails[this.number].strInstructions;
        console.log(preparation);
        
        
        
    }

  
    
    
    eventHandler() {
        this.preparation.addEventListener('mousedown', () => this.prepareToEdit());
        this.mainContent.addEventListener('click', () => this.removeBorder())
        this.saveBtn.addEventListener('click', () => this.saveChangedPreparation())
        this.getPreparation();

    };



}




