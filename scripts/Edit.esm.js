import {
    Common
} from "./Common.esm.js";
import {
    MAIN_ID,
    EDIT_BTN_ID,
    PREPARATION_ID,
    MAIN_CONTENT_ID,
    SAVE_BTN_ID,
    FOOTER_PARAGRAPH_ID,
    DELETE_BTN_ID
} from "./MainRecipe.esm.js";
import {
    random
} from "./random.esm.js";

export class Edit extends Common {
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
        this.deleteBtn = this.getDeleteBtn();
        this.eventHandlers();
    };

    getEditBtn() {
        return this.bindElement(EDIT_BTN_ID)

    };
    getSaveBtn() {
        return this.bindElement(SAVE_BTN_ID)

    };
    getDeleteBtn() {
        return this.bindElement(DELETE_BTN_ID)
        
    };
    
    prepareToEdit() {
        if (this.textBtn.textContent === 'save') {
            this.saveChangedPreparation();
        };
        this.textBtn.textContent = 'save'
        this.preparation.setAttribute('contenteditable', true);
        this.preparation.style.borderColor = 'red';
        this.preparation.style.border = 'solid';
        this.preparation.style.borderColor = 'red';
        this.preparation.style.outline = 'none';
        this.editBtn.style.backgroundColor = 'red';
        this.textBtn.textContent = 'save'
        this.flag = true;
        this.showHideButtons();
    };
    
    removeBorder() {
        this.preparation.style.border = 'none';
        this.flag = false;
        this.textBtn.textContent = 'edit'
        this.editBtn.style.backgroundColor = '#369ee4';
        this.showHideButtons();
    };
    
    showHideButtons() {
        this.editBtn.removeEventListener('click', () => this.prepareToEdit)
        if (this.flag) {
            this.saveBtn.style.visibility = 'hidden';
            this.deleteBtn.style.visibility = 'hidden';
        } else {
            this.saveBtn.style.visibility = 'visible';
            this.deleteBtn.style.visibility = 'visible';
        }
    }
    
    getPreparation() {
        const preparation = this.random.randomRecipesDetails[this.number].strInstructions;
        return this.noWhiteSpaces(preparation); 
    }
    myChanges() {
        const myChanges = this.preparation.textContent;
        return this.noWhiteSpaces(myChanges); 
    }

    noWhiteSpaces(value) {
        return value.replace(/\s/g, "");
    }

    compareChanges() {
        return (this.getPreparation() === this.myChanges());
    }
    
    saveChangedPreparation() {
        if (!this.compareChanges()) {
            console.log('save')
        } else {
            console.log('no save')
        }
    }

    eventHandlers() {
        this.preparation.addEventListener('mousedown', () => this.prepareToEdit());
        this.mainContent.addEventListener('click', () => this.removeBorder())
        this.editBtn.addEventListener('click', () => this.prepareToEdit())
    };
}