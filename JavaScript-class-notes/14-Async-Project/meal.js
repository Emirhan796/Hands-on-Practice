let dizi = []  


fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
    .then((veri) => {
        dizi=veri
        showScreen(veri.meals)
    });


function showScreen(data) {

    const mealsDiv = document.querySelector(".food")

    mealsDiv.innerHTML=""

    data.forEach((a) => {

        mealsDiv.innerHTML += `
        <div class="col-sm-6 col-md-4">
        <p>${a.strMeal}</p>
        <img width="200px" src=${a.strMealThumb} alt=""/>
        </div>
        
        `
    })



}


document.querySelectorAll("img").forEach((a) =>
(a.onclick = () => {

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
        .then((response) => response.json())
        .then((veri) => showScreen(veri.meals));
})
);

document.querySelector("input").oninput=(e)=>{
   let veri = dizi.meals.filter((a)=>a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))
    
   showScreen(veri)


    };
