<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside style="float:left"  width="200px">Aside</el-aside>
        <el-main>
          <Map/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Map from './components/Map.vue'
export default {
  name: 'App',
  components: {
    Map,
  },
};
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 685px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 685px;
    padding: 0px;
  }
  

</style>
