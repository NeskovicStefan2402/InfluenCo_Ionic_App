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
        sendMessage(){
            var inf = this.$store.state.selectedInfluencer
            var msg = {
                id_influencer: inf.id,
                id_chats:-1,
                id_company: this.$store.state.company.id,
                send : 'company',
                text : 'Dear '+ inf.first_name+', Congratulations on your new job! In our job description you could see more information about this job. With skills like yours, you don’t need luck — but good luck in your new job, anyway. Bye!'
            }
            this.$store.dispatch('postMessage',msg)
            .then(success=>{
                this.$router.push('/yourCompany')
            })
        },
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
                        this.sendMessage()
                    })
                }
            }
        }
    }
}
</script>
