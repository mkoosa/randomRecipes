const RECIPE = 'recipe';
const RECIPE_ID = 'recipeId'

const RECIPE_HEADING = 'recipe__heading';
const RECIPE_HEADING_ID = 'recipeHeadingId';

const IMAGE_WRAPPER = 'recipe__img-wrapper'

const RECIPE_IMG = 'recipe__img';
const RECIPE_IMG_ID = 'recipeImgId';


const RECIPE_PARAGRAPH = 'recipe__paragraph';
const RECIPE_PARAGRAPH_ID = 'recipeParagraphId'

const RECIPE_BTN = 'recipe__button';
const RECIPE_BTN_ID = 'recipeButtonID';

const RECIPE_ICONS = ['fa-solid', 'fa-arrow-up-right-from-square'];
const RECIPE_ICON_ID = 'recipeID';

const RECIPE_PARAGRAPH_BTN = 'recipe__paragraph-btn';
const RECIPE_PARAGRAPH_BTN_ID = 'recipeParagraphBtnId';


const DIV = 'div';
const H2 = 'h2';
const IMAGE = 'img';
const I = 'i';
const P = 'p';

export class Recipe {
    constructor() {
        this.createHTMLElements();
    };

    createHTMLElements() {
        this.recipeWrapper = this.createHtmlElement(DIV, RECIPE,RECIPE_ID);
        this.h2Element = this.createHtmlElement(H2, RECIPE_HEADING, RECIPE_HEADING_ID);
        this.imageWrapper = this.createHtmlElement(DIV, IMAGE_WRAPPER);
        this.image = this.createHtmlElement(IMAGE, RECIPE_IMG, RECIPE_IMG_ID);
        this.paragraph = this.createHtmlElement(P, RECIPE_PARAGRAPH, RECIPE_PARAGRAPH_ID);
        this.recipeBtn = this.createHtmlElement(DIV, RECIPE_BTN, RECIPE_BTN_ID);
        this.icon = document.createElement(I);
        this.createClassesInIconElement(this.icon);
        this.paragraphBtn = this.createHtmlElement(P, RECIPE_PARAGRAPH_BTN, RECIPE_BTN_ID);

    };

    createHtmlElement(element, className, idName) {
        const domElement = document.createElement(element);
        domElement.classList.add(className);
        domElement.setAttribute('id', idName);
        return domElement;

    };

    createClassesInIconElement(element) {
        RECIPE_ICONS.forEach((icon, i) => {
            element.classList.add(icon)

        });

    }

}