const containerDiv = document.querySelector("#containerDiv");
const hoverDivs = document.querySelectorAll(".hoverDivs");


for (let i = 0; i < 256; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("hoverDivs");
    newDiv.style.border = "1px solid black";
    newDiv.style.width = ((600 / 16) - 2)+"px";
    newDiv.style.height = ((600 / 16) - 2)+ "px";
    newDiv.style.flexGrow = "1";
    newDiv.style.flexShrink = "1";
    newDiv.style.margin = "0";
    newDiv.style.padding = "0";
    containerDiv.appendChild(newDiv);

    newDiv.addEventListener("mouseover", function(){
        newDiv.style.backgroundColor = "black";
    });
}

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
    clearGrid();

    if (gridSize > 100){
        alert("Number must be 100 or less. Please try again.")
    }
    else{
        let totalGridArea = gridSize * gridSize;
        for (let i = 0; i < totalGridArea; i++){
            let newDiv = document.createElement("div");
            newDiv.classList.add("hoverDivs");
            newDiv.style.border = "1px solid black";
            newDiv.style.width = `${(600 / gridSize) - 2}px`;
            newDiv.style.height = `${(600 / gridSize) - 2}px`;
            newDiv.style.flexGrow = "1";
            newDiv.style.flexShrink = "1";
            newDiv.style.margin = "0";
            newDiv.style.padding = "0";
            containerDiv.appendChild(newDiv);

            newDiv.addEventListener("mouseover", function(){
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                newDiv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            });
        }
    }
});

clearBtn.addEventListener("click", function(){
    let hoverDivs = document.querySelectorAll(".hoverDivs");
    hoverDivs.forEach(div => {
        div.style.backgroundColor = "white"; 
    });
});

function clearGrid(){
    containerDiv.innerHTML = "";
}
