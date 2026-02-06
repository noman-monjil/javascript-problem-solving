const vowels = ['a','e','i','o','u'];

function countVowels(str) {
    let cnt = 0;
    str = str.toLowerCase();

    for (let char of str) {
        if (vowels.includes(char)) {
            cnt++;
            console.log(char);
        }
    }
    return cnt;
}

let countVowel = countVowels("I Love");
console.log("Total vowels is :", countVowel);
 