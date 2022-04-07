import {
    Common
} from "./scripts/Common.esm.js";

const SEARCH_INPUT_ID = 'searchInput';
const LOUPE_ID = 'loupe';




class Search extends Common {
    constructor() {
        super();
        this.searchInput = this.bindElement(SEARCH_INPUT_ID);
        this.loupe = this.bindElement(LOUPE_ID);
        this.getSearchingRecipe();
    }
    
    
    getSearchingRecipe() {
        this.searchInput.addEventListener('keyup', (e) => {
            
            let value = e.target.value
            
            
            
            this.changeLoupeColor(value);
        })

    }

    changeLoupeColor(value) {
        if (value !== '') {
            this.loupe.style.color = 'red';
        }
        else {
            
            this.loupe.style.color = '#fff';
        }
    }

}





export const search = new Search();
