const container = document.querySelector("#container");
const button = document.querySelector("#button");

let input = 16;
let squares = [];
let row = [];

function makeGrid(size){
    squares = [];
    row = [];

//creating a row to fit squares with flexbox
for (let i = 0; i < size; i++) {
    row.push(document.createElement("div"));
    row[i].classList.add("flex");
    container.appendChild(row[i]);
}



for (let m = 0; m < size; m++) {
    squares.push(new Array);
    for (let n = 0; n < size; n++) {
        squares[m].push(document.createElement("div"));
        squares[m].at(n).classList.add("square");
        row[m].appendChild(squares[m].at(n));
        squares[m].at(n).addEventListener("mouseover", () => {
            squares[m].at(n).setAttribute("style", "background: red;");
        })
    }
}
}

function deleteGrid(){
    row.forEach(element=>{element.remove();});
    squares.forEach(element => {element.forEach(element=>{element.remove();})});
}


makeGrid(input);
 
button.addEventListener("click",()=>{

    deleteGrid();
    input = prompt("Type in the number of squares per side");
    makeGrid(input);
    
})