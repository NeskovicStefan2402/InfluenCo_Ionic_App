<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <img src="../../assets/bot.png" />
                </ion-card-content>
            </ion-card>
            <h3>About InfluenCoApp!</h3>
            <p>In this Application we have two sides, on first Influencers and second side is Companies.
                If you are Influencer, you will try to share your experience and graduates with us, but if you Company, you will must see our clients! 
            </p>
        </ion-content>
        <ion-footer>
            <ion-row>
                <ion-col size='9'>    
                </ion-col>
                <ion-col>
                    <ion-button @click="skip()">Skip</ion-button>    
                </ion-col>
            </ion-row>
        </ion-footer>
    </ion-page>
</template>
<script>
export default {
    methods:{
        skip(){
            this.$router.push('/home')
        }    
    }
}
</script>
<style scoped>
img{
    height: 300px;
}
</style>