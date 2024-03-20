function ensureTwoDecimalPlaces(price) {
    if (typeof price !== 'number') {
        throw new Error('The price should be a number');
    }

    price = price.toFixed(2);
    
    return price;
}

export default ensureTwoDecimalPlaces;