
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

//Example to test 
const numbersArray = [2,3,4,5,6];
const result = processArray(numbersArray);
console.log("New array is: ", result)