

//SELECTORLER

const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const myinput = document.getElementById("input")
const addBtn = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")
const remove = document.getElementById("remove")



//EVENT TANIMLAMALARI

h2.onmouseover = function () {
    // h2.style.color ="red"
    h2.classList.add("red", "center")
}

h2.onmouseout = () => {
    h2.classList.remove("red", "center")
}

body.onload = () => {
    myinput.focus()
}

addBtn.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);

    myinput.focus()

    
    if (!myinput.value) {
        alert("Lütfen bir değer giriniz.")
        return
    }


    const li = document.createElement("li")
    li.textContent = myinput.value

    console.log(li);

    ul.appendChild(li)
    myinput.value = ""



})

// form.onsubmit = (e) => {
//     e.preventDefault()
// }


myinput.onkeydown = (e) =>{
// console.log(e);
if (e.key === "Enter") {
    addBtn.click()
}
}

remove.addEventListener("click", () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});
