import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port: process.env.PORT || 3000,
    proxy:{
      '/api': 'https://seven920-mit-student-marketplace.onrender.com'
    }
  },
  plugins: [react()],
})
