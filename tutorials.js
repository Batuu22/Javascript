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
//     console.log(text.length-1); // => son indeksi/indis 'i verir.
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
// (function days() { 
//     const input = Number(prompt("1-7 arasında bir sayi giriniz"));
//     switch (input) {
//         case 1:
//             console.log("Pazartesi");
//             break;
//         case 2:
//             console.log("Salı");
//             break;
//         case 3:
//             console.log("Çarşamba");
//             break;
//         case 4:
//             console.log("perşembe");
//             break;
//         case 5:
//             console.log("cuma");
//             break;
//         case 6:
//             console.log("cumartesi");
//             break;
//         case 7:
//             console.log("pazar");
//             break;
//         default:
//             console.log("1-7 Arasında sayi girmediniz");
//     }
// })();

////////////////////////////////////////////////////////////////////////////////////////
//loop
//while
// let i = 1;
// while (i < 4) {
//     console.log("Merhaba Js");
//     i++;
// }

// //for
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//do-while
// let i=1;
// do{
//     console.log(i);
//     i++
// }while(i<=5);

//iterative for
// let iterativeFor=()=>{
//     let dizi=[123,212,224,42,52,"batuhan",3.5,{cattle:"cow"},[32,2]];
//     for(let i=0;i<dizi.length;i++){
//         console.log(dizi[i]);
//     }
// }
// iterativeFor();

//for in(index) => data indexs/indis değerlerini döndürür.
//const dizi=[32,21,34,45,123];
// for(data in dizi){
//     console.log(data);
// }

//for of(index) => indekslerin tuttuğu değerleri döndürür.
// for(data2 of dizi){
//     console.log(data2);
// }

// forEach
// dizi.forEach(data3=>{
//     console.warn(data3);
// })

////////////////////////////////////////////////////////////////////////////////////////
//Ornekler

////////////////////////////////////////////////////////////////////////////////////////
//try-catch(error-handling);

let tryCatchTuto = () => {
    try {
        alertx("pop-up");
    } catch (error) {
        console.error(error);
    }
    finally {
        console.log("her zaman çalışır");
        console.log("db.close");
    }

}
// tryCatchTuto();
////////////////////////////////////////////////////////////////////////////////////////
//debug Nedir ?
const debugData = () => {
    // 1 den 10'a kadar olan 1-10 dahil sayıların toplamı ?
    let toplam = 0;
    for (let i = 1; i <= 10; i++) {
        toplam += i;
    }
    console.log(toplam);
}
//debugData();

////////////////////////////////////////////////////////////////////////////////////////
//Monad => bir fonksiyonun çıktısı, başka bir fonksiyonun girdisi olma durumudur;

// let deneme1=()=>{
//     let text= "Batuhan Temel";
//     return text;
// }

// let deneme2=()=>{
//     let text2="Merhaba";
//     console.log(text2.concat(" ").concat(deneme1()));
// }
//deneme2();

////////////////////////////////////////////////////////////////////////////////////////
//setTimeout() => belirli zaman sonra tek bir kere çalışır ve durur.
//setInterval() => belirli zaman sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır.

// let deneme3=()=>{
//     setTimeout(function(){
//         console.log("Hello");
//     },2000);
// }
// //deneme3();

// let deneme4=()=>{
//     setInterval(function(){
//         console.log("How are you");
//     },2000);
// }
// //deneme4();

// let setTiming=()=>{
//     setTimeout(()=>{
//         console.log("Merhaba Batuhan");
//     },5000);
// }
// //setTiming();

// let setInterving=()=>{
//     setInterval(()=>{
//         console.log("Nasılsın");
//     },5000);
// }
//setInterving();
////////////////////////////////////////////////////////////////////////////////////////
//callbackfunction

const birinci = (data) => {
    return Math.pow(2, data);
}

const ikinci = (callbackFunction) => {
    let user = Number(prompt("Lütfen sayi giriniz"));
    let data = callbackFunction(user);
    console.log(data);
}
//ikinci(birinci);
////////////////////////////////////////////////////////////////////////////////////////
//promise

const promTutorials = () => {
    // catch 1 tane olmak zorunda // promise yazarken new kullanıyoruz!
    let data = new Promise((resolve, reject) => {
        let status = 200;
        if (status === 200)
            resolve("çalıştı");
        else
            reject("çalışmadı");
    })
        .then(() => {
            console.log("olumlu");
        })
        .catch((err) => {
            console.error(err);
        });
}
//promTutorials();
////////////////////////////////////////////////////////////////////////////////////////
//dizi

