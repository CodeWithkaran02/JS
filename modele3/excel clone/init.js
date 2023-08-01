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
            cellconten += `<div class='cell' rowid = '${i}' colid ='${j}' contentEditable ></div>`;
        }
        cellconten += "</div>";
    }
    cellconten += "</div>"
    cellcontentDiv.innerHTML = cellconten;
}
initCells();

let db;
function initdb() {
    db = [];
    for (let i = 0; i < 100; i++) {
        let row = [];
        for (let j = 0; j < 26; j++) {
            let name = String.fromCharCode(65 + j) + (i + 1) + "";
            let cellobject = {
                name: name,
                value: ""
            }
            row.push(cellobject);

        }
        db.push(row);
    }
}
initdb();
console.log(db);