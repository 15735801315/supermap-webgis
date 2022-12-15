<template>
    <div class="datavisual-page">
      <Map />
    </div>
  </template>
  
  <script>
  import Map from '../Map.vue';
  export default {
    name: 'DataView',
    components: {
      Map
    },
  };
  </script>
  
  <style>
  .datavisual-page {
    height: 100%;
    width: 100%;
  }
  </style>
 