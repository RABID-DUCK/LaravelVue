import { defineConfig } from 'vite';
const copy = require('rollup-plugin-copy')
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        copy({
            targets: [
                {
                    // Copy the files from this directory:
                    src: 'resources/js/views/**/*',
                    // To this directory in the build:
                    dest: 'public/js/views',
                },
            ],
            }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/js'
    }
});
