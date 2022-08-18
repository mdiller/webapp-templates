import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [vue()],
	root: "src",
	build: {
		outDir: resolve(__dirname, "build"),
		emptyOutDir: true
	},
	server: {
		open: true
	}
})
