import {
    Common
} from "./Common.esm.js";
import {
    mainRecipe
} from "./MainRecipe.esm.js";
import {
    MyDish
} from "./MyDish.esm.js";

import {
    Picture
} from "./Picture.ems.js";

import {
    openedRecipe
} from "./OpenedRecipe.esm.js";

const DIV = 'div';
const FORM = 'form';
const LABEL = 'label'
const INPUT = 'input';
const INPUT_TEXT = 'text';
const INPUT_FILE = 'file';
const P = 'p';
const ICON = 'i';
const TEXT_AREA = 'textarea';
const DIV_CLASS = 'myRecipe';
const FORM_CLASS = 'myRecipe__form';
const LABEL_CLASS = 'myRecipe__label';
const INPUT_CLASS = 'myRecipe__input';
const P_CLASS = 'myRecipe__btn';
const ADD_CLASS = 'myRecipe__AddBtn';
const ICON__CLASSES = ['fa-solid', 'fa-square-check'];
const CLOSE_ICON_CLASSES = ['fa-solid', 'fa-x', 'myRecipe__close']
const TEXTAREA_CLASS = 'textArea';
const SAVE = 'save';
const ADD_BTN_ID = 'addBtn';
const MY_RECIPE_ID = 'myRecipe';
const WRAPPER_ID = 'wrapperId'
export const MY_RECIPE_IMG_ID = 'myRecipe__image';

class AddBtn extends Common {
    constructor() {
        super();
        this.target = 0;
        this.flag = false;
        this.addButton = this.bindElement(ADD_BTN_ID);
        this.wrapper = this.bindElement(WRAPPER_ID);
        this.descriptions = ['name of dish', 'INGREDIENTS', 'Preparation:', 'add image'];
        this.mainRecipe = mainRecipe;
        this.openedRecipe = openedRecipe;
        this.addButton.addEventListener('click', () => this.openMyRecipeForm());
    };

    openMyRecipeForm() {
        this.prepareInput();
        this.myDish = new MyDish();
    }

    prepareCorrectForm() {
        this.myRecipe = this.mainRecipe.frontRecipe.createHtmlElement(DIV, DIV_CLASS);
        this.mainRecipe.createIdAttribute(this.myRecipe, MY_RECIPE_ID);
        this.form = this.mainRecipe.frontRecipe.createHtmlElement(FORM, FORM_CLASS);
        this.label = this.mainRecipe.frontRecipe.createHtmlElement(LABEL, LABEL_CLASS);
        this.label.textContent = this.descriptions[this.target];
        this.p = this.mainRecipe.frontRecipe.createHtmlElement(P, P_CLASS);
        this.mainRecipe.createIdAttribute(this.p, ADD_BTN_ID)
        this.icon = document.createElement(ICON);
        this.p.textContent = SAVE;
        this.mainRecipe.frontRecipe.createClassesInElement(this.icon, ICON__CLASSES);
        this.closeIcon = document.createElement(ICON);
        this.mainRecipe.frontRecipe.createClassesInElement(this.closeIcon, CLOSE_ICON_CLASSES);
        this.wrapper.appendChild(this.myRecipe);
        this.myRecipe.appendChild(this.form);
        this.myRecipe.appendChild(this.closeIcon);
        this.form.appendChild(this.label);
        this.form.appendChild(this.p);
        this.p.appendChild(this.icon);
    };

    prepareInput() {
        this.prepareCorrectForm();
        this.input = this.mainRecipe.frontRecipe.createHtmlElement(INPUT, INPUT_CLASS);
        this.input.type = INPUT_TEXT;
        this.form.appendChild(this.input);
        this.p.addEventListener('click', () => this.displayCorrectForm(this.input));
        this.closeIcon.addEventListener('click', () => this.closeForm());
    }

    prepareTextArea() {
        if (this.target === this.descriptions.length) {
            this.target = 0;
            return
        };
        this.prepareCorrectForm();
        if (this.target === this.descriptions.length - 1) {
            console.log('image');
            this.saveImage();

            return;
        }
        this.textArea = this.mainRecipe.frontRecipe.createHtmlElement(TEXT_AREA, TEXTAREA_CLASS);
        this.form.appendChild(this.textArea);
        this.p.addEventListener('click', () => this.displayCorrectForm(this.textArea));
        this.closeIcon.addEventListener('click', () => this.closeForm());
    }

    saveImage() {
        this.form.appendChild(this.prepareInputImg());
        this.picture = new Picture();
        this.p.addEventListener('click', () => this.picture.prepareImageToSave());
    };

    displayMyDishCard() {
        this.myDish.saveInStorage(this.myDish.createObj());
        this.openedRecipe.openRecipe(this.myDish);
        this.openedRecipe.closeButton();
        this.myDish.activateButtons();

        this.openedRecipe.closeRecipe();

    };

    prepareInputImg() {
        this.inputImg = this.mainRecipe.frontRecipe.createHtmlElement(INPUT, ADD_CLASS);
        this.mainRecipe.createIdAttribute(this.inputImg, MY_RECIPE_IMG_ID)
        this.inputImg.type = INPUT_FILE;
        this.inputImg.accept = ".jpg, .jpg, .png";
        return this.inputImg;
    };

    displayCorrectForm(element) {
        this.fillMyDish(this.target, element.value)
        if (this.isValueEmpty(element)) {
            this.myRecipe.remove();
            this.target++;
            this.prepareTextArea();
        };
    };

    isValueEmpty(element) {
        return element.value || element.value.trim();
    };

    closeForm() {
        this.myRecipe.remove();
        this.target = 0;
        setTimeout(() => {
            this.displayMyDishCard(this.myDish);
        }, 1000);
    };

    fillMyDish(target, value) {
        switch (target) {
            case 0:
                this.myDish.setName = value;
                break;
            case 1:
                this.myDish.setIngredients = value;
                break;
            case 2:
                this.myDish.setInstructions = value;
                break;
        };
    };
};

export const addBtn = new AddBtn();