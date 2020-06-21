<template>
    <div>
        <ion-slides v-if='open' pager="true" :options="slideOpts">
            <ion-slide v-for="i in $store.state.jobs.filter(ele=>ele.company==company.id)" v-if='$store.state.compLoad==false'>
                <JobCard :job='i'/>
            </ion-slide>
            <div v-else>
                <CompLoader/>
            </div>
            <ion-slide v-if="!newJob">
                <NewJob/>
            </ion-slide>
            <ion-slide v-else>
                <EditJob/>
            </ion-slide>
        </ion-slides>
    </div> 
</template>
<script>
import JobCard from './JobCard'
import NewJob from './NewJob'
import EditJob from './EditJob'
import CompLoader from '../../StartComponents/ComponentLoad'
import eventBus from '../../../main'
export default {
    props:[
        'company'
    ],
    components:{
        JobCard,
        NewJob,
        EditJob,
        CompLoader
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
            open:false,
            newJob:false
        }
    },
    mounted(){
        eventBus.$on('workWithJob',ele=>{
            this.newJob=ele
        })
    }
}

</script>
<style scoped>
.warning{
    background-color: rgb(103, 158, 160);
}
</style>