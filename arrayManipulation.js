
function processArray(numbers) {

    for (let num of numbers){
        if (typeof num !== 'number'){
            throw new Error("All elements must be numbers")
        }
    }

    let newArray = [];
    for (let num of numbers){
        if (num % 2 === 0){
            newArray.push(num * num);
        } else {
            newArray.push(num * 3);
        }
    }   
    return newArray;
}


function formatArrayStrings(strings, numbers){

    if (numbers.length !== strings.length){
        throw new Error("Both arrays must have the same length")
    }

    let newArray = [];
    for(let i = 0; i < strings.length; i++){
        if (numbers[i] % 2 === 0) {
            newArray.push(strings[i].toUpperCase()); 
        } else {
            newArray.push(strings[i].toLowerCase())
        }
    }
    return newArray;
}



//Example to test 
const numbersArray = [2,3,4,5,6];
const result = processArray(numbersArray);
console.log("New array is: ", result)

const stringsArray = ["One", "Two", "Four", "Five", "Seven",];
const formattedResult = formatArrayStrings(stringsArray, result);
console.log("Formatted string array: ",formattedResult)
