<template>
  <ion-slides v-if='open' pager="true" :options="slideOpts">
    <ion-slide v-for="i in $store.state.popular">
      <GalleryCard :influencer='i'/>
    </ion-slide>
  </ion-slides>
</template>
<script>
import GalleryCard from './GalleryCard'
export default {
  components:{
    GalleryCard
  },
  created(){
    this.$store.dispatch('getPopularInfluencers')
                .then(success=>{
                    this.open=true
                })
  },
  computed:{
    favorites(){
      return this.$store.state.popular.splice(0,5)
    }
  },
  data(){
        return{
            slideOpts:{
                // initSlide : 1,
                speed : 400
            },
            open:false
        }
    }
}
</script>
<style scoped>

</style>