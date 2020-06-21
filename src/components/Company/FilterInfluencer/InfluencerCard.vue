<template>
    <ion-card @click="openProfile">
        <ion-card-content>
            <img :src="image">
        </ion-card-content>
        <ion-card-footer>
                <p class="nameClass">{{name}}</p>
        </ion-card-footer>
    </ion-card>
</template>
<script>
export default {
    props:['influencer'],
    computed:{
        image() {
            return "http://10.1.2.197:8000/uploads/" + this.influencer.image;
        },
        name(){
            return this.influencer.first_name
        }
    },
    methods:{
        openProfile(){
            // this.$router.push('influencers/'+this.influencer.id)
        }
    }
}
</script>
<style scoped>
img{
    height: 100px;
    width: 100%;
}
.nameClass{
    text-align: center;
}
ion-card{
    background-color: #273447;
    color: white;
}
</style>