function hello(name) {
    let phrase = `Hello, ${name}!`;
    debugger;  // <-- the debugger stops here
    say(phrase);
}

if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
) {
    letTheSorceryBegin();
}

function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //              <--
    return result;
}

function pow(x,n) {
    let result=1;
    for(let i=0;i<n;i++) {result*=x;}
    return result;
}
let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
    alert(pow(x,n))
}

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        alert(i);
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

addWhiskey(glass);
addJuice(glass);
function addWhiskey(container) {
    for(let i = 0; i < 10; i++) {
        let drop = getWhiskey();
        //...
    }
}
function addJuice(container) {
    for(let t = 0; t < 3; t++) {
        let tomato = getTomato();
        //...
    }
}

describe("pow", function() {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }
    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }
});

