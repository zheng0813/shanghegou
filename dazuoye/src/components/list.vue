<template>
	<div class="list-box">
		<header height="45px">
			<i><router-link to="index"></router-link></i>
			<div class="search">
				<i></i>
				<span v-show="rew">{{rew}}</span>
				<span v-show="!rew">请输入关键字</span>
			</div>
			<router-link to="kind"></router-link>
			<span @click="show">
				<div class="sanjiao" v-show="aa"></div>
				<ul v-show="aa">
					<li><router-link to="index">首页</router-link></li>
					<li><router-link to="bus">购物车</router-link></li>
					<li><router-link to="mine">我的商城</router-link></li>
					<li><router-link to="into">消息</router-link></li>
				</ul>
			</span>
			<div class="all-search"><router-link to="search"></router-link></div>
		</header>
		<nav id="nav">
			<p @click="pai" :class="{'color':!color}">{{str}}
				<i></i>
				<ul v-show="paishow" style="color:#000">
					<li @click="pai1(1,'综合排序')" :class="image==1?'image':''">综合排序</li>
					<li @click="pai1(2,'评价排序')" :class="image==2?'image':''">评价排序</li>
					<li @click="pai1(3,'价格从高到低')" :class="image==3?'image':''">价格从高到低</li>
					<li @click="pai1(4,'价格从低到高')" :class="image==4?'image':''">价格从低到高</li>
				</ul>
			</p>
			<span @click="xiaoliang" :class="{'color':color}">销量优先</span>
			<b @click="mbimage" :class="{'bimage':bimage}"></b>
			<div @click="chulai">筛选</div>
		</nav>
		<section>
			<ul :class="{'bujv':bimage}">
				<li v-for="item in dataArr" v-if="dataArr.length" @click="chuan(item)">
					<a>
						<span>
							<img :src="item.src">
						</span>
						<span>
							<h4>{{item.msg}}</h4>
							<p>{{item.price}}</p>
							<dl>
								<dd>{{item.sales}}</dd>
								<dd>{{item.ping}}</dd>
							</dl>
						</span>
					</a>
				</li>
				<dl class="kong" v-if="!dataArr.length">
					<dd>
						<i></i>
						<div>没有找到任何相关信息</div>
						<p>选择或搜索其它商品分类/名称...</p>
						<router-link to="search">重新选择</router-link>
					</dd>
				</dl>
			</ul>
			<div class="box-shadow" v-show="paishow"></div>
			<el-backtop :visibility-height="100" :right="10">
			     <img src="../../static/list/gotop_b.png" alt="">
			</el-backtop>
		</section>
		<div :class="{'yinying':chu}" @click="ru"></div>
		<aside>
			<div>
				<b>价格区间</b>
				<span>
					<input type="text" placeholder="最低价" v-model="low"> -- <input type="text" placeholder="最高价" v-model="high">
				</span>
			</div>
			<ul>
				<li><input type="button" value="重置" @click="chongzhi"></li>
				<li><input type="button" value="筛选" @click="shaixuan"></li>
			</ul>
		</aside>
	</div>
