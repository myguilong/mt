<template>
  <div class="page-index">
      <el-row>
          <el-col :span="5">
              <emenu/>
          </el-col>
          <el-col :span="19"> 
            <life/>
          </el-col>
      </el-row>
      <el-row :span="24">
        <have-style/>
      </el-row>
  </div>
</template>

<script>

 import  Emenu from '@/components/index/menu';
 import life from '@/components/index/life'
 import haveStyle from '@/components/index/haveStyle'

export default {
   
  components: {
   Emenu, life,haveStyle
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";

</style>
