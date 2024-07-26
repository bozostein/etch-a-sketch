const container = document.querySelector(".container");
const mainDiv = document.createElement("div");


mainDiv.classList.add("main");
mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";

function getDivInput(input)  {
    const innerInput = prompt ("Please Enter How many divs you want to create? MIN: 25, MAX: 100");
    if (innerInput === null) {
        alert("ERROR: Invalid Input, please use numbers");
    } else if (innerInput < 25 || innerInput > 100){
        alert("ERROR: You can enter minimum of 25 and maximum of 100");
    }else if (innerInput !== Number){
        alert("ERROR: Please use only NUMBERS! You smartass!")
    }
    else {
        return innerInput
    }
}


const maxButton = document.createElement('button');
maxButton.classList.add("Lines");
maxButton.innerText = "Test";
maxButton.onclick = getDivInput;


const inputDiv = getDivInput();


// Function to create divs
function createDivs(num) {
    for (let i = 0; i < num; i++) {
        const createdDivs = document.createElement("div");
        createdDivs.classList.add("createdDiv");
        createdDivs.style.width = "100px";
        createdDivs.style.height = "50px";
        createdDivs.style.border = "1px solid black";
        createdDivs.style.margin = "500px 0 0 0 "
        mainDiv.appendChild(createdDivs);
    }
}






mainDiv.appendChild(maxButton);
container.appendChild(mainDiv);
createDivs(inputDiv);