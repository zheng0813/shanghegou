<template>
	<div class="kind-box">
		<el-container>
			<el-header height="45px">
				<i @click="goto"></i>
				<div class="search">
					<i></i>
					<span>请输入关键字</span>
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
				<div class="all-search"><router-link to="search"></router-link></div>
			</el-header>
			<el-main class="box-main">
				<el-aside width="84px">
					<ul>
						<li @click="but" :class="{'c1':bb}"><router-link to="push">品牌推荐</router-link></li>
						<li @click="but" :class="{'c1':!bb}"><router-link to="life">居家生活</router-link></li>
					</ul>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-main>
		</el-container>
    </div>
</template>
<script>
	export default {
		data:function(){
			return{
				aa:false,
				bb:true
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
			},
			but(){
				if(this.bb==false){
					this.bb=true
				}else{
					this.bb=false
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.kind-box{
		.el-container{
			.box-main{
				display: flex;
				flex-wrap: nowrap;
				height: 85vh;
				width: 100%;
				padding: 0;
				.el-aside{
					height: 85vh;
					background-color: #f2f2f2;
					ul{
						width: 84px;
						height: 126px;
						padding: 0 11px;
						padding: 0;
						text-decoration: none;
						margin: 0;
						li{
							border-bottom: 2px solid transparent;
							a{
								display: block;
								width: 62px;
								height: 63px;
								margin: auto;
								color: #999;
								background: url(../../static/kindimg/degault.png);
								background-repeat: no-repeat;
								background-size: 25px;
								padding-top: 40px;
								background-position: center 10px;
								text-align: center;
								box-sizing: border-box;
								text-decoration: none;
							}
						}
						.c1{
							a{
								color: #318e8b;
							}
							border-bottom: 2px solid #318e8b;
						}
					}
				}
				.el-main{
					flex-grow: 1;
					background-color: #fcfcfc;
					padding: 0;
				}
			}
			.el-header{
				width: 100%;
				height: 45px;
				padding: 0;
				position: relative;
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
					border: 1px solid #dedede;
					border-radius: 17px;
					padding: 0 40px;
					box-sizing: border-box;
					line-height: 33px;
					position: absolute;
					top: 6px;
					left: 15%;
					background-color: #f6f6f6;
					i{
						width: 13px;
						height: 13px;
						position: absolute;
						top: 10px;
						left: 20px;
						background-image: url(../../static/kindimg/search.png);
						background-size: 13px;
						background-position: center;
					}
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
	}
</style>