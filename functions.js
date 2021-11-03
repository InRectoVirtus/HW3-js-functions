/* ----------------------------------------------------------------------------- */

console.log('------------- #4')

function sum(a, b) {
    return a + b;
}
console.log(sum(8, 10))

function min(a, b) {
    return a - b;
}
console.log(min(2, 4))

function umn(a, b) {
    return a * b;
}
console.log(umn(3, 3))

function del(a, b) {
    return a / b;
}
console.log(del(200, 10))

/* ----------------------------------------------------------------------------- */

console.log('------------- #5')

function otschetPlus(n) {

    for(i = 1; i <= n; i++){
        console.log(i)
    }
}

otschetPlus(8);

/* ----------------------------------------------------------------------------- */

console.log('------------- #6')

function otschetMinus(n) {

    for(i = n; i >= 1; i--){
        console.log(i);
    }
}

otschetMinus(20);

/* ----------------------------------------------------------------------------- */

console.log('------------- #7')

function pow(x, n) {
    
    let a = 1;

    for(i = 1; i <= n; i++) {
        a *= x;
    }

    console.log(a)
}

console.log(pow(3,3))

/* ----------------------------------------------------------------------------- */

console.log('------------- #8')

function isBigger(a, b) {
    return a > b;
}

console.log(isBigger(3,2))

/* ----------------------------------------------------------------------------- */

console.log('------------- #9')

function isSmaller(a, b) {
    return a < b;
}

console.log(isSmaller(2, 3))

/* ----------------------------------------------------------------------------- */