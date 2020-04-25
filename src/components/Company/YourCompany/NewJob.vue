<template>
<ion-card>
    <ion-card-header>
        <h3>Add new job</h3>
    </ion-card-header>
    <ion-card-content>
        <ion-row>
            <ion-col size='3'></ion-col>
            <ion-col size='6'>
                <img src="../../../assets/add.png" class="slika" />
            </ion-col>
            <ion-col size='3'></ion-col>
        </ion-row>
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col>
                <ion-button color='primary' @click="add"> Add </ion-button>
            </ion-col>
        </ion-row>
    </ion-card-footer>
</ion-card>
</template>
<script>
import eventBus from '../../../main'
export default {
    methods:{
        add(){
            eventBus.$emit('workWithJob',true)
        }
    }
}
</script>
<style scoped>
.slika{
    height: 150px;
    width: 100%;
}
</style>
