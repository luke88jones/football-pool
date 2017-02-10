export class ItemListCtrl {
    items: string[];
    newItem: string;
    onUpdate: Function;
    newItemForm: angular.IFormController;

    $onInit() {
        this.newItem = "";
    }

    addItem() {
        if (this.newItemForm.$valid) {
            this.items.push(this.newItem);                
            this.onUpdate({ items: this.items });

            this.newItem = "";
        }
    }

    removeItem(index: number) {
        this.items.splice(index, 1);
        this.onUpdate({ items: this.items });
    }
    
}