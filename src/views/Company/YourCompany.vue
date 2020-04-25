<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
            <InfoCard/>
            <EditData/>
            <Subheader/>
            <div v-if="page=='active'">
                <ion-item>
                    <h3>Your active jobs:</h3>
                </ion-item>
                <ActiveJobs :company='$store.state.company'/>
            </div>
            <HistoryCards v-else/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import EditData from '../../components/Company/YourCompany/EditData'
import InfoCard from '../../components/Company/YourCompany/InfoCompany'
import HistoryCards from '../../components/Company/YourCompany/YourJobsHistory'
import Menu from '../../components/Company/Menu/LeftMenu'
import Subheader from '../../components/Company/YourCompany/Subheader'
import ActiveJobs from '../../components/Company/YourCompany/SliderActiveJobs'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
export default {
    components:{
        InfoCard,
        HistoryCards,
        Menu,
        HeaderIn,
        ActiveJobs,
        EditData,
        Subheader
    },
    data(){
        return{
            open:false,
            page:'active'
        }
    },
    mounted() {
        eventBus.$on("nav", ele => {
            this.open = ele;
        });
        eventBus.$on('subheader_company',ele=>{
            this.page=ele
        })
    },
}
</script>