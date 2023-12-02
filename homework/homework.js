// Ödev 
// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())


// çözümü...
// let inpWord=prompt("bir kelime giriniz");
// console.log(inpWord.length);
// console.log(inpWord.trim().length);
// console.log(inpWord.toLowerCase());
// console.log(inpWord.toUpperCase());
// let inpAltWord=inpWord.replace(inpWord.substring(0,inpWord.indexOf(" ")),"javascript")
// console.log(inpAltWord);
// console.log(inpAltWord.startsWith("javascript"));
// console.log(inpAltWord.endsWith("javascript"));
// console.log(inpAltWord.charAt(0));
// console.log(inpWord.concat("ben js öğreniyorum"));
// console.log(inpWord.slice(0,4));

////////////////////////////////////////////////////////////////////////////////////////
// return break continue ?
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// SORU 1<=userData<=50 
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği 
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ? 
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

// let example=()=>{
//     let bitisSayisi=Number(prompt("bitiş sayısını giriniz"));
//     if(bitisSayisi==44){
//         alert("sistemden çıkılıyor");
//     }
//     else if(bitisSayisi>50){
//         let genelToplam=0, ciftSayiAdet=0,ciftToplam=0,tekSayiAdet=0,tekToplam=0;
//         for(let i=1;i<=50;i++){
//             if(i%2==0){
//                 ciftSayiAdet=ciftSayiAdet+1
//                 ciftToplam=ciftToplam+i
//                 console.log("cift Sayilar =>" + i + "Cift Sayi adeti =>" + ciftSayiAdet + "ciftSayiToplamlari =>" + ciftToplam);
//             }
//             else{
//                 tekSayiAdet=tekSayiAdet+1
//                 tekToplam=tekToplam+i
//                 console.log("tek Sayilar =>" + i + "Tek Sayi adeti =>" + tekSayiAdet + "tekSayiToplamlari =>" + tekToplam);
//             }
//             genelToplam=genelToplam+i;
//         }
//         console.log(`Genel Toplamları => ${genelToplam}`); // => interpolation yapısı
//     }
//     else{
//         let genelToplam=0, ciftSayiAdet=0,ciftToplam=0,tekSayiAdet=0,tekToplam=0;
//         for(let i=1;i<=bitisSayisi;i++){
//             if(i%2==0){
//                 ciftSayiAdet=ciftSayiAdet+1
//                 ciftToplam=ciftToplam+i
//                 console.log("cift Sayilar =>" + i + "Cift Sayi adeti =>" + ciftSayiAdet + "ciftSayiToplamlari =>" + ciftToplam);
//             }
//             else{
//                 tekSayiAdet=tekSayiAdet+1
//                 tekToplam=tekToplam+i
//                 console.log("tek Sayilar =>" + i + "Tek Sayi adeti =>" + tekSayiAdet + "tekSayiToplamlari =>" + tekToplam);
//             }
//             genelToplam=genelToplam+i;
//         }
//         console.log(`Genel Toplamları => ${genelToplam}`); // => interpolation yapısı
//     }
// }
//example();
///////////////////////
// the other way
let example2 = () => {
    let genelToplam = 0;
    let ciftSayiAdet = 0;
    let ciftToplam = 0;
    let tekToplam = 0;
    let tekSayiAdet = 0;

    let bitisSayisi = Number(prompt("bitis sayısını giriniz"));
    if (bitisSayisi == 44) {
        alert("Sistemden çıkılıyor");
    }
    else {
        for (let i = 1; i <= bitisSayisi; i++) {
            if (i == 7) {
                continue;
            }
            else if (i > 50) {
                break;
            }
            else {
                if (i % 2 == 0) {
                    ciftSayiAdet = ciftSayiAdet + 1;
                    ciftToplam = ciftToplam + i;
                    console.log("ciftSayilar => " + i + "ciftSayiAdeti => " + ciftSayiAdet + "ciftSayilarinToplami =>" + ciftToplam);
                }
                else if (i % 2 != 0) {
                    tekSayiAdet = tekSayiAdet + 1;
                    tekToplam = tekToplam + i;
                    console.log("tekSayilar => " + i + "tekSayi Adeti => " + tekSayiAdet + "tekSayilarinToplami =>" + tekToplam);
                }
                genelToplam = tekToplam + ciftToplam;
            }
        } //end for
        console.log(`Genel Toplam => ${genelToplam}`);
    }
} //end function
//example2();
////////////////////////////////////////////////////////////////////////////////////////////////
let splitOrnek = () => {
    let text = "Merhaba Ben Batuhan Temel Javascript öğreniyorum";
    let textSplit = text.split(" ", 3);
}
//splitOrnek();   // => split metodu içerisine verilmiş parametre doğrultusunda değişken içeriğini bölümleyerek dizi oluşturur! ve diziyi geri döndürür.
////////////////////////////////////////////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü,

let maskinWithMethods = () => {
    let nameAndSurname = prompt("lütfen ad ve soyad giriniz");
    let indeksNameAndSurname = nameAndSurname.indexOf(" ")
    let name = nameAndSurname.substring(0, indeksNameAndSurname).toUpperCase();
    for (let i = 1; i < name.length; i++) {
        name = name.replace(name.charAt(i), "*")
    }

    let surname = nameAndSurname.substring(indeksNameAndSurname + 1, nameAndSurname.length).toUpperCase();
    for (let i = 3; i < surname.length; i++) {
        surname = surname.replace(surname.charAt(i), "*");
    }

    console.log(name.concat(" ").concat(surname));
}
//maskinWithMethods();
////////////////////////////////////////////////////////////////////////////////////////////////
// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim                 // iterative for loop 'ile yap...
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

 2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter

