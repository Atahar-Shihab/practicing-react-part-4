import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import daisyui from 'daisyui'
// https://vitejs.dev/config/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()]
})
