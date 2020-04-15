<template>
    <ion-card id='card'>
        <ion-card-header>
            <ion-row>
                <ion-col size='8'>
                    <h4>{{job.name}}</h4>
                </ion-col>
                <ion-col size='4'>
                    <img :src="image">
                </ion-col>
            </ion-row>
        </ion-card-header>
        <ion-card-content>
            <i>{{job.description}}</i>
        </ion-card-content>
        <ion-card-footer>
            <ion-row>
                <ion-col size='4'>
                    <ion-button color='success' @click="interest" v-if="!postoji" >Interest</ion-button>
                    <ion-button color='danger' @click="interest" v-else >Interested</ion-button>
                </ion-col>
                <ion-col></ion-col>
                <ion-col size='4'>
                    <h3><b>{{job.price}} $</b></h3>
                </ion-col>
            </ion-row>
        </ion-card-footer>
    </ion-card>
</template>
<script>
export default {
    props:['job'],
    methods:{
        interest(){
            this.$store.dispatch('setInterestForJob',{
                'influencer':this.$store.state.influencer.id,
                'job':this.job.id
            })
        }
    },
    computed:{
        image() {
            return "http://192.168.0.11:8000/uploads/" + this.job.image;
        },
        postoji(){
            var odg=false
            this.$store.state.influencer.interests.forEach(element => {
                if(element['id']==this.job.id){
                    odg=true;
                }
            });
            return odg;
        }
    }
}
</script>
<style scoped>
#card{
    background-color: white;
}
</style>