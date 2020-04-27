<template>
    <ion-toolbar color='success'>
        <ion-row>
            <ion-col size='1' class="headerChat" @click="home">
                 <i class='fas fa-angle-left' style='font-size:18px'></i>
            </ion-col>
            <ion-col class="headerChat">
                {{name}}
            </ion-col>
            <ion-col size='1' class="headerChat" @click="refresh">
                 <i class='fas fa-refresh' style='font-size:18px'></i>
            </ion-col>
        </ion-row>
    </ion-toolbar>
</template>
<script>
export default {
    data(){
        return{
            id:''
        }
    },
    methods:{
        home(){
            this.$router.push('/chat/')
        },
        refresh(){
            this.$store.dispatch('getMessages',this.id)
        }
    },
    created(){
        this.id = this.$route.params.id
    },
    computed:{
        name(){
            var ele=''
            this.$store.state.chats.forEach(element => {
                if(element.id_chat == this.id){
                    ele=element.name
                }
            });
            return ele
        }
    }
}
</script>
<style scoped>
.headerChat{
    text-align: center;
}
.headerColor{
    background-color: green;
}
</style>