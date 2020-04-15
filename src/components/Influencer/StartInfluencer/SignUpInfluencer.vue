<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="First name" :value="first" @ionInput="first = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Last name" :value="last" @ionInput="last = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Email" type='email' :value="email" @ionInput="email = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Age" type='number' :value="age" @ionInput="age = $event.target.value"></ion-input>
        </ion-item>
        <ion-item @click="openInterests()">
            <ion-label >Interests: {{$store.state.interest.name}}</ion-label>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Youtube name" :value="youtube" @ionInput="youtube = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Instagram name" :value="instagram" @ionInput="instagram = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Facebook name" :value="facebook" @ionInput="facebook = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Twitter name" :value="twitter" @ionInput="twitter = $event.target.value"></ion-input>
        </ion-item>
        
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="password" @ionInput="password = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Confirm password" :value="confirm_password" @ionInput="confirm_password = $event.target.value"></ion-input>
        </ion-item>
        <ion-row>
            <ion-col>
                <ion-button @click="cancel()" color='danger'> Reset</ion-button>
            </ion-col>
            <ion-col>
                <ion-button @click="send()" color='success'> Sign up</ion-button>
            </ion-col>
        </ion-row>
    </ion-content>
</template>
<script>
import Interests from './InfluencerInterests'
import eventBus from '../../../main'
export default {
    components:{
        Interests
    },
    data(){
        return{
                first:'',
                last:'',
                email:'',
                age:18,
                interest:'',
                youtube:'',
                instagram:'',
                twitter:'',
                facebook:'',
                password:'',
                confirm_password:''
        }
    },
    methods:{
        openInterests(){
            if(this.$store.state.types.length==0){
                this.$store.dispatch('getInterests')
                .then(success=>{
                    this.$router.push('/interests')
                })
                .catch(error=>{
                    alert('Problem with loading data!')
                })
            }else{
                this.$router.push('/interests')
            }
        },
        cancel(){
            this.first=''
            this.last=''
            this.email=''
            this.age=18
            this.interest=''
            this.youtube=''
            this.instagram=''
            this.twitter=''
            this.facebook=''
            this.password=''
            this.confirm_password=''
        },
        send(){
            var data={
                first_name:this.first,
                last_name:this.last,
                email:this.email,
                age:this.age,
                interest:this.$store.state.interest.id,
                youtube:this.youtube,
                instagram:this.instagram,
                twitter:this.twitter,
                facebook:this.facebook,
                password:this.password
            }
            this.$store.dispatch('signUpInfluencer',data)
                .then(success=>{
                    alert('Your account is successfully created!')
                    this.cancel()
                })
                .catch(error=>{
                    alert('Error')
                })
            
        }
    
    }
}
</script>
<style scoped>

</style>