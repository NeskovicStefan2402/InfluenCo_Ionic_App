<template>
<div>
    <ion-button v-if="!open" @click="open=true">Edit</ion-button>
    <ion-card v-else>

        <ion-card-header>
            Edit company data
        </ion-card-header>

        <ion-card-content>
            <ion-item>
                    <ion-label position="stacked">Company logo</ion-label>
                    <ion-input type='file' :value='$store.state.company.logo' @change="onFileSeleceted($event)"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Name</ion-label>
                    <ion-input :value='$store.state.company.name' @input="$store.state.company.name= $event.target.value"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Description</ion-label>
                    <ion-textarea :value='$store.state.company.desription' @input="$store.state.company.description= $event.target.value"></ion-textarea>
                </ion-item>
        </ion-card-content>

        <ion-card-footer>
            <ion-row>
                <ion-col size='2'>
                    <ion-button color='danger' @click="open=false">Cancel</ion-button>
                </ion-col>
                <ion-col size='7'></ion-col>
                <ion-col size='2'>
                    <ion-button color='success' @click="apply">Apply</ion-button>
                </ion-col>
            </ion-row>
        </ion-card-footer>

    </ion-card>
</div>
</template>
<script>
export default {
    data(){
        return{
            open:false,
            data_file:null
        }
    },
    methods:{
        onFileSeleceted($event){
            // console.log($event)
            this.data_file=$event.target.files[0]
            
        },
        apply(){
            const fd=new FormData();
            fd.append('image',this.data_file,this.data_file.name)   
            
            this.$store.dispatch('uploadCompanyLogo',fd)
            .then(success=>{
                this.$store.dispatch('updateCompany')
                .then(success=>{
                    alert('Successfully update your company profile!')
                })
            })
            
        }
    }
}
</script>
<style scoped>
ion-textarea{
    font-size: 10px;
}
</style>