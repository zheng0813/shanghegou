<template>
  <el-container class="hello">
    <el-header class="home" height="42px">
      <el-header >
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
				]
			}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .home{
    background-color: #fff;
    header{
      padding-top: 10px;
      background-color: #fff;
      .search-box{
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
          width: 25px;
          height: 25px;
          position: absolute;
          right: 0px;
          top: 4px;
          background:url(../../static/homeimg/wap2_03.png) no-repeat center;
          background-size: cover;
        }
      }
    }
  }
  .main{
    padding: 0px;
    section{
      .el-carousel{
        width: 100%;
        max-height:363px;
        .el-carousel__button{
          border:1px solid red;
        }
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
    }
  }
</style>
