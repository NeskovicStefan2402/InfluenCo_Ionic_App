<template>
    <ion-card>
        <ion-row>
            <ion-col size='4'></ion-col>
            <ion-col size='4'>
                <img :src="image" class="image_class">
            </ion-col>
            <ion-col size='4'></ion-col>
        </ion-row>
                <h4>{{$store.state.influencer.first_name}} {{$store.state.influencer.last_name}}</h4>
    </ion-card>
</template>
<script>
export default {
    computed:{
        image(){
            return 'http://10.1.2.197:8000/uploads/'+this.$store.state.influencer.image
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
h4{
    color: white;
}
ion-card{
    background-color: rgb(152, 175, 199);
    color: white;
    width: 100%;
    margin: 0;
    padding: 10px;
    text-align: center;
}
.image_class{
    border-radius: 50%;
}
</style>
