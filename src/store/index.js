import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:null,
    open_menu:false,
    interest:'',
    info:localStorage.getItem('info')==null ? true : false,
    companies:[
      {
        name: 'Coca Cola',
        image:'cocaCola.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 150.00
      },
      {
        name: 'EA Sports',
        image:'eaSport.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 180.00
      },
      {
        name: 'Herbalife',
        image:'herbalife.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 200.00
      },
      {
        name: 'Jaffa',
        image:'jaffa.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 150.00
      },
      {
        name: 'Knjaz Milos',
        image:'knjazMilos.png',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 100.00
      },
      {
        name: 'Lenovo',
        image:'lenovo.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 180.00
      },
      {
        name: 'Logitech',
        image:'logitech.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 120.00
      },
      {
        name: 'Pepsi',
        image:'pepsi.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 150.00
      },
      {
        name: 'Redbull',
        image:'redbull.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 350.00
      },
      {
        name: 'Swisslion Takovo',
        image:'swisslion.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium modi natus id accusamus iure corrupti accusantium exercitationem. Dolor beatae itaque debitis repudiandae vel id repellat quos labore, nisi fugiat quibusdam sapiente veritatis nihil tempora neque sunt eius, aspernatur molestiae magni esse unde voluptatum harum in. Consectetur est repudiandae quasi.",
        price: 150.00
      }
    ],
    influencer:{
    },
    company:{
            name:'',
            description:'',
            id:'',
            site:'',
            password:'',
            confirm_password:''
    },
    login:{
      influencer:{
        email:'stefan.neskovic@elab.rs',
        password:'Stefan98'
      },
      company:{
        name:'',
        password:''
      }
    },
    types:[]
  },
  mutations: {
    
  },
  actions: {
    loginInfluencer({commit,state},data){
      console.log('Login open'+data['email'])
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/loginInfluencer/',{
          email:''+data['email'],
          password:''+data['password']
        })
          .then(({data,status})=>{
            if(status === 200){
              state.influencer=data[0]['fields']
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    signUpInfluencer({commit,state},ele){
      var obj={
        email:''+ele['email'],
        password:''+ele['password'],
        first_name:''+ele['first_name'],
        last_name:''+ele['last_name'],
        instagram:''+ele['instagram'],
        twitter:''+ele['twitter'],
        facebook:''+ele['facebook'],
        youtube:''+ele['youtube'],
        age: ele['age'],
        interest:''+ele['interest'],
        
      }
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/signUpInfluencer/',obj)
          .then(({data,status})=>{
            if(status === 200){
              
              console.log(data)
              resolve(true);
            }
          })
          .catch(error=>{
            console.log(error)
            reject(error);
        })
      })
    },
    getInterests({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.get('http://192.168.0.11:8000/getInterests/')
          .then(({data,status})=>{
            if(status === 200){
              data.forEach(element => {
                var obj={
                  id:element['pk'],
                  name:element['fields']['name'] 
                }
                state.types.push(obj)
              });
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    }
  },
  modules: {
  }
})
