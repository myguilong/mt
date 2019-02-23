<!--  -->
<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leavemenu">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="idx" @mouseenter="enter(item.type)">
        <i :class="item.type"/>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
       <div class="detail" v-if="kinds">
        <div v-for="(item,idx) in curdetail.child" :key="idx">
           <h4 style="color:black">{{item.title}}</h4>
           <span v-for="v in item.child" :key="v">
               {{v}}
           </span>
        </div>
    </div>
    </dl>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      kinds:'',
      menu:this.$store.state.home.menu
    };
  },

  components: {},

  computed: {
      curdetail(){
          return this.menu.filter(item=>item.type===this.kinds)[0]
      }
  },
  mounted() {
    //   console.log(this.$store.state.home.menu)
    //   this.menu=this.$store.state.home.menu

  },
  methods: {
     enter(ekinds){
       this.kinds=ekinds
       console.log(this.kinds)
     },
     leavemenu(){
         setTimeout(()=>{
             this.kinds=''
         },200)
     }
  }
};
</script>
<style lang='scss'>

</style>