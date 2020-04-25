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
                <ion-col size='11'>
                    <ion-label >Interests: {{$store.state.interest.name}}</ion-label>
                </ion-col>
                <ion-col>
                    <i class='fas fa-angle-right' style='font-size:18px'></i>
                </ion-col>
        </ion-item>
        <Item :data='items[0]'/>
        <Item :data='items[1]'/>
        <Item :data='items[2]'/>
        <Item :data='items[3]'/>
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
import Item from './Item'
import eventBus from '../../../main'
export default {
    components:{
        Interests,
        Item
    },
    data(){
        return{
                items:[
                    {
                        placeholder:'Youtube name',
                        value:'youtube',
                        question:'Do you have youtube channel?'
                    },
                    {
                        placeholder:'Facebook name',
                        value:'facebook',
                        question:'Do you have facebook profile?'
                    },
                    {
                        placeholder:'Instagram name',
                        value:'instagram',
                        question:'Do you have instagram profile?'
                    },
                    {
                        placeholder:'Twitter name',
                        value:'twitter',
                        question:'Do you have twitter profile?'
                    },
                ],
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
    mounted(){
        eventBus.$on('inputChange',ele=>{
            switch(ele.name){
                case 'youtube':
                    this.youtube=ele.value
                    break;
                case 'facebook':
                    this.facebook=ele.value
                    break;
                case 'twitter':
                    this.twitter=ele.value
                    break;
                case 'instagram':
                    this.instagram=ele.value
                    break;
                default:
                    console.log('Nije poznato')
                    break;
            }
        })
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
            // console.log(data)
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