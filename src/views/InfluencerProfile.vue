<template>
    <ion-page>
        <ion-header>
            <HeaderIn/>
        </ion-header>
        <ion-content>
            <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <Info/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Info from '../components/Influencer/Profile/Info'
import HeaderIn from '../components/HeaderIn'
import Menu from '../components/Influencer/LeftMenu'

export default {
    components:{
        Info,
        HeaderIn,
        Menu
    }
}
</script>