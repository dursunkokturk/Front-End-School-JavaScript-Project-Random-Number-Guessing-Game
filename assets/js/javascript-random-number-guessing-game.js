/*

Rastgele Sayı Tahmin Oyunu

Rastgele sayı üretmek için "let rastgeleSayi = Math.floor(Math.random() * 10) + 1;" kullanabilirsiniz.

1) Bilgisayar 1 ile 10 arasında rastgele bir sayı üretecektir.
2) Kullanıcının toplam 5 tahmin hakkı olacaktır.
3) Kullanıcı her tahmininde:

    Kalan hakkını görecektir.
    Girdiği sayı rastgele sayı ile karşılaştırılacaktır.

4) Tahmine göre kullanıcıya:

    Daha küçük sayı denemesi
    Daha büyük sayı denemesi şeklinde yönlendirme yapılacaktır.

5) Kullanıcı doğru tahmin yaparsa:

    Tebrik mesajı gösterilecek
    Oyun sonlandırılacaktır.

6) Tahmin hakkı biterse:

    Oyunun bittiğini ve
    Doğru sayının ne olduğu kullanıcıya bildirilecektir.

*/

let randomNumber = Math.floor(Math.random() * 10) + 1;

alert("Sayı Tahmini İçin Toplam 5 Hakkınız Var");

let randomNumbers = {};
let count = 5;

/* Hak Sayisini Artiriyoruz */
let i = 5;

rightToEstimate = prompt((i + 1) + ". Hakkınız");
for (let i = 0; i < count; i--) {
  count--;
  console.log(count);

  let numberOfRemainingRights = 5;
  for(let i = 6;i>numberOfRemainingRights;i--){
    count--;
    console.log(count);
  }
  if (i===0){
    console.log("Hakkınız Kalmadı");
  }
  alert("Kalan Hak Sayısı" + (i - 1));
  /*
  if (randomNumber > rightToEstimate) {
    console.log("Daha Büyük Sayı Denemelisiniz");
  } else if (randomNumber < rightToEstimate) {
    console.log("Daha Küçük Sayı Denemelisiniz");
  } else if (randomNumber === rightToEstimate) {
    console.log("Tebrikler Doğru Tahmin");
    break;
  }
  */
}

// console.log(`1-10 Arasi Üretilen Rasgele Sayı : ${randomNumber}`);