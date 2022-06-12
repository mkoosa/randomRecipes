
import {
    FrontRecipe,
    DIV,
    H2,
    IMAGE,
    I,
    P,
} from "./FrontRecipe.esm.js";

export const MAIN_CLASS = 'main';
const MAIN_HEADER_CLASS = 'main__header';
const HEADER_HEADING_CLASS = 'header__heading';
const HEADER_ICON_CLASSES = ['fa-solid', 'fa-x', 'header__icon'];
const MAIN_CONTENT_CLASS = 'main__content';
const CONTENT_WRAPPER_CLASS = 'content__wrapper';
const CONTENT_HEADING_CLASS = 'content__heading';
const CONTENT_IMG_CLASSES = ['content__img', 'img-fluid'];
const BOTTOM_CLASS = 'content__bottom';
const BOTTOM_PARAGRAPH_CLASS = 'bottom__paragraph';
const SECOND_BOTTOM_PARAGRAPH_CLASS = 'secondBottom__paragraph';
const CONTENT_FOOTER_CLASSES = ['footer', 'row', 'text-center'];
const FOOTER_PARAGRAPH_CLASS = 'footer__paragraph';
const FOOTER_BTN_DELETE_CLASSES = ['footer__btn', 'footer__btn--delete','col-12', 'col-md-4'];
const FOOTER_BTN_EDIT_CLASSES = ['footer__btn', 'footer__btn--edit','col-12', 'col-md-4'];
const FOOTER_BTN_SAVE_CLASSES = ['footer__btn', 'footer__btn--save','col-12', 'col-md-4'];
const DELETE_ICON_CLASSES = ['fa-solid', 'fa-trash-can'];
const EDIT_ICON_CLASSES = ['fa-solid', 'fa-pen'];
const SAVE_ICON_CLASSES = ['fa-solid', 'fa-floppy-disk']
const FOOTER = 'footer';

const H3_ELEMENT = 'h3';
const DELETE_TXT = 'delete';

const SAVE_TXT = 'save';
const EDIT_TXT = 'edit';
const ID = 'id';
const BODY_ELEMENT = 'body';

export const PREPARATION_ID = 'preparation';
export const EDIT_BTN_ID = "EDIT";
export const FOOTER_PARAGRAPH_ID = 'footerParagraph';
export const DELETE_BTN_ID = "DELETE";
export const SAVE_BTN_ID = "SAVE";
export const CONTENT_PARAGRAPH_CLASS = 'content__paragraph';
export const HEADER_ICON_ID = 'close'
export const MAIN_ID = 'mainId';
export const MAIN_CONTENT_ID = 'mainContentId';

export class MainRecipe{
    constructor() {
        this.frontRecipe = new FrontRecipe();
    };
    
    createMainRecipe() {
        this.main = this.frontRecipe.createHtmlElement(DIV, MAIN_CLASS);
        this.main.setAttribute(ID, MAIN_ID);    
        document.querySelector(BODY_ELEMENT).appendChild(this.main);
        return this.main;
    }
    
