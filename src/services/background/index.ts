import browser from 'webextension-polyfill'

console.log('background service is running')

browser.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details)
})
