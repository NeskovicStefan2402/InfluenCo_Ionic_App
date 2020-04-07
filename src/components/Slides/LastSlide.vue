<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <img src="../../assets/company.png"/>
                </ion-card-content>
            </ion-card>
            <h3>Continue...</h3>
            <p>
                In next you can test this Application, but if you dont understand how it work, you can talk with us about that... 
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
ion-card{
    margin: 20px;
}
</style>