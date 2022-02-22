<template>
    <div v-for="(nom,index) in name" :key="index">
        Bonjour {{nom.libelle}}
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return{
            name:[
                {
                    id:1,
                    libelle:'test'
                },
                {   id:2,
                    libelle:'test1'
                },
                {
                    id:3,
                    libelle:'test2'
                }
            ]
        }
    },
    mounted(){
        // this.name = this.$route.params.nom
        // this.getcart()
    },
    methods:{
        // getcart(){
        //     axios.get('http://192.168.1.9:8003/api/cars')
        //     .then(assita => {
        //         this.name = assita.data
        //     })
        //     .catch(err =>{
        //         console.log(err)
        //     })
        // }
    }

}
</script>