    createMainRecipeHTMLElements() {
        this.mainHeader = this.frontRecipe.createHtmlElement(DIV, MAIN_HEADER_CLASS);
        this.headerHeading = this.frontRecipe.createHtmlElement(H2, HEADER_HEADING_CLASS);
        this.headerIcon = document.createElement(I);
        this.headerIcon.setAttribute(ID, HEADER_ICON_ID);
        this.mainContent = this.frontRecipe.createHtmlElement(DIV, MAIN_CONTENT_CLASS);
        this.contentWrapper = this.frontRecipe.createHtmlElement(DIV, CONTENT_WRAPPER_CLASS);
        this.contentHeading = this.frontRecipe.createHtmlElement(H3_ELEMENT, CONTENT_HEADING_CLASS);
        this.contentImg = document.createElement(IMAGE);
        this.frontRecipe.createClassesInElement(this.contentImg, CONTENT_IMG_CLASSES);
        this.contentBottom = this.frontRecipe.createHtmlElement(DIV, BOTTOM_CLASS);
        this.bottomParagraph = this.frontRecipe.createHtmlElement(P, BOTTOM_PARAGRAPH_CLASS);
        this.secondBottomParagraph = this.frontRecipe.createHtmlElement(P, SECOND_BOTTOM_PARAGRAPH_CLASS);
        this.contentFooter = document.createElement(FOOTER);
        this.frontRecipe.createClassesInElement(this.contentFooter, CONTENT_FOOTER_CLASSES);
        this.deleteBtn = this.frontRecipe.createHtmlElement(DIV);
        this.deleteIcon = document.createElement(I);
        this.deleteParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH_CLASS);
        this.editBtn = this.frontRecipe.createHtmlElement(DIV);
        this.editIcon = document.createElement(I);
        this.editParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH_CLASS);
        this.saveBtn = this.frontRecipe.createHtmlElement(DIV);
        this.saveIcon = document.createElement(I);
        this.saveParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH_CLASS);
        this.createIdAttribute(this.mainContent, MAIN_CONTENT_ID);
        this.createIdAttribute(this.saveBtn, SAVE_BTN_ID);
        this.createIdAttribute(this.editBtn, EDIT_BTN_ID);
        this.createIdAttribute(this.deleteBtn, DELETE_BTN_ID);
        this.createIdAttribute(this.secondBottomParagraph, PREPARATION_ID);
        this.createIdAttribute(this.editParagraph, FOOTER_PARAGRAPH_ID);
    };
    
    createRecipeToOpen() {
        this.mainRecipe = this.createMainRecipe();
        const mainHeader = this.mainRecipe.appendChild(this.mainHeader);
        mainHeader.appendChild(this.headerHeading);
        const headerIcon = mainHeader.appendChild(this.headerIcon);
        this.frontRecipe.createClassesInElement(headerIcon, HEADER_ICON_CLASSES);
        const mainContent = this.mainRecipe.appendChild(this.mainContent);
        mainContent.appendChild(this.contentImg);
        const contentWrapper = mainContent.appendChild(this.contentWrapper);
        contentWrapper.appendChild(this.contentHeading);
        const contentBottom = this.mainRecipe.appendChild(this.contentBottom);
        contentBottom.appendChild(this.bottomParagraph);
        contentBottom.appendChild(this.secondBottomParagraph);
        const footer = this.mainRecipe.appendChild(this.contentFooter);
        const footerBtnDelete = footer.appendChild(this.deleteBtn);
        const deleteIcon = footerBtnDelete.appendChild(this.deleteIcon);
        const deleteParagraph = footerBtnDelete.appendChild(this.deleteParagraph);
        deleteParagraph.innerText = DELETE_TXT;
        this.frontRecipe.createClassesInElement(footerBtnDelete, FOOTER_BTN_DELETE_CLASSES);
        this.frontRecipe.createClassesInElement(deleteIcon, DELETE_ICON_CLASSES);
        const footerBtnEdit = footer.appendChild(this.editBtn);
        const editIcon = footerBtnEdit.appendChild(this.editIcon);
        const editParagraph = footerBtnEdit.appendChild(this.editParagraph);
        editParagraph.innerText = EDIT_TXT;
        this.frontRecipe.createClassesInElement(footerBtnEdit, FOOTER_BTN_EDIT_CLASSES)
        this.frontRecipe.createClassesInElement(editIcon, EDIT_ICON_CLASSES);
        const footerBtnSave = footer.appendChild(this.saveBtn);
        const saveIcon = footerBtnSave.appendChild(this.saveIcon);
        const saveParagraph = footerBtnSave.appendChild(this.saveParagraph);
        saveParagraph.innerText = SAVE_TXT;
        this.frontRecipe.createClassesInElement(footerBtnSave, FOOTER_BTN_SAVE_CLASSES)
        this.frontRecipe.createClassesInElement(saveIcon, SAVE_ICON_CLASSES);
    };

    createIdAttribute(element, attribute) {
        element.setAttribute('id', attribute )
        
    };
}

export const mainRecipe = new MainRecipe();

