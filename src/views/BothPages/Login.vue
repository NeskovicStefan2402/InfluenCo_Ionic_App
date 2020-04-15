<template>
    <LoginInfluencer v-if="$store.state.type=='influencer'"/>
    <LoginCompany v-else/>
</template>
<script>
import LoginInfluencer from '../../components/Influencer/StartInfluencer/LoginInfluencer'
import LoginCompany from '../../components/Company/StartCompany/LoginCompany'
export default {
    components:{
        LoginInfluencer,
        LoginCompany
    }
}
</script>