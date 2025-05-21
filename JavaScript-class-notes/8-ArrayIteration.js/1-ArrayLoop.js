const sayilar =[67,87,23,65,87,92]
const tek =[]
const cift =[]
for (let i of sayilar){
    i % 2 === 0 ? cift.push(i) : tek.push(i)
}

console.log(tek);
console.log(cift);