</template>
<script>
	import Vue from 'vue'
	var bus = new Vue();
	export default {
		data(){
			return{
				aa:false,
				paishow:false,
				color:false,
				bimage:false,
				image:1,
				chu:false,
				low:"",
				high:"",
				str:"综合排序",
				rew:this.$route.params.vmodel,
				data:[
					{
						src:"../../static/list/1564588192499244.jpg",
						msg:"珐琅铸铁锅",
						price:"￥899.00",
						sales:"销量 597",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564588164547025.jpg",
						msg:"艾沐浴足粉",
						price:"￥189.00",
						sales:"销量 586",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564588102544373.jpg",
						msg:"尚和丽清压片糖果(组)",
						price:"￥1266.00",
						sales:"销量 4981",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564588064892843.jpg",
						msg:"妍皙气垫粉凝霜自然色",
						price:"￥149.00",
						sales:"销量 320",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564587941139195.jpg",
						msg:"茶树精油旅行套组",
						price:"￥59.00",
						sales:"销量 3532",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564587877312301.jpg",
						msg:"便当盒",
						price:"￥85.00",
						sales:"销量 1928",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1568180092913556.jpg",
						msg:"道尔顿滤壳扳手",
						price:"￥32.00",
						sales:"销量 201",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1568180406608134.jpg",
						msg:"电源线",
						price:"￥35.00",
						sales:"销量 200",
						ping:"评论 0"
					}
				],
				dataArr:[]
			}
		},
		mounted(){
			if(!this.rew){
				this.dataArr = [...this.data];
			}else{
				for(var i=0;i<this.data.length;i++){
					if(this.data[i].msg==this.rew){
						this.dataArr.push(this.data[i])
					}
				}
			}
		},
		methods:{
			chongzhi(){
				this.low = "";
				this.high = "";
			},
			chuan(item){
				this.$router.push({
				        name:"shop",
				        params:{
				          item
				        }
				      })
			},
			chulai(){
				var aside = document.querySelector("aside")
				aside.style.left = "20%";
				this.chu = true;
			},
			ru(){
				var aside = document.querySelector("aside")
				aside.style.left = "100%";
				this.chu = false;
			},
			show:function(){
				if(this.aa==false){
					this.aa=true
				}else{
					this.aa=false
				}
			},
			search(vmodel){
				this.$router.push({
					name:"search",
					params:{
						vmodel
					}
				})
			},
			pai(){
				if(this.paishow==false){
					this.paishow=true
				}else{
					this.paishow=false
				}
				this.color=false
			},
			pai1(q,str){
				this.color=false
				if(q==1){
					this.str=str;
					this.dataArr=[...this.data]
				}else if(q==2){
					this.str=str
				}else if(q==3){
					var a="";
					this.str=str;
					for(var i=1;i<this.dataArr.length;i++){
						for(var j=0;j<this.dataArr.length-i;j++){
							if((parseInt(this.dataArr[j].price.slice(1)))<(parseInt(this.dataArr[j+1].price.slice(1)))){
								a=this.dataArr[j];
								this.dataArr[j]=this.dataArr[j+1];
								this.dataArr[j+1]=a
							}
						}
					}
				}else if(q==4){
					var a="";
					this.str=str;
					for(var i=1;i<this.dataArr.length;i++){
						for(var j=0;j<this.dataArr.length-i;j++){
							if((parseInt(this.dataArr[j].price.slice(1)))>(parseInt(this.dataArr[j+1].price.slice(1)))){
								a=this.dataArr[j];
								this.dataArr[j]=this.dataArr[j+1];
								this.dataArr[j+1]=a
							}
						}
					}
				}
				this.image=q;
			},
			xiaoliang(){
				this.color=true;
				this.paishow=false;
				this.image=1;
				this.str = "综合排序";
				var a="";
				for(var i=1;i<this.dataArr.length;i++){
					for(var j=0;j<this.dataArr.length-i;j++){
						if((parseInt(this.dataArr[j].sales.slice(3)))<(parseInt(this.dataArr[j+1].sales.slice(3)))){
							a=this.dataArr[j];
							this.dataArr[j]=this.dataArr[j+1];
							this.dataArr[j+1]=a
						}
					}
				}
				this.$forceUpdate();
			},
			mbimage(){
				this.bimage=!this.bimage;
				this.paishow=false
			},
			shaixuan(){
				if(this.low==""||this.high==""){
					this.dataArr=[...this.data]
				}else{
					var arr = this.data.filter((a,i)=>{
						let price = parseInt(a.price.slice(1))
						return price >= parseInt(this.low) && price <= parseInt(this.high)
					})
					this.dataArr = [...arr];
				};
				var aside = document.querySelector("aside")
				aside.style.left = "100%";
				this.chu=false;
				this.image=1;
				this.str = "综合排序";
				this.low = "";
				this.high = "";
				this.color = false
			}
		}
	}
