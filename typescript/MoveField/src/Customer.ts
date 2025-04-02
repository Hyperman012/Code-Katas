import {name} from "ts-jest/dist/transformers/hoist-jest";


function dateToday() {
    return new Date();
}

export class Customer {
    private _contract: CustomerContract;
    private _discountRate!: number;
    private _name: string;

    constructor(name: string, discountRate:number) {
        this._name = name;
        this.setDiscountRate(discountRate);
        this._contract = new CustomerContract(dateToday());
    }

    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }

    get discountRate() { return this._discountRate; }
     setDiscountRate(value: number) { this._discountRate = value; }


    becomePreferred() {
        this.setDiscountRate( this.discountRate + 0.03);
    }

    applyDiscount(amount: number) {
        return amount - (amount* this.discountRate);
    }

}

class CustomerContract {
    private _startDate: Date;
    constructor(startDate: any) {
        this._startDate = startDate;
    }
}

