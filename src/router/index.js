import Vue from 'vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Info from '../views/InfoSlider.vue'
import Start from '../views/Start.vue'
import Interests from '../components/InfluencerInterests'
import WelcomeHeader from '../components/WelcomeHeader'
import Welcome from '../views/Welcome.vue'
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/interests',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/home',
    name: 'Start',
    component: Start
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/welcome',
    name: 'Welcome',
    components: {
      default:Welcome,
      'header-welcome':WelcomeHeader
    },
    children:[
        {
            path:'', component: Login
        },
        {
            path:'signUp', component: SignUp
        }
    ]
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
