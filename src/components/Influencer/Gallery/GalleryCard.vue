<template>
<ion-card>
    <ion-card-header>
        <h3>{{company.name}}</h3>
    </ion-card-header>
    <ion-card-content>
        <img :src="require('@/assets/'+company.image+'')" class="slika" />
        <br>
        {{company.description}}
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col>
                <ion-button color='success'>Interest</ion-button>
            </ion-col>
            <ion-col>
                <h3>{{company.price}} $</h3>
            </ion-col>
        </ion-row>
    </ion-card-footer>
</ion-card>
</template>
<script>
export default {
    props:[
        'company'
    ]
}
</script>
<style scoped>
.slika{
    height: 200px;
    width: 100%;
}
</style>