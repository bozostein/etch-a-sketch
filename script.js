const resizeBtn = document.querySelector("#resize-btn");
const board = document.querySelector('.board');

//  Div Creation function along with mouseover
    

function createDiv(num) {
    // Clear existing grid items
    // Set the flex container styles
    // Calculate the size of each square
    const squareSize = 100 / num; // 100% divided by number of columns

    // Create new grid items
    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        square.style.border = "1px solid #0000004d";
        square.style.boxSizing = "border-box"; 
        board.appendChild(square);

         // Add event listeners for hover and click
         square.addEventListener('mouseover', () => {
            square.classList.add('active');
        });

        board.appendChild(square);
    }
}


// gridsize adjuster button addeventlistener
resizeBtn.addEventListener("click", () => {
    let numNew = parseInt(prompt("Please enter your desired grid size. (MAX 100)"), 10);
    if (numNew > 0 && numNew <= 100 && !isNaN(numNew)) {
        createDiv(numNew);
    } else {
        alert("ERROR! Your input is invalid, please enter a NUMBER between 1 and 100!");
    }
});