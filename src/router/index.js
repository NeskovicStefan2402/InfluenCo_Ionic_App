import Vue from 'vue'
import Home from '../views/BothPages/Home.vue'
import Login from '../views/BothPages/Login.vue'
import SignUp from '../views/BothPages/SignUp.vue'
import Companies from '../views/Influencer/FilterInfluencerPage.vue'
import Info from '../views/BothPages/InfoSlider.vue'
import Start from '../views/Influencer/StartInfluencer.vue'
import InfluencerProfile from '../views/Influencer/InfluencerProfile.vue'
import Interests from '../components/Influencer/StartInfluencer/InfluencerInterests'
import WelcomeHeader from '../components/StartComponents/WelcomeHeader'
import Welcome from '../views/BothPages/Welcome.vue'
import CompanyInfo from '../views/Influencer/CompanyInfoPage'
import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/companies',
    name: 'Companies',
    component: Companies
  },
  {
    path:'/companies/:id',
    name:'companyInfo',
    component: CompanyInfo
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
    path: '/influencerProfile',
    name: 'InfluencerProfile',
    component: InfluencerProfile
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
