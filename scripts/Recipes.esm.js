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

} from "./Random.esm.js";

const RECIPES_ID = 'recipes';

export class Recipes extends Common {
    constructor() {
        super();
        this.random = random;
        this.randomRecipesDetails = [];
        this.dishName = [];
        this.recipes = this.bindElement(RECIPES_ID);
        this.createRandomRecipes(RECIPES_AMOUNT);
        this.createNrOfIdFrontRecipe();
        this.headings = this.getHeadingsElements();
    };
    
    getHeadingsElements() {
        return [...document.getElementsByClassName('front__heading')];
    }
    
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
            imgWrapper,
            frontImage,
            frontHeading,
            frontBtn,
            frontIcon,
            frontParagraph,
        } = this.frontRecipe;
        const front = this.recipes.appendChild(recipeFront);
        front.appendChild(imgWrapper);
        imgWrapper.appendChild(frontImage);
        frontImage.src = 'images/question-mark-350169_1280.png';
        front.appendChild(frontHeading); 
        const btn = front.appendChild(frontBtn);
        btn.appendChild(frontIcon);
        btn.appendChild(frontParagraph).textContent = 'open recipe';
        return this.frontRecipe;
    };
    
    getDishName(element, dishName) {
        element.textContent = dishName;
    };
    
    getRandomDetails(detail) {
        this.randomRecipesDetails.push(detail);
        
    };

    getName(element) {
        this.dishName.push(element);
        if (this.dishName.length === RECIPES_AMOUNT) {
            for (let i = 0; i < RECIPES_AMOUNT; i++){
                this.displayDishName(this.headings[i], this.dishName[i]);
            };
        };
    };

    displayDishName(element, name) {
        element.textContent = name;
    };
    
};

export const recipes = new Recipes();
