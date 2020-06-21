<template>
      <div  v-if="$store.state.open_menu==true" id="menu" class="sidenav animated fadeInLeft">
          <ion-content color="dark" >
            <Profile />
            <MenuItem :data='home'/>
            <MenuItem :data='profile'/>
            <MenuItem :data='messages'/>
            <MenuItem :data='companies'/>
            <MenuItem :data='logout'/>
            <br />
            <Icons />
          </ion-content>
        </div>
</template>
<script>
import eventBus from "../../../main";
import Profile from "./ProfileCard";
import Icons from "./Icons";
import MenuItem from './MenuItem'
export default {
  data() {
    return {
      open: false,
      home:{
        name:'Home',
        path:'/home'
      },
      profile:{
        name:'Profile',
        path:'/influencerProfile'
      },
      messages:{
        name:'Message',
        path:'/chat'
      },
      companies:{
        name:'Companies',
        path:'/companies'
      },
      logout:{
        name:'Logout',
        path:'/'
      }
    };
  },
  components: {
    Profile,
    Icons,
    MenuItem
  },
  mounted() {
    eventBus.$on("nav", ele => {
      this.open = ele;
    });
  }
};
</script>
<style scoped>

.sidenav {
  height: 100%;
  width: 300px;
  box-shadow:0 0 0 10000px rgba(0,0,0,.50);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.50);
  overflow-x: hidden;
  table-layout: fixed;
  border-collapse: collapse;
  position: relative;
}

.sidenav label {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav label:hover {
  color: #f1f1f1;
  
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav label {
    font-size: 18px;
    
  }
}
</style>