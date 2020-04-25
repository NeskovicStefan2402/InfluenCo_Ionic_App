<template>
    <ion-card class="part">
        <ion-card-content>
            <h3><b>{{interest.name}}</b></h3>
            <ion-row>
                <ion-col size='4'>
                    <img :src="image">
                </ion-col>
                <ion-col></ion-col>
                <ion-col size='7' class="priceClass">
                    <h1>{{interest.price}} $</h1>
                </ion-col>
            </ion-row>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    props:[
        'interest'
    ],
    computed:{
        image(){
            return "http://192.168.0.11:8000/uploads/" + this.interest.image;
        }
    }
}
</script>
<style scoped>
.part{
    background-color: white;
}
img{
    height: 40px;
    width: 70px;
}
.priceClass{
    text-align: right;
}
</style>