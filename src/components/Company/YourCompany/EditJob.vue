<template>
<ion-card>
    <ion-card-header>
        <ion-input type='text' placeholder='Title...' :value='job.title' @ionInput='job.title= $event.target.value'></ion-input>
    </ion-card-header>
    <ion-card-content>
        <ion-input type='file' :value='job.image' @change="onChangeImage($event)"></ion-input>
        <br>
        <ion-textarea placeholder='Description...' :value='job.description' @ionInput='job.description= $event.target.value'></ion-textarea>
        <br>
        <ion-input type='number' placeholder='Price...' :value='job.price' @change="job.price = $event.target.value"></ion-input>
    </ion-card-content>
    <ion-card-footer>
        <ion-row>
            <ion-col>
                <ion-button color='danger' @click="cancel"> Cancel </ion-button>
            </ion-col>
            <ion-col size='3'></ion-col>
            <ion-col>
                <ion-button color='success' @click="save"> Save </ion-button>
            </ion-col>
        </ion-row>
    </ion-card-footer>
</ion-card>
</template>
<script>
import eventBus from '../../../main'
export default {
    data(){
        return {
            job:{
                id:'',
                title:'',
                image:null,
                description:'',
                price:0
            }
        }
    },
    methods:{
        cancel(){
            eventBus.$emit('workWithJob',false)
        },
        save(){
            if(this.job.image==null || this.job.title=='' || this.job.description=='' || this.job.price<0){
                alert('Please enter data in all places!')
            }else{
                this.$store.dispatch('postJob',this.job)
                .then(success=>{
                    this.uploadImage()
                })
                eventBus.$emit('workWithJob',false)
            }
        },
        onChangeImage($event){
            this.job.image = $event.target.files[0]
        },
        uploadImage(){
            const fd= new FormData()
            fd.append('image',this.job.image,this.job.image.name)
            this.$store.dispatch('uploadCompanyJobImage',[this.$store.state.jobId,fd])
            .then(success=>{
                this.$store.dispatch('getActiveJobs')
                .then(success=>{
                    this.$store.state.jobs
                    alert('Your job is successfully created!')
                })
            })
        }
    }
}
</script>
<style scoped>
ion-card{
    text-align: left;
}
</style>