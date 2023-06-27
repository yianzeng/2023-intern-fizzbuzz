// This is our main function
function fizzbuzz() {
    for (let num = 120; num < 144; num++) {

        let fizz = '',
            buzz = '',
            bang = '',
            bong = '',
            fezz = '',
            word = '',
            reverse = false;

        if (num % 3 === 0) {
            fizz = 'Fizz'
        }
        if (num % 5 === 0) {
            buzz = 'Buzz'
        }
        if (num % 7 === 0) {
            bang = 'Bang'
        }
        if (num % 11 === 0 && !(num % 13 === 0)) {
            word = 'Bong'
        } else if (num % 11 === 0 && num % 13 === 0) {
            if (num % 17 === 0) {
                word = bong + bang + buzz + fezz + fizz
            } else
        }



        // print statement
        if (word) {
            console.log(word)
        } else {
            console.log(num)
        }
    }
}
// Now, we run the main function:
fizzbuzz();

