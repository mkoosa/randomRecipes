
import {
    FrontRecipe,
    DIV,
    H2,
    IMAGE,
    I,
    P,
} from "./FrontRecipe.esm.js";

export const MAIN = 'main';
const MAIN_HEADER = 'main__header';
const HEADER_HEADING = 'header__heading';
const HEADER_ICON = ['fa-solid', 'fa-x', 'header__icon'];
const MAIN_CONTENT = 'main__content';
const CONTENT_WRAPPER = 'content__wrapper';
const CONTENT_HEADING = 'content__heading';
const CONTENT_IMG_WRAPPER = 'content__img-wrapper';
const CONTENT_IMG = 'content__img';
const BOTTOM = 'content__bottom';
const BOTTOM_PARAGRAPH = 'bottom__paragraph';
const SECOND_BOTTOM_PARAGRAPH = 'secondBottom__paragraph';
const CONTENT__FOOTER = 'footer';
const FOOTER_PARAGRAPH = 'footer__paragraph';
const FOOTER_BTN_DELETE = ['footer__btn', 'footer__btn--delete'];
const FOOTER_BTN_EDIT = ['footer__btn', 'footer__btn--edit'];
const FOOTER_BTN_SAVE = ['footer__btn', 'footer__btn--save'];
const DELETE_ICON = ['fa-solid', 'fa-trash-can'];
const EDIT_ICON = ['fa-solid', 'fa-pen'];
const SAVE_ICON = ['fa-solid', 'fa-floppy-disk']
const FOOTER = 'footer';
const H3_ELEMENT = 'h3';
const DELETE_TXT = 'delete';
const SAVE_TXT = 'save';
const EDIT_TXT = 'edit';
const ID = 'id';
const BODY_ELEMENT = 'body';

export const PREPARATION_ID = 'preparation';
export const EDIT_BTN_ID = "EDIT";

export const DELETE_BTN_ID = "DELETE";
export const SAVE_BTN_ID = "SAVE";
export const CONTENT_PARAGRAPH = 'content__paragraph';
export const HEADER_ICON_ID = 'close'
export const MAIN_ID = 'mainId';
export const MAIN_CONTENT_ID = 'mainContentId';

export class MainRecipe{
    constructor() {
        this.frontRecipe = new FrontRecipe();
    };
    
    createMainRecipe() {
        this.main = this.frontRecipe.createHtmlElement(DIV, MAIN);
        this.main.setAttribute(ID, MAIN_ID);    
        document.querySelector(BODY_ELEMENT).appendChild(this.main);
        return this.main;
    }
    
    createMainRecipeHTMLElements() {
        this.mainHeader = this.frontRecipe.createHtmlElement(DIV, MAIN_HEADER);
        this.headerHeading = this.frontRecipe.createHtmlElement(H2, HEADER_HEADING);
        this.headerIcon = document.createElement(I);
        this.headerIcon.setAttribute(ID, HEADER_ICON_ID);
        this.mainContent = this.frontRecipe.createHtmlElement(DIV, MAIN_CONTENT);
        this.contentWrapper = this.frontRecipe.createHtmlElement(DIV, CONTENT_WRAPPER);
        this.contentHeading = this.frontRecipe.createHtmlElement(H3_ELEMENT, CONTENT_HEADING);
        this.contentParagraph = this.frontRecipe.createHtmlElement(P, CONTENT_PARAGRAPH);
        this.contentImgWrapper = this.frontRecipe.createHtmlElement(DIV, CONTENT_IMG_WRAPPER);
        this.contentImg = this.frontRecipe.createHtmlElement(IMAGE, CONTENT_IMG);
        this.contentBottom = this.frontRecipe.createHtmlElement(DIV, BOTTOM);
        this.bottomParagraph = this.frontRecipe.createHtmlElement(P, BOTTOM_PARAGRAPH);
        this.secondBottomParagraph = this.frontRecipe.createHtmlElement(P, SECOND_BOTTOM_PARAGRAPH);
        this.contentFooter = this.frontRecipe.createHtmlElement(FOOTER, CONTENT__FOOTER);
        this.deleteBtn = this.frontRecipe.createHtmlElement(DIV);
        this.deleteIcon = document.createElement(I);
        this.deleteParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);
        this.editBtn = this.frontRecipe.createHtmlElement(DIV);
        this.editIcon = document.createElement(I);
        this.editParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);
        this.saveBtn = this.frontRecipe.createHtmlElement(DIV);
        this.saveIcon = document.createElement(I);
        this.saveParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);
        this.createIdAttribute(this.mainContent, MAIN_CONTENT_ID);
        this.createIdAttribute(this.saveBtn, SAVE_BTN_ID);
        this.createIdAttribute(this.editBtn, EDIT_BTN_ID);
        this.createIdAttribute(this.deleteBtn, DELETE_BTN_ID);
        this.createIdAttribute(this.secondBottomParagraph, PREPARATION_ID);
    };
    
    createRecipeToOpen() {
        this.mainRecipe = this.createMainRecipe();
        const mainHeader = this.mainRecipe.appendChild(this.mainHeader);
        mainHeader.appendChild(this.headerHeading);
        const headerIcon = mainHeader.appendChild(this.headerIcon);
        this.frontRecipe.createClassesInElement(headerIcon, HEADER_ICON);
        const mainContent = this.mainRecipe.appendChild(this.mainContent);
        const contentWrapper = mainContent.appendChild(this.contentWrapper);
        contentWrapper.appendChild(this.contentHeading);
        contentWrapper.appendChild(this.contentParagraph);
        const contentImgWrapper = mainContent.appendChild(this.contentImgWrapper);
        contentImgWrapper.appendChild(this.contentImg);
        const contentBottom = this.mainRecipe.appendChild(this.contentBottom);
        contentBottom.appendChild(this.bottomParagraph);
        contentBottom.appendChild(this.secondBottomParagraph);
        const footer = this.mainRecipe.appendChild(this.contentFooter);
        const footerBtnDelete = footer.appendChild(this.deleteBtn);
        const deleteIcon = footerBtnDelete.appendChild(this.deleteIcon);
        const deleteParagraph = footerBtnDelete.appendChild(this.deleteParagraph);
        deleteParagraph.innerText = DELETE_TXT;
        this.frontRecipe.createClassesInElement(footerBtnDelete, FOOTER_BTN_DELETE)
        this.frontRecipe.createClassesInElement(deleteIcon, DELETE_ICON);
        const footerBtnEdit = footer.appendChild(this.editBtn);
        const editIcon = footerBtnEdit.appendChild(this.editIcon);
        const editParagraph = footerBtnEdit.appendChild(this.editParagraph);
        editParagraph.innerText = EDIT_TXT;
        this.frontRecipe.createClassesInElement(footerBtnEdit, FOOTER_BTN_EDIT)
        this.frontRecipe.createClassesInElement(editIcon, EDIT_ICON);
        const footerBtnSave = footer.appendChild(this.saveBtn);
        const saveIcon = footerBtnSave.appendChild(this.saveIcon);
        const saveParagraph = footerBtnSave.appendChild(this.saveParagraph);
        saveParagraph.innerText = SAVE_TXT;
        this.frontRecipe.createClassesInElement(footerBtnSave, FOOTER_BTN_SAVE)
        this.frontRecipe.createClassesInElement(saveIcon, SAVE_ICON);
    };

    createIdAttribute(element, attribute) {
        element.setAttribute('id', attribute )
        
    };
}

export const mainRecipe = new MainRecipe();

