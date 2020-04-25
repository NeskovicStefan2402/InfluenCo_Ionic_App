<template>
    <div>
        <FilterCard/>
        <div v-if="result.length>0" >
            <ion-row v-if="$store.state.typeData==-1">
                <ion-col v-for="i in result.slice(min,max)" size='6' >
                    <InfluencerCard   :influencer='i'/>
                </ion-col>
            </ion-row>
            <ion-row v-else>
                <ion-col v-for="i in result.filter(ele=>ele.interest==this.$store.state.typeData).slice(min,max)" size='6' >
                    <InfluencerCard   :influencer='i'/>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size='1'>
                    <ion-button  v-if="min>0" @click="backData">{{back}}</ion-button>
                </ion-col>
                <ion-col size='9'></ion-col>
                <ion-col size='1'>
                    <ion-button v-if="max<result.length" @click="nextData">{{next}}</ion-button>
                </ion-col>
            </ion-row>
        </div>
        <div v-else>
            <ion-item>
                <p>No results for that search!</p>
            </ion-item>
        </div>
    </div>
</template>
<script>
import InfluencerCard from './InfluencerCard'
import FilterCard from './Filter'
import eventBus from '../../../main'
export default {
    components:{
        InfluencerCard,
        FilterCard
    },
    data(){
        return{
            open:false,
            back:'<',
            next:'>',
            min:0,
            max:6
        }
    },
    computed:{
        result(){
            return this.$store.state.influencers.filter(ele=> this.name(ele).toLowerCase().includes(this.$store.state.filterData.toLowerCase()))
        }
    },
    methods:{
        backData(){
            this.min=this.min-6
            this.max=this.max-6
        },
        nextData(){
            this.min=this.min+6
            this.max=this.max+6
        },
        name(ele){
            return ele.first_name + ' '+ ele.last_name 
        }
    },
    created(){
        this.$store.dispatch('getInfluencers') 
        this.$store.state.typeData=-1
             
    },
    mounted(){
        eventBus.$on('changeIterests',ele=>{
            this.min=0
            this.max=6
        })
    }
}
</script>
<style scoped>
</style>