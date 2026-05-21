JavaScript
import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

export default defineConfig({
  plugins: [react()],
  base: '/win11React/', // <-- ADD THIS LINE (Keep the slashes!)
})
