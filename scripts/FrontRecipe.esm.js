const FRONT_CLASS = 'front';
const FRONT_ID = 'FrontId'

const FRONT_HEADING_CLASS = 'front__heading';
const FRONT_HEADING_ID = 'frontHeadingId';

const FRONT_BTN_CLASS = 'front__button';
const FRONT_BTN_ID = 'frontButtonID';

const FRONT_ICONS_CLASS = ['fa-solid', 'fa-arrow-up-right-from-square'];
const FRONT_ICON_ID = 'frontIconId';

const FRONT_PARAGRAPH_CLASS = 'front__paragraph';
const FRONT_PARAGRAPH_ID = 'frontParagraphId';


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
        this.recipeFront = this.createHtmlElement(DIV, FRONT_CLASS, FRONT_ID);
        this.frontHeading = this.createHtmlElement(H2, FRONT_HEADING_CLASS, FRONT_HEADING_ID);
        this.frontBtn = this.createHtmlElement(DIV, FRONT_BTN_CLASS, FRONT_BTN_ID);
        this.frontIcon = document.createElement(I);
        this.createClassesInIconElement(this.frontIcon);
        this.frontIcon.setAttribute('id', FRONT_ICON_ID);
        this.frontParagraph = this.createHtmlElement(P, FRONT_PARAGRAPH_CLASS, FRONT_PARAGRAPH_ID);

    };

    createHtmlElement(element, className, idName) {
        const domElement = document.createElement(element);
        domElement.classList.add(className);
        domElement.setAttribute('id', idName);
        return domElement;

    };

    createClassesInIconElement(element) {
        FRONT_ICONS_CLASS.forEach((icon, i) => {
            element.classList.add(icon)

        });

    }

}

console.log('ok')