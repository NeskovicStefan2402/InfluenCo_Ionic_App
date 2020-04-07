<template>
    <LoginInfluencer v-if="$store.state.type=='influencer'"/>
    <LoginCompany v-else/>
</template>
<script>
import LoginInfluencer from '../components/LoginInfluencer'
import LoginCompany from '../components/LoginCompany'
export default {
    components:{
        LoginInfluencer,
        LoginCompany
    }
}
</script>