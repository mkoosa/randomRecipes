import {
    random
} from "./Random.esm.js";

import {
    SaveBtn
} from "./SaveBtn.esm.js";

import {
    EditBtn
} from "./EditBtn.esm.js";

export class MyDish {
    constructor(strMeal, strIngredient, strInstructions, strMealThumb) {
        this.strMeal = strMeal;
        this.strIngredient = strIngredient;
        this.strInstructions = strInstructions;
        this.strMealThumb = strMealThumb;
        this.random = random;
    };

    get getName() {
        return this.strMeal;
    };

    set setName(newValue) {
        this.strMeal = newValue;
    };

    get getIngredients() {
        return this.strIngredient;
    };

    set setIngredients(newValue) {
        this.strIngredient = newValue;
    };

    get getInstructions() {
        return this.strInstructions;
    };

    set setInstructions(newValue) {
        this.strInstructions = newValue;
    };

    get getImagePath() {
        return this.strMealThumb
    };

    set setImagePath(newValue) {
        this.strMealThumb = newValue;
    };

    createObj() {
        return {
            strMeal: this.strMeal,
            strIngredient: this.strIngredient,
            strInstructions: this.strInstructions,
            strMealThumb: this.strMealThumb,
        };
    };

    saveInStorage(element) {
        if (!element) {
            throw new Error(`${element} doesn't exist`)
        };
        this.random.randomRecipesDetails.push(element);
        localStorage.setItem('array', JSON.stringify(this.random.randomRecipesDetails));
        this.number = this.random.randomRecipesDetails.length;
    };

    activateButtons() {
        this.saveBtn = new SaveBtn(this.number - 1);
        this.editBtn = new EditBtn(this.number - 1);
    };
};