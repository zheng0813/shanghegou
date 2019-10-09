<template>
	<div class="search-box">
		<header height="45px">
			<i @click="goto"></i>
			<div class="search">
				<span @click="show">
					<input type="button" v-model="z" class="btn">
					<span class="sanjiao" v-show="aa"></span>
					<ul v-show="aa">
						<li @click="baby" :class="{'c2':tt}">宝贝</li>
						<li @click="store" :class="{'c2':!tt}">店铺</li>
					</ul>
				</span>
				<input type="text" v-model="bb" placeholder="珐琅铸铁锅">
			</div>
			<span>
				<router-link to="">搜索</router-link>
			</span>
		</header>
    </div>
</template>
<script>
	export default {
		data:function(){
			return{
				aa:false,
				bb:"",
				z:"宝贝",
				tt:true
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
			baby(){
				if(this.tt==false){
					this.tt=true
				}else{
					this.tt=true
				}
				this.z="宝贝"
			},
			store(){
				if(this.tt==true){
					this.tt=false
				}else if(this.tt==false){
					this.tt=false
				}
				this.z="店铺"
			}
		}
	}
</script>
<style lang="less" scoped>
		header{
				width: 100%;
				height: 45px;
				padding: 0;
				position: relative;
				border-bottom: 1px solid #ddd;
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
					width: 74%;
					height: 33px;
					border: 1px solid #dedede;
					border-radius: 17px;
					padding: 0 65px;
					box-sizing: border-box;
					line-height: 33px;
					position: absolute;
					top: 6px;
					left: 13%;
					background-color: #f6f6f6;
					span{
						width: 42px;
						height: 33px;
						display: inline-block;
						position: absolute;
						top: 0px;
						left: 20px;
						.btn{
							width: 42px;
							height: 33px;
							padding: 0;
							position: absolute;
							text-align: left;
							background-image: url(../../static/search/arrow-bottom2.png);
							background-repeat: no-repeat;
							background-size: 6px;
							background-position: 30px center;
						}
						.sanjiao{
							width: 0;
							height: 0;
							display: inline-block;
							border-bottom: 9px solid #4e4e4e;
							border-left: 3px solid transparent;
							border-right: 3px solid transparent;
							position: absolute;
							top: 22px;
							left: 10px;
						}
						ul{
							width: 71px;
							height: 74px;
							position: absolute;
							top: 30px;
							left: -15px;
							padding: 0;
							margin: 0;
							list-style-type: none;
							li{
								width: 71px;
								height: 37px;
								color: white;
								text-align: right;
								padding: 0 10px;
								box-sizing: border-box;
								line-height: 37px;
								background: #333 url(../../static/search/icon-goods.png) no-repeat 10px center;
								background-size: 13px;
							}
							& :nth-child(2){
								background: #333 url(../../static/search/icon-store.png) no-repeat 10px center;
								background-size: 13px;
							}
							.c2{
								background-color: #4e4e4e;
							}
						}
					}
					input{
						border: none;
						outline: none;
						background-color: #f6f6f6;
					}
				}
				&>span{
					display: inline-block;
					width: 43px;
					height: 43px;
					position: absolute;
					top: 0;
					right: 0;
					z-index: 11;
					a{
						width: 100%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						text-decoration: none;
						color: #666;
					}
				}
			}
</style>