*/

//iterative for
let randomDizi = () => {
    let sayiAdeti = 1;
    const arr = [45, 4, 7, 12, 76, 34, 67, 42, 12, 47];
    document.writeln("tüm sayılar => " + arr + "<br/>");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            document.writeln("tek sayılar => " + arr[i] + "<br/>");
            document.writeln("tek sayılar 5 ile toplamı => " + Number(arr[i] + 5) + "<br/>");
            document.writeln("bu şarta uyan sayi adeti => " + sayiAdeti + "<br/>");
            sayiAdeti++;
        }
    }
}
//randomDizi();
////////////////////////////////////////////////////////////////////////////////////////////////
//  rastgele 10 elemanlı bir dizi  oluşturalım.  
//  bu sayılardan tek olanları bulalım.          
//  bu tek sayıların sonuna 5 ekleyelim          
//  buradaki sayıları ekranda gösterelim. ?      
//  bu şarta uyan kaç tane sayı vardır ?        
//  

let randomDizi2 = () => {
    let adet = 0;

    const arr2 = [];
    for (let i = 1; i <= 10; i++) {
        arr2.push(parseInt(Math.random() * 3 + 4));
    }
    // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    let tekSayilar = arr2.filter((value, index, array) => {
        return value % 2 != 0;
    });
    document.writeln(tekSayilar + "<br/>");
    // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    let tekSayilarWith5 = tekSayilar.map((value, index, array) => {
        return value + 5;
    })
    document.writeln(tekSayilarWith5 + "<br/>");

    // let numbers=tekSayilarWith5.forEach((value,index,array)=>{
    //     return array;
    // })

    for (let i = 0; i < tekSayilarWith5.length; i++) {
        console.count("sayi adeti =>");
    }

    for (let amount of arr2) {
        if (amount % 2 != 0) {
            console.log(amount);
            adet++;
        }
    }
    console.log(adet);
}
//randomDizi2();

//ornekCallbackFunction
let deneme1 = (data) => {
    return Math.sqrt(data);
}
let deneme2 = (callbackFunction) => {
    let userData = Number(prompt("bir sayi giriniz"));
    let sonuc = callbackFunction(userData);
    console.log(sonuc);
}
//deneme2(deneme1);
////////////////////////////////////////////////////////////////////////////////////////////////
let constructorTutorial = () => {
    let teaPlant = function (color, height, leafNum) {
        this.color = color;
        this.height = height;
        this.leafNum = leafNum;
        console.log(this);
    }
    let data = new teaPlant("green", "50cm", 6);
    console.log(data);
    console.log(data.color);
    console.log(data["leafNum"]);
    console.log(typeof data);
}
//constructorTutorial();
////////////////////////////////////////////////////////////////////////////////////////////////
//call,apply,bind // => bir fonksiyon dışardan bir objeye nasıl bağlanır.
let noParamCallApplyBind = () => {
    let functionOtherObject = function deneme1() {
        //console.log("Benim satın aldığım bisikletin markası " + this.brand + " fiyatı ise " + this.price + "TL");
        console.log(`Benim satın aldığım bisikletin markası ${this.brand} fiyatı ise ${this.price}TL`); // => interpolation
    }
    const bicycle = {
        "brand": "Bisan",
        price: 3000,
    }
    functionOtherObject.call(bicycle);
    functionOtherObject.apply(bicycle);
    let sonuc = functionOtherObject.bind(bicycle);
    sonuc();

}
//noParamCallApplyBind();

let paramCallApplyBind = () => {
    let functionOtherObject2 = function (name) {
        console.log("bu telefon " + name + "a'ait, markası " + this.brand + " fiyatı ise " + this.price);
    }
    const cellPhone = {
        "brand": "Apple",
        price: 10000,
    }

    functionOtherObject2.call(cellPhone, "Batuhan");
    functionOtherObject2.apply(cellPhone, ["Batuhan"]); // => parametreli fonksiyonlar bir objeye bağlanırken, apply() kısmında parametreleri [] dizi içerisinde yollamak zorundasın. aksi takdirde binding yapmaz.
    let data2 = functionOtherObject2.bind(cellPhone, "Batuhan");
    data2();

}
//paramCallApplyBind();
////////////////////////////////////////////////////////////////////////////////////////////////
/*Butona tıkladığımızda kullanıcıya soru sorsun
farklı bir sayfaya gitmek istermisiniz ?
evetse farkli bir sayfaya redirect(yönlensin)
değilse alert versin */

let askingQuestion = () => {
    let userInformation = window.confirm("Farklı bir sayfaya gitmek istermisiniz ?")
        ? window.location = "https://www.google.com/" //redirect
        : window.alert("Bu sayfada kalındı");
}
////////////////////////////////////////////////////////////////////////////////////////////////
// Ödev : Kullanıcı bu paragrafa kaç kere tıkladı ?
let clickingData=()=>{
    let counter=0;
    let parag=document.getElementById("parag_click");
    parag.addEventListener("click",function(e){
        e.preventDefault();
        counter++;
        deneme();
    })
    let deneme=function(){
        let clickedData=document.getElementById("clickResult")
        clickedData.innerHTML=counter + "'kere tıklandı";
    }
}
//clickingData();
