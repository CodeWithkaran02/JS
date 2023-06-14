let inputTag = document.querySelector("input ");
let ulTag = document.querySelector("ul");

inputTag.addEventListener('keyword', function () {
    let key = e.key;
    if (key == Enter) {
        let value = inputTag.value;
        //console.log(value );

        if (value.length == 0) {
            return;
        }
        inputTag.value = " ";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div> ${value}</div>
        <div class = "delelt"> <i class =" fa fa-trash"> </i> 
        </div>`

        handleRemoval(liTag);
        ulTag.appendChild(liTag);

    }
})
function handleRemoval(liTag) {
    let deleltDiv = liTag.querySelector(".delelt");

    deleltDiv.addEventListener("click ", function () {
        liTag.remove();
    })
}