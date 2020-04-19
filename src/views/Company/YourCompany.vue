<template>
    <ion-page>
        <HeaderIn/>
        <ion-content  id='nesto'>
                <Menu v-if='$store.state.open_menu==true'/>
            <div v-else>
            <InfoCard/>
            <EditData/>
            <ion-item>
                <h3>Your active jobs:</h3>
            </ion-item>
            <ActiveJobs :company='$store.state.company'/>
            <HistoryCards/>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import EditData from '../../components/Company/YourCompany/EditData'
import InfoCard from '../../components/Company/YourCompany/InfoCompany'
import HistoryCards from '../../components/Company/YourCompany/YourJobsHistory'
import Menu from '../../components/Company/Menu/LeftMenu'
import ActiveJobs from '../../components/Influencer/CompanyInfo/CompanyActiveJobs'
import HeaderIn from '../../components/StartComponents/HeaderIn'
import eventBus from '../../main'
export default {
    components:{
        InfoCard,
        HistoryCards,
        Menu,
        HeaderIn,
        ActiveJobs,
        EditData
    },
    data(){
        return{
            open:false
        }
    },
    mounted() {
        eventBus.$on("nav", ele => {
            this.open = ele;
        });
    },
}
</script>