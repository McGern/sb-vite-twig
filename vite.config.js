import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import { join, resolve } from 'node:path';

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, '/src/components')
      }
    })
  ],
  resolve: {
    preserveSymlinks: true
  },
  server: {
    fs: {
      cachedChecks: false
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    lib: {
      entry: {
        test: resolve(__dirname, 'src/components/hasInclude/hasInclude.twig')
      },
      name: 'vite-plugin-twig-drupal'
    }
  }
});
