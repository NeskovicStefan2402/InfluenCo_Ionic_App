<template>
    <SignUpInfluencer v-if="$store.state.type=='influencer'"/>
    <SignUpCompany v-else/>
</template>
<script>
import SignUpInfluencer from '../components/SignUpInfluencer'
import SignUpCompany from '../components/SignUpCompany'
export default {
    components:{
        SignUpInfluencer,
        SignUpCompany
    }
}
</script>