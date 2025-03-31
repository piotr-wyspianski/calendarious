import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
        prefix: 'p',
        darkModeSelector: 'tim-dashboard-dark',
        cssLayer: false
    }
}
})
app.use(router)

app.mount('#app')
