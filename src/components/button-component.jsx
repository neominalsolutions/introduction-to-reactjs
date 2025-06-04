import { useState } from 'react';

function ButtonComponent({ text, sx }) {
	const [active, setActive] = useState(true);
	// State-> props gibi dışarıdan müdehale etmez. State değişiminde render gerçekleşir. Re-Render olur Component

	// Props ile State arasındaki en büyük fark Props Render almayı tetiklemez state gibi çalışmaz sadece ilk component doma basılırken değeri gönderebiliriz. Bir event tetiklenip değer değiştiğinde değişen değer ekranda görünmez.

	// Props ilk açılışta değişebilir.
	text = 'Button12';

	// {text,style} değeri Props olur

	// fonsiyonun içerisine farklı arayüzler oluşturmak için gönderdiğimiz değerlere props diyoruz
	// böylelikle ekrana propstan gelen ddeğerlere göre bir çizim yaptırıyoruz.

	// State -> component içinde kullanıcı etkileşimi sonucunda değişir
	// Props -> component dışarıdan gönderilir. Component ekrandaki ilk değerini temsil eder.

	return (
		<>
			<button
				onClick={() => {
					setActive(!active);
					text = 'Button13';
					// component yüklendikten sonra props değişmez.
				}} // her tıklamada durmu değişsin.
				disabled={!active}
				style={sx}
			>
				{text}
			</button>
		</>
	);
}

export default ButtonComponent;

// <Button text={'Tıklat'} style={color:red} />
// <Button text={'Çalıştır'} style={color:yellow} /> <button>Calistir</button> // sarı renk

// function Person(name,surname) {
//     this.name = name;
//     this.surname = surname;
// }

// const person = new Person("Ali","Can")
