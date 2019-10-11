<template>
	<div class="search-box">
		<div class="del-box"  v-show="delbox">
			<p></p>
			<div class="box">
				<div>确认清空历史记录？</div>
				<span @click="ok">确认</span>
				<span @click="no">取消</span>
			</div>
		</div>
		<header height="45px">
			<i @click="goto"></i>
			<div class="search">
				<span @click="show">
					<input type="button" v-model="z" class="btn">
					<span class="sanjiao" v-show="vshow"></span>
					<ul v-show="vshow">
						<li @click="baby" :class="{'c2':tt}">宝贝</li>
						<li @click="store" :class="{'c2':!tt}">店铺</li>
					</ul>
				</span>
				<input type="text" v-model="vmodel" placeholder="珐琅铸铁锅">
			</div>
			<span>
				<input type="button" value="搜索" @click="search(vmodel)">
			</span>
		</header>
		<section>
			<div>
				热门搜索
			</div>
			<dl v-show="JSON.stringify(zhi)!='{}'">
				<dt>历史搜索</dt>
				<dd v-for="item in zhi" @click="lishi(item)">{{item}}</dd>
				<p @click="del">
					清空历史记录
				</p>
			</dl>
		</section>
    </div>
</template>
<script>
	export default {
		data:function(){
			return{
				vshow:false,
				vmodel:"",
				z:"宝贝",
				tt:true,
				zhi:JSON.parse(localStorage.getItem("zhi")),
				delbox:false
			}
		},
		methods:{
			lishi(item){
				this.$router.push({
					name:"list",
					params:{
						vmodel:item
					}
				})
			},
			goto:function(){
				history.back()
			},
			show:function(){
				if(this.vshow==false){
					this.vshow=true
				}else{
					this.vshow=false
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
			},
			search(vmodel){
				if(!this.vmodel){
					vmodel="珐琅铸铁锅";
				}
				var d1 = new Date();
				for(var i in this.zhi){
					if(this.zhi[i]==vmodel){
						delete this.zhi[i]
					}
				}
				this.zhi["'"+d1.getTime()+"'"]=vmodel;
				localStorage.setItem("zhi",JSON.stringify(this.zhi));
				this.$router.push({
					name:"list",
					params:{
						vmodel
					}
				})
			},
			del(){
				this.delbox=true;
			},
			ok(){
				localStorage.setItem("zhi","{}")
				this.zhi=JSON.parse(localStorage.getItem("zhi"))
				this.delbox=false
			},
			no(){
				this.delbox=false
			}
		}
	}
</script>
<style lang="less" scoped>
	.search-box{
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
			background-color: #f2f2f2;
			width: 100%;
			height: 93vh;
			div{
				width: 100%;
				height: 53px;
				padding: 11px;
				background-color: white;
				box-sizing: border-box;
				font-size: 15px;
				color: #222;
			}
			dl{
				background-color: white;
				padding-bottom: 30px;
				box-sizing: border-box;
				dt{
					width: 100%;
					height: 48px;
					box-sizing: border-box;
					color: #222;
					padding: 15px 0 10px 10px;
					font-size: 15px;
				}
				dd{
					width: 100%;
					height: 45px;
					box-sizing: border-box;
					color: #666;
					padding: 0px 0 0px 10px;
					font-size: 15px;
					margin: 0;
					line-height: 45px;
				}
				p{
					width: 282px;
					height: 46px;
					margin: 49px auto 0;
					color: #666;
					font-size: 15px;
					line-height: 46px;
					text-align: center;
					border: 1px solid #bcbcbc;
					border-radius: 4px;
					background: url(../../static/search/delete.png) no-repeat 65px center;
					background-size: 20px;
				}
			}
		}
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
					input{
						background-color: white;
						border: none;
						outline: none;
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