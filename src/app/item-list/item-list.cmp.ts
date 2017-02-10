import { ItemListCtrl } from "./item-list.ctrl";

export class ItemListCmp {
    controller = ItemListCtrl;
    template = require("./item-list.html");
    bindings = {
        items: "<",
        onUpdate: "&"
    }
}