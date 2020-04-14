<template>
  <ion-slides v-if='open' pager="true" :options="slideOpts">
    <ion-slide v-for="i in $store.state.jobs">
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
    this.$store.dispatch('getActiveJobs')
                .then(success=>{
                    this.open=true
                })
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