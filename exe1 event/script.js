// colors of notepad
const colors = ["red", "orange", "yellow", "green", "blue", "violet"]
let count = 0

// button function
document.getElementById("add_note").addEventListener("click", () => {
    // create a new notepad inside html (inserting new div in html file)
    let add = document.createElement("div")
    add.setAttribute("class", "page")
    add.innerHTML = document.getElementById("note").value
    add.style.background = colors[count++ % colors.length]
    document.getElementById("container").appendChild(add)
})

// const stick = document.getElementById("add_note")
// stick.addEventListener("click", input_user);

// function input_user() {
//     let text = document.getElementById("note").value;
//     let add = document.createElement("div");
//     add.style.width = "100px"
//     add.style.height = "80px"
//     add.style.background = "white"
//     add.style.color = "black"
//     add.innerHTML = text
//     document.getElementById("container").appendChild(add)
    
// }

// function add_doc(text) {
//     let add = document.createElement("div");
//     add.style.width = "100px"
//     add.style.height = "80px"
//     add.style.background = "white"
//     add.style.color = "black"
//     add.innerHTML = text
//     document.getElementById("container").appendChild(add)
// }





// let add = document.createElement("div");
// add.style.width = "100px"
// add.style.height = "80px"
// add.style.background = "white"
// add.style.color = "black"
// add.innerHTML = "hello"
// document.getElementById("container").appendChild(add)