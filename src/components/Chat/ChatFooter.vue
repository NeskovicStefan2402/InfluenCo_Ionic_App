<template>
    <div>
        <ion-row>
            <ion-col size='10'>
                <input type="text" placeholder="  Write message..." class="poruka" :value ='message' @input='message = $event.target.value'>
            </ion-col>
            <ion-col size='2' @click="send" class="icon">
                <i class='fas fa-send' style='font-size:34px; color:white'></i>
            </ion-col>
        </ion-row>
    </div>
</template>
<script>
import eventBus from '../../main'
export default {
    created(){
        this.id = this.$route.params.id
    },
    data(){
            return{
                message:'',
                id:''
            }
    },
    methods:{
        send(){
            var sendWho = JSON.parse(localStorage.getItem('influencer'))!=null ? 'influencer' : 'company'
                
            var obj={
                id_chats:this.id,
                send: sendWho,
                id_company: sendWho == 'company' ? this.$store.state.company.id : this.chat.id,
                id_influencer: sendWho == 'influencer' ? this.$store.state.influencer.id : this.chat.id,
                text: ''+this.message
            }
            if(this.message!=''){
                this.$store.dispatch('postMessage',obj)
            }
            this.message = ''
            eventBus.$emit('scroll');
        }
    },
    computed:{
        chat(){
            var ele=''
            this.$store.state.chats.forEach(element => {
                if(element.id_chat== this.id){
                    ele=element
                }
            });
            return ele
        }
    }
}
</script>
<style scoped>
.poruka{
    width:100%;
    height: 100%;
}
ion-row{
    height: 60px;
    padding-bottom:10px;
}
.icon{
    text-align: center;
    background-color: green;
    border-radius: 2px;
}
div{
    height: 50px;
    padding:0px;
    bottom: 0px;
    background-color: white;
    width: 100%;
    position: fixed;
}
</style>