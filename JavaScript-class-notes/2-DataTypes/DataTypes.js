//*************DATA TYPES   **********/

//!----------------------------------
//!PRIMITIVE DATA TYPES

//!******* NUMBER DATA TYPES **********

// Nunber : Tamsayılar ve ondalıklı sayılar tutar.

const age=50

console.log(typeof age)


//* MATH onjesi matemetiksel işlemler için gerekli metodlar barındırır.

let pi=Math.PI
console.log(pi)

//Dairenin alanı
const r=8
console.log(pi*r*r)

//Math pow metodu üs almak için kullanılır.
console.log(pi*(Math.pow(r,2)))
console.log(Math.pow(3,5))  //* 3ün 5. kuvvetini bulduran metod.
console.log(2*pi*r)
let cevre=2*pi*r

/*------------------------------------------------------------------ */
// Decimal ondalıklı bir sayının ondalık kısımlarını yuvarlama işlemi*//
console.log(Math.round(cevre))

const num=34.782313
console.log(Math.floor(num))

//floor: en yakın alt sayıya yuvarlar

console.log(Math.round(num))

//Round: Sayı değerine göre yuvarlama yapar. Örn. 0.5 ve üzeriyse yukarı altıysa aşağıya yuvarlar.

console.log(Math.ceil(num))

//ceil: En yakın üst sayıya yuvarlar.

console.log(Math.trunc(num))

// trunc: Decimal sayıların sadece tam kısımlarını alır küsuratı görmez.

console.log(num.toFixed(3))

//to fixed: Virgülden sonra kaç basamak göstermek istediğinizi belirler.

console.log(Math.max(5,3,62,77,2145,32,21,-21))

// max: Bir sayı dizesindeki en büyük sayı değerini bulur.


console.log(Math.min(5,3,62,77,2145,32,21,-21))


// min: Bir sayı dizesindeki en küçük sayı değerini bulur.


//Random metodu rastgele bir sayı üretmek için kullanılır. 0-1 arasında bir sayı üretir.

console.log(Math.random())

//eğer sayı aralığını arttırmak için * kullanılır ve yazılan rakama kadar olan sayı aralığından bir sayı seçer. örneğin

console.log(Math.random()*100)

let rastgeleSayi=Math.trunc(Math.random()*100)

console.log(rastgeleSayi)


//sqrt : Square root (karekök) Bir sayının karekökünü verir.

console.log(Math.sqrt(121))


//! ******* STRİNG DATA TYPE ***********

let text="random"
let text1='random1'

// Stringlerin her harfine ayrı ayrı bir dizi elemanı olarak ulaşılabilir.
//O elemanın 0 dan başlayarak index numarasını vererek ulaşabiliriz

console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[3])
console.log(text[4])
console.log(text[5])

//stringler immutable olduğundan parça olarak değiştirilmez.

text[0]='C'
console.log(text)

//ESCAPE CHARACTER (kaçış karakterleri)
 
// ESCAPE CHARACTER (Kaçış karakterleri)
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \”	Çift tırnak
// \’	Tek tırnak
// \	Backslash

// */ örnek
let text2='Ben Javascript\'in özelliklerini öğreniyorum.'
// Metinin kod olarak algılanmamasını sağlar.Math

////// STRİNG BİRLEŞTİRME //////
// + işareti ile birleştirme


let text3="bu akşam saatlerinde yapılabilecek en güzel şey"
let text4="javascript öğrenmek"

console.log(text3+text4)

/// 2- concat metodu

let text5="hey dünya"
let text6="bir dur inecek var"

let text7=text5.concat(text6)
console.log(text7)

/// TEMPLATE LİTERAL -- STRİNG TEMPLATE -ES6////
//? Backtik işareti ```

console.log(`bu yazıyı
            backtick ile yazarsam
            
            daha iyi olur`)

 let ad="sema"
 let soyad="güven"
 let meslek="developer"
 let text9=`Personelimiz ${ad} ${soyad}, firmamızda ${meslek}, olarak çaışmaktadır`

 console.log(text9)


 //// BOLEON DATA TYPE /////
 
 // True yada false değerlerini tutar.
 // Daha çok mantıksal karşılaştırmalarda kullanıyoruz.

 let isSignUp=true
 console.log(isSignUp)
 console.log(typeof isSignUp)

 //Falsy Values

//false: Boolean değeri.
// 0: Sayı sıfır.
// -0: Negatif sıfır.
// 0n: BigInt sıfır.
// "" veya '': Boş string (dize).
// null: Değer yok.
// undefined: Tanımsız değer.
// NaN: Sayı değil (Not-a-Number).

// Truthy values - Falsy değer üretenler dışındaki herşey
// sayılar,karakterler,işaretler .....

//! ********** UNDEFINED DATA TYPE********
// Js de bir değişkenin türü ilk atanan değere göre belirliniyor. İlk değer atanmadığında değişken undefined olarak tanımlanır.

let deger1=10;  
let deger2="10";
let deger3;

console.log(typeof deger1)
console.log(typeof deger2)
console.log(typeof deger3)

//! ********** NULL DATA TYPE********
// boş bir değişken üretmek için kullanılır.

let nedirAcaba=null
console.log(nedirAcaba)
console.log(typeof nedirAcaba)

//!--------------------------------------
//! NONPRIMITIVE DATA TYPES -REFERENCE BASED
//!--------------------------------------

//! *********** ARRAY *******
//Birden fazla değer tutabilen değişkenlere array(dizi) denir
// sıralı şekilde tutulan verilerdir.
let yas=30

let siniftakiOgrenciYaslari=[23,24,22,21,25]

//! *********** OBJECT *******
let obj={
    name:"Helen",
    lastname:"güven",
    age:40
}

console.log(obj)
//! *********** FUNCTION *******

function example(){
    let sum=45435+6456;
}

console.log(example())

//!--------------------------------------
//! TYPE CONVERSION
//!--------------------------------------

//? Kullanıcıdan alınan bilgi yapılarından(input,prompt...) bilgi her zaman string olarak gelir. Sayısal bir ifade bile olsa.

//! Automatically type conversion

let deger4=40
let deger5="14"

console.log(deger4+deger5) // + işareti stringlerde kullandığımız concatanation işlemi olabilir siye matematiksel toplama yapmaz string toplaması yapıyor(yan yana yazıyor)

console.log(deger4-deger5) //  Automatically type conversion : Sevgili js motoru çıkarma,çapma bölmede Automatically type conversiona göre davranıyor

console.log(deger4*deger5) 
console.log(deger4/deger5) 

//? STRING TO NUMBER
// Number
// parseInt
// parseFloat
// başına + işareti koyularak

let deger6="20.24"
console.log(typeof deger6)

// let newDeger=Number(deger6)
let newDeger=+(deger6)
// let newDeger=parseFloat(deger6)
console.log(newDeger)
console.log(typeof newDeger)

// let maas=+prompt("Lütfen maaşınızı giriniz:")
// console.log(typeof maas)

//? NUMBER TO STRING
// String()
// str.toString()
let birthday=17;
console.log(typeof birthday)
let newBirthday=String(birthday)
console.log(typeof newBirthday)

 console.log(typeof birthday.toString() ) 

//! DATE OBJECT

const now=new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

console.log(`${now.getHours()}:${now.getMinutes()}`)
