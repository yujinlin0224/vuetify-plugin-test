import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import ContentView from '@/views/content/ContentView.vue'

const contentElement = document.createElement('div')
contentElement.setAttribute('id', 'plugin-content')
contentElement.setAttribute('style', 'position: absolute')
document.body.prepend(contentElement)
console.log(document.body)

const contentView = createApp(ContentView)
registerPlugins(contentView)
contentView.mount('#plugin-content')
console.log('content view is mounted')
