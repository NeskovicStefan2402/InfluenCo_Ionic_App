<template>
    <div class="login">
        <div class='ion-item'>
            <ion-input class="item item-input" placeholder="Email" :value="email" @ionInput="email = $event.target.value"></ion-input>
        </div>
        <div class='ion-item'>
            <ion-input class="item item-input" type='password' placeholder="Password" :value="password" @ionInput="password = $event.target.value"></ion-input>
        </div>
        <br>
        <ion-row align='center'>
            <ion-col>
                <ion-button color='danger' @click="reset()"> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button color='success' @click="login()"> Login</ion-button>
            </ion-col>
        </ion-row>
    </div>
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
                    alert('Incorrect login!')
                })
        },
        reset(){
            this.email=''
            this.password=''
        }
    }
}
</script>
<style scoped>
.login{
    background-color: #f2b620;
    width: 100%;
    height: 100vh;
}
.item.item-trns {
	border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}
.item.item-input {
	border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}

</style>