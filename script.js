const container = document.querySelector("#container");

let squares = [];
let row = [];

    //first element [x][0] is for creating a row of 16 squares with flexbox
    for(let i=0;i<16;i++){
        row.push(document.createElement("div"));
        row[i].classList.add("flex");
        container.appendChild(row[i]);
    }
    

    
for(let m=0;m<16;m++){
    squares.push(new Array);
    for(let n=0;n<16;n++){
        squares[m].push(document.createElement("div"));
        squares[m].at(n).classList.add("square");
        row[m].appendChild(squares[m].at(n));
    }
}
