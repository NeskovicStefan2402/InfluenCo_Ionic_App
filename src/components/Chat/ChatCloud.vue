<template>
    <ion-card>
        <ion-card-content>
            {{message.text}}
        </ion-card-content>
        <ion-card-header>
            <i>{{message.datetime.split(' ')[1].split('+')[0].split('.')[0]}}</i>
        </ion-card-header>
    </ion-card>
</template>
<script>
export default {
    props:['message']
}
</script>
<style scoped>
ion-card{
    background-color: white;
}
ion-card-header{
    text-align: right;
    font-size: 10px;
    padding: 2px;
}
</style>