import {
    Common
} from "./Common.esm.js";

import {
    FrontRecipe
} from "./FrontRecipe.esm.js";


import { FRONT_CLASS } from "./FrontRecipe.esm.js";

const RECIPES_ID = 'recipes';
const URL = 'https://themealdb.com/api/json/v1/1/random.php';
const RECIPES_AMOUNT = 4;

export class Recipes extends Common {
    constructor() {
        super();
        this.bindElements();
        this.createRandomRecipes();
        this.randomRecipesDetails = [];
        this.createNrOfIdFrontRecipe();
        
    }

    bindElements() {
        this.recipes = this.bindElement(RECIPES_ID);
    }

    createRandomRecipes() {
        for (let i = 0; i < RECIPES_AMOUNT; i++) {
            this.createRandomRecipe();
        }
    }

    createNrOfIdFrontRecipe() {
        const recipes = document.querySelectorAll(`.${FRONT_CLASS}`);
        recipes.forEach((div, i) => {
            div.setAttribute('id', `FrontId-${i}`);
        })
    }

    createRandomRecipe() {
        this.createFrontRecipeHtmlElements();
    }

    createFrontRecipeHtmlElements() {
        const frontRecipe = new FrontRecipe();
        if (!frontRecipe) {
            throw new Error(`${frontRecipe} doesn't exist`)
        }

        const {
            recipeFront,
            frontHeading,
            frontBtn,
            frontIcon,
            frontParagraph,

        } = frontRecipe;

        const front = this.recipes.appendChild(recipeFront);
        front.appendChild(frontHeading);
        const btn = front.appendChild(frontBtn);
        btn.appendChild(frontIcon);
        btn.appendChild(frontParagraph).textContent = 'open recipe';
        this.getRandomData(frontRecipe);
    }

    getDishName(element, dishName) {
        element.textContent = dishName;
    }

    getRandomData(frontElements) {
        fetch(URL)
        .then((res) => res.json())
        .then(data => {
            
            const recipeDetails = data.meals[0]
            const {
                    strMealThumb,
                    strInstructions,
                    strMeal
                } = recipeDetails;
                this.randomRecipesDetails.push(recipeDetails);
                
                const {
                    frontHeading,
                    
                } = frontElements;
                
                this.getDishName(frontHeading, strMeal);
                this.saveRecipesInLocalStorage();
            })
            .catch(error => console.error('Error:', error));
    }
    
        saveRecipesInLocalStorage() {
            localStorage.setItem('array', JSON.stringify(this.randomRecipesDetails));
            
        }
}

const recipes = new Recipes();

