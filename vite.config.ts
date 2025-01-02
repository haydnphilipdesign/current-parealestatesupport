import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      // Add React refresh options
      fastRefresh: true,
      // Include specific imports for better tree-shaking
      include: "**/*.{jsx,tsx}",
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  build: {
    // Disable minification for debugging
    minify: false,
    // Source maps for better debugging
    sourcemap: true,
    rollupOptions: {
      output: {
        // Ensure stable chunk names
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  optimizeDeps: {
    // Force include problematic dependencies
    include: [
      'framer-motion',
      'react',
      'react-dom',
      'react-router-dom',
      '@chakra-ui/react',
      '@emotion/react',
      '@emotion/styled'
    ],
    // Ensure these are processed correctly
    entries: [
      'src/**/*.{ts,tsx}',
    ],
    // Force Vite to process these modules
    force: true,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  esbuild: {
    target: 'es2020'
  },
  // Enable detailed logging
  logLevel: 'info',
  // Enable clear screen
  clearScreen: false,
  // Define environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_DEBUG': JSON.stringify(process.env.VITE_DEBUG),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    css: true,
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
        '**/*.d.ts',
      ],
    },
  }
});