let arr = () => {
    const dizi = [3, 4, 5, 6, 7, 34];
    return dizi;
}

let arrResult = () => {
    let data = arr();
    console.log(data);
    //console.log(data[data.length-1]); // => son indis/index değerini verir.
    //iterative for
    // for(let i=0;i<data.length;i++){
    //     document.writeln(i + " .indis => " + data[i] + "<br/>");
    // }

    //for in => indeksleri verir
    // for(let temp in data){
    //     document.writeln(temp + " => " + data[temp] + "<br/>");
    // }
    // document.writeln("+++++++++++++++++++++++++++++++++ <br/>");

    //for of => indekslerdeki elemanları verir.
    // for(let temp of data){
    //     document.writeln(temp + "<br/>");
    // }

    //forEach
    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    // data.forEach((value,index,array)=>{
    //     document.writeln(value);
    // });

    //filter
    // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    // let result=data.filter((value,index,array)=>{
    //     return value%2==0;
    // });
    //document.writeln(result);

    //map
    // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    // let result2=data.map((value,index,array)=>{
    //     return value+=10;
    // });
    // document.writeln(result2);

    //fill
    // fill(value: T, start?: number, end?: number): this;
    // let yeni=data.fill(30);
    // document.writeln(yeni);
    //let yeni2=data.fill(30,2,4);
    //document.writeln(yeni2)

    //  find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    //  let result3=data.find((value,index,obj)=>{
    //      return value==34
    //  })
    // document.writeln(result3);

    //findIndex
    // findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    // let result4=data.findIndex((value,index,number)=>{
    //     return value==5
    // });
    // document.writeln(result4);

    //some
    // some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    // let result5=data.some((value,index,array)=>{
    //     return value==7;
    // })
    // document.write(result5);

    //every
    //every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    // let result6=data.every((value,index,array)=>{
    //     return value==5;
    // });
    // document.writeln(result6);

    //dizilere devam

    document.writeln(data.length);
    document.writeln(data.push(23)); // => dizinin sonuna eleman eklemek için push() kullanılır.
    console.log(data);
    document.writeln(data.pop());  // => pop() dizinin sonundaki elemanı siler
    console.log(data);
    document.writeln(data.unshift(54)); // => unshift() dizinin başına eleman eklemek için kullanılır.
    console.log(data);
    document.writeln(data.shift()); // => shift() dizinin başındaki elemanı silmek için kullanılır.
    console.log(data);

    //console.log(data.sort()); // =>  sort() metodu küçükten büyüğe sıralar;

    console.log(data.reverse()); // tepe takla sıralar ...

    // büyükten küçüğe sıralamak istersek de önce sort() yaparız sonra reverse () yaparız.
    //örnek
    console.log(data.sort().reverse()); // büyükten küçüğe sıralar.
}
//arrResult();

//////////////////////////////////////////////////////////////////////////////////////////////
//callback ornegi
//dizi objesi içerisinde 5 tane obje oluşturalım...
let callbackFunctionComputer = () => {
    const sameDataArray = () => {
        computerArray = [];
        for (let i = 0; i < 5; i++) {
            computerArray.push({
                computerName: "callback computer " + (i + 1),
                price: 100 * (i + 1)
            });
        }

        console.log(computerArray);

        //dizi içerisinde sadece computerName bileşenlerini gösterelim...
        arrayInComputerName = () => {
            // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
            computerArray.map((temp) => {
                console.log(`${temp.computerName}`);
            });
        }
        //arrayInComputerName()
    }
    sameDataArray();

    //callback function
    const arrayInComputerObject = (obj, callBackFnc) => {
        computerArray.push(obj);
        callBackFnc();
    }
    arrayInComputerObject({ computerName: "callback computer 6", price: 600 }, arrayInComputerName);
}
//callbackFunctionComputer();


//Promise ornegi
//dizi objesi içerisinde 5 tane obje oluşturalım...
let promiseFunctionComputer = () => {

    callbackFunctionComputer();

    //promise
    const arrayInComputerObject = (obj) => {
        let promiseReturned = new Promise(() => {
            computerArray.push(obj);
        })
        return promiseReturned;
    }
    arrayInComputerObject({ computerName: "callback computer 6", price: 600 })
        .then(() => { })
        .catch((err) => {
            console.error(err);
        });
}
//promiseFunctionComputer();

