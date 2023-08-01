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