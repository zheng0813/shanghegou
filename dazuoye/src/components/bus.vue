<template>
	<div class="bus-box">
		<div class="del-box"  v-show="delbox">
			<p></p>
			<div class="box">
				<div>确认清空历史记录？</div>
				<span @click="ok">确认</span>
				<span @click="no">取消</span>
			</div>
		</div>
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
					<li><router-link to="into">消息</router-link></li>
				</ul>
			</span>
		</header>
		<section>
			<div class="bus" v-show='JSON.stringify(count)=="{}"'>
				购物车空空如也
			</div>
			<ul>
				<li v-show='JSON.stringify(count)!="{}"'>
					<div class="shanghegou">
						尚赫GO
					</div>
					<div class="write" @click="shanchu1">
						编辑
					</div>
				</li>
				<li v-for="(item,b,i) in count" :key='i'>
					<img :src="item.src" alt="">
					<div class="name">{{item.msg}}</div>
					<div class="rem" @click="delbox=item.msg" v-show='shanchu'>删除</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default {
		data:function(){
			return{
				aa:false,
				count:JSON.parse(localStorage.getItem("kind")),
				delbox:false,
				shanchu:false,
			}
		},
		mounted(){
			
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
			ok(){
				for(var i in this.count){
					if(this.count[i].msg==this.delbox){
						delete this.count[i]
						localStorage.setItem("kind",JSON.stringify(this.count))
					}
				}
				
				this.delbox=false
			},
			no(){
				this.delbox=false
			},
			shanchu1(){
				if(this.shanchu == false){
					this.shanchu = true
				}else{
				this.shanchu = false
				}
			}
		}
	}
</script>
<style lang="less" scoped>
		.bus-box{
		position: relative;
		.del-box{
			width: 100%;
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
			background-color: transparent;
			z-index: 100;
			p{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: #000;
				margin: 0;
				opacity: 0.75;
			}
			.box{
				width: 222px;
				height: 126px;
				border-radius: 3px;
				background-color: white;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				div{
					width: 100%;
					height: 84px;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #017472;
					font-size: 15px;
					border-bottom: 1px solid #bbb;
				}
				span{
					display: inline-block;
					width: 108px;
					height: 41px;
					text-align: center;
					line-height: 41px;
				}
				& :nth-child(2){
					border-right: 1px solid #bbb;
				}
			}
		}
	}
	section{
		width: 100%;
		height: 85vh;
		background-color: #f2f2f2;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		ul{
			padding: 0;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			font-size: 15px;
			li{
				list-style-type: none;
				width: 100%;
				height: 100px;
				background: url(../../static/list/ok.png) no-repeat 10px center;
				background-size: 15px;
				border: 1px solid #ddd;
				box-sizing: border-box;
				position: relative;
				.rem{
					width: 50px;
					background-color:#017472;
					color:white;
					text-align: center;
					height: 30px;
					line-height: 30px;
					position: absolute;
					top: 35px;
					right: 20px;
				}
				img{
					width: 90px;
					height: 90px;
					position: absolute;
					left: 35px;
					top: 0px;
				}
				.name{
					margin-left: 170px;
				}
				.shanghegou{
					width: 150px;
					border: none;
					padding-left: 50px;
					background: none;
					background: url(../../static/shopimg/bbc-bg7.png) no-repeat 30px 18px;
					background-size: 15px;
				}
				.write{
					padding-right: 5px;
				}
			}
			& >:first-child{
				line-height: 50px;
				height: 50px;
				display: flex;
				justify-content: space-between;
				
			}
		}
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