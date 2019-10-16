<template>
	<div class="storeNew-box">
		<ul class="bujv">
			<li v-for="item in data" v-if="data.length">
				<a v-if="!item.date" @click="chuan(item)">
					<span>
						<img :src="item.src">
					</span>
					<span>
						<h4>{{item.msg}}</h4>
						<p>{{item.price}}</p>
					</span>
				</a>
				<div v-if="item.date">{{item.date}}</div>
			</li>
			<li class="last"></li>
			</dl>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				data:[
					{
						date: "2019-09-19"
					},
					{
						src:"../../static/list/1564588192499244.jpg",
						msg:"珐琅铸铁锅",
						price:"￥899.00",
						sales:"销量 597",
						ping:"评论 0"
					},
					{
						date: "2019-09-17"
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
				]
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
			}
		}
	}
</script>
<style lang="less" scoped>
	.bujv{
		width: 99%;
		padding: 0;
		margin: 0;
		background-color: white;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #f2f2f2;
		.last{
				width: 100%;
				height: 44px;
				border:none;
			}
		li{
			display: flex;
			flex-wrap: wrap;
			padding: 0;
			border-bottom: 1px solid #eee;
			margin-top: 4px;
			div{
				width: 100vw;
			}
			a{
				width: 177px;
				height: 274px;
				display: flex;
				flex-wrap: wrap;
				background-color: white;
				& :nth-child(1){
					width: 177px;
					height: 200px;
					padding: 0;
					img{
						display: block;
						margin: auto;
						padding: 0;
						width: 170px;
						height: 170px;
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
				}
			}
		}
	}
</style>