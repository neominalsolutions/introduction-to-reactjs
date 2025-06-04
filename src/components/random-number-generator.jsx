// içerisinde bir buton var rastgele sayı üretip ekranda rastgele sayı alamamızı sağlasın
// fakat uuid generate de edebilsin propsdan gönderilen değere göre neyi generate edeceğini belirlesin

import { useEffect, useState } from 'react';

function Generator() {
	// her burona basınca ekradaki değer rastgele sayı ise rastgele sayı üret
	// değer değişiecek biz bu işlemleri state ile yapıyorduk
	const [randomNumber, setRandomNumber] = useState();

	useEffect(() => {
		// Sayfa ilk render edildiğinde çalışma olayına mounting diyoruz.
		// fonksiyonun içinde yapılacak olan işlemler burada yazılır
		console.log('useEffect çalıştı - component ilk render edildiğinde çalışır');
	}, []); // [] dependecies diye geçer, burada tanımlıs statelerin değiştiği an takip edilir. Eğer boş bırakılırsa component ilk render edildiğinde çalışır.

	useEffect(() => {
		// eğer randomNumber state değişirse bu fonksiyon tetiklenecek
		if (randomNumber !== undefined && randomNumber >= 50) {
			console.log(
				'useEffect çalıştı - randomNumber değiştiğinde çalışır',
				randomNumber
			);
			alert(`Yeni Değer 50 den büyük veya eşit: ${randomNumber}`);
		}
	}, [randomNumber]); // randomNumber state'i değiştiğinde bu useEffect tetiklenecek. Yani randomNumber değiştiğinde bu fonksiyon çalışacak.

	console.log('...render');

	const onGenerate = () => {
		setRandomNumber(Math.floor(Math.random() * 100)); // 0-99 arası rastgele sayı üret
		console.log('randomNumber', randomNumber);

		let number = 1;

		// 200ms lik bir bekleme sonrası çalışacak
		// setState asenkron bir işlem olduğu için, setTimeout gibi çalışır.
		setTimeout(() => {
			console.log('setTimeout çalıştı');
			number++;
			console.log('setTimeout çalıştı', number); // 2
		}, 2000);

		console.log('number', number); // 2  // 1 asenkron olduğu için satır çalıştığında number 1 olarak yazılır
	};

	// Not: randomNumber (state) değiştikçe yeninde render tetiklenir. Yeni değer ile arayüz çizilmek zorundadır.
	return (
		<div>
			<p>Random Number: {randomNumber}</p>
			<button onClick={onGenerate}>Generate</button>
		</div>
	);
}

export default Generator;
