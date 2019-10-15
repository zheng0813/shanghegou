<template>
	<div class="storeIndex-box">
		<dl>
			<dt>商店排行榜</dt>
			<dd>
				<ul>
					<li><span @click="yang(1)" :class="color==1?'color':''">收藏排行</span></li>
					<li><span @click="yang(2)" :class="color==2?'color':''">销量排行</span></li>
				</ul>
				<div>
					<dl v-for="item in data" @click="chuan(item)">
						<dt>
							<img :src="item.src" alt="">
						</dt>
						<dd>{{item.sales}}</dd>
						<dd>{{item.price}}</dd>
					</dl>
				</div>
			</dd>
		</dl>
		<nav class="box1">
			<p>店主推荐</p>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				data:[{
					src:"../../static/list/1564588192499244.jpg",
					msg:"珐琅铸铁锅",
					price:"￥899.00",
					sales:"收藏 597",
					ping:"评论 0"
				},
				{
					src:"../../static/list/1564588164547025.jpg",
					msg:"艾沐浴足粉",
					sales:"收藏 586",
					ping:"评论 0"
				},
				{
					src:"../../static/list/1564588102544373.jpg",
					msg:"尚和丽清压片糖果(组)",
					sales:"收藏 4981",
					ping:"评论 0"
				}],
				color: 1,
			}
		},
		methods:{
			chuan(item){
				this.$router.push({
				        name:"shop",
				        params:{
				          item
				        }
				      })
			},
			yang(i){
				this.color=i;
				if(i==1){
					this.data = [{
						src:"../../static/list/1564588192499244.jpg",
						msg:"珐琅铸铁锅",
						price:"￥899.00",
						sales:"收藏 597",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564588164547025.jpg",
						msg:"艾沐浴足粉",
						sales:"收藏 586",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564588102544373.jpg",
						msg:"尚和丽清压片糖果(组)",
						sales:"收藏 4981",
						ping:"评论 0"
					}]
				}else{
					this.data = [{
						src:"../../static/list/1564587941139195.jpg",
						msg:"茶树精油旅行套组",
						price:"￥59.00",
						sales:"已售 3532",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1564587877312301.jpg",
						msg:"便当盒",
						sales:"已售 1928",
						ping:"评论 0"
					},
					{
						src:"../../static/list/1568180092913556.jpg",
						msg:"道尔顿滤壳扳手",
						sales:"已售 201",
						ping:"评论 0"
					}]
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.storeIndex-box{
		width: 100%;
		height: 378px;
		margin-top: 11px;
		.box1{
			height: 44px;
		}
		&>dl,&>nav{
			width: 100%;
			height: 320px;
			background-color: white;
			font-size: 16px;
			&>dt,&>p{
				width: 100%;
				height: 44px;
				box-sizing: border-box;
				padding: 11px 33px;
				background: url(../../static/storeimg/icon-store-tit.png) no-repeat 11px center;
				background-size: 15px;
			}
			&>p{
				background: url(../../static/storeimg/tit-intro.png) no-repeat 11px center;
				background-size: 15px;
			}
			&>dd{
				width: 100%;
				box-sizing: border-box;
				padding: 0 5px;
				margin: 0;
				height: 43px;
				div{
					width: 100%;
					height: 220px;
					margin: 11px 0px;
					dl{
						width: 106px;
						height: 106px;
						padding: 0;
						margin: 0 0 8px 8px;
						float: left;
						position: relative;
						dt{
							width: 106px;
							height: 106px;
							img{
								width: 106px;
								height: 106px;
							}
						}
						dd{
							width: 100%;
							height: 31PX;
							position: absolute;
							bottom: 0;
							margin: 0;
							background-color: #7a7a7a;
							color: white;
							font-size: 12px;
							display: flex;
							justify-content: left;
							align-items: center;
						}
						& :nth-child(3){
							background-color: transparent;
						}
					}
					& dl:first-child{
						width: 220px;
						height: 220px;
						padding: 0;
						margin: 0;
						float: left;
						position: relative;
						dt{
							width: 220px;
							height: 220px;
							img{
								width: 220px;
								height: 220px;
							}
						}
						dd{
							width: 50%;
							height: 31PX;
							position: absolute;
							bottom: 0;
							margin: 0;
							background-color: #7a7a7a;
							color: white;
							font-size: 12px;
							display: flex;
							justify-content: center;
							align-items: left;
						}
						& :nth-child(3){
							right: 0;
						}
					}
				}
				ul{
					width: 100%;
					height: 43px;
					padding: 0;
					margin: 0;
					list-style-type: none;
					display: flex;
					li{
						display: inline-block;
						width: 50%;
						height: 43px;
						display: flex;
						justify-content: center;
						align-items: center;
						border-bottom: 1px solid #eee;
						span{
							height: 43px;
							box-sizing: border-box;
							display: flex;
							justify-content: center;
							align-items: center;
							border-bottom: 2px solid transparent;
						}
						.color{
							border-bottom: 2px solid #017472;
							color: #017472;
						}
					}
				}
			}
		}
	}
</style>