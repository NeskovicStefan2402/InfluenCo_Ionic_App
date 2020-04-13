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
    youtube:{
      followers:0,
      videos:0,
      views:0
    },
    instagram:{
      followers:0,
      following:0,
      description:''
    },
    jobs:[],
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
    influencer:JSON.parse(localStorage.getItem('influencer'))==null ? {} : JSON.parse(localStorage.getItem('influencer')),
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
              var inf=data[0]['fields']
              inf["id"] = data[0]['pk']
              localStorage.setItem('influencer',JSON.stringify(inf))
              state.influencer=inf
              resolve(true);
            }
          })
          .catch(error=>{
            console.log(error)
            reject(error);
        })
      })
    },
    uploadImage({commit,state},data){
      console.log(data)
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/uploadImage/',data)
          .then(({data,status})=>{
            if(status === 200){
              console.log('Data is: '+data)
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
    },
    getYoutubeStats({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+state.influencer.youtube+'&key=AIzaSyA8e2wuvlNnZpFubhTVuxfEL2KLzZYu4Wc')
          .then(({data,status})=>{
            if(status === 200){
                state.youtube.followers=data['items'][0]['statistics']['subscriberCount']
                state.youtube.videos=data['items'][0]['statistics']['videoCount']
                state.youtube.views=data['items'][0]['statistics']['viewCount']
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    getInstagramStats({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.get('https://www.instagram.com/'+state.influencer.instagram+'/?__a=1')
          .then(({data,status})=>{
            if(status === 200){
                state.instagram.description=data['graphql']['user']['biography']
                state.instagram.followers=data['graphql']['user']['edge_followed_by']['count']
                state.instagram.following=data['graphql']['user']['edge_follow']['count']
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    updateInfluencer({commit,state},ele){
      var obj={
        id:state.influencer.id,
        first_name:''+state.influencer.first_name,
        last_name:''+state.influencer.last_name,
        instagram:''+state.influencer.instagram,
        youtube:''+state.influencer.youtube,
        age: state.influencer.age,
        
      }
      console.log(obj)
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/updateInfluencer/',obj)
          .then(({data,status})=>{
            if(status === 200){
              var inf=data[0]['fields']
              inf["id"] = data[0]['pk']
              localStorage.setItem('influencer',JSON.stringify(inf))
              state.influencer=inf
              resolve(true);
            }
          })
          .catch(error=>{
            console.log(error)
            reject(error);
        })
      })
    },
    getActiveJobs({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/getActiveJobs')
        .then(({data,status})=>{
          console.log(data)
          state.jobs=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.jobs.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    setInterestForJob({commit,state},ele){
      return new Promise((reject,resolve)=>{
        axios.
        post('http://192.168.0.11:8000/setInterestForJob/',ele)
        .then(({data,status})=>{
          if(status==200){
            state.influencer.interests=[]
            data.forEach(element => {
              var obj={
                image:element['fields']['image'],
                description:element['fields']['decription'],
                price:element['fields']['price'],
                name:element['fields']['name'],
                id:element['pk']
              }
              console.log(obj)
              state.influencer.interests.push(obj)
            });
            localStorage.setItem('influencer',JSON.stringify(state.influencer))
            resolve(true)
          }
         
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    getInterestsForInfluencer({commit,state}){
      return new Promise((reject,resolve)=>{
        axios.
        get('http://192.168.0.11:8000/getInterestsForInfluencer/'+state.influencer.id)
        .then(({data,status})=>{
          if(status==200){
            state.influencer.interests=[]
            data.forEach(element => {
              var obj={
                image:element['fields']['image'],
                description:element['fields']['decription'],
                price:element['fields']['price'],
                name:element['fields']['name'],
                id:element['pk']
              }
              state.influencer.interests.push(obj)
            });
            localStorage.setItem('influencer',JSON.stringify(state.influencer))
            resolve(true)
          }
        })
        .catch(error=>{
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
