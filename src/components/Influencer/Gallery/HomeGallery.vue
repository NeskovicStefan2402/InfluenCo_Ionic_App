<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide v-for="i in $store.state.companies">
      <GalleryCard :company='i'/>
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
    console.log(this.$store.state.companies)
  },
  data(){
        return{
            slideOpts:{
                // initSlide : 1,
                speed : 400
            }
        }
    }
}
</script>
<style scoped>

</style>