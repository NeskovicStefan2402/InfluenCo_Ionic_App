<template>
    <div class="ion-page">
        <HomeContent/>
    </div>
</template>
<script>
import HomeContent from '../../components/StartComponents/HomeContent'
export default{
    components:{
        HomeContent
    },
    created(){
        if(JSON.parse(localStorage.getItem('influencer'))!=null){
            this.$router.push('/home')
        }else if(JSON.parse(localStorage.getItem('company'))!=null){
            this.$router.push('/homeCompany')
        }
    }
}
</script>
<style scoped>
ion-page{
    background-color: #f2b620;
    height: 100vh;
    width: 100%;
}
.ion-padding{
    padding: 100px;
}
</style>