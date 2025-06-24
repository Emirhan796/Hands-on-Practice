console.log("Polymorphism");

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge() {
        return `${new Date().getFullYear() - this.year}`
    }

    setPrice(price) {
        const taxRate = 1.1
        this.price = Math.trunc(price * taxRate)
    }
}


class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month
    }
///OverLoaded metod (ayni metodun farklı parametreler ile kullanılması)
    setPrice(price, taxRate = 1) {
        this.price = Math.trunc(price * taxRate)
    }
   ///Overrided Metod (parent class'daki bir metodun farkli fonsiyonellikle ve aynı paramtetre listesi ile yeniden tanımlanması)//
    getSummary(){
        return `${this.title} was written by ${ this.author } in ${ this.year } in ${ this.month }`
    }

}

const mag1 = new Magazine("SRE", "Einstein", 1930, "Nov")
console.log(mag1);
console.log(mag1.getAge());

mag1.setPrice(100, 1.2)
console.log(mag1);