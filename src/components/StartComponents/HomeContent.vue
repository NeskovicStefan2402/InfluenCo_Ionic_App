<template>
    <ion-content >
        <div class="polje">
                <h1>Who are you?</h1>
                <br>
                <p>InfluenCo is a application for connecting young Influencers and Company for investing in them.</p>
                <p><i>Select your choice and start with us!</i></p>
        </div>
        <ion-grid>
            <ion-row align='center'>
                <ion-col>
                    <button @click="openInfluencer()" class="dugme">Influencer</button>
                </ion-col>
                <ion-col>
                    <button @click="openCompany()" class="dugme">Company</button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
<script>
export default {
    methods:{
        openInfluencer(){
            this.$store.state.type='influencer';
            this.$router.push('/welcome')
        },
        openCompany(){
            this.$store.state.type='company';
            this.$router.push('/welcome')
        }
    }
}
</script>
<style scoped>
.dugme{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 15px;
    font-weight: bold;
    color: #273447;
    border: 2px solid #273447;
    box-shadow: 3px 3px 28px #273447;
    background-color: transparent;
}
.polje{
    background-color: #273447;
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
    color: white;
    width: 100%;
}
ion-grid{
    padding-top: 100px;
    background-color: #f2b620;
    height: 100%;
    width: 100%;
}
</style>