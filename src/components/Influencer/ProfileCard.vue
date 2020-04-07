<template>
    <ion-card>
        <ion-row>
            <ion-col size='1'></ion-col>
            <ion-col size='10'>
                <img src="../../assets/profile.png">
            </ion-col>
            <ion-col size='1'></ion-col>
        </ion-row>
                <h4>{{$store.state.login.influencer.email}}</h4>
    </ion-card>
</template>
<style scoped>
img{
    height: 150px;
    
    /* margin-left: 30%; */
}
ion-card{
    color: white;
    text-align: center;
}
</style>
