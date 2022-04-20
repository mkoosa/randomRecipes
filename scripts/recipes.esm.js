import {
    Common
} from "./Common.esm.js";

import {
    FrontRecipe,
    FRONT_CLASS
} from "./FrontRecipe.esm.js";

import {
    random,
    RECIPES_AMOUNT,

} from "./random.esm.js";

const RECIPES_ID = 'recipes';


export class Recipes extends Common {
    constructor() {
        super();
        this.random = random;
        this.randomRecipesDetails = [];
        this.recipes = this.bindElement(RECIPES_ID);
        this.createRandomRecipes(RECIPES_AMOUNT);
        this.createNrOfIdFrontRecipe();
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
        this.createFrontRecipeObj();

    };

    createFrontRecipeObj() {
        this.frontRecipe = new FrontRecipe();
        const {
            recipeFront,
            frontHeading,
            frontBtn,
            frontIcon,
            frontParagraph,
        } = this.frontRecipe;

        const front = this.recipes.appendChild(recipeFront);
        front.appendChild(frontHeading);
        const btn = front.appendChild(frontBtn);
        btn.appendChild(frontIcon);
        btn.appendChild(frontParagraph).textContent = 'open recipe';
        return this.frontRecipe;
    };

    getDishName(element, dishName) {
        element.textContent = dishName;
    }
};
export const recipes = new Recipes();
