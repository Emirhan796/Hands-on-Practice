class Book {
    //Private property
    #id
    //Static property tanimlaması
    static counter = 0
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
        Book.counter++;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} and it's age is ${this.#computeAge()}`
    }

    //Class içerisinde public metotlar yardımıyla private dğişkenler okunabilir.
    //Bu tip metotlara getter metot denilir.
    //Getter metotları class içerisinde tanımlanmalıdır.

    getId(){
        return this.#id
    }

    setId(id){
        this.#id = id
    }

    #computeAge(){
        return new Date().getFullYear - this.year
    }

   }

//    Book.prototype.counter = 0;

   const book1 = new Book("Simyaci","Poelho Coelgo", 1988);

   console.log(book1);

   //Private bir değişkenin değeri class disindan doğrudan okunamaz.
//    console.log(book1.id);

   //Private bir değişkenin değeri class dışından doğrudan değiştirilemez.
//    book1.#id = "123456"

//Private değişkeni okuma
console.log(book1.getId());

//Private değişkene değer atama.
console.log(book1.setId("4444"));
console.log(book1);


//Private metotlar class dışından erişilemezler.
//Ancak class içerisindeki diğer public metodlardan erişilebilir.
// console.log(book1.#computeAge());

console.log(book1.getSummary());

///STATIC
// Book.prototype.counter = 0
// book1.counter++
// console.log(book1);

// const book2 = new Book("XYZ", "Poelho Coelgo", 1920)
// book2.counter++
// console.log(book2);


//Static değişkenlere instance'lar üzerinden erişilemez
console.log(book1.counter);

//Static değişkenler classname.property şeklinde erişilir
// console.log(Book.counter);

const book2 = new Book("adsaad","Poelho Coelgo", 1988);
console.log(Book.counter);
const book3 = new Book("adsasdsaaad","Poelho Coelgo", 1988);
console.log(Book.counter);
const book4 = new Book("sdfsd","Poelho Coelgo", 1988);
console.log(Book.counter);


