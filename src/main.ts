import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import components from '@/components/UI/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

components.forEach(component => {
    app.component(component.name, component)
})
