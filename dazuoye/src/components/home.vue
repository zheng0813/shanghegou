<template>
  <nav>
    <router-view/>
    <div class="box">
      <ul class="home-nav">
        <li><router-link to='index'><div></div><h3>首页</h3></router-link></li>
        <li><router-link to='kind'><div></div><h3>分类</h3></router-link></li>
        <li><router-link to='bus'><div></div><h3>购物车</h3></router-link></li>
        <li><router-link to='mine'><div></div><h3>我的</h3></router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
 
}
</script>
<style lang="less">
.el-carousel{
  .el-carousel__button{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    margin: 0 3px;
    background: rgba(255,255,255,0.6);
  }
}
</style>
<style lang="less" scoped>
  .box{
    z-index: 999;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-top: 0.5rem;
    min-height: 50px;
    box-shadow: 0 10px 20px #000;
    .home-nav{
      padding: 0;
      display: flex;
      font-size: 0;
      box-sizing: border-box;
      justify-content: space-between;
      li{
        width: 25%;
        height: 54px;
        display: flex;
        justify-content: center;
        a{
          text-decoration: none;
          div{
            width: 22px;
            height: 22px;
            display: inline-block;
            margin-top: 6px;
          }
          h3{
            padding: 0;
            margin-top: 6px;
            font-size: 0.5rem;
            color: #888;
            line-height: 1.2rem;
          }
        }
      }
      & :first-child{
        div{
          background: url(../../static/homeimg/icon-index.png) no-repeat center;
          background-size: contain;
        }
      }
      & :nth-child(2){
        div{
          background: url(../../static/homeimg/SH-class.png) no-repeat center;
          background-size: contain;
        }
      }
      & :nth-child(3){
        div{
          background: url(../../static/homeimg/SH-cart.png) no-repeat center;
          background-size: contain;
          margin-left: 7px;
        }
      }
      & :nth-child(4){
        div{
          background: url(../../static/homeimg/SH-mine.png) no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
