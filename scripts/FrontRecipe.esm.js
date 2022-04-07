const FRONT_HEADING_CLASS = 'front__heading';
const FRONT_ICONS_CLASS = ['fa-solid', 'fa-arrow-up-right-from-square'];
const FRONT_PARAGRAPH_CLASS = 'front__paragraph';


export const FRONT_BTN_CLASS = 'front__button';
export const FRONT_BTN_ID = 'frontBtn'
export const FRONT_CLASS = 'front';
export const DIV = 'div';
export const H2 = 'h2';
export const IMAGE = 'img';
export const I = 'i';
export const P = 'p';

export class FrontRecipe {
    constructor() {
        this.createFrontRecipeHTMLElements();
    };

    createFrontRecipeHTMLElements() {
        this.recipeFront = this.createHtmlElement(DIV, FRONT_CLASS);
        this.frontHeading = this.createHtmlElement(H2, FRONT_HEADING_CLASS);
        this.frontBtn = this.createHtmlElement(DIV, FRONT_BTN_CLASS);
        this.frontBtn.setAttribute('id', FRONT_BTN_ID);

        this.frontIcon = document.createElement(I);
        this.createClassesInElement(this.frontIcon, FRONT_ICONS_CLASS);


        this.frontParagraph = this.createHtmlElement(P, FRONT_PARAGRAPH_CLASS);

    };

    createHtmlElement(element, className) {
        const domElement = document.createElement(element);
        domElement.classList.add(className);
        return domElement;

    };

    createClassesInElement(element, icons) {
        icons.forEach((icon) => {
            element.classList.add(icon)

        });

    }

}
