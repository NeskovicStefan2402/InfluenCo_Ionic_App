<template>
    <div class="ion-page">
        
        <HomeContent/>
    </div>
</template>
<script>
import HomeContent from '../components/HomeContent'
export default{
    components:{
        HomeContent
    },
    created(){
        if(JSON.parse(localStorage.getItem('influencer'))!=null){
            this.$router.push('/home')
        }
    }
}
</script>
<style scoped>
.ion-padding{
    padding: 100px;
}
</style>