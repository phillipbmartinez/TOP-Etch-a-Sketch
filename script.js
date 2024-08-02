// TODO 1: Create a webpage with a 16x16 grid of square divs. Create the divs using JavaScript.
const containerDiv = document.querySelector("#containerDiv");
const hoverDivs = document.querySelectorAll(".hoverDivs");


for (let i = 0; i < 256; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("hoverDivs");
    newDiv.style.border = "1px solid black";
    newDiv.style.width = "58px";
    newDiv.style.height = "58px";
    newDiv.style.flexGrow = "1";
    containerDiv.appendChild(newDiv);

    // TODO 2: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    newDiv.addEventListener("mouseover", function(){
        newDiv.style.backgroundColor = "black";
    });
}

// TODO 3: Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.
const gridBtnContainer = document.querySelector("#gridBtnContainer");
const gridBtn = document.createElement("button");
const clearBtn = document.createElement("button");

gridBtn.id = "gridBtn";
gridBtn.style.borderRadius = "5px";
gridBtn.textContent = "Change Grid Size";
gridBtn.classList.add("buttons")

clearBtn.id = "clearBtn";
clearBtn.style.borderRadius = "5px";
clearBtn.textContent = "Clear Grid";
gridBtn.classList.add("buttons")

gridBtnContainer.appendChild(gridBtn);
gridBtnContainer.appendChild(clearBtn);

gridBtn.addEventListener("click", function(){
    let gridSize = Number(prompt("How many squares wide and high do you want your grid? "))
    if (gridSize > 100){
        alert("Number must be 100 or less. Please try again.")
    }
    else{
        return gridSize;
    }
});

clearBtn.addEventListener("click", function(){
    let hoverDivs = document.querySelectorAll(".hoverDivs");
    hoverDivs.forEach(div => {
        div.style.backgroundColor = "white"; 
    });
});



// TODO 4: Push your project to GitHub!