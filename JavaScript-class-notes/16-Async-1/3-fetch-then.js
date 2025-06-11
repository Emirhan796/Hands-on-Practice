// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))

fetch("https://api.github.com/users")
    .then((res) =>{
        if (res.ok){
            trow new Error ("Url'de hata var");
        }
    }
        
        
      return  res.json())
    .then((veri) => ekranaBastir(veri));
    .cath(error) => console.log(error);

const ekranaBastir = (data) =>{

    data.forEach(({login,avatar_url,node_id})=>{

        document.querySelector("section").innerHTML+=`
        
        <h1>${login} </h1>
        <img width="300px" src=${avatar_url}/>
        <h3>${node_id} </h3>
        
        
        `


    })



}
