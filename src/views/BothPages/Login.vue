<template>
    <div v-if="$store.state.loading==false" class="ion-page">
            <LoginInfluencer v-if="$store.state.type=='influencer'"/>
            <LoginCompany v-else/>
    </div>
    <ion-page v-else>
        <Loader/>
    </ion-page>
</template>
<script>
import Loader from '../BothPages/Loader'
import LoginInfluencer from '../../components/Influencer/StartInfluencer/LoginInfluencer'
import LoginCompany from '../../components/Company/StartCompany/LoginCompany'
export default {
    components:{
        Loader,
        LoginInfluencer,
        LoginCompany
    }
}
</script>
<style scoped>
.ion-page{
    background-color: #f2b620;
    width: 100%;
    height: 100vh;
}
</style>