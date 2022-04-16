import {
    Common
} from "./Common.esm.js";

import {
    FrontRecipe
} from "./FrontRecipe.esm.js";

import {
    FRONT_CLASS
} from "./FrontRecipe.esm.js";

const RECIPES_ID = 'recipes';
const URL = 'https://themealdb.com/api/json/v1/1/random.php';
const RECIPES_AMOUNT = 7;

export class Recipes extends Common {
    constructor() {
        super();
        this.recipes = this.bindElement(RECIPES_ID);
        this.createRandomRecipes(RECIPES_AMOUNT);
        this.createNrOfIdFrontRecipe();
        this.randomRecipesDetails = [];
    };
    
    createRandomRecipes(amount) {
        for (let i = 0; i < amount; i++) {
            this.createRandomRecipe();
        };
    };
    
    createNrOfIdFrontRecipe() {
        const recipes = document.querySelectorAll(`.${FRONT_CLASS}`);
        recipes.forEach((div, i) => {
            div.setAttribute('id', `FrontId-${i}`);
        });
    };

    createRandomRecipe() {
        this.createFrontRecipeHtmlElements();
    };

    createFrontRecipeHtmlElements() {
        let frontRecipe = this.createFrontRecipeObj();
        this.getRandomData(frontRecipe); 
    };
    
    createFrontRecipeObj() {
        const frontRecipe = new FrontRecipe();
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
        return frontRecipe;
    };

    getDishName(element, dishName) {
        element.textContent = dishName;
    }

    getRandomData(frontElements) {
        fetch(URL)
            .then((res) => res.json())
            .then(data => {
                const recipeDetails = data.meals[0];
                this.randomRecipesDetails.push(recipeDetails);
                this.getDishName(frontElements.frontHeading, recipeDetails.strMeal);
                this.saveRecipesInLocalStorage();
            })
            .catch(error => console.error('Error:', error));
    }

    saveRecipesInLocalStorage() {
        localStorage.setItem('array', JSON.stringify(this.randomRecipesDetails));
    };
};

export const recipes = new Recipes();