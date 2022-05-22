export class Common {
    constructor(elementId) {
        if (typeof elementId === 'undefined') {
            return
        };
        this.element = this.bindElement(elementId);
    };

    bindElement(elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`${element} doesn't exist`)
        };
        return element;
    };
};

