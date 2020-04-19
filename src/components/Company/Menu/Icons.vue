<template>
    <ion-row>
        <ion-col>
          <img v-if="facebook" src="../../../assets/facebook.jpg" @click="openUrl('http://www.facebook.com/'+profile.facebook)" class="image">
        </ion-col>
        <ion-col>
          <img v-if="instagram" src="../../../assets/instagram.jpg" @click="openUrl('http://www.instagram.com/'+profile.instagram)" class="image">
        </ion-col>
        <ion-col>
          <img v-if="twitter" src="../../../assets/twitter.jpg" @click="openUrl('http://www.twitter.com/'+profile.twitter)" class="image">
        </ion-col>
        <ion-col>
          <img v-if="youtube" src="../../../assets/youtube.jpg" @click="openUrl('http://www.youtube.com/channel/'+profile.youtube)" class="image">
        </ion-col>
    </ion-row>
</template>
<script>
export default {
  props:[
    'profile'
  ],
  methods:{
    openUrl(url){
      document.location.replace(url)
    }
  },
  computed:{
    facebook(){
      return this.profile.fields.facebook !== ""
    },
    instagram(){
      return this.profile.fields.instagram !==  ""
    },
    youtube(){
      return this.profile.fields.youtube !==  ""
    },
    twitter(){
      return this.profile.fields.twitter !==  ""
    }
  }
}
</script>
<style scoped>
.image{
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>