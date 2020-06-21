<template>
    <ion-content>
        <div class="signup">
            <div class='ion-item'>
                <ion-input placeholder="First name*" :value="first" @ionInput="first = $event.target.value"></ion-input>
            </div>
            <div class='ion-item'>
                <ion-input placeholder="Last name*" :value="last" @ionInput="last = $event.target.value"></ion-input>
            </div>
            <div class='ion-item'>
                <ion-input placeholder="Email*" type='email' :value="email" @ionInput="email = $event.target.value"></ion-input>
            </div>
            <div class='ion-item'>
                <ion-input placeholder="Age*" type='number' :value="age" @ionInput="age = $event.target.value"></ion-input>
            </div>
            <div class='ion-item' @click="openInterests()">
                    <br>
                    <ion-col size='11'>
                        <ion-label >Interests*: {{$store.state.interest.name}}</ion-label>
                    </ion-col>
                    <ion-col>
                        <i class='fas fa-angle-right' style='font-size:18px'></i>
                    </ion-col>
                    <br><br>
            </div>
            <Item :data='items[0]' class='linkovi'/>
            <Item :data='items[1]' class='linkovi'/>
            <Item :data='items[2]' class='linkovi'/>
            <Item :data='items[3]' class='linkovi'/>
            <div class='ion-item'>
                <ion-input type='password' placeholder="Password*" :value="password" @ionInput="password = $event.target.value"></ion-input>
            </div>
            <div class='ion-item'>
                <ion-input type='password' placeholder="Confirm password*" :value="confirm_password" @ionInput="confirm_password = $event.target.value"></ion-input>
            </div>
            <br>
            <div class='ion-item'>
                <ion-checkbox color="primary" @ionChange="ele.checked=!ele.checked"></ion-checkbox>
                <ion-label class="text">I'm not bot!</ion-label>
            </div>
            <br>
            <ion-row align='center'>
                <ion-col>
                    <ion-button @click="cancel()" color='danger'> Reset </ion-button>
                </ion-col>
                <ion-col>
                    <ion-button @click="send()" color='success'> Sign up </ion-button>
                </ion-col>
            </ion-row>
        </div>
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
                ele:{
                    checked:false
                },
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
            if(this.first!='' && this.last!='' && this.email!='' && this.password!='' && this.confirm_password!=''){
                if(this.ele.checked==true){    
                    if(this.password==this.confirm_password && this.password!=''){
                        this.$store.dispatch('signUpInfluencer',data)
                            .then(success=>{
                                alert('Your account is successfully created!')
                                this.cancel()
                            })
                            .catch(error=>{
                                alert('Problem with creating account on server!')
                            })
                    }else{
                        alert('Input correct confirm password!')
                    }
                }else{
                    alert('First select bot box!')
                }
        }else{
            alert('Input required fields!')
        }
            
        }
    
    }
}
</script>
<style scoped>
.text{
    margin-left: 20px;
}
.signup{
    border-color: #f2b620 !important;
	background-color: #f2b620 !important;
	color: black !important;  
    padding: 10px;
    padding-top: 0px; 
    height: 100vh;
}
.ion-item{
    border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}
.linkovi{
    border-color: #f2b620;
	background-color: #f2b620;
	color: black; 
}
</style>
