<template>
    <ion-page>
        <ion-header>
            <HeaderIn/>
        </ion-header>
        <ion-content>
            <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <Info/>
                <Icons/>
                <Stats/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Info from '../components/Influencer/Profile/Info'
import HeaderIn from '../components/HeaderIn'
import Icons from '../components/Influencer/Icons'
import Menu from '../components/Influencer/LeftMenu'
import Stats from '../components/Influencer/Profile/Stats'
export default {
    components:{
        Info,
        HeaderIn,
        Menu,
        Stats,
        Icons
    }
}
</script>