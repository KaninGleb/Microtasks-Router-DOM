import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Router DOM - 6.4
export default defineConfig({
  base: '/Microtasks-Router-DOM/',
  plugins: [react()],
})

// New syntaxes
// https://vite.dev/config/
// export default defineConfig({
//   base: '/Microtasks-Router-DOM/',
//   plugins: [react()],
// })