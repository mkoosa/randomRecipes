export class MyRecipe {
    constructor(strMeal, strIngredient, strInstructions, strMealThumb) {
        this._strMeal = strMeal;
        this._strIngredient = strIngredient;
        this._strInstructions = strInstructions;
        this._strMealThumb = strMealThumb;
    };

    getName() {
        return this._strMeal;
    };

    getIngredients() {
        return this._strIngredient;
    };

    getInstructions() {
        return this.strInstructions;
    };

    getImagePath() {
        return this._strMealThumb
    };

};