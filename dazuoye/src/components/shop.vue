<template>
	<div class="shop-box">
		<img :src="mingzi.src" alt="" class="img-dong" :class="{'zuoshang':youxia}">
		<i @click="goto" class="go-out"></i>
		<span @click="show" class="news">
		<div class="sanjiao" v-show="aa"></div>
			<ul v-show="aa">
				<li><router-link to="index">首页</router-link></li>
				<li><router-link to="bus">搜索</router-link></li>
				<li><router-link to="mine">我的商城</router-link></li>
				<li><router-link to="">消息</router-link></li>
			</ul>
		</span>
		<transition name="el-fade-in-linear">
			<header v-show="dis">
				<nav>
					<i @click="goto" class="go-out"></i>
					<div class="nav">
						<router-link to='' class="now">商品</router-link>
						<router-link to=''>详情</router-link>
						<router-link to=''>推荐</router-link>
					</div>
					<span @click="show" class="news">
					<div class="sanjiao" v-show="aa"></div>
						<ul v-show="aa">
							<li><router-link to="index">首页</router-link></li>
							<li><router-link to="bus">搜索</router-link></li>
							<li><router-link to="mine">我的商城</router-link></li>
							<li><router-link to="">消息</router-link></li>
						</ul>
					</span>
				</nav>
			</header>
		</transition>
		<section>
			<el-carousel style="height:360px" :loop="false" :autoplay="false">
				<el-carousel-item v-for="(item,i) in footimg" :key="i" class="lunbo1" style="margin:0,height:360px">
					<img :src="mingzi.src">
				</el-carousel-item>
			</el-carousel>
			<div class="msg">
				<div class="name">{{mingzi.msg}}</div>
				<div class="price">￥ 189.00</div>
				<div class="count"><span>PV值:95</span><span>销量:586件</span></div>
				<div class="place">
					<div class="postTo">送至x</div>
					<v-distpicker class="choose-place"></v-distpicker>
				</div>
			</div>
			<div class="default" @click="popup">
				<span>已选</span>
				<span>默认</span>
				<i></i>
			</div>
			<div class="shangheGO">
				<div class="GO"><span></span>尚赫GO<i></i></div>
				<div class="buyed">
					<router-link to=''><span></span>描述相符<p>5.00</p></router-link>
					<router-link to=''><span></span>服务态度<p>5.00</p></router-link>
					<router-link to=''><span></span>发货速度<p>5.00</p></router-link>
				</div>
			</div>
			<div class="detail">
				<router-link to=''>点击查看商品详情</router-link>
			</div>
		</section>
		<footer>
			<ul>
				<li><router-link to=''>客服</router-link></li>
				<li><router-link to=''>收藏</router-link></li>
				<li><router-link to='bus'>购物车<span v-show=one>{{one}}</span></router-link></li>
				<li @click="popup"><router-link to=''>加入购物车</router-link></li>
				<li><router-link to=''>立即购买</router-link></li>
			</ul>
		</footer>
		<div class="pop-up" v-show="del2" :style="{top:high}">
			<div class="dake" @click="del1"></div>
			<div class="high-light">
				<img :src="mingzi.src" alt="">
				<div class="name">{{mingzi.msg}}<b @click="close">X</b></div>
				<div class="price">￥ 189.00<span>库存:92件</span></div>
				<div class="count"><span>PV值:95</span><span>销量:586件</span></div>
				<div class="kong"></div>
				<div class="count1">
					<span>购买数量</span>
					<div class="calculate">
						<div @click="jian">-</div>
						<p>{{count}}</p>
						<div @click="jia">+</div>
					</div>
				</div>
				<div class="foot">
					<div @click="addcar"><router-link to=''>加入购物车</router-link></div>
					<div><router-link to=''>确定</router-link></div>
				</div>
			</div>
		</div>
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
				del2:false,
				count:1,
				youxia:false,
				mingzi:'',
				high:'0px',
				one:'',
				kind:JSON.parse(localStorage.getItem("kind")),
				footimg: [{
						src: require('../../static/shopimg/1.jpg'),
					},
					{
						src: require('../../static/shopimg/2.jpg'),
					},
					{
						src: require('../../static/shopimg/3.jpg'),
					},
					{
						src: require('../../static/shopimg/4.jpg'),
					},
					{
						src: require('../../static/shopimg/5.jpg'),
					}
        ],
			}
		},
		created(){
			if(!this.$route.params.item){
				this.mingzi = {
          src: '../../static/homeimg/1568795183522584.png',
          msg: '水机——道滤芯外壳'
        }
			}else{
				this.mingzi=this.$route.params.item
			}
		},
		mounted: function () {
			window.addEventListener('scroll', this.handleScroll, true)
			var a = []
				for(var ii in JSON.parse(localStorage.getItem("kind"))){
					a.push(ii)
				}
				this.one=a.length
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
			popup(){
				this.del2 = true
				this.high = '0px'
				this.youxia = false
			},
			close(){
				this.high = '640px'
				this.youxia = false
			},
			del1(){
				this.high = '640px'
				this.youxia = false
			},
			handleScroll(e){
				if(pageYOffset>70){
					this.dis = true
				}else{
					this.dis = false
				}
			},
			jian(){
				if(this.count>1){
					this.count--
				}
			},
			jia(){
				this.count++
			},
			addcar(){
				this.youxia = true
				this.high = '640px';
				for(var i in this.kind){
					if(this.mingzi.msg==this.kind[i].msg){
						delete this.kind[i]
					}
				}
				var d1 = new Date()
				this.kind["'"+d1.getTime()+"'"]=this.mingzi;
				localStorage.setItem("kind",JSON.stringify(this.kind));
				var a = []
				for(var ii in JSON.parse(localStorage.getItem("kind"))){
					a.push(ii)
				}
				this.one=a.length
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
	@keyframes zuoshang{
		form{
			top:-50px;
			left: -50px
		}
		to{
			top: 600px;
			left: 250px;
		}
	}
	.img-dong{
		width: 50px;
		position: fixed;
		top: -50px;
		left: -50px;
		z-index: 16;
	}
	.zuoshang{
		animation: zuoshang 1s linear;
	}
	.go-out{
		display: inline-block;
			width: 30px;
			height: 30px;
			background: url(../../static/shopimg/arrow_left_r.png) no-repeat center;
			background-size: cover;
			position: fixed;
			top: 5px;
			left: 10px;
			z-index: 3;
	}
	.news{
		display: inline-block;
		width: 43px;
		height: 43px;
		position: fixed;
		top: -2px;
		right: 5px;
		background-image: url(../../static/shopimg/more_r.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 30px;
		z-index: 3;
		.sanjiao{
			width: 0;
			height: 0;
			border: 10px solid transparent;
			border-bottom: 10px solid #333333;
			position: absolute;
			bottom: 0;
			left: 11px;
		}
		ul{
			position: absolute;
			width: 110px;
			height: 170px;
			right: 2px;
			bottom: -182px;
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
				.now{
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
	section{
		padding-bottom: 40px;
		// 轮播图
		.el-carousel{
			height: 360px;
		}
		
		.lunbo1{
			background-color: #fff;
			img{
				// width: 100%;
				height: 360px;
				display: block;
				margin: auto;
			}
		} 
		.msg{
			.name,.price{
				width: 90%;
				height: 20px;
				font-size: 14px;
				color: #111;
				padding: 10px;
			}
			.price{
				color: #017472;
				padding:0 0 0 10px;
				position: relative;
			}
			.count{
				width: 95%;
				padding-left: 10px;
				font-size: 12px;
				display: flex;
				justify-content: space-between;
				& :first-child{
					color:#ccc;
				}
				& :nth-child(2){
					color:#333;
				}
			}
			.place{
				color: #111;
				font-size: 15px;
				height: 40px;
				line-height:40px;
				display:flex;
				margin: 10px 0 10px 10px;
				.postTo{
					flex-grow:1;
				}
				.distpicker-address-wrapper{
					width: 240px;
					display: flex;
					margin-right: 20px;
					
				}
			}
		}
		.default{
			border: 1px solid #ddd;
			width: 100%;
			box-sizing: border-box;
			height: 45px;
			font-size: 15px;
			line-height: 45px;
			position: relative;
			& :first-child{
				color:#ccc;
				padding-left: 10px;
			}
			& :nth-child(2){
				color:#333;
				padding-left: 10px;
			}
			i{
				width: 9px;
				height: 17px;
				display: inline-block;
				position: absolute;
				top: 13px;
				right: 10px;
				background: url(../../static/shopimg/bbc-bg44.png) no-repeat center/cover;
			}
		}
		.shangheGO{
			border: 1px solid #ddd;
			margin-top: 10px;
			height: 130px;
			.GO{
				color: #222;
				font-size: 12px;
				padding: 11px 0 5px;
				position: relative;
				z-index: 1;
				span{
					width: 15px;
					height: 15px;
					display: inline-block;
					background: url(../../static/shopimg/bbc-bg7.png) no-repeat center/contain;
					margin: 0 10px;
				}
				i{
					width: 9px;
					height: 17px;
					display: inline-block;
					position: absolute;
					top: 8px;
					right: 10px;
					background: url(../../static/shopimg/bbc-bg44.png) no-repeat center/cover;
				}
			}
			.buyed{
				a{
					width: 112px;
					height: 74px;
					text-align: center;
					display: inline-block;
					text-decoration: none;
					color: #017472;
					span{
						width: 26px;
						height: 26px;
						display: block;
						margin: 10px auto;
						background: url(../../static/shopimg/icon-des.png) no-repeat center/cover;
					}
					p{
						font-size: 16px;
						margin: 0px;
						font-weight: bold;
					}
				}
				& :nth-child(2){
					span{
						background: url(../../static/shopimg/icon-service.png) no-repeat center/cover;
					}
				}
				& :nth-child(3){
					span{
						background: url(../../static/shopimg/icon-speed.png) no-repeat center/cover;
					}
				}
			}
		}
		.detail{
			width: 100%;
			height: 50px;
			border: 1px solid #ddd;
			box-sizing: border-box;
			line-height: 50px;
			text-align: center;
			margin-top: 10px;
			a{
				color: #888;
				font-size: 13px;
				height: 12px;
				display: inline-block;
				text-decoration: none;
			}
		}
	}
	footer{
		position: fixed;
		bottom: 0px;
		z-index: 10;
		background-color: #fff;
		ul{
			margin: 0;
			padding: 0;
			display: flex;
			li{
				list-style-type: none;
				height: 42px;
				text-align: center;
				line-height: 60px;
				border: 1px solid #ddd;
				box-sizing: border-box;
				position: relative;
				a{
					color:#017472;
					border: none;
					text-decoration: none;
				}
				span{
					width: 10px;
					height: 10px;
					line-height: 10px;
					border: 1px solid #017472;
					border-radius: 10px;
					position: absolute;
					top: 5px;
					right: 5px;
				}
			}
			& >:nth-child(1){
				background: url(../../static/shopimg/kefu_b.png) no-repeat 15px 5px;
				background-size: 18px;
				width: 51px;
			}
			& >:nth-child(2){
				width: 51px;
				background: url(../../static/shopimg/favorite_r.png) no-repeat 15px 5px;
				background-size: 18px;
			}
			& >:nth-child(3){
				width: 69px;
				background: url(../../static/shopimg/icon-cart.png) no-repeat 23px 5px;
				background-size: 18px;
			}
			& >:nth-child(4),& >:nth-child(5){
				width: 93px;
				font-size: 14px;
				background-color: #ffc110;
				border: none;
				line-height: 42px;
				a{
					color: white;
				}
			}
			& >:nth-child(5){
				background-color: #017472;
			}
		}
	}
	.pop-up{
		background-color: #595959;
		width: 360px;
		height: 1px;
		position: fixed;
		top: 640px;
		left: 0;
		z-index: 11;
		transition: all 1s;
		.dake{
			width: 360px;
			height: 400px;
			opacity: .7;
			background-color: #595959;
			position: absolute;
			top: 0px;
		}
		.high-light{
			width: 360px;
			height: 240px;
			position: absolute;
			top: 400px;
			background-color: #fff;
			opacity: 11;
			z-index: 15;
			img{
				width: 95px;
				height: 95px;
				position: absolute;
				top: -20px;
				left: 20px;
				border-radius: 5px;
			}
			.name,.price{
				width: 60%;
				height: 20px;
				font-size: 14px;
				color: #111;
				padding: 10px 10px 10px 130px;
				display: flex;
				justify-content: space-between;
				span{
					color: #aaa;
					font-size: 12px;
				}
			}
			.price{
				color: #017472;
				padding:0 0 0 130px;
				position: relative;
			}
			.count{
				width: 95%;
				padding-left: 130px;
				font-size: 14px;
				display: flex;
				justify-content: space-between;
				& :first-child{
					color:#333;
				}
				& :nth-child(2){
					color:#333;
				}
			}
			.kong{
				width: 100%;
				height: 50px;
				border: 1px solid #ddd;
				box-sizing: border-box;
				margin-top: 10px;
			}
			.count1{
				width: 100%;
				height: 50px;
				box-sizing: border-box;
				display: flex;
				font-size: 14px;
				line-height: 50px;
				justify-content: space-between;
				span{
					color: #ccc;
					margin-left: 10px;
				}
				.calculate{
					width: 20%;
					display: flex;
					justify-content: space-between;
					color: #555;
					font-size: 20px;
					margin-right: 10px;
					p{
						margin: 0px;
						padding: 0;
						font-size: 16px;
						color: #333;
					}
				}
			}
			.foot{
				width: 100%;
				display: flex;
				div{
					width: 100%;
					display: flex;
					a{
						width: 100%;
						font-size: 16px;
						background-color: #ffc110;
						border: none;
						line-height: 42px;
						text-align: center;
						color: #fff;
						text-decoration: none;
					}
				}
				& :last-child{
					a{
						background-color: #017472;
					}
				}
			}
		}
	}
</style>