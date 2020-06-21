<template>
<ion-card>
    <ion-card-header>
        <h3>{{job.name}}</h3>
    </ion-card-header>
    <ion-card-content>
        <img :src="image" class="slika" />
        <br>
        <ion-card class="finished">
            {{name}}
        </ion-card>
        {{job.description}}
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col></ion-col>
            <ion-col size='4'><h3>{{job.price}} $</h3></ion-col>
            <ion-col>
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
        name(){
            var ele=''
            this.$store.state.influencers.forEach(element => {
                if( element.id == this.job.selected){
                    ele = element.first_name+ ' '+ element.last_name
                }
            });
            return ele
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
}
</script>
<style scoped>

.slika{
    height: 200px;
    width: 100%;
}
.finished{
    background-color: rgb(77, 9, 9);
    color: white;
    padding: 10px;
    width: 100%;
    border: 0 ;
    border-radius: 0;
}
</style>