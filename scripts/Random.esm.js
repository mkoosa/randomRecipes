import {
    recipes
} from "./recipes.esm.js";

import { Storage } from "./storage.esm.js";

const URL = 'https://themealdb.com/api/json/v1/1/random.php';
const RECIPES_AMOUNT = 7;

export class Random {
    constructor() {
        this.randomRecipesDetails = [];
        this.createRandomRecipes(RECIPES_AMOUNT);
        
        
    };
    
    getRandomData() {
        fetch(URL)
        .then((res) => res.json())
        .then(data => {
            const recipeDetails = data.meals[0];
            this.randomRecipesDetails.push(recipeDetails);
            })
            .catch(error => console.error('Error:', error));
    };
        
        createRandomRecipes(amount) {
            for (let i = 0; i < amount; i++) {
                this.getRandomData()
            };
           
            const storage = new Storage(this.randomRecipesDetails);
            console.log(storage)
        };
}


console.log('ok');

// export const random = new Random();
// console.log(random);

// console.log(random.randomRecipesDetails);
