<template>
    <div v-if='$store.state.jobs.filter(ele=>ele.company==company.id).length==0'>
        <ion-card class="warning">
            <ion-item>
                <ion-label>This company don't have any job!</ion-label>
            </ion-item>
        </ion-card>
    </div>
    <div v-else>
        <ion-slides v-if='open' pager="true" :options="slideOpts">
            <ion-slide v-for="i in $store.state.jobs.filter(ele=>ele.company==company.id)">
                <GalleryCard :company='i'/>
            </ion-slide>
        </ion-slides>
    </div> 
</template>
<script>
import NewJob from '../../Company/YourCompany/NewJob'
import GalleryCard from '../Gallery/GalleryCard'
export default {
    props:[
        'company'
    ],
  components:{
    GalleryCard,
    NewJob
  },
  created(){
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
    },
    computed:{
        companyLoggedIn(){
            return JSON.parse(localStorage.getItem('company'))!=null ? true : false
        }
    }
}

</script>
<style scoped>
.warning{
    background-color: rgb(103, 158, 160);
}
</style>