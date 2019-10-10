<template>
  <div class="">
		<header>
			<i @click="goto"></i>
			<span>登录</span>
		</header>
		<section>
			<div class="shanghegou"><img src="../../static/intoimg/1544776076358332.png" alt=""></div>
      <div class="into">
        <form action="">
          <label for="shouji" class="shouji"></label>
          <label for="suo" class="suo"></label>
          <input type="text" placeholder="会员编号/手机" id="shouji">
          <input type="password" placeholder="请输入您的手机" id="suo" :class="{'xian':xian}">
          <span @click='pwd' :class="[{'open':!eye},{'close':eye}]"></span>
        </form>
      </div>
      <div class="forget">
        <el-row :gutter="20" style="margin:0">
            <el-col :span="13"><div>&nbsp;</div></el-col>
            <el-col :span="11">
              <div>
                <router-link to=''>忘记会员编号</router-link>
                <router-link to=''>| 忘记密码</router-link>
              </div>
            </el-col>
          </el-row>
      </div>
      <div class="btn">
        <router-link to='' class="into-btn">登录</router-link>
        <router-link to='' class="enroll-btn">注册</router-link>
      </div>
		</section>
    <footer>
      <p>版权仅为尚赫公司所有，未经许可不得转载或链接</p>
      <p>津ICP备17004905号-3 丨津ICP备17004905号-2丨</p>
    </footer>
	</div>
</template>
<script>
export default{
  data(){
    return{
      eye:true,
      xian:false
    }
  },
  methods:{
    goto:function(){
      history.back()
    },
    pwd:function(){
      this.xian=true
      if(this.eye==false){
        this.eye=true
        suo.setAttribute('type','password')
      }else{
        this.eye=false
        suo.setAttribute('type','text')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  header{
    width: 100%;
    height: 45px;
    padding: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    i{
      display: inline-block;
      width: 9px;
      height: 17px;
      background: url(../../static/kindimg/bbc-bg45.png) no-repeat center;
      background-size: cover;
      position: absolute;
      top: 14px;
      left: 10px;
      z-index: 11;
    }
    span{
      text-align: center;
      font-size: 18px;
      display: inline-block;
      width: 100%;
    }
  }
  section{
    width: 100%;
    box-sizing: border-box;
    .shanghegou{
      width: 200px;
      height: 100px;
      margin: auto;
      margin-top: 50px;
      img{
        display: block;
        width: 200px;
        height: 50px;
      }
    }
    .xian{
      border-bottom: 1px solid #7cecd0;
    }
    .into{
      position: relative;
      input{
        padding-left: 60px;
        margin: 15px auto;
        width: 80%;
        height: 40px;
        border: none;
        display: block;
        font-size: 14px;
        outline: none;
        border-bottom: 1px solid #ddd;
        &:focus{
        border-bottom: 1px solid #7cecd0;
        }
      }
      .shouji,.suo{
        width: 22px;
        height: 22px;
        position: absolute;
        left: 25px;
        top: 10px;
        background: url(../../static/intoimg/login_04.png) no-repeat center;
        background-size: cover;
      }
      .suo{
        top:67px;
        background: url(../../static/intoimg/login_06.png) no-repeat center;
        background-size: cover;
      }
      i,span{
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 12px;
        right: 12px;
      }
      .close{
        background: url(../../static/intoimg/eye-close.png) no-repeat center;
        background-size: contain;
      }
      .open{
        background: url(../../static/intoimg/eye-open.png) no-repeat center;
        background-size: contain;
      }
    }
    .forget{
      a{
        text-decoration: none;
        color: #666;
        font-size: 12px;
      }
    }
    .btn{
      padding-bottom: 130px;
      border-bottom: 1px solid #ddd;
      a{
        display: block;
        width: 90%;
        height: 40px;
        margin: 30px auto;
        line-height: 40px;
        border-radius: 5px;
        text-align: center;
        font-size: 20px;
        color: white;
        background-color: #017572;
        text-decoration: none;
      }
      .enroll-btn{
        background-color: #fff;
        color: #666666;
        border: 1px solid #666666;
      }
    }
  }
  footer{
    padding-top: 15px;
    box-sizing: border-box;
    p{
      color: #999;
      text-align: center;
      font-size: 12px;
      line-height: 24px;
      margin: 0;
    }
  }
</style>