</script>
<style lang="less" scoped>
.list-box{
	width: 100vw;
	height: 100vh;
	background-color: #f5f5f5;
}
	.yinying{
		width: 100%;
		height: 100vh;
		background-color: #0007;
		position: fixed;
		top:0;
		left: 0;
		z-index: 998;
	}
	aside{
		width: 80%;
		height: 100vh;
		position: fixed;
		top:0;
		left: 100%;
		background-color: #f5f5f5;
		z-index: 1000;
		transition: all 1s;
		div{
			width: 100%;
			height: 85px;
			padding: 0 11px;
			border-bottom: 1px solid #eee;
			background-color: white;
			box-sizing: border-box;
			b{
				display: block;
				line-height: 20px;
				font-weight: normal;
				width: 100%;
				height: 20px;
				padding-top: 11px;
				color: #888;
			}
			span{
				display: block;
				width: 100%;
				height: 42px;
				padding-bottom: 11px;
				margin-top: 8px;
				input{
					width: 30%;
					height: 33px;
					box-sizing: border-box;
					padding: 5px 11px;
					background-color: #f5f5f5;
					border: none;
					outline: none;
					border-radius: 4px;
					text-align: center;
				}
			}
		}
		ul{
			width: 100%;
			height: 132px;
			background-color: white;
			padding: 0;
			margin: 0;
			list-style-type: none;
			li{
				width: 100%;
				height: 66px;
				box-sizing: border-box;
				padding: 11px 0;
				text-align: center;
				input{
					width: 90%;
					height: 44px;
					border-radius: 4px;
					border: none;
					outline: none;
					background-color: #017472;
					margin: 5%;
					color: white;
					font-size: 14px;
				}
			}
		}
	}
