function Book (title, author, year){ 
    this.title = title
    this.author = author
    this.year = year
    // this.getSummary = function() {
    //     return `${this.title} was writting by ${this.author} in ${this.year}`
    // }
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//Bir nesnenin prototiplerine .prototype ile erişilebilir.
//Ancak bir instance'in prototiplerine .__proto__ ile erişilir.
console.log(Book.prototype);


//Book kalıbında yeni bir örnek (instance) oluşturduk.
const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920)
console.log(book1);
console.log(book1.getSummary());

console.log(book1.__proto__);


const book2 = new Book("Simyacı", "Pauolo Coelho", 1990)
console.log(book2.getSummary());


// book1.price = 250
Book.prototype.price = 0
book1.price = 200
book2.price = 300
console.log(book1,book2);


//INHERITANCE (Kalıtım - ES5)

// SUB CLASS //

function Magazine(title,author,year,month) {
    Book.call(this,title ,author, year)
    this.month = month
}

Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine("sre", "Einstein", 1930, "Nov")

console.log(mag1);

console.log(mag1.getSummary());