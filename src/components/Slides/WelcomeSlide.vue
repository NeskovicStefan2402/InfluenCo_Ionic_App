<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <img src="../../assets/influencer.png"/>
                </ion-card-content>
            </ion-card>
            <h3>Welcome to InfluenCo!</h3>
            <p>
                Hi! It's me InfluenCo and we're here for you. Do you understand us?  
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