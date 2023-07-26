let cellcontent = document.querySelector(".cell-contain")

function initCells() {
    let cell = "";
    for (let i = 0; i < 100; i++) {
        cell += "<div class = 'row' >";
        //column
        for (let j = 0; j < 26; j++) {
            cell += "<div class='cell'>cell</div>";
        }

        cell += "</div>";
    }
    cellcontent.innerHTML = cell;
}
initCells();