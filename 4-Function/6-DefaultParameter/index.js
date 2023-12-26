function orderProduct(product, quantity = 1, discount = 0) {
    const subtotal = calculateSubtotal(product, quantity);
    const discountTotal = applyDiscount(subtotal, discount);
    return `Ordered ${quantity} ${product}(s). Total: $${discountTotal}`;
}

function calculateSubtotal(product, quantity) {
    const prices = {
        laptop: 1000,
        phone: 500,
        tablet: 300,
    }
    const price = prices[product] || 0;
    return price * quantity;
}

function applyDiscount(subtotal, discount) {
    return subtotal * (1 - discount);
}

// Example 1: No specified discount
let ex1 = orderProduct('phone', 2);
console.log(ex1)

// Example 2: Specified qunatity and discount
let ex2 = orderProduct('laptop', 1, 0.2);
console.log(ex2)