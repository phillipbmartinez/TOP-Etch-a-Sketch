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



// TODO 4: Push your project to GitHub!