// This is our main function

function fezz_index(word) {
    return word in ['Buzz', 'Bang', 'Bong']
}

function fizzbuzz() {
    for (let num = 120; num < 144; num++) {

        if (num % 11 === 0 && !(num % 13 === 0)) {
            console.log('Bong');
            break;
        }
        else {
            let word_arr = [];
            //let fezz_index = 0;
            if (num % 3 === 0) {
                word_arr.push('Fizz');
            //    fezz_index++
            }
            if (num % 5 === 0) {
                word_arr.push('Buzz')
            }
            if (num % 7 === 0) {
                word_arr.push('Bang')
            }
            if (num % 13 === 0) {
                let index = word_arr.findIndex(fezz_index)
                word_arr.splice(index, 0, 'Fezz')
                if (num % 11 === 0) {
                    word_arr.push('Bong')
                }
            }
            if (num % 17 === 0) {
                console.log(word_arr.join())
            } else {
                console.log(word_arr.reverse().join())
            }
        }
        // need to add case to give number
    }
}
// Now, we run the main function:
fizzbuzz();

