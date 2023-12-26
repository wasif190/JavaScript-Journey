function calculateTotal(discount, ...prices) {
    const discountedPrices = prices.map(price => price * ( 1- discount));
    const total = discountedPrices.reduce((acc, price) => acc + price, 0);
    return total.toFixed(2);
}

const finalPrice = calculateTotal(0.1, 20, 30, 50, 80);
console.log(`Final Price: $${finalPrice}`);

// The Rest Operator (...prices) collects all the additional arguments passed to the function into an array called 'prices'
// The Rest parameter (...prices) must be the last parameter
