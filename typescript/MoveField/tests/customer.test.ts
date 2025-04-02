import {describe, expect, it} from "@jest/globals";
import {Customer} from "../src/Customer";

describe("Customer", () => {
    it('should update the discountRate', () => {
        const expectedDiscountRate = 0.2;
        const customer = new Customer('name', 0.1);

        customer.setDiscountRate(expectedDiscountRate);

        expect(customer.discountRate).toBe(expectedDiscountRate);
    });
    it('should increase discount rate by 0.03', () => {
        const expectedDiscountRate = 0.13;
        const customer = new Customer('name', 0.1);

        customer.becomePreferred();

        expect(customer.discountRate).toBe(expectedDiscountRate);
    });

    it('should return the discounted amount', () => {
        const customer = new Customer('name', 0.1);

        const actualAmount = customer.applyDiscount(100);

        expect(actualAmount).toBe(90);
    })

});
