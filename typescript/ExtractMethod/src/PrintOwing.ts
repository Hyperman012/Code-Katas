function printHeader() {
   console.log("***********************");
   console.log("**** Customer Owes ****");
   console.log("***********************");
}

function calculateOutstandingBalance(invoice: Invoice) {
   let accumulator = 0;
   for (const o of invoice.orders) {
      accumulator += o.amount;
   }
   return accumulator;
}

function calculateDueDate() {
   const today = Clock.today;
   return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice: Invoice, outstanding: number) {
   console.log(`name: ${invoice.customer}`);
   console.log(`amount: ${outstanding}`);
   console.log(`due: ${invoice.dueDate!.toLocaleDateString()}`);
}

export function printOwing(invoice: Invoice)
{
   printHeader();
   invoice.dueDate = calculateDueDate();
   const outstandingBalance = calculateOutstandingBalance(invoice);
   printDetails(invoice, outstandingBalance);
}

export interface Order {
   amount: number;

}

export  interface Invoice {
   orders: Order[];
   dueDate?: Date;
   customer: string;

}
export class Clock{
   static get today()
   {
      return new Date(Date.now());
   }
}


