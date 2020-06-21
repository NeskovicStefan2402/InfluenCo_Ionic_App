<template>
    <ion-card>
        <ion-card-content>
            <h1>{{influencer.first_name}} {{influencer.last_name}}</h1>
            <ion-row>
                <ion-col size='4'>    
                    <img :src="image">
                </ion-col>
                <ion-col></ion-col>
                <ion-col size='4'>
                    <ion-button color='danger' v-if="!isSelectedInfluencer" @click="checkInfluencer">Check</ion-button>
                    <ion-button color="success" v-else @click="uncheckInfluencer">Checked</ion-button>
                </ion-col>
            </ion-row>
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    props:['influencer'],
    computed:{
        image(){
            return 'http://10.1.2.197:8000/uploads/'+this.influencer.image
        },
        isSelectedInfluencer(){
            return this.influencer == this.$store.state.selectedInfluencer ? true :false
        }
    },
    methods:{
        checkInfluencer(){
            this.$store.state.selectedInfluencer = this.influencer
        },
        uncheckInfluencer(){
            this.$store.state.selectedInfluencer = null
        }
    }
}
</script>
<style scoped>
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 80px;
    border-radius: 50%;
}
ion-card{
    background-color: coral;
    color: white;
}
</style>