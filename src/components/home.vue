<template>
  <div>
    <customnav></customnav>
    <div class="master">
      <div class="marcacao" v-for="pokemon in pokemons">
        <cardcomponent :img="getImages(pokemon.name)" :nome="pokemon.name" :url="pokemon.url"></cardcomponent>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
import Pokemon from 'pokemon-images'
import cardcomponent from './cardcomponent.vue'
import customnav from './customnav.vue'
  export default {
  data () {
    return {
      pokemons:{
      },
    }
  },
 components: {
    cardcomponent,
    customnav
  },

created: function() {
    this.buscaPokemons();

},
methods: {
    buscaPokemons: function(){
        let vm = this;
        axios.get('http://pokeapi.co/api/v2/pokemon')
        .then(function(res){
            vm.pokemons = res.data.results;
        })
        .catch(function(err){
            console.log(err);
        })
        this.getImages = function(nome){
          this.imgPoke = Pokemon.getSprite(nome);
          console.log(this.imgPoke);
          return this.imgPoke;
        }
    },

  },
}



</script>

<style>
#app.container-fluid{
  padding-left: 0px;
  padding-right: 0px;
}
.master{
  width: 100%;
  padding: 2% 0 2% 0;
}
.marcacao{
  display: inline-block;
  width: 25%;
  padding: 10px;

}
@media (max-width: 768px) {
  .marcacao{
    display: inline-block;
    width: 48%;
    padding: 10px;

  }
 }
</style>

