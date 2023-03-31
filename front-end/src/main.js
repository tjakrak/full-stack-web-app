import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Cookies from 'js-cookie'

const cookieMixin = {
  created() {
    Cookies.set('my_cookie', 'my_value', {
      sameSite: 'none',
      secure: true
    })
    this.cookieValue = Cookies.get('my_cookie')
  }
}

const app = createApp(App)

const GOOGLE_CLIENT_ID = import.meta.env.VUE_APP_GOOGLE_CLIENT_ID

app.provide('googleClientId', GOOGLE_CLIENT_ID)

app.mixin(cookieMixin)

app.use(router)

app.mount('#app')
