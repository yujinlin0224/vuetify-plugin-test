import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import PopupView from '@/views/popup/PopupView.vue'

const popupView = createApp(PopupView)
registerPlugins(popupView)
popupView.mount('#plugin-popup')
console.log('popup view is mounted')
