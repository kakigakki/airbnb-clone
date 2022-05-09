import { createApp } from 'vue'

import App from './App.vue'
import i18n from '@/modules/i18n'
import router from '@/modules/router'
import pinia from "@/store";

import '@unocss/reset/tailwind.css'
import '@/assets/styles/index.scss'
import 'uno.css'

const app = createApp(App)

app.use(i18n).use(router).use(pinia)

app.mount('#app')
