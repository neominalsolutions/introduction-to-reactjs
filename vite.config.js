import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite react plugin indirdik bu sayede sadece vite derlemesini eact için kullanacağız.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
