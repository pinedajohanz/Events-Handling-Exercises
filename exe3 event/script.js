const start_seconds = 10;
let time = start_seconds;


const countdown_element = document.getElementById("countdown");
// const rocket = document.getElementById("countdown")


const cd = setInterval(update_countdown, 1000);

function update_countdown() {;
    let seconds = Math.floor (time % 11)
    // seconds.style.border
    time--;

    if (seconds == 0) {
        // it will not display the last countdown number
        countdown_element.innerHTML = "";

        let rocket_img = document.createElement("img"); // data type nya is HTML Element

        rocket_img.src = 'https://i.pinimg.com/originals/26/6e/e9/266ee9a10aa3bdb17109d3efbc5c80ba.jpg'
        rocket_img.height = 400
        rocket_img.width = 400
        rocket_img.style.borderRadius = "50%"
        
        // this will display the rocket image inside the html (id = countdown)
        document.getElementById("countdown").appendChild(rocket_img);

        // let countdown_element =  '<img width="100" height="100" src="https://i.pinimg.com/originals/26/6e/e9/266ee9a10aa3bdb17109d3efbc5c80ba.jpg"';
        // const display = countdown_element;
        // document.getElementById("countdown").innerHTML = countdown_element;
        
        clearInterval(cd);
    }
    else {
        countdown_element.innerHTML = `<span id="display_sec">${seconds}</span>`;

        // seconds.style.border = "5";
        // seconds.style.color = "black";

    }
    
};

// https://i.pinimg.com/originals/26/6e/e9/266ee9a10aa3bdb17109d3efbc5c80ba.jpg

// document.getElementById('imageDiv').innerHTML = '<img width="100" height="100" src="images/hydrangeas.jpg">';

// https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript