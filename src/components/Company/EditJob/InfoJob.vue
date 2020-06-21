<template>
    <ion-card>
        <ion-card-header>
            
            <ion-row>
                <ion-col>
                    <h3><b>{{editData.title}}</b></h3>
                </ion-col>
                <ion-col size='1'></ion-col>
                <ion-col>
                    <br>
                    <p>by {{$store.state.company.name}}</p>
                </ion-col>
                <ion-col size='1'>
                    <h3 @click="deleteJob">X</h3>
                </ion-col>
            </ion-row>
        </ion-card-header>
        <ion-card-content>
            <ion-row>
                <ion-col></ion-col>
                <ion-col size='6'>
                    <img :src="image">
                </ion-col>
                <ion-col>
                    <br><br>
                    <br><br><br>
                    <ion-label class="myFakeUploadButton" for="myFileInput" >Upload</ion-label>
                    <ion-input type='file' :value='editData.image' @change='onChangeImage($event)' id="myFileInput"></ion-input>
                </ion-col>
                <ion-col></ion-col>
            </ion-row>
                <br>
                <b>Name:</b>
                <ion-input :value='editData.title' @ionInput='editData.title = $event.target.value'></ion-input>
                <br>
                <b>Description:</b>
                <ion-textarea :value='editData.description' @ionInput='editData.description = $event.target.value'></ion-textarea>
                <br>
                <b>Price:</b>
                <ion-input type='number' :value="editData.price" @ionInput='editData.price = $event.target.value'></ion-input>
                <br>
        </ion-card-content>
        <ion-card-footer>
            <ion-row>
                    <ion-col>
                        <ion-button color='danger' @click="cancel">Don't save</ion-button>
                    </ion-col>
                    <ion-col size='3'></ion-col>
                    <ion-col>
                        <ion-button color='success' @click="save">Save</ion-button>
                    </ion-col>
                    
                </ion-row>
        </ion-card-footer>
    </ion-card>
</template>
<script>
export default {
    props:['job'],
    data(){
        return{
            editData:{
                id:this.job.id,
                title:this.job.name,
                description:this.job.description,
                image:null,
                price:this.job.price
            }
        }
    },
    computed:{
        image(){
            return 'http://10.1.2.197:8000/uploads/'+this.job.image
        }
    },
    methods:{
        onChangeImage($event){
            this.editData.image = $event.target.files[0]
        },
        deleteJob(){
            if (confirm('Are you sure?')) {
                this.$store.dispatch('deleteJob',this.job.id)
                .then(success=>{
                    alert('Successfully deleted job!')
                    this.$router.push('/yourCompany')
                })    
            }
        },
        cancel(){
            this.$router.push('/yourCompany')
        },
        save(){
            this.$store.dispatch('updateJob',this.editData)
            .then(success=>{
                const fd =new FormData()
                fd.append('image',this.editData.image,this.editData.image.name)
                this.$store.dispatch('uploadCompanyJobImage',[this.editData.id,fd])
                .then(success=>{
                    this.$router.push('/yourCompany')
                })
            })
        }
    }
}
</script>
<style scoped>
ion-card-header{
    text-align: center;
    background-color: rgba(182, 84, 84, 0.612);
    color: white;
}
ion-card-footer{
    background-color: rgba(182, 84, 84, 0.612);
}
ion-input,ion-textarea{
    border: 0.4px solid black;
    border-radius: 5px;
}
#myFileInput{
  position: absolute;
  opacity: 0;
}
.myFakeUploadButton{
 background-color: coral;
 color: white;
 padding: 10px;
 border-radius: 5px;
}
</style>