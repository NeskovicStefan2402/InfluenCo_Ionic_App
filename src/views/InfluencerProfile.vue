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
                <InterestsJob v-if='$store.state.influencer.interests.length>0'/>
                <ion-card v-else>
                    <ion-item href="#" class="ion-activated">
                        <ion-label>You have no interest in any job!</ion-label>
                    </ion-item>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Info from '../components/Influencer/Profile/Info'
import HeaderIn from '../components/HeaderIn'
import Icons from '../components/Influencer/Icons'
import InterestsJob from '../components/Influencer/Profile/InterestsForJob/InterestsForJob'
import Menu from '../components/Influencer/LeftMenu'
import Stats from '../components/Influencer/Profile/Stats'
export default {
    components:{
        Info,
        HeaderIn,
        Menu,
        Stats,
        Icons,
        InterestsJob
    }
}
</script>