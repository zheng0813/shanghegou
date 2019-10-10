<template>
	<div class="bus-box">
		<header>
			<i @click="goto"></i>
			<div class="search">
				购物车
			</div>
			<span @click="show">
				<div class="sanjiao" v-show="aa"></div>
				<ul v-show="aa">
					<li><router-link to="index">首页</router-link></li>
					<li><router-link to="bus">购物车</router-link></li>
					<li><router-link to="mine">我的商城</router-link></li>
					<li><router-link to="">消息</router-link></li>
				</ul>
			</span>
		</header>
		<section>
			<div class="bus">
				购物车空空如也
			</div>
		</section>
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
			},
			show:function(){
				if(this.aa==false){
					this.aa=true
				}else{
					this.aa=false
				}
			}
		}
	}
</script>
<style lang="less" scoped>
		section{
			width: 100%;
			height: 85vh;
			background-color: #f2f2f2;
			display: flex;
			justify-content: center;
			align-items: center;
			.bus{
				width: 200px;
				height: 200px;
				font-size: 17px;
				color: #bcbcbc;
				text-align: center;
				background-image: url(../../static/kindimg/bbc-bg15.png);
				background-repeat: no-repeat;
				background-position: center;
			}
		}
		header{
				width: 100%;
				height: 45px;
				padding: 0;
				position: relative;
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
				.search{
					display: inline-block;
					width: 70%;
					height: 33px;
					box-sizing: border-box;
					line-height: 33px;
					position: absolute;
					top: 6px;
					left: 15%;
					text-align: center;
					font-size: 18px;
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
					z-index: 11;
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
</style>