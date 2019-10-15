<template>
	<div class="storeActive-box">
		<dl class="kong">
			<dd>
				<i></i>
				<div>没有找到任何相关信息</div>
				<p>选择或搜索其它商品分类/名称...</p>
			</dd>
		</dl>
	</div>
</template>
<script>
	export default {
	
	}
</script>
<style lang="less" scoped>
	.kong{
		width: 100%;
		padding: 0;
		margin: 0;
		height: 65vh;
		position: absolute;
		top: 175px;
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
		}
	}
</style>