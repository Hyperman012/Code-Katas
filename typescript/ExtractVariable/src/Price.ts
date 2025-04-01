import {Order} from "./Order";

function price(order: Order) {
    //price is base price - quantity discount + shipping
    let basePrice = order.quantity * order.itemPrice;
    let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    let shipping = Math.min(basePrice * 0.1, 100);

    return basePrice - quantityDiscount + shipping;
}


