import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:null,
    open_menu:false,
    interest:'',
    filterJob:'',
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
    popular:[],
    jobs:[],
    jobId:'',
    selectedInfluencer:null,
    interestedInfluencers:[],
    companies:[],
    chats:[],
    influencers:[],
    filterData:'',
    typeData:-1,
    company:JSON.parse(localStorage.getItem('company'))==null ? {} : JSON.parse(localStorage.getItem('company')),
    influencer:JSON.parse(localStorage.getItem('influencer'))==null ? {} : JSON.parse(localStorage.getItem('influencer')),
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
    messages:[],
    history:[],
    types:[]
  },
  mutations: {
    
  },
  actions: {
    loginInfluencer({commit,state},data){
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
            reject(error);
        })
      })
    },
    uploadCompanyLogo({commit,state},data){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/uploadImage/company/'+state.company.id,data)
          .then(({data,status})=>{
            if(status === 200){
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    uploadInfluencerImage({commit,state},data){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/uploadImage/influencer/'+state.influencer.id,data)
          .then(({data,status})=>{
            if(status === 200){
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    uploadCompanyJobImage({commit,state},data){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/uploadImage/job/'+data[0],data[1])
          .then(({data,status})=>{
            if(status === 200){
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
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    getInterests({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.get('http://192.168.0.11:8000/getInterests/')
          .then(({data,status})=>{
            if(status === 200){
              state.interests=[]
              data.forEach(element => {
                var obj={
                  id:element['pk'],
                  name:element['fields']['name'] 
                }
                state.interests.push(obj)
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
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/updateInfluencer/',obj)
          .then(({data,status})=>{
            if(status === 200){
              var interests= state.influencer.interests
              var inf=data[0]['fields']
              inf["id"] = data[0]['pk']
              inf['interests']=interests
              localStorage.setItem('influencer',JSON.stringify(inf))
              state.influencer=inf
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    getActiveJobs({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/getActiveJobs')
        .then(({data,status})=>{
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
    },
    getCompanies({commit,state}){
      return new Promise((reject,resolve)=>{
        axios.
        get('http://192.168.0.11:8000/getCompanies/')
        .then(({data,status})=>{
          state.companies=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.companies.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    getCompanyTypes({commit,state}){
      return new Promise((reject,resolve)=>{
        axios.
        get('http://192.168.0.11:8000/getCompanyTypes/')
        .then(({data,status})=>{
          state.types=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.types.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    loginCompany({commit, state},ele){
      var obj={
        name: ''+ele.name,
        password: ''+ele.password
      }
      return new Promise((resolve,reject)=>{
        axios.
        post('http://192.168.0.11:8000/loginCompany/',obj)
        .then(({data,status})=>{
          if(status==200){
            // state.company=data[0]
              var company=data[0]['fields']
              company["id"] = data[0]['pk']
              localStorage.setItem('company',JSON.stringify(company))
              state.company=company
              resolve(true);
          }
        })
        .catch(error=>{
        })
      })
    },
    getPopularInfluencers({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/getPopularInfluencers')
        .then(({data,status})=>{
          // var object=JSON.parse(data)
          state.popular=[]
          data.forEach(element => {
            state.popular.push(element)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    getInfluencers({commit,state}){
      return new Promise((reject,resolve)=>{
        axios.
        get('http://192.168.0.11:8000/getInfluencers/')
        .then(({data,status})=>{
          state.influencers=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.influencers.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    getJobs({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/getJobsForCompany/'+state.company.id)
        .then(({data,status})=>{
          state.history=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.history.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    updateCompany({commit,state},ele){
      var obj={
        id:state.company.id,
        name:''+state.company.name,
        desription:''+state.company.desription
      }
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/updateCompany/',obj)
          .then(({data,status})=>{
            if(status === 200){
              var com=data[0]['fields']
              com["id"] = data[0]['pk']
              localStorage.setItem('company',JSON.stringify(com))
              state.company=com
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    signUpCompany({commit,state}){
      var obj={
        name: ''+state.company.name,
        description: ''+state.company.desription,
        type: state.company.type,
        site: ''+state.company.site,
        idNumber: ''+state.company.id,
        password:''+state.company.password
      }
      return new Promise((reject,resolve)=>{
        axios.
        post('http://192.168.0.11:8000/signUpCompany/',obj)
        .then(({data,status})=>{
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    postJob({commit,state},ele){
      var obj={
        company:''+state.company.id,
        name:''+ele.title,
        description:''+ele.description,
        price: ele.price
      }
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/postJob/',obj)
          .then(({data,status})=>{
            if(status === 200){
              console.log(data)
              state.jobId = data[0]['pk']
              console.log(state.jobId)
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    updateJob({commit,state},ele){
      var obj={
        id: ele.id,
        name:''+ele.title,
        description:''+ele.description,
        price: ele.price
      }
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/updateJob/',obj)
          .then(({data,status})=>{
            if(status === 200){
              console.log(data)
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    deleteJob({commit,state},id){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/deleteJob/'+id)
          .then(({data,status})=>{
            if(status === 200){
              console.log(data)
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    getInfluencersForActiveJob({commit,state},id){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/getInfluencersForActiveJob/'+id)
        .then(({data,status})=>{
          state.interestedInfluencers=[]
          data.forEach(element => {
            var obj=element['fields']
            obj['id']=element['pk']
            state.interestedInfluencers.push(obj)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    finishJob({commit,state},ele){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/finishJob/',ele)
          .then(({data,status})=>{
            if(status === 200){
              console.log(data)
              resolve(true);
            }
          })
          .catch(error=>{
            reject(error);
        })
      })
    },
    getChats({commit,state}){
      var type = JSON.parse(localStorage.getItem('influencer')) == null ? 'company' : 'influencer'
      var id = type == 'company' ? state.company.id : state.influencer.id
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/chats/'+type+'/'+id)
        .then(({data,status})=>{
          state.chats=[]
          data.forEach(element => {
            state.chats.push(element)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    getMessages({commit,state},id){
      return new Promise((resolve,reject)=>{
        axios.
        get('http://192.168.0.11:8000/messages/'+id)
        .then(({data,status})=>{
          state.messages=[]
          data.forEach(element => {
            state.messages.push(element)
          });
          resolve(true)
        })
        .catch(error=>{
          reject(error)
        })
      })
    },
    postMessage({commit,state},ele){
      return new Promise((resolve,reject)=>{
        axios.post('http://192.168.0.11:8000/postMessage/',ele)
          .then(({data,status})=>{
            if(status === 200){
              state.messages=[]
              data.forEach(element => {
                state.messages.push(element)
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
