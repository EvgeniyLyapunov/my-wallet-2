import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/base/base.css'
import '@/assets/style/base/variables.css'
import App from './App.vue'
import router from './router'

import UUID from 'vue-uuid'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)

app.use(UUID)

app.use(createPinia())
app.use(router)

app.use(vuetify).mount('#app')
