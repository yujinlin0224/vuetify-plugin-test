import vuetify from '@/plugins/vuetify'

import type { App } from 'vue'
import { loadFonts } from './webFontLoader'

export function registerPlugins(app: App<Element>) {
  loadFonts()
  app.use(vuetify)
}
