<template>
    <ion-card>
        <ion-row>
            <ion-col size='4'></ion-col>
            <ion-col size='4'>
                <img :src="image" class="image_class">
            </ion-col>
            <ion-col size='4'></ion-col>
        </ion-row>
                <p>{{$store.state.influencer.first_name}} {{$store.state.influencer.last_name}}</p>
    </ion-card>
</template>
<script>
export default {
    computed:{
        image(){
            return 'http://192.168.0.11:8000/'+this.$store.state.influencer.image
        }
    }
}
</script>
<style scoped>
img{
    height: 70px;
    width: 70px;
    /* margin-left: 30%; */
}
ion-card{
    color: white;
    text-align: center;
}
.image_class{
    border-radius: 50%;
}
</style>
