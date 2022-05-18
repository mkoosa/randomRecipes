import {
    Common
} from "./Common.esm.js";
import {
    mainRecipe
} from "./MainRecipe.esm.js";
import {
    MyRecipe
} from "./MyRecipe.esm.js";

const DIV = 'div';
const FORM = 'form';
const LABEL = 'label'
const INPUT = 'input';
const INPUT_TYPE = 'text';
const P = 'p';
const ICON = 'i';
const TEXT_AREA = 'textarea';
const DIV_CLASS = 'myRecipe';
const FORM_CLASS = 'myRecipe__form';
const LABEL_CLASS = 'myRecipe__label';
const INPUT_CLASS = 'myRecipe__input';
const P_CLASS = 'myRecipe__btn';
const ICON__CLASSES = ['fa-solid', 'fa-square-check'];
const CLOSE_ICON_CLASSES = ['fa-solid', 'fa-x', 'myRecipe__close']
const TEXTAREA_CLASS = 'textArea';
const SAVE = 'save';
const ADD_BTN_ID = 'addBtn';
const MY_RECIPE_ID = 'myRecipe';
const WRAPPER_ID = 'wrapperId'

class AddBtn extends Common {
    constructor() {
        super();
        this.target = 0;
        this.addButton = this.bindElement(ADD_BTN_ID);
        this.wrapper = this.bindElement(WRAPPER_ID);
        this.descriptions = ['name of dish', 'INGREDIENTS', 'Preparation:'];
        this.mainRecipe = mainRecipe;
        this.eventTargets();
    };

    prepareRecipeDetails() {
        this.myRecipe = new MyRecipe(this.saveInputValue);
        this.createFormHTMLElements();
    };

    createFormHTMLElements() {
        this.myRecipe = this.mainRecipe.frontRecipe.createHtmlElement(DIV, DIV_CLASS);
        this.mainRecipe.createIdAttribute(this.myRecipe, MY_RECIPE_ID);
        this.form = this.mainRecipe.frontRecipe.createHtmlElement(FORM, FORM_CLASS);
        this.label = this.mainRecipe.frontRecipe.createHtmlElement(LABEL, LABEL_CLASS);
        this.label.textContent = this.descriptions[this.target];
        this.input = this.mainRecipe.frontRecipe.createHtmlElement(INPUT, INPUT_CLASS);
        this.input.type = INPUT_TYPE;
        this.p = this.mainRecipe.frontRecipe.createHtmlElement(P, P_CLASS);
        this.icon = document.createElement(ICON);
        this.textArea = this.mainRecipe.frontRecipe.createHtmlElement(TEXT_AREA, TEXTAREA_CLASS);
        this.p.textContent = SAVE;
        this.mainRecipe.frontRecipe.createClassesInElement(this.icon, ICON__CLASSES);
        this.closeIcon = document.createElement(ICON);
        this.mainRecipe.frontRecipe.createClassesInElement(this.closeIcon, CLOSE_ICON_CLASSES);
        this.wrapper.appendChild(this.myRecipe);
        this.myRecipe.appendChild(this.form);
        this.myRecipe.appendChild(this.closeIcon);
        this.form.appendChild(this.label);
        this.form.appendChild(this.input);
        this.form.appendChild(this.p);
        this.p.appendChild(this.icon);
        this.p.addEventListener('click', () => this.displayCorrectForm());
        this.closeIcon.addEventListener('click', () => this.closeForm());
    };

    getValue(element) {
        return element.value;
    };

    displayCorrectForm() {
        const elements = [this.input, this.textArea, this.textArea];
        const element = elements[this.target];
        this.checkTarget(elements);
        this.isEmptyValue(element);
    };

    closeForm() {
        this.form.remove();
        this.myRecipe.style.display = 'none';
        this.target = 0;
    }

    checkTarget(elements) {
        if (this.target === elements.length - 1) {
            this.form.remove();
            this.myRecipe.style.display = 'none';
            this.target = 0;
            return;
        };
    };

    isEmptyValue(element) {
        if (this.getValue(element)) {
            this.target++;
            console.log(element.value)
            this.clearHtmlElement(element);
            this.changeHtmlElement();
            element.value = '';
        };
    }

    clearHtmlElement(element) {
        element.remove();
    };

    changeHtmlElement() {
        this.label.textContent = this.descriptions[this.target];
        this.myRecipe.style.height = '65vh';
        this.form.appendChild(this.textArea);
    };

    eventTargets() {
        this.addButton.addEventListener('click', () => this.prepareRecipeDetails())
    };
};

export const addBtn = new AddBtn();