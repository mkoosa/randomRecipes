const KEY_STORAGE = 'array'

export class Storage {
    constructor(element) {
        this.element = element;
        this.saveRecipesInStorage()
        
    };

    saveRecipesInStorage() {
        localStorage.setItem(KEY_STORAGE, JSON.stringify(this.element));

    };

};


