<template>
    <div v-if="result.length>0" class="telo">
            <div v-if="$store.state.typeData==-1">
                <CompanyCard  v-for="i in result.slice(min,max)" :company='i'/>
            </div>
            <div v-else>
                <CompanyCard  v-for="i in result.filter(ele=> ele.type == $store.state.typeData ).slice(min,max)" :company='i'/>
            </div>
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

    </div>

</template>
<script>
import CompanyCard from './CompanyCard'
export default {
    components:{
        CompanyCard
    },
    data(){
        return{
            open:false,
            back:'<',
            next:'>',
            min:0,
            max:5
        }
    },
    computed:{
        filterObjects(){
            var lista=[]
            lista=this.$store.state.companies.filter(ele=> ele.type == this.$store.state.typeData )
            lista=lista.filter(ele=> ele.name.toLowerCase().includes(this.$store.state.filterData.toLowerCase()))
            return lista
        },
        result(){
            return this.$store.state.companies.filter(ele=> ele.name.toLowerCase().includes(this.$store.state.filterData.toLowerCase()))
        }
    },
    methods:{
        backData(){
            this.min=this.min-5
            this.max=this.max-5
        },
        nextData(){
            this.min=this.min+5
            this.max=this.max+5
        }
    },
    created(){
        
        this.$store.dispatch('getCompanies')        
    },
}
</script>