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
var dizi = [3,2,3,4,12,6,7];
console.log(Math.max.apply(Math,dizi)); // bir listeden diziden almak istersek apply() yap !
console.log(Math.min.apply(Math,dizi));

console.log(Math.max(3,4,5,6));
console.log(Math.min(3,4,5,6));

console.log(Math.floor(4.9));
console.log(Math.ceil(5.3));
console.log(Math.round(7.7));
console.log(Math.abs(-4));
console.log(Math.pow(3,2));  // => console.log(3**2);
console.log(Math.sqrt(49));
console.log(Math.PI);
console.log(Math.E);
console.log(Math.cos(45));
console.log(Math.sin(90));
console.log(Math.random());


console.log(Math.round(Math.random()*9+1)); // => rastgele tam sayılar üretmek için !!!






