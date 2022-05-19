import {
    recipes
} from "./Recipes.esm.js";
import {
    Common
} from "./Common.esm.js";
export const RECIPES_AMOUNT = 8;
export const URL = 'https://themealdb.com/api/json/v1/1/random.php';

const HEADER_BTN_ID = 'headerBtn';

export class Random extends Common {
    constructor() {
        super();
        this.randomRecipesDetails = [];
        this.headerBtn = this.bindElement(HEADER_BTN_ID);
        this.getOldItemsFromStorage();
        this.createRandomRecipes(RECIPES_AMOUNT);
    };

    getOldItemsFromStorage() {
        let oldItem = localStorage.getItem('wish');
        if (oldItem === null) return;
        this.oldItems = JSON.parse(oldItem);
    }

    getRandomData(i) {
        fetch(URL)
            .then((res) => res.json())
            .then(data => {
                this.recipes = recipes;
                const recipeDetails = data.meals[0];
                this.createStorage(recipeDetails);
            })
            .catch(error => console.error('Error:', error));
    };

    createRandomRecipes(amount) {
        for (let i = 0; i < amount; i++) {
            this.getRandomData(i)
        };
    };

    createStorage(el) {
        this.randomRecipesDetails.push(el);
        if (this.randomRecipesDetails.length === RECIPES_AMOUNT) {
            localStorage.setItem('array', JSON.stringify(this.randomRecipesDetails))
            this.randomRecipesDetails.forEach(el => {
                this.recipes.getRandomDetails(el);
                this.recipes.getName(el.strMeal);
            })
        };
    }
};

export const random = new Random();