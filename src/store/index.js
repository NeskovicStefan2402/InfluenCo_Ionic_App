import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type:null,
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