.color{
	color: #017472;
}
.image{
	color: #017472;
	background: url(../../static/list/ok.png) no-repeat 90% center;
	background-size: 20px;
}
.bimage{
	background: url(../../static/list/browse_grid.png) no-repeat center;
	background-size: 20px;
}
.bujv{
	width: 99%;
	padding: 0;
	padding-top: 90px;
	margin: 0;
	background-color: white;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: #f2f2f2;
	li{
		width: 49%;
		display: flex;
		flex-wrap: wrap;
		height: 275px;
		padding: 0;
		border-bottom: 1px solid #eee;
		background-color: white;
		margin-top: 4px;
		a{
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			& :nth-child(1){
				width: 177px;
				height: 200px;
				padding: 0;
				img{
					padding: 0;
					width: 177px;
					height: 177px;
				}
			}
			& :nth-child(2){
				flex-grow: 1;
				padding: 8px 8px 0 8px;
				h4{
					width: 100%;
					height: 20px;
					margin: 0;
					padding: 0;
					font-size: 14px;
					font-weight: normal;
				}
				p{
					padding: 4px 0;
					margin: 0;
					width: 100%;
					height: 22px;
					font-size: 18px;
					color: #017472;
				}
				dl{
					width: 100%;
					height: 26px;
					padding: 0;
					padding: 0;
					margin: 0;
					display: flex;
					font-size: 12px;
					dd{
						width: 50%;
						height: 21px;
						padding: 0 0 5px;
						padding: 0;
						margin: 0;
					}
				}
			}
		}
	}
}
	section{
		width: 100%;
		background-color: #f2f2f2;
		position: relative;
		z-index: 0;
		.el-backtop{
			img{
				width: 40px;
			}
		}
		.box-shadow{
			width: 100%;
			height: 100%;
			background-color: #0002;
			position: absolute;
			top: 0;
			left: 0;
		}
		ul{
			width: 100%;
			padding: 0;
			padding-top: 90px;
			margin: 0;
			background-color: white;
			list-style-type: none;
			background-color: #f2f2f2;
			position: relative;
			.kong{
				width: 100%;
				padding: 0;
				margin: 0;
				height: 86vh;
				position: absolute;
				top: 90px;
				left: 0;
				background-color: #f6f6f6;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				dd{
					width: 220px;
					height: 180px;
					margin: 0;
					padding: 0;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					i{
						width: 100%;
						height: 72px;
						background: url(../../static/list/bbc-bg49.png) no-repeat center;
						background-size: 60px 60px;
					}
					div{
						width: 100%;
						font-size: 16px;
						height: 22px;
						text-align: center;
					}
					p{
						width: 100%;
						font-size: 12px;
						height: 22px;
						margin:0 0 6px 0;
						color: #999;
						text-align: center;
					}
					a{
						display: block;
						width: 77px;
						height: 25px;
						border-radius: 13px;
						background-color: white;
						text-align: center;
						text-decoration: none;
						line-height: 25px;
						color: #555;
					}
				}
			}
			li{
				width: 100%;
				display: flex;
				height: 117px;
				padding: 0;
				border-bottom: 1px solid #eee;
				background-color: white;
				a{
					display: block;
					width: 100%;
					height: 100%;
					display: flex;
					padding: 0;
					text-decoration: none;
					color: #333;
					& :nth-child(1){
						width: 105px;
						height: 105px;
						padding: 8px;
						img{
							padding: 0;
						}
					}
					& :nth-child(2){
						flex-grow: 1;
						padding: 8px 8px 0 8px;
						h4{
							width: 100%;
							height: 33px;
							margin: 0 0 20px 0;
							padding: 0;
							font-size: 14px;
							font-weight: normal;
						}
						p{
							padding:4px 0;
							margin: 0;
							width: 100%;
							height: 28px;
							font-size: 18px;
							color: #017472;
						}
						dl{
							width: 100%;
							height: 26px;
							padding: 0 0 5px;
							padding: 0;
							margin: 0;
							display: flex;
							font-size: 12px;
							color: #999;
							dd{
								width: 50%;
								height: 21px;
								padding: 0 0 5px;
								padding: 0;
								margin: 0;
							}
						}
					}
				}
				
			}
		}
	}
	nav{
		width: 100%;
		height: 45px;
		padding: 0;
		position: fixed;
		z-index: 1;
		top:45px;
		font-size: 13px;
		opacity: 1;
		background-color: #fffd;
		border-bottom: 1px solid #888;
		p{
			width: 30%;
			height: 43px;
			text-align: center;
			line-height: 43px;
			padding: 0;
			margin: 0;
			position: absolute;
			top: 0;
			left: 0;
			i{
				width: 0;
				height: 0;
				border: 5px solid transparent;
				border-top: 5px solid #017472;
				position: absolute;
				top: 20px;
			}
			ul{
				list-style-type: none;
				padding: 0;
				margin: 0;
				width: 100vw;
				background-color: white;
				li{
					width: 98%;
					height: 43px;
					border-bottom: 1px solid #ddd;
					background-color: white;
					margin-left: 2%;
					text-align: left;
				}
			}
		}
		span{
			display: inline-block;
			width: 25%;
			height: 43px;
			text-align: center;
			line-height: 43px;
			position: absolute;
			top: 0;
			left: 30%;
		}
		b{
			width: 25%;
			height: 43px;
			position: absolute;
			top: 0;
			left: 55%;
			background: url(../../static/list/browse_list.png) no-repeat center;
			background-size: 20px;
			border-right: 1px solid #888;
		}
		div{
			width: 20%;
			height: 43px;
			text-align: center;
			line-height: 43px;
			position: absolute;
			top: 0;
			left: 80%;
			background: url(../../static/list/sel.png) no-repeat 51px 17px;
			background-size: 13px;
		}
	}
	header{
		width: 100%;
		height: 45px;
		padding: 0;
		position: fixed;
		z-index: 2;
		top:0;
		border-bottom: 1px solid #bbb;
		font-size: 13px;
		background-color: white;
		&>a{
			display: inline-block;
			width: 43px;
			height: 43px;
			position: absolute;
			top: 0;
			right: 40px;
			background-image: url(../../static/list/categroy.png);
			background-repeat: no-repeat;
			background-position: center;
			background-size: 20px;
			z-index: 13;
		}
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
		    a{
		    	display: block;
		    	width: 100%;
		    	height: 100%;
		    }
		}
		.search{
			display: inline-block;
			width: 60%;
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
</style>