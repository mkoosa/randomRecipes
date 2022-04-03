import {
    Common
} from "./Common.esm.js";

import {
    FrontRecipe
} from "./FrontRecipe.esm.js";

const RECIPES_ID = 'recipes';
const URL = 'https://themealdb.com/api/json/v1/1/random.php';
const RECIPES_AMOUNT = 4;

export class Recipes extends Common {
    constructor() {
        super();
        this.bindElements();
        // this.recipes = [];
        this.createRandomRecipes();

    }

    bindElements() {
        this.recipes = this.bindElement(RECIPES_ID);
    }

    createRandomRecipes() {
        for (let i = 0; i < RECIPES_AMOUNT; i++) {
            this.createRandomRecipe();
        }

    }

    createRandomRecipe() {
        this.createFrontRecipeHtmlElements();
    }

    createFrontRecipeHtmlElements() {
        const frontRecipe = new FrontRecipe();
        if (!frontRecipe) {
            throw new Error (`${frontRecipe} doesn't exist`)
        }

        console.log(frontRecipe);
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

                const {
                    frontHeading,

                } = frontElements;
                console.log(frontHeading)

                this.getDishName(frontHeading, strMeal);


            })
            .catch(error => console.error('Error:', error));

    }



}

const recipes = new Recipes();

