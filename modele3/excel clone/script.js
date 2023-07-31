let cellcontentDiv = document.querySelector(".cell-contain")

function initCells() {
    let cellconten = "<div class = 'top-left-cell'></div>";
    //top-row
    cellconten += "<div class = 'top-row'>"
    for (let i = 0; i < 26; i++) {
        cellconten += `<div class = 'top-row-cell'>${String.fromCharCode(65 + i)}</div>`;
    }
    cellconten += "</div>";

    //left-col
    cellconten += "<div class = 'left-col'>"
    for (let i = 0; i < 100; i++) {
        cellconten += `<div class = 'left-col-cell'>${i + 1}</div>`;
    }
    cellconten += "</div>";
    cellconten += "<div class = 'cells'>"
    for (let i = 0; i < 100; i++) {
        cellconten += "<div class = 'row' >";
        //column
        for (let j = 0; j < 26; j++) {
            cellconten += "<div class='cell' contentEditable ></div>";
        }

        cellconten += "</div>";
    }
    cellconten += "</div>"
    cellcontentDiv.innerHTML = cellconten;
}
initCells();

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topleftCell = document.querySelector(".top-left-cell");


cellcontentDiv.addEventListener("scroll", function (e) {
    let scrollFromtop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromtop + "px";
    leftCol.style.left = scrollFromLeft + "px";
    topleftCell.style.top = scrollFromTop + "px";
    topleftCell.style.left = scrollFromLeft + "px";
})