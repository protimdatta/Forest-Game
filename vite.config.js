import { defineConfig } from 'vite'
import path from 'path'

// Ensure the built site uses the repo name as the base path for GitHub Pages
export default defineConfig({
  base: '/Forest-Game/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
