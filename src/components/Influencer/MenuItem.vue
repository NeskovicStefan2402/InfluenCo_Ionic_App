<template>
    <ion-item color='dark'>
            <ion-col size='11'>
                <h5>{{name}}</h5>
            </ion-col>
            <ion-col>
                <i class='fas fa-angle-right' style='font-size:18px'></i>
            </ion-col>
    </ion-item>
</template>
<script>
export default {
    props:[
        'name'
    ]
}
</script>