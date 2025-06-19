import "./scss/style.scss"
import {getCoin} from "./src/getCoin.js";

const form = document.querySelector("header form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("form tetiklendi")

    getInputVal()
    form.reset()
})

const getInputVal = () => {
    
    const inputVal = document.querySelector("header form input").value
    console.log(inputVal);

    if (!inputVal.trim()) {
        alert("Bir değer giriniz.");
    } else {
        // console.log("Girien Değer:",inputVal);
        getCoin(inputVal)
    }
}
