<template>
    <ion-card class="part">
        <ion-card-header>
            {{interest.name}}
        </ion-card-header>
        <ion-card-content>
            <ion-row>
                <ion-col>
                    <img :src="image">
                </ion-col>
                <ion-col>
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
</style>