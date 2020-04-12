<template>
    <ion-card v-if="$store.state.youtube.videos!=0">
        <ion-card-header>
            <ion-row>
                <ion-col>
                    <h5>Youtube stats</h5>
                </ion-col>
                <ion-col size='2'>
                    <img src="../../../assets/youtube.jpg" class="icon">
                </ion-col>
            </ion-row> 
        </ion-card-header>
        <ion-card-content>
            <ion-row>   
                <ion-col size='8'>
                    <p>Youtube videos:</p> 
                </ion-col>
                <ion-col>
                    {{$store.state.youtube.videos}}
                </ion-col>
            </ion-row>
            <ion-row>   
                <ion-col size='8'>
                    <p>Youtube subscribers:</p> 
                </ion-col>
                <ion-col>
                    {{$store.state.youtube.followers}}
                </ion-col>
            </ion-row>
            <ion-row>   
                <ion-col size='8'>
                    <p>Youtube views:</p> 
                </ion-col>
                <ion-col>
                    {{$store.state.youtube.views}}
                </ion-col>
            </ion-row>
            <!-- <ion-input type='file' @change="onFileSeleceted($event)"></ion-input>
            <ion-button @click="upload()" >Send</ion-button> -->
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    destroyed(){
        this.$store.state.youtube={
                        followers:0,
                        views:0,
                        videos:0
                    }
    },  
    created(){
         this.$store.dispatch('getYoutubeStats')
                .then(success=>{
                    console.log('Success')
                })
                .catch(error=>{
                    this.$store.state.youtube={
                        followers:0,
                        views:0,
                        videos:0
                    }
                })
    }
}
</script>
<style scoped>
ion-card{
    background-color: white;
}
.icon{
     height:30px;
     width:30px;
}
p{
   font-size: 12px; 
}
</style>