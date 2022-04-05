import { Common } from "./Common.esm.js";
import { FrontRecipe, DIV, H2, IMAGE, I, P, FRONT_BTN_ID} from "./FrontRecipe.esm.js";


const MAIN_ID = 'mainId'

const MAIN_HEADER = 'main__header';
const HEADER_HEADING = 'header__heading';
const HEADER_ICON = ['fa-solid', 'fa-x', 'header__icon'];

const MAIN_CONTENT = 'main__content'; 
const CONTENT_WRAPPER = 'content__wrapper';
const CONTENT_HEADING = 'content__heading';
const CONTENT_PARAGRAPH = 'content__paragraph';

const CONTENT_IMG_WRAPPER = 'content__img-wrapper';
const CONTENT_IMG = 'content__img';

const BOTTOM = 'content__bottom';
const BOTTOM_PARAGRAPH = 'bottom__paragraph';
const BOTTOM_LIST = 'bottom__list';
const BOTTOM_ELEMENT = 'bottom__element';

const CONTENT__FOOTER = 'footer';

const FOOTER_PARAGRAPH = 'footer__paragraph';
const FOOTER_BTN_DELETE = ['footer__btn', 'footer__btn--delete'];
const FOOTER_BTN_EDIT = ['footer__btn', 'footer__btn--edit'];
const FOOTER_BTN_SAVE = ['footer__btn', 'footer__btn--save'];

const DELETE_ICON = ['fa-solid', 'fa-trash-can'];
const EDIT_ICON = ['fa-solid', 'fa-pen'];
const SAVE_ICON = ['fa-solid', 'fa-floppy-disk'] 

class MainRecipe extends Common {
    constructor() {
        super();
        this.frontRecipe = new FrontRecipe();
        this.mainRecipe = this.bindElement(MAIN_ID);
        this.createMainRecipeHTMLElements();
        this.createRecipeToOpen();
    
    
    }
    
    createMainRecipeHTMLElements() {
        this.mainHeader = this.frontRecipe.createHtmlElement(DIV,MAIN_HEADER);
        this.headerHeading = this.frontRecipe.createHtmlElement(H2, HEADER_HEADING);
        this.headerIcon = document.createElement(I);
        this.mainContent = this.frontRecipe.createHtmlElement(DIV, MAIN_CONTENT);
        this.contentWrapper = this.frontRecipe.createHtmlElement(DIV, CONTENT_WRAPPER);
        this.contentHeading = this.frontRecipe.createHtmlElement('h3', CONTENT_HEADING);
        this.contentParagraph = this.frontRecipe.createHtmlElement(P, CONTENT_PARAGRAPH);
        this.contentImgWrapper = this.frontRecipe.createHtmlElement(DIV, CONTENT_IMG_WRAPPER);
        this.contentImg = this.frontRecipe.createHtmlElement(IMAGE, CONTENT_IMG);
        this.contentBottom = this.frontRecipe.createHtmlElement(DIV, BOTTOM);
        this.bottomParagraph = this.frontRecipe.createHtmlElement(P, BOTTOM_PARAGRAPH);
        this.bottomList = this.frontRecipe.createHtmlElement('ul', BOTTOM_LIST);
        this.bottomElement = this.frontRecipe.createHtmlElement('li', BOTTOM_ELEMENT);
        this.contentFooter = this.frontRecipe.createHtmlElement('footer', CONTENT__FOOTER);
        this.deleteBtn = this.frontRecipe.createHtmlElement(DIV);
        this.deleteIcon = document.createElement(I);
        this.deleteParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);
        
        
        
        this.editBtn = this.frontRecipe.createHtmlElement(DIV);
        this.editIcon = document.createElement(I);
        this.editParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);
        
        this.saveBtn = this.frontRecipe.createHtmlElement(DIV);
        this.saveIcon = document.createElement(I);
        this.saveParagraph = this.frontRecipe.createHtmlElement(P, FOOTER_PARAGRAPH);

        
    
        
    }
    
    createRecipeToOpen() {
        
    
        const mainHeader = this.mainRecipe.appendChild(this.mainHeader);
        mainHeader.appendChild(this.headerHeading).innerText = 'Lorem, ipsum.';
        const headerIcon = mainHeader.appendChild(this.headerIcon);
        this.frontRecipe.createClassesInElement(headerIcon, HEADER_ICON);
        

        const mainContent = this.mainRecipe.appendChild(this.mainContent);
        const contentWrapper = mainContent.appendChild(this.contentWrapper);
        const contentHeading = contentWrapper.appendChild(this.contentHeading);
        contentHeading.innerText = 'ingredients'
        const contentParagraph = contentWrapper.appendChild(this.contentParagraph);
        contentParagraph.innerText = 'lorem';
        
        const contentImgWrapper = mainContent.appendChild(this.contentImgWrapper);
        const image = contentImgWrapper.appendChild(this.contentImg);
        image.src = "images/275771645_3265929490354911_9161895497823093846_n (2).jpg";
        
        
        const contentBottom = this.mainRecipe.appendChild(this.contentBottom);
        const bottomParagraph = contentBottom.appendChild(this.bottomParagraph);
        bottomParagraph.innerText = 'instructions';
        const bottomList = contentBottom.appendChild(this.bottomList);

        const bottomElement = bottomList.appendChild(this.bottomElement);
        bottomElement.innerText = 'lorem';

        const footer = this.mainRecipe.appendChild(this.contentFooter);

        const footerBtnDelete = footer.appendChild(this.deleteBtn);
        const deleteIcon = footerBtnDelete.appendChild(this.deleteIcon);
        const deleteParagraph = footerBtnDelete.appendChild(this.deleteParagraph);
        deleteParagraph.innerText = 'delete';
        this.frontRecipe.createClassesInElement(footerBtnDelete, FOOTER_BTN_DELETE )
        this.frontRecipe.createClassesInElement(deleteIcon, DELETE_ICON);
        
        
        
        const footerBtnEdit = footer.appendChild(this.editBtn);
        const editIcon = footerBtnEdit.appendChild(this.editIcon);
        const editParagraph = footerBtnEdit.appendChild(this.editParagraph);
        editParagraph.innerText = 'edit';
        this.frontRecipe.createClassesInElement(footerBtnEdit, FOOTER_BTN_EDIT )
        this.frontRecipe.createClassesInElement(editIcon, EDIT_ICON);
        
        
        
        const footerBtnSave =  footer.appendChild(this.saveBtn);
        const saveIcon = footerBtnSave.appendChild(this.saveIcon);
        const saveParagraph = footerBtnSave.appendChild(this.saveParagraph);
        saveParagraph.innerText = 'save';
        this.frontRecipe.createClassesInElement(footerBtnSave, FOOTER_BTN_SAVE )
        this.frontRecipe.createClassesInElement(saveIcon, SAVE_ICON);
    }
    
    openRecipe() {
        // console.log(mainRecipe)
        const recipesToOpen = document.querySelectorAll(`#${FRONT_BTN_ID}`);
        

        
        
    }
    
    
    
    
}



export const mainRecipe = new MainRecipe();
// console.log(mainRecipe)
// console.log(main)



// console.log(recipes)