import {
    recipes
} from "./recipes.esm.js";

import {
    Storage
} from "./storage.esm.js";

export const RECIPES_AMOUNT = 7;

export const URL = 'https://themealdb.com/api/json/v1/1/random.php';

export class Random {
    constructor() {
        this.randomRecipesDetails = [];
        this.createRandomRecipes(RECIPES_AMOUNT);
    };
    
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
    };
    
    displayDishName(i) {
        this.recipes.getDishName(recipes.recipes.children[i].childNodes[0],this.storage.element[i].strMeal)
    }
        
};

export const random = new Random();
