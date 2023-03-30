import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import dotenv from 'dotenv'
import Cookies from 'js-cookie'

// Load environment variables from .env file
dotenv.config();

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

app.mixin(cookieMixin)

app.use(router)

app.mount('#app')
