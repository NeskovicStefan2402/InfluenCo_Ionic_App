import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:null,
    info:localStorage.getItem('info')==null ? true : false,
    influencer:{
            first:'',
            last:'',
            email:'',
            age:18,
            interest:'',
            youtube:'',
            facebook:'',
            twitter:'',
            instagram:'',
            password:'',
            confirm_password:''
    },
    company:{
            name:'',
            description:'',
            id:'',
            site:'',
            password:'',
            confirm_password:''
    },
    types:[
      'Sports',
      'Music',
      'Gaming',
      'Fashion',
      'Programming',
      'Video'
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
