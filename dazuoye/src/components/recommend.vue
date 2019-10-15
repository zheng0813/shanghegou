<template>
  <div class="shop">
    <!-- 商品 -->
    <ul>
      <li v-for="(item,i) in stop1" :key="i" @click="tiao(item)">
        <img :src="item.src">
        <div class="imgmsg">{{item.msg}}</div>
        <p>￥{{item.p}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data(){
    return{
      stop1: [
        {
          src: '../../static/recommendimg/1564587877312301.jpg',
          msg: '便当盒',
          p:"32131"
        },
        {
          src: '../../static/recommendimg/1564587941139195.jpg',
          msg: '茶树精油旅行套组',
          p:"123"
        },
        {
          src: '../../static/recommendimg/1564588043512248.jpg',
          msg: '妍皙气垫粉凝霜自然色3个装',
          p:"34"
        },
        {
          src: '../../static/recommendimg/1564588088315998.jpg',
          msg: '妍皙气垫粉凝霜自然色',
          p:"35432"
        },
        {
          src: '../../static/recommendimg/1564588121378124.jpg',
          msg: '尚赫浰清压片糖果（组）',
          p:"354374"
        },
        {
          src: '../../static/recommendimg/1564588164547025.jpg',
          msg: '艾沐浴足粉',
          p:"645"
        },
        {
          src: '../../static/recommendimg/1564588192499244.jpg',
          msg: '珐琅铸铁锅',
          p:"713"
        },
        {
          src: '../../static/recommendimg/1568183686100051.jpg',
          msg: '无压龙头',
          p:"123"
        },
      ]
    }
  },
  methods:{
    tiao(item){
      this.$router.push({
        name:"shangpin",
        params:{
          item
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
  .shop{
    ul{
      padding-top: 40px;
      margin-bottom: 50px;
      padding: 0;
      display: flex;
      font-size: 0;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-between;
      li{
        list-style-type: none;
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img{
          width: 98%;
        }
        .imgmsg{
          width: 98%;
          height: 40px;
          line-height: 40px;
          font-size: 13px;
          text-align: center;
          color: #000;
        }
        p{
          height: 30px;
          color: red;
          width: 100%;
          font-size: 14px;
          padding-left: 10px;
        }
      }
    }
  }
</style>