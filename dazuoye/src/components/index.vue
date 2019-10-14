<template>
  <el-container class="hello">
    <el-header class="home" height="42px">
      <el-header >
        <div class="all-search"><router-link to="search"></router-link></div>
        <div class="search">
          <!-- 搜索框 -->
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">&nbsp;</div></el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple search-box">
                <span> 
                  请输入关键词
                </span>
                <i></i>
              </div>
            </el-col>
            <!-- 登录 -->
            <el-col :span="4"><div class="grid-content bg-purple home-into"><i></i></div></el-col>
          </el-row>
        </div>
      </el-header>
    </el-header>
    <el-main class="main">
       <section>
        <!-- 轮播图 -->
        <el-carousel height="50vw">
          <el-carousel-item v-for="(item,i) in dataimg" :key="i" class="lunbo">
            <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
        <ul class="index-nav">
          <li><router-link to='list'><div></div><h3>尚</h3></router-link></li>
          <li><router-link to='shop'><div></div><h3>赫</h3></router-link></li>
          <li><router-link to=''><div></div><h3>购</h3></router-link></li>
          <li><router-link to=''><div></div><h3>商</h3></router-link></li>
          <li><router-link to=''><div></div><h3>城</h3></router-link></li>
        </ul>
        <p>
          辅/销/配/件
        </p>
        <div class="shop">
          <img src="../../static/homeimg/1568684292913591.jpg" alt="">
          <!-- 商品 -->
          <ul>
            <li v-for="(item,i) in stop" :key="i" @click="tiao(item)">
              <img :src="item.src">
              <div class="imgmsg">{{item.msg}}</div>
            </li>
          </ul>
        </div>
      </section>
    </el-main>
  </el-container>
</template>
<script>
export default{
   data() {
    return {
      dataimg: [{
          src: require('../../static/homeimg/1562646052756625.jpg'),
        },
        {
          src: require('../../static/homeimg/1566374709192337.jpg'),
        },
        {
          src: require('../../static/homeimg/1567740086493831.jpg'),
        }
      ],
      stop: [
        {
          src: '../../static/homeimg/1568794333295635.png',
          msg: '水机六分三通'
        },
        {
          src: '../../static/homeimg/1568795216812492.png',
          msg: '道尔顿滤芯外壳'
        },
        {
          src: '../../static/homeimg/1568795183522584.png',
          msg: '水机——道滤芯外壳'
        },
        {
          src: '../../static/homeimg/1568795130842151.png',
          msg: '水机转换开关'
        },
        {
          src: '../../static/homeimg/1568795092197251.png',
          msg: '空气净化器金属脚轮'
        },
        {
          src: '../../static/homeimg/1568795049320978.png',
          msg: '泡棉壳'
        },
        {
          src: '../../static/homeimg/1568794578236599.png',
          msg: '底部初效滤网'
        },
        {
          src: '../../static/homeimg/1568794523106181.png',
          msg: '侧边初效滤网'
        },
      ]
    }
  },
  methods:{
    tiao(item){
      this.$router.push({
        name:"shop",
        params:{
          item
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .all-search{
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    a{
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 11;
    }
  }
  .home{
    background-color: #fff;
    header{
      padding-top: 10px;
      background-color: #fff;
      .search-box{
        // 搜索框
        border: 1px solid #bcbcbc;
        height: 30px;
        border-radius: 15px;
        position: relative;
        span{
          font-size: 0.545rem;
          line-height: 30px;
          color: #bcbcbc;
          display: block;
          text-align: center;
        }
        i{
          // 查找
          width: 20px;
          height: 20px;
          position: absolute;
          right: 15px;
          top: 5px;
          background:url(../../static/homeimg/wap2_09.png) no-repeat;
          background-size: cover;
        }
      }
      .home-into{
        i{
          // 登录
          width: 25px;
          height: 25px;
          position: absolute;
          right: 0px;
          top: 4px;
          z-index: 20;
          background:url(../../static/homeimg/wap2_03.png) no-repeat center;
          background-size: cover;
        }
      }
    }
  }
  .main{
    padding: 0px;
    section{
      // 轮播图
      .el-carousel{
        width: 100%;
        max-height:363px;
      }
      .lunbo{
        background-color: #fff;
        margin-top: 10px;
        img{
          width: 100%;
          max-width: 800px;
          display: block;
          margin: auto;
        }
      } 
      // 尚赫购商城
      .index-nav{
        margin-top: 10px;
        padding: 0;
        display: flex;
        font-size: 0;
        box-sizing: border-box;
        justify-content: space-between;
        li{
          width: 20%;
          display: flex;
          justify-content: center;
          list-style-type: none;
          a{
          text-decoration: none;
          div{
            width: 55px;
            height: 55px;
            display: inline-block;
            margin-top: 6px;
          }
          h3{
            font-size: 0.521rem;
            color: #222;
            margin-top: 0.217rem;
            text-align: center;
          }
        }
        }
        & :first-child{
            div{
              background: url(../../static/homeimg/1556002985458512.png) no-repeat center;
              background-size: contain;
            }
          }
          & :nth-child(2){
            div{
              background: url(../../static/homeimg/1556003017818044.png) no-repeat center;
              background-size: contain;
            }
          }
          & :nth-child(3){
            div{
              background: url(../../static/homeimg/1563860451475714.png) no-repeat center;
              background-size: contain;
            }
          }
          & :nth-child(4){
            div{
              background: url(../../static/homeimg/1563860470510441.png) no-repeat center;
              background-size: contain;
            }
          }
          & :nth-child(5){
            div{
              background: url(../../static/homeimg/1563860486593962.png) no-repeat center;
              background-size: contain;
            }
          }
      }
      // 辅销配件
      p{
        height: 40px;
        font-size: 15px;
        line-height: 40px;
        margin: 0;
        text-align: center;
        background: url(../../static/homeimg/index-tit-bg1.png) no-repeat center;
        background-size: contain;
      }
      .shop{
        img{
          display: block;
          width: 96%;
          margin: auto;
        }
        ul{
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
              width: 100%;
            }
            .imgmsg{
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 13px;
              text-align: center;
              color: #000;
            }
          }
        }
      }
    }
  }
</style>
