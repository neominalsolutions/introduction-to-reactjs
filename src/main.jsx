import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // App dosyasındaki değişkeni mainde referans alıp çağırmak için import kodları uyguladık

// uygulama buradan başlar
createRoot(document.getElementById('root')).render(
	<>
		<App />
	</>
);
