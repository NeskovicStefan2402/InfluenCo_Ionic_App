import Vue from 'vue'
import Home from '../views/BothPages/Home.vue'
import Login from '../views/BothPages/Login.vue'
import SignUp from '../views/BothPages/SignUp.vue'
import Companies from '../views/Influencer/FilterInfluencerPage.vue'
import Info from '../views/BothPages/InfoSlider.vue'
import YourCompany from '../views/Company/YourCompany'
import EditJob from '../views/Company/EditJob'
import NewJob from '../views/Company/NewJob'
import MenuManage from '../views/Company/MenuManage'
import Start from '../views/Influencer/StartInfluencer.vue'
import StartCompany from '../views/Company/StartCompany.vue'
import InfluencerProfile from '../views/Influencer/InfluencerProfile.vue'
import Interests from '../components/Influencer/StartInfluencer/InfluencerInterests'
import WelcomeHeader from '../components/StartComponents/WelcomeHeader'
import Welcome from '../views/BothPages/Welcome.vue'
import ChatHome from '../views/BothPages/Chat/ChatHome'
import Chat from '../views/BothPages/Chat/Chat'
import NewChat from '../views/BothPages/Chat/NewChat'
import ChatHeader from '../components/Chat/HeaderChat'
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
    path: '/newChat',
    name: 'NewChat',
    component: NewChat
  },
  {
    path:'/companies/:id',
    name:'companyInfo',
    component: CompanyInfo
  },
  {
    path:'/editJob/:id',
    name:'EditJob',
    component: EditJob
  },
  {
    path: '/interests',
    name: 'Interests',
    component: Interests
  },
  {
    path: '/chat',
    name: 'Chats',
    components:{  
      'header-chat':ChatHeader,
      default:ChatHome
    }

  },
  {
    path:'/inbox/:id',
    component:Chat
  },
  {
    path: '/yourCompany',
    name: 'YourCompany',
    component:YourCompany
  },
  {
    path: '/home',
    name: 'Start',
    component: Start
  },
  {
    path: '/homeCompany',
    name: 'StartCompany',
    component: StartCompany
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
