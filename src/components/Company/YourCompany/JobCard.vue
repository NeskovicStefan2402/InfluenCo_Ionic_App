<template>
<ion-card>
    <ion-card-header>
        <h3>{{job.name}}</h3>
    </ion-card-header>
    <ion-card-content>
        <img :src="image" class="slika" />
        <br>
        {{job.description}}
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col>
                <ion-button color='primary' @click="edit">Edit</ion-button>
            </ion-col>
            <ion-col size='3'></ion-col>
            <ion-col>
                <h3>{{job.price}} $</h3>
            </ion-col>
        </ion-row>
    </ion-card-footer>
</ion-card>
</template>
<script>
export default {
    props:[
        'job'
    ],
    computed: {
        image() {
            return "http://10.1.2.197:8000/uploads/" + this.job.image;
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
    },
    methods:{
        edit(){
            this.$router.push('/editJob/'+this.job.id)
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