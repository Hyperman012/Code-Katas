export class Order {
    private _data: any;

    constructor(aRecord: any) {
        this._data = aRecord;
    }

    get quantity() {
        return this._data.quantity;
    }

    get itemPrice() {
        return this._data.itemPrice;
    }

    get price() {
        const number = Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
        const number1 = Math.min(this.applesauce * 0.1, 100);
        return this.applesauce -
            number +
            number1;
    }

    private get applesauce() {
        return this.quantity * this.itemPrice;
    }
}