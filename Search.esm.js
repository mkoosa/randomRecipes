import { Common } from "./scripts/Common.esm.js";

const SEARCH_INPUT_ID = 'searchInput';




class Search extends Common{
    constructor() {
        super();
        this.searchInput = this.bindElement(SEARCH_INPUT_ID);
    }




}





export const search = new Search();
console.log(search);
