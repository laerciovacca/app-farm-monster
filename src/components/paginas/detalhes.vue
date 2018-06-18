<template>
  <div>
    <customnav></customnav>
    <div class="master">
      <h1>Detalhes</h1>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Pokemon from 'pokemon-images'
  import cardcomponent from './../cardcomponent.vue'
  import customnav from './../customnav.vue'
  export default {
    name: 'detalhes',
    data(){},
    components: {
      cardcomponent,
      customnav
    },
  }
</script>
