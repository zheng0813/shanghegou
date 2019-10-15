<template>
	<div class="storeShow-box">
		<header height="45px">
			<i @click="goto"></i>
			<div class="search">
				店铺介绍
			</div>
			<span @click="aa=!aa">
				<div class="sanjiao" v-show="aa"></div>
				<ul v-show="aa">
					<li><router-link to="index">首页</router-link></li>
					<li><router-link to="bus">购物车</router-link></li>
					<li><router-link to="mine">我的商城</router-link></li>
					<li><router-link to="">消息</router-link></li>
				</ul>
			</span>
		</header>
		<div class="first">
			<span>
				<img src="../../static/storeimg/1.jpg" alt="">
				<p>普通店铺</p>
				<div>
					<span>收藏</span>
					<b>64粉丝</b>
				</div>
			</span>
		</div>
		<footer>
			<div>
				<h4>公司名称</h4>
				<span>尚赫GO</span>
			</div>
			<div>
				<h4>开店时间</h4>
				<span>2018-12-13 16:13:14</span>
			</div>
		</footer>
		<article></article>
	</div>
</template>
<script>
	export default {
		data:function(){
			return{
				aa:false
			}
		},
		methods:{
			goto:function(){
				history.back()
			}
		}
	}
</script>
<style lang="less" scoped>
.storeShow-box{
	background-color: #f2f2f2;
	height: 100vh;
	article{
		width: 100%;
		height: 10px;
		margin-top: 11px;
		background-color: white;
	}
	footer{
		width: 100%;
		height: 81px;
		margin: 11px 0 0;
		padding: 0 10px;
		box-sizing: border-box;
		background-color: white;
		div{
			width: 100%;
			padding: 12px 0 0;
			display: flex;
			align-items: center;
			h4{
				padding: 0;
				margin: 0;
				width: 77px;
				font-weight: normal;
			}
			span{
				font-size: 15px;
			}
		}
	}
	.first{
		width: 100%;
		height: 80px;
		position: relative;
		background-color: white;
		margin-top: 5px;
		&>span{
			display: block;
			width: 100%;
			height: 100%;
			background-size: 90%;
			display: flex;
			align-items: center;
			img{
				width: 50px;
				height: 40px;
				margin: 0 10px;
			}
			p{
				font-size: 12px;
				color: white;
				padding: 2px;
				background-color: #ed5564;
			}
			div{
				width: 66px;
				height: 49px;
				position: absolute;
				right: 10px;
				span{
					display: block;
					width: 100%;
					height: 27px;
					text-align: center;
					line-height: 25px;
					color: #555;
					background-color: #f2f2f2;
					border-radius: 3px;
				}
				b{
					font-weight: normal;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #777;
				}
			}
		}
	}
	header{
		width: 100%;
		height: 45px;
		padding: 0;
		position: relative;
		background-color: white;
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
		i{
			display: inline-block;
		    width: 9px;
		    height: 17px;
		    background: url(../../static/kindimg/bbc-bg45.png) no-repeat center;
		    background-size: cover;
		    position: absolute;
		    top: 14px;
		    left: 10px;
		    z-index: 13;
		}
		.search{
			display: inline-block;
			width: 70%;
			height: 33px;
			padding: 0 40px;
			box-sizing: border-box;
			line-height: 33px;
			position: absolute;
			top: 6px;
			left: 15%;
			text-align: center;
			font-size: 15px;
		}
		&>span{
			display: inline-block;
			width: 43px;
			height: 43px;
			position: absolute;
			top: 0;
			right: 0;
			background-image: url(../../static/kindimg/bbc-bg48.png);
			background-repeat: no-repeat;
			background-position: center;
			background-size: 20px;
			z-index: 13;
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
					background-image: url(../../static/kindimg/bbc-bg15.png);
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