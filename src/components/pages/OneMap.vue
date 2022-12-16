<template>
    <div class="onemap-page">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="text item">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="id"
                label="编号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="road_name"
                label="道路名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="length"
                label="长度">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            
        </div>
        </el-card>
    </div>
</template>

<script>
import {ApiGet} from "../../utils/request"
export default {
    name: 'OneMap',
    data() {
      return {
        tableData: [{
         
        },]
      }
    },
    components: {
        
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    async created(){
        try{
            this.tableData = await (await ApiGet('/onemap')).data.data
        }catch (e) {
            this.$message.error(e.message)
        }
    },
    };
</script>

<style scoped>
 .onemap-page {
  height: 100%;
  width: 100%;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    min-height: 500px;
  }
</style>
  
  