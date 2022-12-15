<template>
    <div class="onemap-page">
        <Map />
    </div>
</template>

<script>
import Map from '../Map.vue';
export default {
    name: 'OneMap',
    components: {
        Map
    },
    };
</script>

<style>
 .onemap-page {
  height: 100%;
  width: 100%;
}
</style>
  
  