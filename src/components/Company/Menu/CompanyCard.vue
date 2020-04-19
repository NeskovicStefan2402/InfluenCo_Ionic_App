<template>
    <ion-card>
        <ion-row>
            <ion-col size='4'></ion-col>
            <ion-col size='4'>
                <img :src="image">
            </ion-col>
            <ion-col size='4'></ion-col>
        </ion-row>
                <h3>{{$store.state.company.name}}</h3>
    </ion-card>
</template>
<script>
export default {
    computed:{
        image(){
            return 'http://192.168.0.11:8000/'+this.$store.state.company.logo
        }
    }
}
</script>
<style scoped>
img{
    height: 70px;
    width: 120px;
    /* margin-left: 30%; */
}
ion-card{
    color: white;
    text-align: center;
}
</style>
