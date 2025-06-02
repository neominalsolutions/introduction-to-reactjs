import { useState } from 'react';

function TestComponent() {
	const [message, setMessage] = useState('');

	// component eventleri ise bu şekilde arrow function yazılır
	const onButtonClick = () => {
		// Kendi fonksiyonumuz
		alert('tıklandı');
		setMessage('Mesaj verildi');
	};
	// arayüz
	// buton onclick olunca onButtonClick function tetikle
	return (
		<div>
			Test Component
			<button onClick={onButtonClick}>Buton</button>
			{/* event binding -> react eventine bir fonksiyon bağlama olayına event binding deriz */}
			<p>
				Mesajımız : {message}
				{/* model binding -> model binding ise arayüzdeki kullanılan statelerin yeni değerlerinin ekraana yansıması için jsx dosyasına yazılması durumu -> state bağlama */}
			</p>
		</div>
	);
}

export default TestComponent;
