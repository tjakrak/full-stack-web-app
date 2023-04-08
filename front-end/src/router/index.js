import HomeView from '../views/HomeView.vue'
import Cookies from 'js-cookie'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register/option',
      name: 'register-options',
      component: () => import('../views/RegisterOptionView.vue')
    },
    {
      path: '/register/org',
      name: 'register-org',
      component: () => import('../views/RegisterOrgView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/assessment/:id',
      name: 'assessment',
      component: () => import('../views/AssessmentView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Authentication check
    const jwtToken = Cookies.get('jwtToken')

    if (!jwtToken) {
      return next('/login')
    }

    return next()
  }

  // Allow navigation to /register route without authentication
  if (to.path === '/register') {
    return next()
  }

  next()
})

export default router
