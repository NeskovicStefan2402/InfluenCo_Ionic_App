<template>
    <ion-content class="ion-padding">
        <ion-card>
            <ion-card-content class="polje">
                <h1>Who are you?</h1>
            </ion-card-content>
        </ion-card>
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-button @click="openInfluencer()" color='primary'>Influencer</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="openCompany()" color='danger'>Company</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
<script>
export default {
    methods:{
        openInfluencer(){
            this.$store.state.type='influencer';
            this.$router.push('/welcome')
        },
        openCompany(){
            this.$store.state.type='company';
            this.$router.push('/welcome')
        }
    }
}
</script>
<style scoped>
.polje{
    background-color: rgb(72, 25, 117);
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
    color: white;
}
ion-grid{
    margin-top: 100px;
}
</style>