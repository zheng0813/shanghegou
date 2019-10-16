<template>
  <div class="detial-box">
    <header>
      <p></p>
      <div v-for="i in 15" :key="i"><img :src="'../../static/shangpinimg/'+i+'.jpg'" alt=""></div>
    </header>
  </div>
</template>
<script>
export default{
 
}
</script>
<style lang="less" scoped>
  div{
    p{
      width: 360px;
      height: 200px;
      padding: 0;
      margin: 0;
    }
    img{
      width: 360px;
      display: block;
      margin: auto;
    }
  }
</style>