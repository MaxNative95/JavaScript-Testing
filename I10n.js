var price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(price.format(1900000));
