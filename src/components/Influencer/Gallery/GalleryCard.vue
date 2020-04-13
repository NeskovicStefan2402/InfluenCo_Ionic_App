<template>
<ion-card>
    <ion-card-header>
        <h3>{{company.name}}</h3>
    </ion-card-header>
    <ion-card-content>
        <img :src="image" class="slika" />
        <br>
        {{company.description}}
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col>
                <ion-button color='success' @click="interest" v-if="!postoji" >Interest</ion-button>
                <ion-button color='danger' @click="showAlert" v-else >Interested</ion-button>
            </ion-col>
            <ion-col>
                <h3>{{company.price}} $</h3>
            </ion-col>
        </ion-row>
    </ion-card-footer>
</ion-card>
</template>
<script>
export default {
    props:[
        'company'
    ],
    computed: {
        image() {
            return "http://192.168.0.11:8000/uploads/" + this.company.image;
        },
        postoji(){
            var odg=false
            this.$store.state.influencer.interests.forEach(element => {
                if(element['id']==this.company.id){
                    odg=true;
                }
            });
            return odg;
        }
    },
    methods:{
        showAlert(){
            alert('You selected interest for this job');
        },
        interest(){
            this.$store.dispatch('setInterestForJob',{
                'influencer':this.$store.state.influencer.id,
                'job':this.company.id
            })
            .then(success=>{
                alert('Correct interest!')
            })
            .catch(error=>{
                alert('Error')
            })
        }
    }
}
</script>
<style scoped>

.slika{
    height: 200px;
    width: 100%;
}
</style>