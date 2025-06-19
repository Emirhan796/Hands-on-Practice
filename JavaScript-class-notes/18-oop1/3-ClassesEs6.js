class Book {
    constructor(title, author, year) {
        this.title = title
        this.author= author
        this.year = year
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        return`${new Date().getFullYear() - this.year}`
    }
}

const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920)
console.log(book1);
console.log(book1.getSummary());

const book2 = new Book("Simyaci", "Paulo Coelho", 1990)
console.log(book2.getSummary());
console.log(book2.getAge());


class Magazine extends Book {
    constructor (title, author, year, mounth) {
        super(title,author,year)
        this.mounth = mounth
    }
}

const mag1 = new Magazine ("SRE", "Einstein", 1930, "November")
console.log(mag1);
console.log(mag1.getAge());
console.log(mag1.getSummary());