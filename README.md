#  İskenderun Teknik Üniversitesi Yemekhane Api

İstenilen tarihe göre yemekhane de çıkan yemeklerin listesini veren basit bir api.

Kurulum

    cd "dosyanın bulundugu yer"
    yarn install
Sunucunun başlatılması

    yarn start
  
 
|Adres|Yapılan iş  |
|--|--|
| /foods/{tarih} | Yemek listesini döndürür |

**/Foods**
Yemek listesinin döndürüleceği api yolu , tarih parametresini alır

> http://localhost:3000/foods/GÜN-AY-YIL

Örnek api çıktısı
![enter image description here](https://i.imgyukle.com/2019/10/26/Evo0dY.png)

Yapılacaklar
Bakiye sorgulama api'ı eklenicek.