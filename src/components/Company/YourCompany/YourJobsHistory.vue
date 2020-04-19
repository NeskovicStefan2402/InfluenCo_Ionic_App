<template>
    <div>
        <ion-item>
            <h3>Your finished jobs:</h3>
        </ion-item>
        <div v-if='$store.state.history.length==0'>
            <ion-card class="warning">
                <ion-item>
                    <ion-label>This company don't have any job!</ion-label>
                </ion-item>
            </ion-card>
        </div>
        <div v-else>
            <ion-slides v-if='open' pager="true" :options="slideOpts">
                <ion-slide v-for="i in $store.state.history">
                    <GalleryCard :company='i'/>
                </ion-slide>
            </ion-slides>
        </div>
    </div> 
</template>
<script>
import GalleryCard from './JobCard'
export default {
  components:{
    GalleryCard
  },
  created(){
    this.$store.dispatch('getJobs')
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
.warning{
    background-color: rgb(103, 158, 160);
}
</style>