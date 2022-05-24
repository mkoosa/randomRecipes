export class MyDish {
    constructor(strMeal, strIngredient, strInstructions, strMealThumb) {
        this._strMeal = strMeal;
        this._strIngredient = strIngredient;
        this._strInstructions = strInstructions;
        this._strMealThumb = strMealThumb;
    };

    get getName() {
        return this._strMeal;
    };

    set setName(newValue) {
        this._strMeal = newValue;
    };


    get getIngredients() {
        return this._strIngredient;
    };

    set setIngredients(newValue) {
        this._strIngredient = newValue;
    }


    get getInstructions() {
        return this._strInstructions;
    };


    set setInstructions(newValue) {
        this._strInstructions = newValue;
    };

    get getImagePath() {
        return this._strMealThumb
    };

    set setImagePath(newValue) {
        this._strMealThumb = newValue;
    };

};









