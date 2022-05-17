import {
    Common
} from "./Common.esm.js";
import {
    mainRecipe
} from "./MainRecipe.esm.js";
import {
    MyRecipe
} from "./MyRecipe.esm.js";

const FORM = 'form';
const LABEL = 'label'
const INPUT = 'input';
const INPUT_TYPE = 'text';
const P = 'p';
const ICON = 'i';
const FORM_CLASS = 'myRecipe__form';
const LABEL_CLASS = 'myRecipe__label';
const INPUT_CLASS = 'myRecipe__input';
const P_CLASS = 'myRecipe__btn';
const ICON__CLASSES = ['fa-solid', 'fa-square-check']

const ADD_BTN_ID = 'addBtn';
const MY_RECIPE_ID = 'myRecipe';

class AddBtn extends Common {
    constructor() {
        super()
        this.addButton = this.bindElement(ADD_BTN_ID);
        this.descriptions = ['INGREDIENTS', 'Preparation:', 'save'];
        this.mainRecipe = mainRecipe;
        this.eventTargets();
    };

    prepareRecipeDetails() {
        this.myRecipe = new MyRecipe(this.saveInputValue);
        console.log(this.myRecipe);
        this.displayForm();
    };

    createFormHTMLElements() {
        this.myRecipe = this.bindElement(MY_RECIPE_ID);
        this.myRecipe.style.display = 'block';
        this.form = this.mainRecipe.frontRecipe.createHtmlElement(FORM, FORM_CLASS);
        this.label = this.mainRecipe.frontRecipe.createHtmlElement(LABEL, LABEL_CLASS);
        this.input = this.mainRecipe.frontRecipe.createHtmlElement(INPUT, INPUT_CLASS);
        this.input.type = INPUT_TYPE;
        this.p = this.mainRecipe.frontRecipe.createHtmlElement(P, P_CLASS);
        this.icon = document.createElement(ICON);
        this.p.textContent = this.descriptions[this.descriptions.length - 1];
        this.mainRecipe.frontRecipe.createClassesInElement(this.icon, ICON__CLASSES);
        this.myRecipe.appendChild(this.form);
        this.form.appendChild(this.label);
        this.form.appendChild(this.input);
        this.myRecipe.appendChild(this.p);
        this.p.appendChild(this.icon);
        this.p.addEventListener('click', () => this.saveInputValue())
    };

    saveInputValue() {
        return this.input.value;

    };

    displayForm() {
        this.createFormHTMLElements();
    };

    eventTargets() {
        this.addButton.addEventListener('click', () => this.prepareRecipeDetails())
    };
};

export const addBtn = new AddBtn();