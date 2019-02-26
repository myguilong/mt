<template>
<div>
  <el-table :data="carData" style="width: 980px">
    <el-table-column prop="name" label="项目" width="532"></el-table-column>
    <el-table-column prop="price" label="单价" width="132"></el-table-column>
    <el-table-column 
    label="数量" width="212">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="0"/>
      </template>
    </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="scope">
        <div class="">{{scope.row.price*scope.row.count}}</div>
      </template>
    </el-table-column>
    
  </el-table>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      num1: 1,
      carData: [
        {
          name: "王小虎",
          price: 180,
          count: 3
        },
        {
          name: "王小虎",
          price: 180,
          count: 3
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss">


</style>
