<template>
    <SignUpInfluencer v-if="$store.state.type=='influencer'"/>
    <SignUpCompany v-else/>
</template>
<script>
import SignUpInfluencer from '../../components/Influencer/StartInfluencer/SignUpInfluencer'
import SignUpCompany from '../../components/Company/StartCompany/SignUpCompany'
export default {
    components:{
        SignUpInfluencer,
        SignUpCompany
    }
}
</script>