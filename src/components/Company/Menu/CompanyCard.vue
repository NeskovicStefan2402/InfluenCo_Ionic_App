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
            return 'http://10.1.2.197:8000/uploads/'+this.$store.state.company.logo
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
    background-color: rgb(152, 175, 199);
    color: white;
    width: 100%;
    margin: 0;
    padding: 10px;
    text-align: center;
}
</style>
