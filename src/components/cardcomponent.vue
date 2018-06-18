<template>

  <div class="card card_custom">
    <img class="card-img-top" :src="img" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{nome}}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a :href="url" v-on:click="pokeDetalhes(url,$event)" class="btn btn-primary">Conheça o {{nome}}</a>
    </div>
  </div>

</template>
<script>
  import axios from 'axios';
  export default {
    name: 'cardcomponent',
    data(){
      return{
        detalhes:{}
      }
    },
    props:{
      nome:{},
      url:{},
      img:{},
    },
    created: function(){

    },
    methods:{
      pokeDetalhes: function(link,event){
        event.preventDefault()
        let vm = this;
        this.link = link;
        console.log('Link',link)
        axios.get(this.link)
        .then(function(res){
            vm.detalhes = res.data;
            console.log(vm.detalhes)
        })
        .catch(function(err){
            console.log(err);
        })

      }
    }

  }
</script>
<style>
  .col{
    margin-bottom: 2%;
  }
  .card_custom{
    width: 100%;
    min-width: 200px;
    /* max-width: 255px; */
    display: inline-block;
  }
</style>