//////////////////////////////////////////////////////////////////////////////////////////////
//object

let objectTutorail = () => {
    const car = {
        brand: "ford",
        engineSize: 2.5,
        "color": "blue",     // => property tırnaklar arasındada yazılabilir.
        "software": ["html5", "css3", "js"],
        "fullName": function () {
            return this.brand;
        },
    }

    //1.yol variable
    console.log(car.engineSize);
    console.log(car.color);
    console.log(car.brand);
    console.log(car.software);

    //2.yol variable nested
    console.log(car["engineSize"]);
    console.log(car["color"]);
    console.log(car["brand"]);
    console.log(car["software"]);

    //Array
    console.log("1.indeks => " + car.software[1]);

    // Object Methods
    //console.log(Object.keys(car));  // => keys verir = property(özellik)
    //console.log(Object.values(car)); // => values verir = özellik değeri
    //console.log(Object.freeze(car)); // => obje içerisinde yapılacak herhangi bir değişikliği engeller. objeyi dondurur.
    //car.brand="mercedes";
    //console.log(car["brand"]); // => brandi değiştirmedi Object.freeze yaptığımız için brandi hala ford olarak verir.

    //console.log(Object.entries(car)); // => Object.entries() obje içerisindeki hem property(keys)'leri hem de özellik değerlerini(values)'ları nested array şekilde yazar.

    const bike = {
        "rimInch": 3.2,
    }

    const tv = {
        refreshRate: "165hz",
    }
    //1.par=hedef, 2-3-n.par=aktarılacak objeler
    let mergedObjects = Object.assign(car, bike, tv);  // => Object.assign() iki veya daha fazla objenin içeriklerini tek bir objeye aktarır.
    //console.log(mergedObjects);

    //console.log(Object.seal(car)); // => Object.seal() yapılmış objelerin içerisine yeni propertyler ekleyemezsin ve var olan propertyleri silemezsin!.

    let plaka = { plate: 7 };
    let sonuc = Object.assign(car, plaka);     // => plaka objesinin içeriğini car objesine ekleyemedi,
    //    cünkü car objesi önceden seal(mühürlemek) yapılmış! 
    console.log(sonuc);


    //object to string => objeyi stringe çevirme
    let toString = JSON.stringify(car);
    console.warn(toString);
    console.log(typeof toString);

    //string to object => stringi objeye çevirme
    let toObject = JSON.parse(toString);
    console.log(toObject);

    //objeye dışardan yeni property(özellik) ekleme.
    car.headLights = "yellow";
    console.log(car);

    car.inProcess = true;
    console.log(car);

    // özellik değeri function olan propertye ulaşmak...
    console.log(car.fullName());

    //obje içerisinde bir propertysi silmek için delete keywordu kullanılır.
    let newCarValue = delete car.color;
    console.log(newCarValue);
    console.log(car);
}
//objectTutorail();

let objectTutorail2 = () => {
    const cellPhone = {
        "processor": "intel",
        screenSize: 5.7,
        "color": "black",
        processorModel: function () {
            return "işlemci markası : " + this.processor;
        }
    }
    console.log(cellPhone);

    // //variable
    // console.log(cellPhone.screenSize);

    // //variable nested
    // console.log(cellPhone["color"]);

    // //property(özellik) ekleme
    // cellPhone.capOfBattery="4000mh";
    // console.log(cellPhone);

    // //property(özellik) silme // delete keywordu kullan
    // delete cellPhone.capOfBattery;
    // console.log(cellPhone);

    // //object to string
    // let stringifiedObj=JSON.stringify(cellPhone);
    // console.log(typeof stringifiedObj);
    // console.log(stringifiedObj);

    // //string to object
    // let objectedData=JSON.parse(stringifiedObj);
    // console.log(typeof objectedData);
    // console.log(objectedData);

    /////////////////////////////////////////////////////////////////////
    //object methods
    console.log(Object.keys(cellPhone));
    console.log(Object.values(cellPhone));
    console.log(Object.entries(cellPhone));

    // Object.freeze(cellPhone);
    // cellPhone["processor"]="windows";
    // console.log(cellPhone);
    // cellPhone.dualBattery=true; // => eklemedi çünkü cellphone freeze yapılmış
    // console.log(cellPhone);

    // Object.seal(cellPhone);
    // console.log(cellPhone);
    // delete cellPhone["screenSize"]; // obje içerisindeki screenSize property'yi silmedi çünkü obje seal yapılmış!.
    // console.log(cellPhone);

    // console.log(cellPhone);

    // const tv={
    //     "windowType":"curved",
    //     numOfCameras:3,
    // }
    // console.log(tv);
    // Object.assign(cellPhone,tv);    // => iki veya daha fazla objenin içeriklerini tek bir objeye aktarır.
    // console.log(cellPhone);

    // özellik değeri function olan dataya ulaşmak için () kullan!
    console.log(cellPhone.processorModel());
}
//objectTutorail2();

