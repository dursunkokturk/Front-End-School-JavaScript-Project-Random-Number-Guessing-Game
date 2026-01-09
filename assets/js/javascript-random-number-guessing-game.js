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

/* 1-10 Arasi Rastgele Sayi Uretiyoruz */
let randomNumber = Math.floor(Math.random() * 10) + 1;

/* Kalan Hak Sayisi */
let numberOfRemainingRights = 5;

/* Tahmin Sayisi */
let rightToEstimate;

/* Kalan Hak Sayisi 0'dan Buyuk Ise */
while (numberOfRemainingRights > 0) {

  /* Kullaniciya Bildiriyoruz */
  alert(`Kalan hakkınız: ${numberOfRemainingRights}`);

  rightToEstimate = Number(prompt("1 ile 10 arasında bir sayı tahmin edin:"));

  /* Uretilen Sayi Ile Tahmin Edilen Sayi Esit Ise 
    Kullaniciyi Tebrik Ediyoruz */
  /* Uretilen Sayi Tahmin Edilen Sayidan Buyuk Ise 
    Kullanicidan Daha Buyuk Sayi Girmesini Istiyoruz */
  /* Uretilen Sayi Tahmin Edilen Sayidan Kucuk Ise 
    Kullanicidan Daha Kucuk Sayi Girmesini Istiyoruz */
  if (rightToEstimate === randomNumber) {
    alert("Tebrikler! Doğru Tahmin Ettiniz.");
    break;
  } else if (rightToEstimate < randomNumber) {
    console.log("Daha Büyük Bir Sayı Deneyiniz.");
  } else {
    console.log("Daha Küçük Bir Sayı Deneyiniz.");
  }

  /* Kullaniciya Verilen Haklar Kullanilirken Her Kullanimda
    Kalan Hak Sayisini Azaltiyoruz */
  numberOfRemainingRights--;
}

/* Kullanici Hakki Bitimesine Ragmen Dogru Tahmin Islemi Gerceklesmedi Ise
  Dogru Sayiyi Kullaniciya Gosteriyoruz */
if (numberOfRemainingRights === 0 && rightToEstimate !== randomNumber) {
  console.log("Tahmin hakkınız bitti!");
  console.log(`Doğru sayı: ${randomNumber}`);
}
