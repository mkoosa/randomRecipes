export const FRONT_CLASS = 'front';
const FRONT_HEADING_CLASS = 'front__heading';
const FRONT_BTN_CLASS = 'front__button';
const FRONT_ICONS_CLASS = ['fa-solid', 'fa-arrow-up-right-from-square'];
const FRONT_PARAGRAPH_CLASS = 'front__paragraph';

const DIV = 'div';
const H2 = 'h2';
const IMAGE = 'img';
const I = 'i';
const P = 'p';

export class FrontRecipe {
    constructor() {
        this.createFrontRecipeHTMLElements();
    };

    createFrontRecipeHTMLElements() {
        this.recipeFront = this.createHtmlElement(DIV, FRONT_CLASS);
        this.frontHeading = this.createHtmlElement(H2, FRONT_HEADING_CLASS);
        this.frontBtn = this.createHtmlElement(DIV, FRONT_BTN_CLASS);
        this.frontIcon = document.createElement(I);
        this.createClassesInIconElement(this.frontIcon);
        this.frontParagraph = this.createHtmlElement(P, FRONT_PARAGRAPH_CLASS);

    };

    createHtmlElement(element, className) {
        const domElement = document.createElement(element);
        domElement.classList.add(className);
        return domElement;

    };

    createClassesInIconElement(element) {
        FRONT_ICONS_CLASS.forEach((icon, i) => {
            element.classList.add(icon)

        });

    }

}
