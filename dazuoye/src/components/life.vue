<template>
	<div class="life-box">
		<ul>
			<li><div></div><router-link to="">全部子分类</router-link></li>
			<li><div></div><router-link to="">居家好物</router-link></li>
			<li><div></div><router-link to="">居家品质</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
	
	}
</script>
<style lang="less">
	.life-box{
		ul{
			background-color: white;
			padding: 0;
			margin: 0;
			li{
				background-color: #fcfcfc;
				margin-bottom: 5px;
				position: relative;
				padding-left: 25px;
				div{
					display: inline-block;
					width: 8px;
					height: 8px;
					border-radius: 5px;
					background-color: red;
					margin: 10px;
					position: absolute;
					top:4px;
					left:1px;
				}
				width: 100%;
				height: 33px;
				a{
					position: absolute;
					width: 100%;
					height: 33px;
					top: 0;
					left: 0;
					padding-left: 25px;
					line-height: 33px;
					text-decoration: none;
					color: #111;
					background-image: url(../../static/kindimg/bbc-bg44.png);
					background-repeat: no-repeat;
					background-position: 80% center; 
					background-size: 9px;
				}
			}
			& :nth-child(odd) div{
				background-color: #ac92ed;
			}
		}
	}
</style>