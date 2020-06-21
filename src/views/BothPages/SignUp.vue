<template>
    <div v-if="$store.state.loading==false" class="ion-page">
        <SignUpInfluencer v-if="$store.state.type=='influencer'"/>
        <SignUpCompany v-else/>
    </div>
    <ion-page v-else>
        <Loader/>
    </ion-page>    
</template>
<script>
import Loader from '../BothPages/Loader'
import SignUpInfluencer from '../../components/Influencer/StartInfluencer/SignUpInfluencer'
import SignUpCompany from '../../components/Company/StartCompany/SignUpCompany'
export default {
    components:{
        SignUpInfluencer,
        SignUpCompany,
        Loader
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