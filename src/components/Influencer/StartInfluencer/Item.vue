<template>
    <ion-row>
        <ion-col size='9' >
            <div v-if='have' >
                <ion-label position="stacked">{{data.placeholder}}</ion-label>
                <ion-input :placeholder="data.value" :value='val' @ionInput='input_data($event)'></ion-input>
            </div>
            <div v-else justify='center'>
                {{data.question}}
            </div>
        </ion-col>
        <ion-col size='3'>
            <ion-toggle color='primary' @ionChange="allowed($event)" ></ion-toggle>
        </ion-col>        
    </ion-row>
</template>
<script>
import eventBus from '../../../main'
export default {
    props:[
        'data'
    ],
    data(){
        return{
            have:false,
            val:''
        }
    },
    methods:{
        allowed($event){
            this.have=!this.have
            if(this.have==false){
                this.val=''
                 var obj={
                    name:this.data.value,
                    value:this.val
                }
                eventBus.$emit('inputChange',obj)
            }
        },
        input_data($event){
            this.val=$event.target.value
            var obj={
                    name:this.data.value,
                    value:this.val
                }
            eventBus.$emit('inputChange',obj)
        }
    }
}
</script>
<style scoped>
ion-item{
    font-size: 13px;
}
</style>