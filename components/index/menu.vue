<!--  -->
<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leavemenu">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="idx" @mouseenter="enter(item.type)">
        <i :class="item.type"/>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
       <div class="detail" v-if="kinds">
        <div v-for="(item,idx) in curdetail.child" :key="idx">
           <h4 style="color:black">{{item.name}}</h4>
           <span v-for="v in item.categeoy" :key="v">
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
      menu: [
        {
          type: "food",
          title: "美食",
          child:[
              {name:'美食',
              categeoy:['火锅','烤肉']}
          ]
        },
        {
          type: "takeout",
          title: "外卖",
          child:[
              {name:'美食',
              categeoy:['火腿','腊肉']}
          ]
        },
        // {
        //     type:'hotel',
        //     title:'酒店',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'homestay ',
        //     title:'榛果民宿',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'movie',
        //     title:'猫眼电影',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'airport',
        //     title:'机票 / 火车票',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'ktv',
        //     title:'休闲娱乐 / KTV',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'life',
        //     title:'生活服务',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'hair',
        //     title:'丽人 / 美发 / 医学美容',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'marry',
        //     title:'结婚 / 婚纱摄影 / 婚宴',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'offspring',
        //     title:'亲子 / 儿童乐园 / 幼教',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'sport',
        //     title:'运动健身 / 健身中心',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'furniture',
        //     title:'家装 / 建材 / 家居',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'study ',
        //     title:'学习培训 / 音乐培训',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'health ',
        //     title:'医疗健康 / 宠物 / 爱车',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // },
        //  {
        //     type:'bar ',
        //     title:'酒吧 / 密室逃脱',
        //     child:[
        //       {name:'美食',
        //       categeoy:['11','2','11','2','11','2','11','2']}
        //   ]
        // }
        
      ]
    };
  },

  components: {},

  computed: {
      curdetail(){
          return this.menu.filter(item=>item.type===this.kinds)[0]
      }
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