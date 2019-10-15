<template>
	<div class="shop-box">
		<transition name="el-fade-in-linear">
			<header v-show="dis">
				<nav>
					<i @click="goto" class="go-out"></i>
					<div class="nav">
						<router-link to='shangpin' class="now"><span @click="syl(1)">商品</span></router-link>
						<router-link to='detial'><span @click="syl(2)">详情</span></router-link>
						<router-link to='recommend'><span @click="syl(3)">推荐</span></router-link>
					</div>
					<span @click="show" class="news">
					<div class="sanjiao" v-show="aa"></div>
						<ul v-show="aa">
							<li><router-link to="index">首页</router-link></li>
							<li><router-link to="bus">搜索</router-link></li>
							<li><router-link to="mine">我的商城</router-link></li>
							<li><router-link to="into">消息</router-link></li>
						</ul>
					</span>
				</nav>
			</header>
		</transition>
		<router-view/>
	</div>
</template>
<script>
import VDistpicker from 'v-distpicker'

export default{
	components: { VDistpicker },
  data:function(){
			return{
				aa:false,
				dis:false,
				a:1
			}
		},
		mounted: function () {
			window.addEventListener('scroll', this.handleScroll, true)
		},
		methods:{
			goto:function(){
				history.back()
			},
			show:function(){
				if(this.aa==false){
					this.aa=true
				}else{
					this.aa=false
				}
			},
			handleScroll(){
				console.log(this.a)
				if(this.a==1){
					if(pageYOffset>70){
						this.dis = true
					}else{
						this.dis = false
					}
				}
			},
			syl(a){
				if(a!=1){
					this.dis = true
					this.a = a;
					console.log(a)
				}
			}
		}
	}
</script>
<style lang="less">
select{
	border: none;
	width: 80px;
	overflow: hidden;
}
	
.el-carousel__container{
	height: 360px;
}
.el-carousel{
	// 轮播图变换图片
  .el-carousel__button{
    display: block;
    width: 8px;
    height: 8px;
		background-color: #FFF;
		border-radius: 10px;
    border: none;
    cursor: pointer;
  }
}
</style>
<style lang='less' scoped>
	header{
		width: 100%;
		height: 45px;
		padding: 0;
		background-color: #fff;
		position: fixed;
		z-index: 5;
		nav{
			.go-out{
				display: inline-block;
				width: 10px;
				height: 17px;
				background: url(../../static/kindimg/bbc-bg45.png) no-repeat center;
				background-size: cover;
				position: fixed;
				top: 13px;
				left: 10px;
				z-index: 13;
			}
			.nav{
				display: flex;
				justify-content: space-between;
				width: 200px;
				margin: auto;
				height: 45px;
				line-height: 45px;
				.router-link-active{
					color: #017472;
					border-bottom: 1px solid #017472;
				}
				a{
					font-size: 18px;
					text-decoration: none;
					color: #333;
					width: 40px;
					height: 40px;
					margin: 0 10px;
					text-align: center;
				}
			}
			.news{
				display: inline-block;
				width: 21px;
				height: 21px;
				position: fixed;
				top: 12px;
				right: 12px;
				background-image: url(../../static/kindimg/bbc-bg48.png);
				background-repeat: no-repeat;
				background-position: center;
				background-size: 21px;
				z-index: 13;
				.sanjiao{
					width: 0;
					height: 0;
					border: 10px solid transparent;
					border-bottom: 10px solid #333333;
					position: absolute;
					bottom: -10px;
					left: 0px;
				}
				ul{
					position: absolute;
					width: 110px;
					height: 170px;
					right: 2px;
					bottom: -192px;
					list-style-type: none;
					padding: 0;
					border-radius: 5px;
					li{
						width: 110px;
						height: 42px;
						line-height: 42px;
						box-sizing: border-box;
						background-image: url(../../static/kindimg/icon-in.png);
						background-repeat: no-repeat;
						background-size: 18px;
						background-position: 13px center;
						background-color: #333;
						padding: 0 0 0 38px;
						a{
							color: white;
							text-decoration: none;
						}
					}
					& :nth-child(2){
						background-image: url(../../static/kindimg/search.png);
					}
					& :nth-child(3){
						background-image: url(../../static/kindimg/bbc-bg13.png);
					}
					& :nth-child(4){
						background-image: url(../../static/kindimg/message.png);
					}
				}
			}
		}
	}
</style>