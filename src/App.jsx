import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


// app de uygulama açıldığında index.html içerisinde div id="root" element içerisinde ekranda gösterilecek olan component FC (function component)
// Component : içerisinde bir görüntü oluşturmamız sağlayan ve bazı js değişken event, function tanımları yapabilidğimiz bir bileşen.
// App Component ismi arayüz döndüren şeylere component deriz.
function App() {
	// component içerisinde arayüzlerde değişiklik yaptığımızda son güncel değeri arayüze yansıtmamızı sağlayan özel değişkenlere ise state diyoruz.
	const [count, setCount] = useState(0); // array deconstruction işlemi
	// getter -> count yani state ekranda okunması için kullanılan değişken. State güncel değerini getterdan okuruz.
	// setter -> butona basılınca ilgili count değerini güncellemek gereken bir fonskiyona ihtiyacım var. bunda setter diyoruz.

	// setCount(3); // count 3 oldu. ekranda değer 3 görünür.

	// jsx -> dosyamız htmle benzeyen js kodu çalıştıurıabilidğimiz component içinde bir view (görüntü) oluşturmamızı sağlayan bir özel dosya formatı
	// Not: Bir component içinde return ifadesi varsa component dosya uzantısı js olmaz. jsx uzantılı olmalı.
	// jsx dosyasında class yerine artık stil verirken className kullanıcaz.
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

// eğer bir component başka bir sayfaden çağırılacak ise export edilmesi lazım.
export default App;
