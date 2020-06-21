<template>
    <ion-page>
        <ion-header>
            <HeaderIn/>
        </ion-header>
        <ion-content>
            <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
                <div class="headinf">
                    <Info/>   
                    <Icons/>
                    <EditPart/>     
                </div>
                <Subheader/>
                <Stats v-if="open=='stats'"/>
                <div v-else>
                    <InterestsJob v-if='$store.state.influencer.interests.length>0'/>
                    <ion-card v-else>
                        <ion-item href="#" class="ion-activated">
                            <ion-label>You have no interest in any job!</ion-label>
                        </ion-item>
                    </ion-card>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import Subheader from '../../components/Influencer/Profile/Subheader'
import Info from '../../components/Influencer/Profile/Info'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import Icons from '../../components/Influencer/Menu/Icons'
import InterestsJob from '../../components/Influencer/Profile/InterestsForJob/InterestsForJob'
import Menu from '../../components/Influencer/Menu/LeftMenu'
import Stats from '../../components/Influencer/Profile/Stats'
import EditPart from '../../components/Influencer/Profile/EditPart'
import eventBus from '../../main'
export default {
    components:{
        Info,
        HeaderIn,
        Menu,
        Stats,
        Icons,
        InterestsJob,
        Subheader,
        EditPart
    },
    data(){
        return{
            open:'stats'
        }
    },
    mounted(){
        eventBus.$on('subheader_profile',ele=>{
            this.open=ele
        })
    }
}
</script>
<style scoped>
.headinf{
    background-image: url('../../assets/back.jpg');
  
}
</style>
