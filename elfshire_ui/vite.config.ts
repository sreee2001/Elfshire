// Import the defineConfig helper from Vite
import { defineConfig } from 'vite'

// Import the official Vite plugin for React
import react from '@vitejs/plugin-react'

// Export the Vite configuration
// For more options, see: https://vite.dev/config/
export default defineConfig({
  base: '/Elfshire',
  // Register plugins here. The React plugin enables React Fast Refresh and other React-specific features.
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
