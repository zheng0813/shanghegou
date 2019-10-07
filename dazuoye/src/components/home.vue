<template>
  <div class="hello">
    <div class="home">
      <header>
        <div class="search">
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
            <el-col :span="4"><div class="grid-content bg-purple home-into"><i></i></div></el-col>
          </el-row>
        </div>
      </header>
      <section>
        <el-carousel>
          <el-carousel-item v-for="item in dataimg" :key="item" class="lunbo">
            <img :src="item.src">
          </el-carousel-item>
        </el-carousel>
      </section>
    </div>
  </div>
</template>

<script>
export default {
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
    background-color: #bcbcbc;
    header{
      background-color: #fff;
      .search-box{
        border: 1px solid #bcbcbc;
        height: 30px;
        border-radius: 15px;
        position: relative;
        span{
          font-size: 1em;
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
          right: 35px;
          top: 5px;
          background:url(../../static/homeimg/wap2_03.png) no-repeat center;
          background-size: cover;
        }
      }
    }
    section{
      .lunbo{
        background-color: #fff;
        max-width: 800px;
        max-height: 387px;
        img{
          width: 100%;
          // max-width: 800px;
          // max-height: 387px;
          display: block;
          margin: auto;
        }
      } 
    }
  }
</style>
