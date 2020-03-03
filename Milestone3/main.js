
function fibonacci (x) {
    let previous = 0;
    let previous2 = 1;
    let y = 0;


    for (let i = 2; i <= x; i++ ) {
        y = previous + previous2;
        previous = previous2;
        previous2 = y;
    }

    return y;
}
console.log(fibonacci(3))
