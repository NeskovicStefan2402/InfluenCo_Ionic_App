<template>
  <ion-slides v-if='open' pager="true" :options="slideOpts">
    <ion-slide v-for="i in favorites">
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
    this.$store.dispatch('getActiveJobs')
                .then(success=>{
                    this.open=true
                })
  },
  computed:{
    favorites(){
      var lista=this.$store.state.jobs.slice(0)
      lista.sort((a,b)=>{
        var x = a.price
        var y = b.price
        return x < y ? 1 : x > y ? -1 : 0
      })
      return lista.splice(0,5)
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