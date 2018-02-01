slowMath.add (6, 2)
.then (
    (sum) => {
        console.log(sum);
        return slowMath.multiply (sum, 2);
})
.then (
    (product) => {
        console.log(product);
        return slowMath.subtract (product, 3);
})
.then (
    (difference) => {
        console.log(difference);
        return slowMath.add (difference, 98);
})
.then (
    (sum) => {
        console.log(sum);
        return slowMath.remainder (sum, 2);
})
.then (
    (dividend) => {
        console.log(dividend);
        return slowMath.multiply (dividend, 50);
})
.then (
    (product) => {
        console.log(product);
        return slowMath.remainder (product, 40);
})
.then (
    (dividend) => {
        console.log(dividend);
        return slowMath.add (dividend, 32);
})
.then (
    (sum) => {
        console.log(`The final result is ${sum}`);
    })
.catch ((err) => {
    console.log(err);
});
