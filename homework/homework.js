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

let example=()=>{
    let bitisSayisi=Number(prompt("bitiş sayısını giriniz"));
    if(bitisSayisi==44){
        alert("sistemden çıkılıyor");
    }
    else if(bitisSayisi>50){
        let genelToplam=0, ciftSayiAdet=0,ciftToplam=0,tekSayiAdet=0,tekToplam=0;
        for(let i=1;i<=50;i++){
            if(i%2==0){
                
                ciftSayiAdet=ciftSayiAdet+1
                ciftToplam=ciftToplam+i
                console.log("cift Sayilar =>" + i + "Cift Sayi adeti =>" + ciftSayiAdet + "ciftSayiToplamlari =>" + ciftToplam);
            }
            else{
                tekSayiAdet=tekSayiAdet+1
                tekToplam=tekToplam+i
                console.log("tek Sayilar =>" + i + "Tek Sayi adeti =>" + tekSayiAdet + "tekSayiToplamlari =>" + tekToplam);
            }
            genelToplam=genelToplam+i;
        }
        console.log(`Genel Toplamları => ${genelToplam}`); // => interpolation yapısı
    }
    else{
        let genelToplam=0, ciftSayiAdet=0,ciftToplam=0,tekSayiAdet=0,tekToplam=0;
        for(let i=1;i<=bitisSayisi;i++){
            if(i%2==0){
                
                ciftSayiAdet=ciftSayiAdet+1
                ciftToplam=ciftToplam+i
                console.log("cift Sayilar =>" + i + "Cift Sayi adeti =>" + ciftSayiAdet + "ciftSayiToplamlari =>" + ciftToplam);
            }
            else{
                tekSayiAdet=tekSayiAdet+1
                tekToplam=tekToplam+i
                console.log("tek Sayilar =>" + i + "Tek Sayi adeti =>" + tekSayiAdet + "tekSayiToplamlari =>" + tekToplam);
            }
            genelToplam=genelToplam+i;
        }
        console.log(`Genel Toplamları => ${genelToplam}`); // => interpolation yapısı
    }
}
 //example();