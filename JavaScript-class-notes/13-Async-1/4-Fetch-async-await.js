const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"

const getData=async()=>{
const res= await fetch("https://api.tvmaze.com/search/shows?q=girls");

const data = await res.json()
// console.log(data);
ekranaBastir(data)

}

getData()

const ekranaBastir=(data)=>{
    data.forEach((program)=>{
        document.querySelector("section").innerHTML+=`
        <h1>${program.show.name}</h1>
        <img src=${program.show.image?.medium || defaultImage} alt="show"/>
        
        
        `
    })
}