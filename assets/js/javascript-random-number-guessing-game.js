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

console.log(`1-10 Arasi Üretilen Rasgele Sayı : ${randomNumber}`);