import {
    mainRecipe
} from "./MainRecipe.esm.js";
import {
    openedRecipe
} from "./OpenedRecipe.esm.js";
import {
    Common
} from "./Common.esm.js";

import {
    random
} from "./Random.esm.js";
console.log(random)

const SEARCH_INPUT_ID = 'searchInput';
const LOUPE_ID = 'loupe';
const URL = 'https://themealdb.com/api/json/v1/1/search.php?s=';
const RED = 'red';
const WHITE = 'white';
const SUCCEED_TXT = 'search recipe';
const FAILED_TXT = 'please try once again';

export class Search extends Common {
    constructor() {
        super();
        this.openedRecipe = openedRecipe;
        this.inputElement = this.bindElement(SEARCH_INPUT_ID);
        this.loupe = this.bindElement(LOUPE_ID);
        this.random = random;
        this.eventHandlers();
    }

    getInputText() {
        this.searchingRecipe = this.inputElement.value;
        this.changeLoupeColor(this.searchingRecipe);
    }

    sentRequest() {
        fetch(URL + this.searchingRecipe)
            .then(res => res.json())
            .then(data => {
                if (!!data.meals) {
                    this.mainRecipe = mainRecipe;
                    this.openedRecipe = openedRecipe;
                    this.details = data.meals[0];
                    this.addRecipeToStorage(this.details);
                    this.inputElement.placeholder = SUCCEED_TXT;
                    this.open = true;
                    this.openRecipe();
                    this.textProperties(this.open);

                } else {
                    this.open = false;
                    this.textProperties(this.open);
                };
            });
    };

    openRecipe() {
        this.openedRecipe.openRecipe(this.details);
        this.openedRecipe.closeButton();
        this.openedRecipe.closeRecipe();
    }

    addRecipeToStorage(element) {
        let items = this.random.storage.details;
        this.avoidDoubleItemInStorage(items, element) ? items : items.push(element);
        this.random.storage.createNewStorageItems('array', items);

    }
    avoidDoubleItemInStorage(items, element) {
        if (items[items.length - 1].strMeal === element.strMeal) {
            return true
        };
    };
  

    textProperties(value) {
        value ? this.inputElement.placeholder = SUCCEED_TXT : this.inputElement.placeholder = FAILED_TXT;
        this.inputElement.value = '';
        this.loupe.style.color = WHITE;
    }

    eventHandlers() {
        this.inputElement.addEventListener('keyup', () => this.getInputText());
        this.loupe.addEventListener('click', () => this.sentRequest());
    };

    changeLoupeColor(value) {
        value ? this.loupe.style.color = RED : this.loupe.style.color = WHITE;
    }
}

export const search = new Search();