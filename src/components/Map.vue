
<template>
  <div id="main">
     <!-- 使用地图组件 -->
     <sm-web-map :map-options="mapOptions"></sm-web-map>
  </div>
  </template>
  <script>
  export default {
    data () {
      return {
        // mapOptions是sm-web-map组件的props
        mapOptions: {
          container: 'map', // 地图容器 id
          style: {
            'version': 8,
            'sources': {
              'raster-tiles': {
                'type': 'raster',
                'tiles': [
                  'http://support.supermap.com.cn:8090/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
                ],
                'tileSize': 256
              }
            },
            'layers': [{
              'id': 'simple-tiles',
              'type': 'raster',
              'source': 'raster-tiles',
              'minzoom': 0,
              'maxzoom': 22
            }]
          },
          center: [120.143, 30.000], // 地图中心点
          zoom: 3 // 地图初始缩放级别
        }
      }
    }
  }
  </script>
   
  <style>
  #main {
    position: relative;
    width: 100%;
    height: 100%;
  }
  </style>