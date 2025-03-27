import { describe, expect, it } from "@jest/globals";
import {Invoice, printOwing} from "../src/PrintOwing";

describe("PrintOwing", () => {
    it('should print an empty invoice', () => {
        const emptyInvoice: Invoice = {customer: "", dueDate: undefined, orders: []}
        printOwing(emptyInvoice)
    });

});
