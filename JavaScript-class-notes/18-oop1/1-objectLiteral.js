console.log("**** object literal ****");

const book1 = {
    title: "The Karamazov Brothers",
    author: "Dostoevski",
    year: "1886",
    getSummary: function () {
        return `${this.title} written was by ${this.author} in ${this.year}`
    },
}

console.log(book1);
console.log(book1.getSummary());
console.log(book1.hasOwnProperty("year"));



const book2 = {
    title: "The Lily of Valley",
    author: "Honere de Balzac",
    year: "1889",
    getSummary: function () {
        return `${this.title} written was by ${this.author} in ${this.year}`
    },
}

console.log(book2.getSummary());


