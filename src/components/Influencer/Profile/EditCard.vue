<template>
    <ion-card>
        <ion-card-header>
            Edit profile
        </ion-card-header>
        <ion-card-content>
                <ion-item>
                    <ion-label position="stacked">Profile picture</ion-label>
                    <ion-input type='file' :value='$store.state.influencer.image' @change="onFileSeleceted($event)"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">First Name</ion-label>
                    <ion-input :value='$store.state.influencer.first_name' @input="$store.state.influencer.first_name= $event.target.value"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Last Name</ion-label>
                    <ion-input :value='$store.state.influencer.last_name' @input="$store.state.influencer.last_name= $event.target.value"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Age</ion-label>
                    <ion-input type='number' :value='$store.state.influencer.age' @input="$store.state.influencer.age= $event.target.value"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Instagram Name</ion-label>
                    <ion-input :value='$store.state.influencer.instagram' @input="$store.state.influencer.instagram= $event.target.value"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Youtube ID</ion-label>
                    <ion-input :value='$store.state.influencer.youtube' @input="$store.state.influencer.youtube= $event.target.value"></ion-input>
                </ion-item>
        </ion-card-content>
        <ion-card-footer>
            <ion-row>
                <ion-col>
                    <ion-button @click="cancel" color='danger'>Cancel</ion-button>
                </ion-col>
                
                <ion-col>
                    <ion-button @click="apply" color='success'>Apply</ion-button>
                </ion-col>
            </ion-row>
        </ion-card-footer>
    </ion-card>
</template>
<script>
import eventBus from  '../../../main'
export default {
    data(){
        return{
            file_name:null
        }
    },
    methods:{
        cancel(){
            eventBus.$emit('apply')
        },
        apply(){
            this.$store.dispatch('updateInfluencer')
            .then(success => {
                alert('We successfully save your data!')
            })
            .catch(
                error => {
                    alert('Sorry! We have problem with saving data!')
                }
            )
            this.cancel()
        },
        onFileSeleceted($event){
            // console.log($event)
            this.file_name=$event.target.files[0]
        },
        upload(){
            if(this.file_name==null){
                alert('First upload file')
            }else{
                // console.log(this.file_name)
                const fd=new FormData();
                fd.append('image',this.file_name,this.file_name.name)
                console.log(fd)
                this.$store.dispatch('uploadImage',fd)
                .then(success=>{
                    console.log('Success')
                })
                .catch(error=>{
                    alert('Error')
                })
            }
        }
    }
}
</script>
<style scoped>
ion-card{
    background-color: white;
}
</style>