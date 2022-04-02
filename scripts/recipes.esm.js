import {
    Common
} from "../images/Common.esm.js";
import {
    Recipe
} from "./recipe.esm.js";

const RECIPES_ID = 'recipes';
const URL = 'https://themealdb.com/api/json/v1/1/random.php';
const recipesAmount = 4;

export class Recipes extends Common {
    constructor() {
        super();
        this.bindElements();
        this.recipes = [];
        this.createRecipes();
    }

    bindElements() {
        this.dishes = this.bindElement(RECIPES_ID);
    }

    createRecipes() {
        for (let i = 0; i < recipesAmount; i++) {
            this.createRandomRecipe();
        }

    }
    createRandomRecipe() {
        const recipe = new Recipe();
        const {
            recipeWrapper,
            h2Element,
            imageWrapper,
            image,
            paragraph,
            recipeBtn,
            icon,
            paragraphBtn
        } = recipe;

        const wrapper = this.dishes.appendChild(recipeWrapper);
        const heading = wrapper.appendChild(h2Element);
        const imageContainer = wrapper.appendChild(imageWrapper)
        const img = imageContainer.appendChild(image);
        const parEl = wrapper.appendChild(paragraph)
        const button = wrapper.appendChild(recipeBtn);
        const recipeI = button.appendChild(icon);
        const recipeParagraphBtn = button.appendChild(paragraphBtn).textContent = 'open recipe';
        this.getRandomData(recipe, heading, img, paragraph);

    }

    getRandomData(recipe) {
        fetch(URL)
            .then((res) => res.json())
            .then(data => {
                const {
                    strMealThumb,
                    strInstructions,
                    strMeal
                } = data.meals[0];
                const {
                    h2Element,
                    image,
                    paragraph
                } = recipe;

                h2Element.textContent = strMeal;
                image.src = strMealThumb
                paragraph.textContent = strInstructions;

            })
            .catch(error => console.error('Error:', error));

    }



}

const recipes = new Recipes();