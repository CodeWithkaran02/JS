// const { all } = require("prelude-ls");

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topleftCell = document.querySelector(".top-left-cell");
let allcell = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");



cellcontentDiv.addEventListener("scroll", function (e) {
    let scrollFromtop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromtop + "px";
    leftCol.style.left = scrollFromLeft + "px";
    topleftCell.style.top = scrollFromtop + "px";
    topleftCell.style.left = scrollFromLeft + "px";
})

for (let i = 0; i < allcell.length; i++) {
    allcell[i].addEventListener("click", function (e) {
        let rowID = Number(e.target.getAttribute("rowid"));
        let colID = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65 + colID) + (rowID + 1) + "";
        // console.log(address);
        addressInput.value = address;

    })
    allcell[i].addEventListener("blur", function (e) {
        let cellvalue = e.target.textContent;
        let { rowID, colID } = getRowIdColIdFromElement(e.target);
        let cellobject = db[rowID][colID];
        if (cellobject.value == cellvalue) {
            return;
        }
        cellobject.value = cellvalue;
        console.log("After update", cellobject);

    })
}
function getRowIdColIdFromElement(element) {
    let rowID = element.getAttribute("rowid");
    let colID = element.getAttribute("colid");
    return {
        rowID,
        colID
    }
}