////////////////////////////////////////////////////////////////////////////////////////////////////
//object constructor
let objectConstructor = () => {
    let dataConstructor = function (name, surname) {
        this.name = name;
        this.surname = surname;
        console.log(this);
    }
    let data = new dataConstructor("batuhan", "temel");
    console.log(data.name);
}
//objectConstructor();

//call,apply,bind => bir fonksiyon dışardan bir objeye nasıl bağlanır.
let noParamCallApplyBindTuto = () => {

    let functionOtherObject = function () {
        console.log(`Merhaba ${this.name} ${this.surname} nasılsın`); // => interpolation yapısı
    }

    const person = {
        "name": "Batuhan",
        surname: "Temel",
    }

    functionOtherObject.call(person);
    functionOtherObject.apply(person);
    let sonuc = functionOtherObject.bind(person);
    sonuc();
}
//noParamCallApplyBindTuto();

let paramCallApplyBindTuto = () => {
    let functionOtherObject2 = function (definition) {
        //console.log("merhaba " + this.brand + " " + this.model + " " + definition);
        console.log(`merhaba ${this.brand} ${this.model} ${definition}`); // =>interpolation
    }

    const computer = {
        brand: "Asus",
        "model": "Tuf Gaming",
    }
    functionOtherObject2.call(computer, "Javascript Öğreniyorum");
    functionOtherObject2.apply(computer, ["Javascript Öğreniyorum"]); //apply da parametre dizi yapısı[] içerisinde gönderilir.
    let sonuc2 = functionOtherObject2.bind(computer, "Javascript Öğreniyorum");
    sonuc2();
}
//paramCallApplyBindTuto();
////////////////////////////////////////////////////////////////////////////////////////////////////
//event
let clicking = () => {
    window.alert("Clicked");
}
let dblClicking = () => {
    document.writeln("dblClicked");
}
let mousing = () => {
    alert("Buton üzerine gelindi.");
}
let keyDownEvent = () => {
    alert("tuş çalıştı");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
// dom
// newDataDate=()=>{
//     let date=document.getElementById("date_id");
//     date.innerHTML="<b><i>" + new Date().getFullYear() + "</i></b>";
//     //date.innerHTML=`<b><i> ${new Date().getFullYear()} </i></b>`; => interpolation yapısı

//     //date.innerText="<b><i>" + new Date().getDate() + "</i></b>";
//     //date.innerText=`<b><i> ${new Date().getFullYear()} </i></b>`; => interpolation yapısı

//     //CSS DOM
//     date.style.color="#f00";    //  => classList e ' de bak
// }
//  let listenerData=()=>{
//      let text=document.getElementById("parag_id");
//      text.addEventListener("mouseover",function(e){
//         //browser sen bir şey yapma yaparsam ben yaparım,
//         e.preventDefault();
//          let special=document.getElementById("special_id");
//          special.style.color="#00f";
//          special.innerHTML="Üzerine gelindi";
//      })
//  }
//  listenerData();

// let eventData=()=>{
//     //ID
//     //let special2=document.getElementById("special2_id");

//     //querySelector
//     let special2=document.querySelector(".parag_class");
//     special2.innerHTML="Tıklandı";
//     special2.style.color="#f0f";
//     special2.style.backgroundColor="#0f0";
// }

// let domData2=()=>{
//     //Class
//     //document.getElementsByClassName("parag_class")[0].innerHTML="tiklandı";

//     //TagName
//     let domUserData=document.getElementsByTagName("p")[1].innerHTML="tiklandı";
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
//listener
// Ödev : Kullanıcı bu paragrafa kaç kere tıkladı ?
let userListener = () => {
    let listenerParag = document.getElementById("parag_list");
    listenerParag.addEventListener("click", function (e) {
        //alert(e.preventDefault() + e.target);
        //document.getElementById("log_admin").innerHTML="takip ediliyor";
        $("#log_admin").html("takip ediliyor"); // => Jquery
    })
}
//userListener();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//localStorage
// veriler bizim için önemlidir.
// verileri saklarız , => database,browser

let localStorageData = () => {
    const id = localStorage.setItem("ID", 1);
    const name = localStorage.setItem("name", "Batuhan");
    const surname = localStorage.setItem("Surname", "Temel");
    //console.log(localStorage);
    //console.log(localStorage.getItem(localStorage.key(0)));
    //console.log(localStorage.length);
    const surnameData = localStorage.getItem("Surname");
    console.log(surnameData);
    localStorage.removeItem("ID"); // => localStoragedaki bir datayı silmek istersek.
    console.log(localStorage);
    localStorage.clear(); // => localStorage daki bütün dataları siler

    const localStorageUserName = prompt("İsim giriniz");
    const localStorageUserSurname = prompt("Soyisim giriniz");
    localStorage.setItem("Name", localStorageUserName);
    localStorage.setItem("Surname", localStorageUserSurname);
}
//localStorageData();
//////////////////////////////////////////////////////////////////////////////////////////////////////
//JQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////
//JQuery hangi tuşa bastım bana söylesin
let jqueryKeyProc=()=>{
    $(document).ready(function(){
        $(document).on("keydown",(e)=>{
            e.preventDefault();
             console.log(e);
            if(e.keyCode==65)
                console.log("A Harfine bastınız");
            else
                console.log("A harfine basmadınız");
        })//end keydown
    })//end document ready
}//end jqueryKeyProc
//jqueryKeyProc();
//////////////////////////////////////////////////////////////////////////////////////////////////////
// VKI (localStorage)
// kullanıcıdan alınan boy ve kilo verileri formda inputtan alındıktan sonra,
// Formula: Kilo/((Boy)/100)^2
// eğer bu formülde;
// 18>x çıkarsa: Düşük Kilolu (Doktora gidiniz).
// 18<=x<24 çıkarsa: Normal Kilolu
// 24<=x<29 çıkarsa: Fazla Kilolu
// 29<=x<32 çıkarsa: Obez Kilolu
// x>=32 çıkarsa: Aşırı Obez Kilolu (Doktor gidiniz).
let vkiExample=()=>{
    //cleanButton
    clean=()=>{
        let height=document.getElementById("height_id");
        let weight=document.getElementById("weight_id");
        height.value=null;
        weight.value=null;
        document.getElementById("heightSpan_id").innerHTML=null;
        document.getElementById("weightSpan_id").innerHTML=null;
    }
    //cleanLocalStorage
    cleanLocalStorage=()=>{
        let cleanLocal=window.confirm("Local Storage'ı gerçekten silmek istiyor musunuz ?");
        if(cleanLocal){
            alert("Localstorage silindi");
            localStorage.clear();
        }
        else{
            alert("İşlem iptal edildi.");
        }
    }
    //Calculating Vki
    calculateVki=()=>{
        //height
        let height_id=document.getElementById("height_id");
        let height=height_id.value;
        if(height===""){
            document.getElementById("heightSpan_id").innerHTML="Bilgiler Boş Geçilemez";
        }
        //height to localStorage
        localStorage.setItem("userHeight",height);

        //weight
        let weight_id=document.getElementById("weight_id")
        let weight=weight_id.value;
        if(weight===""){
            document.getElementById("weightSpan_id").innerHTML="Bilgiler Boş Geçilemez";
        }
        //weight to localStorage
        localStorage.setItem("userWeight",weight);

        //formula
        const formula=weight/((height)/100)**2;
        //Result
        let result=document.getElementById("result_id");

        switch(true){
            case formula<18: result.innerHTML=" Düşük Kilolu (Doktora gidiniz)";
            break;
            case formula>=18 && formula<24 : result.innerHTML= formula + " Normal Kilolu";
            break;
            case formula>=24 && formula<29 : result.innerHTML= formula + " Fazla Kilolu";
            break;
            case formula>=29 && formula<32 : result.innerHTML= formula + " Obez Kilolu";
            break;
            case formula>=32 : result.innerHTML= formula + " Aşırı Obez Kilolu (Doktora gidiniz)";
        }
    }
}
//vkiExample();
 

//////////////////////////////////////////////////////////////////////////////////////////////////////
//K.D.V HESAPLAMA : JS ve React yapılacak
//JQuery ajax GET/POST
//dockerfile
//login validation
//////////////////////////////////////////////////////////////////////////////////////////////////////
//React



