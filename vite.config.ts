import { URL, fileURLToPath } from 'node:url'
import fs from 'node:fs'

import YAML from 'yaml'
import yamlPlugin from '@modyfi/vite-plugin-yaml'
import vuePlugin from '@vitejs/plugin-vue'
import vuetifyPlugin, { transformAssetUrls } from 'vite-plugin-vuetify'
import webExtensionPlugin from 'vite-plugin-web-extension'
import { defineConfig } from 'vite'

type Object = Record<string, unknown>

function generateManifest(): Object {
  const manifestYAML = YAML.parse(fs.readFileSync('src/manifest.yaml', 'utf8')) as Object
  const packageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8')) as Object
  return {
    ...manifestYAML,
    name: packageJSON.name,
    description: packageJSON.description,
    version: packageJSON.version,
  }
}

// const webExtConfig = YAML.parse(fs.readFileSync('web-ext.config.yaml', 'utf8')) as Object

// TODO: https://github.com/antfu/unplugin-auto-import

function generatePlugins() {
  return [
    vuePlugin({
      template: { transformAssetUrls },
    }),
    vuetifyPlugin({
      autoImport: true,
    }),
  ]
}

export default defineConfig({
  plugins: [
    ...generatePlugins(),
    yamlPlugin(),
    webExtensionPlugin({
      manifest: generateManifest,
      browser: 'chrome',
      // webExtConfig,
      // scriptViteConfig: {
      //   plugins: generatePlugins(),
      // },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
})
