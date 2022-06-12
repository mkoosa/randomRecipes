export const KEY_STORAGE = 'array'

export class Storage {
    constructor(element) {
        this.element = element;
        this.saveRecipesInStorage()
        
    };
    saveRecipesInStorage() {
        localStorage.setItem(KEY_STORAGE, JSON.stringify(this.element));
    };
    
    getDetailsToDisplay(key) {
        this.details = JSON.parse(localStorage.getItem(key));
    };
    
    createNewStorageItems(key, element) {
        localStorage.setItem(key, JSON.stringify(element));
    };
};


