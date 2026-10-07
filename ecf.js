let pubElements = document.querySelectorAll("#tous, .catégorie");


for (let i = 0; i < pubElements.length; i++)
    pubElements[i].addEventListener("click", function (event) {
        alert(event.target.innerHTML);
    })


const pwdElement = document.getElementById("search");

pwdElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        alert(event.target.value);
    }
});