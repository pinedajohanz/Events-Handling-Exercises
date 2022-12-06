function convert_CelToFahr() {
    // get input user (value) from html
    let c = document.getElementById("cel_text").value;
    let f = (c * (9/5)) + 32;
    // display result inside html
    document.getElementById("fahr_text").value = f;
}






// program to convert celsius to fahrenheit
// ask the celsius value to the user 
// const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
// const fahrenheit = (celsius * 1.8) + 32

// display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);