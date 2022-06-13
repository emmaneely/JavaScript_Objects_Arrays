console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(array) {
    let sum = 0;
    array.forEach((number) => {
        sum += number;
    });
    return sum;
}
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};
book.title = "Pride and Prejudice";
book.author = "Jane Austen";
book.pages = 432;
book.readCount = 1;
book.info = function() {
    console.log(`${this.title} by ${this.author} has ${this.pages} pages, and I have read it ${this.readCount} time(s).`);
};
book.info();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
function reverseWords(sentence) {
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWord = letters.join("");
        result.push(reverseWord);
    }
    return result.join(" ");
}
console.log(reverseWords(sentence));
console.log(reverseWords("Hello my name is Emma"));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function csvConverter(csvData) {
    let rows = csvData.split("\n");
    let headers = rows[0].split(",");
    let result = []
    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let data = rows[i].split(",");
        console.log("data", data);
        data.forEach((val, idx) => {
            obj[headers[idx]] = val;
        });
        result.push(obj);
    }
    return result;
}
csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvConverter(csvData));