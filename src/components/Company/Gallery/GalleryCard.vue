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
            return "http://10.1.2.197:8000/uploads/" + this.influencer.fields.image;
        },
    },
    methods:{
        
    }
}
</script>
<style scoped>
h3{
    color: white;
}
ion-card{
    background-color: #f2b6200a;
    border-radius: 10px;
    width: 80%;
    color: white;
}
.slika{
    height: 130px;
    width: 250px;
}
</style>