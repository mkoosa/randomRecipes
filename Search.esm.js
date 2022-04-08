import {
    MainRecipe
} from "./scripts/MainRecipe.esm.js";

import {
    openedRecipe
} from "./OpenedRecipe.esm.js";
import {
    Common
} from "./scripts/Common.esm.js";



const SEARCH_INPUT_ID = 'searchInput';
const LOUPE_ID = 'loupe';
const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';
const RED = 'red';
const WHITE = 'white';

class Search extends Common {
    constructor() {
        super();
        this.searchInput = this.bindElement(SEARCH_INPUT_ID);
        this.loupe = this.bindElement(LOUPE_ID);
        this.eventHandlers();
        this.openedRecipe = openedRecipe;
    }
    
    getInputText() {
        this.value = this.searchInput.value;
        this.changeLoupeColor(this.value);
    }
    
    sentRequest() {
        if (!this.value) return;
        fetch(URL + this.value)
            .then(res => res.json())
            .then(data => {
                if (!!data.meals) {
                    this.mainRecipe = new MainRecipe();
                    
                };
                this.getDetails(data);
                if (!!data.meals) {
                    this.searchInput.placeholder = 'search recipe'
                } else {
                    this.searchInput.placeholder = 'please try once again';
                    
                }
            })
            this.searchInput.value = '';
            this.loupe.style.color = WHITE;

        }

        getDetails(value) {
            if (!value.meals) {
                return
        };
        this.openedRecipe.details = value.meals[0];
        this.openedRecipe.openRecipe();
        this.removeSecondMainRecipe();
    }
    
    eventHandlers() {
        this.searchInput.addEventListener('keyup', () => this.getInputText());
        this.loupe.addEventListener('click', () => this.sentRequest());
        
    };
    
    changeLoupeColor(value) {
        if (value !== '') {
            this.loupe.style.color = RED;
        } else {
            this.loupe.style.color = WHITE;
        }
    }
    
    removeSecondMainRecipe() {
        let elements = [... document.querySelectorAll('.main')];
        elements[elements.length - 2].remove();    
        this.closeRecipe();
        
    }
    
    closeRecipe() {
        let element = document.querySelector('.main');
        let icon = this.openedRecipe.mainRecipe.headerIcon;
        icon.addEventListener('click', () => {
            element.remove();
        })
    }
}

export const search = new Search();
