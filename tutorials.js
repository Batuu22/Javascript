// JS 1995 Yılında Brandan Eich tarafından yazılıyor
// cross-platform = farklı işletim sistemlerinde çalışabiliyor
// OOP Uygun

// document.write("HELLO WORLD <br/>");
// document.writeln("MERHABA DUNYA");
// console.info("Hello world");
// console.error("warn");

// Variables

//whoisting
// result2=56;
// var result2;

///////////////////////////////////////////////////////////////////////
// Operators
///////////////////////////////////////////////////////////////////////

// cast
// Number(), parseInt()
//String()
// var userData=Number(prompt("Bir sayi giriniz"));
// console.log(userData+45);
///////////////////////////////////////////////////////////////////////
//undefined
//var result4;
//console.log(result4);

//NaN => not a number !
//var result5="asdas"/4;
//console.log(result5);

//isNaN()
//console.log(isNaN(result5)); // true => sayi değildir

//infinity
// var result6=7/0;
// console.log(result6);

///////////////////////////////////////////////////////////////////////
//Math
// var dizi = [3,2,3,4,12,6,7];
// console.log(Math.max.apply(Math,dizi)); // bir listeden diziden almak istersek apply() yap !
// console.log(Math.min.apply(Math,dizi));

// console.log(Math.max(3,4,5,6));
// console.log(Math.min(3,4,5,6));

// console.log(Math.floor(4.9));
// console.log(Math.ceil(5.3));
// console.log(Math.round(7.7));
// console.log(Math.abs(-4));
// console.log(Math.pow(3,2));  // => console.log(3**2);
// console.log(Math.sqrt(49));
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.cos(45));
// console.log(Math.sin(90));
// console.log(Math.random());


// console.log(Math.round(Math.random()*9+1)); // => rastgele tam sayılar üretmek için


//ornek-4 aşağıdaki örnekleri math ile çözelim.

// -5.9 sayısına aşağıdaki işlemleri yapalım.
// 1-) mutlak değer al =>
// 2-) yuvarlama yapsın
// 3-) karekök hesabın
// 4-) karesini alsın
// 5-) yuvarlama yapsın çıkan sonucu 5 e bölsün =>
// 6-) iki sayı arasında karşılaştırma yapsın en küçüğünü alsın
// 7-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

/* ornek-4 çözüm*/
// let math=()=>{
//     var deger = Math.round(Math.abs(-5.9));
//     console.log(deger);
//     var degerKaresi = Math.pow(deger, 2);
//     console.log(degerKaresi);
//     var sqrt = Math.sqrt(degerKaresi);
//     console.log(sqrt);
//     var cikanSonuc = sqrt / 5;
//     console.log(cikanSonuc);
//     var comparisonDeger = Math.min(sqrt, cikanSonuc);
//     console.log(comparisonDeger);

//     // karsilaştırma ternary operator
//     (comparisonDeger % 2 == 0) ? comparisonDeger = comparisonDeger + 5 : comparisonDeger = comparisonDeger + 3;
//     console.log(comparisonDeger);
// }
// math();

////////////////////////////////////////////////////////////////////////////////////////

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// let negpos=()=>{
//     // ternary
//     var inpSayi=Number(prompt("bir sayi giriniz"));
//     (inpSayi<0) ? console.log("Negatiftir"):console.log("Pozitiftir");
// }
// negpos();


// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

// let inpPassword=()=>{
//     var password = prompt("şifre giriniz");
//     var rePassword = prompt("tekrar şifre giriniz");

//     if(password==rePassword){
//         alert("aynı veri");
//     }
//     else{
//         alert("aynı veri değil");
//     }
// }
// inpPassword();

////////////////////////////////////////////////////////////////////////////////////////
// String Metodlar

// let strMethod=()=>{
//     let text = "Merhaba Ben Javascript Öğreniyorum";

//     console.log(text.length);
//     console.log(text.length-1); // => toplam kaç indeksden oluştugunu verir.
//     console.log(text.slice(1));
//     console.log(text.slice(0,4));
//     console.log(text.substring(0));
//     console.log(text.substring(3,5));
//     console.log(text.indexOf("t"));
//     console.log(text.charAt(4));
//     console.log(text.includes("z"));
//     console.log(text.startsWith("M"));
//     console.log(text.endsWith("a"));
//     console.log(text.toLowerCase());
//     console.log(text.toUpperCase());
//     console.log(text.replace("Merhaba","Selam"));
//     console.log(text.lastIndexOf("a"));
//     console.log(text.repeat(2));
//     console.log(text.concat(" ve bu ilk dersim")); // => sona değer ekler.
//     console.log(text.trim());
//     console.log(text.trimStart());
//     console.log(text.trimEnd());
// }
// strMethod();

////////////////////////////////////////////////////////////////////////////////////////
// Functions
// 1-) Normal functions

// parametresiz returnsuz
// function toplama(){
//     console.log(5+7);
// }
// toplama();

//parametresiz returnlu
//  function carpma(){
//      var s1=2,s2=3;

//      return s1*s2;
//  }
//  let sonuc1=carpma();
//  console.log(sonuc1);

//parametreli returnlu

//  function bolme(num1,num2){
//      return num1/num2;
//  }
//  let sonuc2=bolme(9,3);
//  console.log(sonuc2);

////////////////////////////////////////////////////////////////////////////////////////
// 2-) Anonymous functions
// let value=function(){
//     console.log("anonim fonksiyonu");
// }
// value();

// let deger=function(){
//     console.log("anonim fonksiyon");
// }
// deger();
////////////////////////////////////////////////////////////////////////////////////////

// 3-) Arrow functions
// let toplam=(num1,num2,num3,num4)=>{
//     return num1+num2+num3+num4;
// }
// console.log(toplam(1,2,3,4));

////////////////////////////////////////////////////////////////////////////////////////

// 4-) Immedia functions()()        // => fonksiyonu çağırmadan direk çalışmasını istersek immedia function kullanırız.
// (function deneme1(){
//     console.log("Immedia fonksiyonu");
// })();

// function deneme1(){
//     console.log("normal fonksiyon");
// }
// deneme1();

// let deneme2=function(){
//     console.log("anonim fonksiyon");
// }
// deneme2();

// let deneme3=()=>{
//     console.log("arrow function");
// }
// deneme3();

// (function deneme4(){
//     console.log("ımmedia function");
// })();

////////////////////////////////////////////////////////////////////////////////////////
//condition
// ÖDEV: 
// 1-Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// 2-Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

// 3-Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

//1-)
// function negpos(){
//     let inpData=Number(prompt("bir sayi giriniz"));
//     if(inpData<0){
//         console.log("Negatiftir");
//     }
//     else{
//         console.log("pozitiftir");
//     }
// }
// negpos();

//2-)
// let oddeven=function(){
//     let number=parseInt(prompt("bir sayi giriniz"));
//     let result=(number%2==0)?"çifttir":"tektir";
//     console.log(result);
// }
// oddeven();

//3-)
// immedia function ile yaptık...
(function days() { 
    const input = Number(prompt("1-7 arasında bir sayi giriniz"));
    switch (input) {
        case 1:
            console.log("Pazartesi");
            break;
        case 2:
            console.log("Salı");
            break;
        case 3:
            console.log("Çarşamba");
            break;
        case 4:
            console.log("perşembe");
            break;
        case 5:
            console.log("cuma");
            break;
        case 6:
            console.log("cumartesi");
            break;
        case 7:
            console.log("pazar");
            break;
        default:
            console.log("1-7 Arasında sayi girmediniz");
    }
})();

////////////////////////////////////////////////////////////////////////////////////////
//loop
//Ornekler