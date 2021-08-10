//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //we call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    //we call displayNumbers
}

//generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(startValue, endValue) {
    let numbers = [];

    //we want to get all numbers from start to end
    for(let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

//display even numbers in bold
//displays or view functions
function displayNumbers() {

}