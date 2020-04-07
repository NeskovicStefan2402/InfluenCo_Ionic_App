<template>
  <div v-if="open==true" id="menu" class="sidenav">
    <ion-content color="dark">
      <!-- <ion-label class="closebtn" @click="closeNav()">&times;</ion-label> -->
      <Profile />
      <MenuItem name='Home'/>
      <MenuItem name='Profile'/>
      <MenuItem name='Messages'/>
      <MenuItem name='Companies'/>
      
      <!-- <ion-item color="dark">
        <h5>Home</h5>
      </ion-item> -->
      <!-- <ion-item color="dark">
        <h5>Profile</h5>
      </ion-item> -->
      <!-- <ion-item color="dark">
        <h5>Messages</h5>
      </ion-item> -->
      <!-- <ion-item color="dark">
        <h5>Companies</h5>
      </ion-item> -->
      <br />
      <Icons />
    </ion-content>
  </div>
</template>
<script>
import eventBus from "../../main";
import Profile from "./ProfileCard";
import Icons from "./Icons";
import MenuItem from './MenuItem'
export default {
  data() {
    return {
      open: false
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
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
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