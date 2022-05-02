import { Common } from "./Common.esm.js";
import { MAIN_ID, EDIT_BTN_ID, PREPARATION_ID, MAIN_CONTENT_ID } from "./MainRecipe.esm.js";

export class EditBtn extends Common{
    constructor(number) {
        super()
        this._number = number;
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
        
    };
    
    removeBorder() {
        this.preparation.style.border = 'none';
        
    };

    eventHandler() {
        this.preparation.addEventListener('mousedown', () => this.prepareToEdit());
        this.mainContent.addEventListener('click', () => this.removeBorder())
    };

}



