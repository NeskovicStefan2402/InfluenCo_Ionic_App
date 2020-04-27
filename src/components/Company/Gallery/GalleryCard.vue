<template>
<ion-card>
    <ion-card-header>
        <h3>{{influencer.fields.first_name}} {{influencer.fields.last_name}} </h3>
    </ion-card-header>
    <ion-card-content>
        <ion-row>
            <ion-col size='1'></ion-col>
            <ion-col>
                <img :src="image" class="slika" />
            </ion-col>
            <ion-col size='1'></ion-col>
        </ion-row>
        <br>
        {{influencer.fields.email}}
        <br>
        {{influencer.fields.age}} years
    </ion-card-content>
    <ion-card-footer>
        <Icons :profile='influencer'/>
    </ion-card-footer>
</ion-card>
</template>
<script>
import Icons from '../Menu/Icons'
export default {
    props:[
        'influencer'
    ],
    components:{
        Icons
    }
    ,
    computed: {
        image() {
            return "http://192.168.0.11:8000/uploads/" + this.influencer.fields.image;
        },
    },
    methods:{
        
    }
}
</script>
<style scoped>
ion-card{
    background-color: white;
}
.slika{
    height: 100px;
    width: 150px;
}
</style>