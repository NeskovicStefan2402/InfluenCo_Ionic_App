<template>
    <div class="ion-page">
        <router-view></router-view>
    </div>
</template>
<script>
import WelcomeHeader from '../components/WelcomeHeader'
import Login from './Login'
import SignUp from './SignUp'
export default {
    components:{
        WelcomeHeader,
        Login,
        SignUp
    }
}
</script>
<style scoped>
.ion-page{
    padding-top: 100px;
}
</style>