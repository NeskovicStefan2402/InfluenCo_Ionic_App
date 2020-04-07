<template>
    <ion-content>
        <ion-item>
            <ion-input placeholder="First name" :value="$store.state.influencer.first" @ionInput="$store.state.influencer.first = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Last name" :value="$store.state.influencer.last" @ionInput="$store.state.influencer.last = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Email" type='email' :value="$store.state.influencer.email" @ionInput="$store.state.influencer.email = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Age" type='number' :value="$store.state.influencer.age" @ionInput="$store.state.influencer.age = $event.target.value"></ion-input>
        </ion-item>
        <ion-item @click="$router.push('/interests')">
            <ion-label >Interests: {{$store.state.influencer.interest}}</ion-label>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Youtube name" :value="$store.state.influencer.youtube" @ionInput="$store.state.influencer.youtube = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Instagram name" :value="$store.state.influencer.instagram" @ionInput="$store.state.influencer.instagram = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Facebook name" :value="$store.state.influencer.facebook" @ionInput="$store.state.influencer.facebook = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input placeholder="Twitter name" :value="$store.state.influencer.twitter" @ionInput="$store.state.influencer.twitter = $event.target.value"></ion-input>
        </ion-item>
        
        <ion-item>
            <ion-input type='password' placeholder="Password" :value="$store.state.influencer.password" @ionInput="$store.state.influencer.password = $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-input type='password' placeholder="Confirm password" :value="$store.state.influencer.confirm_password" @ionInput="$store.state.influencer.confirm_password = $event.target.value"></ion-input>
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
import Interests from '../components/InfluencerInterests'
import eventBus from '../main'
export default {
    components:{
        Interests
    },
    methods:{
        cancel(){
            this.$store.state.influencer.first=''
            this.$store.state.influencer.last=''
            this.$store.state.influencer.email=''
            this.$store.state.influencer.age=18
            this.$store.state.influencer.interest=''
            this.$store.state.influencer.youtube=''
            this.$store.state.influencer.instagram=''
            this.$store.state.influencer.twitter=''
            this.$store.state.influencer.facebook=''
            this.$store.state.influencer.password=''
            this.$store.state.influencer.confirm_password=''
        },
        send(){
            alert('Podaci su:{'+this.$store.state.influencer.first+','+this.$store.state.influencer.last+','+this.$store.state.influencer.email+','+this.$store.state.influencer.age+','+this.$store.state.influencer.youtube+','+this.$store.state.influencer.facebook+','+this.$store.state.influencer.instagram+','+this.$store.state.influencer.twitter+','+this.$store.state.influencer.password+','+this.$store.state.influencer.confirm_password+'}')
            this.cancel()
        }
    
    }
}
</script>
<style scoped>

</style>