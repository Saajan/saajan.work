import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { unpluginRouterGeneratorFactory } from '@tanstack/router-plugin'

export default defineConfig({
  plugins: [
    unpluginRouterGeneratorFactory(),
    react(),
  ],
})
