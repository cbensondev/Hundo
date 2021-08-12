//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);
    }else{
        alert("You must enter integers");
    }
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
function displayNumbers(numbers) {

    let templateRows = "";

    numbers.forEach(number => {
        if (number % 2 == 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`
        } else {
            templateRows += `<tr><td>${number}</td></tr>`
        }
    });

    document.getElementById("results").innerHTML = templateRows;

}