//Ölçülere göre şeklin dikdörtgen mi kare mi olduğunu gösterir.

let kenar1 = 50
let kenar2 = 40

function check(a, b) {
    a == b ? console.log("Kare") : console.log("dikdörtgen");
}

check(kenar1, kenar2)

let yuz = true
let dis = true
let bf = false

function rutin() {
    return yuz && dis && bf ? "Rutinler başarıyla tamamlandı" : "Rutinde eksikler var"
}

console.log(rutin());

//Kullanıcı adı ve şifre ile giriş yapılır. 3 hakkınız vardır.
let username = "Ali";
let password = "1234";
let hak = 3;

const login = () => {
    while (hak > 0) {
        let girilenUserName = prompt("Kullanici adı giriniz")
        let girilenPassword = prompt("Parola giriniz")

        if (girilenUserName === username && girilenPassword === password) {
            return alert(`Hoşgeldiniiiz ${username}`)
        }

        else {
            hak--;
            if (hak > 0) {
                alert(`Hatalı giriş.Kalan hakkınız ${hak}`)
            }

            else {
                alert("Hakkınız doldu");
            }
        }
    }
}




// login()


//String bir cümlenin içinde belirli bir harfi kaç defa geçtiğini bulan bir fonksiyon. Kulanıcı cümleyi ve harfi girdiğinde bu harfin cümlede kaç kez geçtiğiniz döndür.

const countLetter =(word,letter)=>{
    let counter = 0;
    for (let i= 0; i<word.length;i++){
        if (word[i]===letter){
            counter++
        }
    }
    return counter
}

console.log(countLetter("Merhaba","a"));

//2.Split yöntemi ile.

return word.split("a")


