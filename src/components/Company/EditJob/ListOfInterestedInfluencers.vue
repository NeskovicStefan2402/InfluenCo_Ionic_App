<template>
    <div>
        <h3>Select best influencer: </h3>
        <Influencer v-for="i in $store.state.interestedInfluencers" :influencer='i'/>
        <ion-row>
            <ion-col></ion-col>
            <ion-col size='4'><ion-button @click="finish">Finish</ion-button></ion-col>
            <ion-col></ion-col>
        </ion-row>
    </div>
</template>
<script>
import Influencer from './InterestedInfluencerCard'
export default {
    props:['job'],
    components:{
        Influencer
    },
    created(){
        this.$store.dispatch('getInfluencersForActiveJob',this.job.id)
    },
    methods:{
        finish(){
            if(this.$store.state.selectedInfluencer==null){
                alert('First must to select influencer!')
            }else{
                if(confirm('Do you want to finish this job?')){
                    var obj={
                        'id':this.job.id,
                        'influencer':this.$store.state.selectedInfluencer.id
                    }
                    this.$store.dispatch('finishJob',obj)
                    .then(success=>{
                        this.$router.push('/yourCompany')
                    })
                }
            }
        }
    }
}
</script>
