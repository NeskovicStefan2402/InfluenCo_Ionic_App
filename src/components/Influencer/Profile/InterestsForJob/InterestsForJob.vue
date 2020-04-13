<template>
    <ion-card>
        <ion-card-header>
            Your history of interest job
        </ion-card-header>
        <ion-card-content>
            <Job v-for="i in $store.state.influencer.interests" :interest="i" /> 
        </ion-card-content>
    </ion-card>
</template>
<script>
import Job from './InterestJob'
export default {
    components:{
        Job
    }
}
</script>
<style scoped>
p{
    color: black;
}
ion-card{
    background-color: rgb(232, 233, 233);
}
</style>