import {
    addBtn,
    MY_RECIPE_IMG_ID
} from "./AddBtn.esm.js";
import {
    Common
} from "./Common.esm.js";

const MAX_WIDTH = 400;

export class Picture extends Common {
    constructor() {
        super();
        this.addBtn = addBtn;
        this.inputFile = this.bindElement(MY_RECIPE_IMG_ID);
    }

    prepareImageToSave() {
        const file = document.querySelector('#myRecipe__image').files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const imageElement = document.createElement('img');
            imageElement.src = e.target.result;
            imageElement.onload = (e) => {
                const canvas = document.createElement('canvas');
                const SCALE_SIZE = MAX_WIDTH / e.target.width;
                canvas.width = MAX_WIDTH;
                canvas.height = e.target.height * SCALE_SIZE;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
                const resizedImage = ctx.canvas.toDataURL(e.target, 'image/jpeg');
                this.urlResizedImage = resizedImage;
                this.addBtn.myDish.setImagePath = this.urlResizedImage;
            };
        };
        this.addBtn.closeForm();
    };
};