setTimeout(()=>{
    console.log("selam");
},3000)

console.log("hallo");

setTimeout(()=>{  

    console.log("naber")
    
},2000)

let sayac = 0
const interval1 = setInterval(()=>{
    console.log(++sayac);
    if (sayac==7){
        clearInterval(interval1)
    }
     
},1000)