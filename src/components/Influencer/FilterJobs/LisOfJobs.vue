<template>
    <div v-if='result.length>0'>
        <JobCard v-for="i in result.slice(min,max)" :job='i' />
        <ion-row>
            <ion-col size='1'>
                <ion-button v-if='min>0' @click="backData">{{back}}</ion-button>
            </ion-col>
            <ion-col size='9'></ion-col>
            <ion-col size='1'>
                <ion-button v-if="max<result.length" @click="nextData">{{next}}</ion-button>
            </ion-col>
        </ion-row>
    </div>
    <div v-else>
        <ion-card>
            <ion-card-content>
                <ion-item>
                    <ion-label>
                        No jobs to show!
                    </ion-label>
                </ion-item>
            </ion-card-content>
        </ion-card>
    </div>
</template>
<script>
import JobCard from './JobCard'
export default {
    components:{
        JobCard
    },
    data(){
        return{
            back:'<',
            next:'>',
            min:0,
            max:5
        }
    },
    computed:{
        result(){
            return this.$store.state.jobs.filter(ele=>ele.name.toLowerCase().includes(this.$store.state.filterJob.toLowerCase()))
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
    }
}
</script>