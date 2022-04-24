import {
    recipes
} from "./Recipes.esm.js";

import {
    Storage, KEY_STORAGE
} from "./Storage.esm.js";

import { headerBtn } from "./HeaderBtn.esm.js";

export const RECIPES_AMOUNT = 7;
export const URL = 'https://themealdb.com/api/json/v1/1/random.php';

export class Random {
    constructor() {
        this.randomRecipesDetails = [];
        this.headerBtn = headerBtn;
        this.getOldItemsFromStorage();
        this.createRandomRecipes(RECIPES_AMOUNT);
    
    };
    
    
    getOldItemsFromStorage() {
        let oldItem = localStorage.getItem('wish');
        if (oldItem === null) return;
        this.oldItems = JSON.parse(oldItem);
        this.headerBtn.showHideBtn(this.oldItems);
    }
    
    getRandomData(i) {
        fetch(URL)
        .then((res) => res.json())
        .then(data => {
            this.recipes = recipes;
            const recipeDetails = data.meals[0];
            this.randomRecipesDetails.push(recipeDetails);
            this.createStorage();
            this.displayDishName(i)
        })
        .catch(error => console.error('Error:', error));
    };
    
    createRandomRecipes(amount) {
        for (let i = 0; i < amount; i++) {
            this.getRandomData(i)
        };
    };
    
    createStorage() {
        this.storage = new Storage(this.randomRecipesDetails);
        this.storage.getDetailsToDisplay(KEY_STORAGE);
        
    };
    
    displayDishName(i) {
        const element = recipes.recipes.children[i].childNodes[0];
        const dishName = this.storage.details[i].strMeal;
        this.recipes.getDishName(element, dishName);
    }
        
};

export const random = new Random();

