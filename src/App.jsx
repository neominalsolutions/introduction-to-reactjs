import './App.css';
import ButtonComponent from './components/button-component';
import Generator from './components/random-number-generator';
import UUIDGenerator from './components/uuid-generator';

function App() {
	return (
		<>
			<Generator />
			<hr></hr>
			<UUIDGenerator />

			<hr></hr>

			<p style={{ color: 'red', backgroundColor: 'ButtonText' }}>P Elementi</p>

			{/* Propslar ile component özelleştirme yaptık. Aynı componenti farklı props değerleri ile oluşturduk. */}

			<div title="deneme1">sadsad</div>

			<ButtonComponent
				sx={{ color: 'red', backgroundColor: 'gray', padding: 5, margin: 5 }} // -> Props 1
				text={'Button1'} // -> Props 2
			/>
			<ButtonComponent
				sx={{
					color: 'green',
					backgroundColor: 'yellow',
					borderRadius: 5,
					padding: 5,
					margin: 5,
				}}
				text={'Button2'}
			></ButtonComponent>

			<label>Adınız</label>
			<input type="text" placeholder="Adınızı Giriniz" />

			<label>Soyadınız</label>
			<input type="text" placeholder="Soyadınızı Giriniz" />
		</>
	);
}

export default App;
