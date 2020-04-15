<template>
    <ion-row>
        <ion-col>
          <img src="../../../assets/facebook.jpg" @click="openUrl('http://www.facebook.com/'+$store.state.influencer.facebook)" class="image">
        </ion-col>
        <ion-col>
          <img src="../../../assets/instagram.jpg" @click="openUrl('http://www.instagram.com/'+$store.state.influencer.instagram)" class="image">
        </ion-col>
        <ion-col>
          <img src="../../../assets/twitter.jpg" @click="openUrl('http://www.twitter.com/'+$store.state.influencer.twitter)" class="image">
        </ion-col>
        <ion-col>
          <img src="../../../assets/youtube.jpg" @click="openUrl('http://www.youtube.com/channel/'+$store.state.influencer.youtube)" class="image">
        </ion-col>
    </ion-row>
</template>
<script>
export default {
  methods:{
    openUrl(url){
      document.location.replace(url)
    }
  }
}
</script>
<style scoped>
.image{
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>