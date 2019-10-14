<template>
	<section>
		<div class="logo">
			<span>
				<img src="../../static/storeimg/1.jpg" alt="">
				<p>尙赫GO</p>
				<div>
					<span>收藏</span>
					<b>63人</b>
				</div>
			</span>
		</div>
		<div class="nav">
			<ul>
				<li><span @click="image=1" :class="image==1?'image':''"><router-link to="storeIndex">店铺首页</router-link></span></li>
				<li><span @click="image=2" :class="image==2?'image':''"><router-link to="">全部商品</router-link></span></li>
				<li><span @click="image=3" :class="image==3?'image':''"><router-link to="">商品上新</router-link></span></li>
				<li><span @click="image=4" :class="image==4?'image':''"><router-link to="">店铺活动</router-link></span></li>
			</ul>
		</div>
		<router-view></router-view>
	</section>
</template>
<script>
	export default {
		data(){
			return{
				image:1,
			}
		}
	}
</script>
<style lang="less" scoped>
	section{
		background-color: #f2f2f2;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding: 45px 0;
		.logo{
			width: 100%;
			height: 80px;
			position: relative;
			&>span{
				display: block;
				width: 100%;
				height: 100%;
				background: #f2f2f2 url(../../static/storeimg/logo.png) no-repeat center;
				background-size: 90%;
				display: flex;
				align-items: center;
				img{
					width: 50px;
					height: 40px;
					border-radius: 20px;
					margin: 0 10px;
				}
				p{
					width: 132px;
					font-size: 15px;
					color: white;
				}
				div{
					width: 66px;
					height: 49px;
					position: absolute;
					right: 0;
					span{
						display: block;
						width: 100%;
						height: 27px;
						background-color: #017472;
						text-align: center;
						line-height: 25px;
						color: white;
						border-top-left-radius: 14px;
					}
					b{
						font-weight: normal;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #c2c2c2;
						color: white;
					}
				}
			}
		}
		.nav{
			width: 100%;
			height: 48px;
			box-sizing: border-box;
			padding: 0 14px;
			background-color: white;
			ul{
				width: 100%;
				height: 100%;
				display: flex;
				list-style-type: none;
				padding: 0;
				margin: 0;
				li{
					width: 25%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					span{
						border-bottom: 2px solid transparent;
					}
					a{
						text-decoration: none;
						font-size: 15px;
						color: #666;
						height: 48px;
						line-height: 48px;
					}
					.image{
						border-bottom: 2px solid #017472;
						a{
							color: #017472;
						}
					}
				}
			}
		}
	}
</style>