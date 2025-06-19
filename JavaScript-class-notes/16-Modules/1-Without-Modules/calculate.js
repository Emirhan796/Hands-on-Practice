console.log("CALCULATE.JS DEN SELAMLAR");

let myName = "ipek"
console.log(myName);

const calculate = (dizi) => {
   return dizi.reduce((sum, product) =>
        sum + product.price, 0)

}