<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="Email" :value="email" @ionInput="email = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="password" @ionInput="password = $event.target.value"></ion-input>
        </ion-item>
        <ion-row>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Login</ion-button>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            var data={
                    email:this.email,
                    password:this.password
                }
                this.$store.dispatch('loginInfluencer',data)
                .then(success=>{
                    this.$store.dispatch('getInterestsForInfluencer')
                    this.$router.push('/info')
                })
                .catch(error=>{
                    alert('Error')
                })
        },
        reset(){
            this.email=''
            this.password=''
        }
    }
}
</script>