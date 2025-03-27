export function printOwing(invoice: Invoice)
{
   let outstanding = 0;

   console.log("***********************");
   console.log("**** Customer Owes ****");
   console.log("***********************");

   // calculate outstanding
   for (const o of invoice.orders) {
      outstanding += o.amount;
   }

   // record due date
   const today = Clock.today;
   invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

   //print details
   console.log(`name: ${invoice.customer}`);
   console.log(`amount: ${outstanding}`);
   console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
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


