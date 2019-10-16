<template>
  <div class="mine">
    <div class="bg">
      <div class="donghua">
        <router-link to='' class="yuan"></router-link>
        <div class="denglu">
          <router-link to='into' class="into">登录</router-link>
          <router-link to='into' class="zhuce">| 注册</router-link>
        </div>
        
      </div>
    </div>
    <div class="gongneng">
      <dl>
        <dd>
          <ul>
            <li><router-link to='into'><div></div><h3>待付款</h3></router-link></li>
            <li><router-link to='into'><div></div><h3>代发货</h3></router-link></li>
            <li><router-link to='into'><div></div><h3>待收货</h3></router-link></li>
            <li><router-link to='into'><div></div><h3>售后</h3></router-link></li>
          </ul>
        </dd>
        <dt><router-link to='into'><i></i>我的订单<span></span></router-link></dt>
        <dt><router-link to='into'><i></i>我的收藏<span></span></router-link></dt>
        <dt><router-link to='into'><i></i>我的足迹<span></span></router-link></dt>
        <dt><router-link to='into'><i></i>账号管理<span></span></router-link></dt>
        <dt><router-link to='into'><i></i>收货地址<span></span></router-link></dt>
        <dt><router-link to='into'><i></i>在线客服<span></span></router-link></dt>
      </dl>
    </div>
  </div>
</template>
<script>
export default{
  
}
</script>
<style lang="less" scoped>
  @keyframes donghua{
    form{
      top: -80px;
    }
    20%{
      top: -50px;
    }
    40%{
      top: 200px;
    }
    60%{
      top: 180px;
    }
    80%{
      top: 200px;
    }
    to{
      top: 80px;
    }
  }
  .mine{
    margin-bottom: 60px;
    .bg{
      text-align: center;
      width: 100%;
      position: relative;
      z-index: 1;
      height: 250px;
      background:url(../../static/mineimg/head_bg_02.png) no-repeat center;
      background-size: cover;
      .donghua{
        width: 100%;
        height: 100px;
        position: absolute;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        animation: donghua 1.5s forwards;
        .yuan{
          display: block;
          width: 70px;
          height: 70px;
          border-radius: 35px;
          background-color: rgba(0, 0, 0, 0.5);
          margin: 0 auto;
          line-height: 250px;
        }
        .denglu{
          width: 100%;
        }
        .into,.zhuce{
          font-size: 16px;
          width: 50%;
          text-align: right;
          text-decoration: none;
          color: white;
        }
        .zhuce{
          text-align: left;
        }
      }
    }
    .gongneng{
      margin-top: 10px;
      width: 100%;
      border-top: 1px solid #dddddd;
      dl{
        background-color: #FFF;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
        margin:0px;
        dd{
          display: block;
          padding: 10px 0 5px;
          margin: 0px;
          ul{
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
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                div{
                  width: 27px;
                  height: 27px;
                  display: inline-block;
                  margin-top: 6px;
                }
                h3{
                  width: 100%;
                  text-align: center;
                  padding: 0;
                  margin-top: 6px;
                  font-size: 12px;
                  color: #222;
                  line-height: 13px;
                }
              }
            }
            & :first-child{
              div{
                background: url(../../static/mineimg/Shopping_05.png) no-repeat center;
                background-size: contain;
              }
            }
            & :nth-child(2){
              div{
                background: url(../../static/mineimg/Shopping_07.png) no-repeat center;
                background-size: contain;
              }
            }
            & :nth-child(3){
              div{
                background: url(../../static/mineimg/Shopping_04.png) no-repeat center;
                background-size: contain;
              }
            }
            & :nth-child(4){
              div{
                background: url(../../static/mineimg/Shopping_06.png) no-repeat center;
                background-size: contain;
              }
            }
          }
        }
        dt{
          a{
            text-decoration: none;
            font-size: 13px;
            line-height: 44px;
            color: #222;
            vertical-align: top;
            display: flex;
            align-items: center;
            position: relative;
            i{
              display: inline-block;
              width: 15px;
              height: 15px;
              margin: 20px 10px;
            }
            span{
              width: 9px;
              height: 15px;
              display: inline-block;
              background: url(../../static/mineimg/bbc-bg44.png) no-repeat center;
              background-size: contain;
              position: absolute;
              right: 15px;
            }
          }
        }
        & :nth-child(2){
          i{
            background: url(../../static/mineimg/new-mc1.png) no-repeat center;
            background-size: contain;
          }
        }
        & :nth-child(3){
          i{
            background: url(../../static/mineimg/new-mc2.png) no-repeat center;
            background-size: contain;
          }
        }
        & :nth-child(4){
          i{
            background: url(../../static/mineimg/new-mc3.png) no-repeat center;
            background-size: contain;
          }
        }
        & :nth-child(5){
          i{
            background: url(../../static/mineimg/new-mc5.png) no-repeat center;
            background-size: contain;
          }
        }
        & :nth-child(6){
          i{
            background: url(../../static/mineimg/new-mc6.png) no-repeat center;
            background-size: contain;
          }
        }
        & :nth-child(7){
          i{
            background: url(../../static/mineimg/new-mc7.png) no-repeat center;
            background-size: contain;
          }
        }
      }
    }
  }
</style>