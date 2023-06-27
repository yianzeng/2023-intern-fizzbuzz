// This is our main function
function fizzbuzz_old() {
    for (let num = 1; num < 101; num++) {

        if (num % 3 == 0) {
            if (num % 5 == 0) {
                console.log('FizzBuzz')
            } else {
                console.log('Fizz')
            }
        }
        else if (num % 5 == 0) {
            console.log('Buzz')
        }
        else {
            console.log(num)
        }
    }
}

function fizzbuzz() {
    for (let num = 1; num < 16; num++) {
        let fizz = '', buzz = '';
        if (num % 3 === 0) {
            fizz = 'Fizz'
        }
        if (num % 5 === 0) {
            buzz = 'Buzz'
        } if (fizz+buzz) {
            console.log(fizz+buzz)
        } else {
            console.log(num)
        }
    }
}
// Now, we run the main function:
fizzbuzz();

