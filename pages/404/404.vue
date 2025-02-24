<template>
	<view>
		<view class="container">
			<text>出了点错误!</text>
		</view>
	</view>
</template>

<script>
	export default {
		// 错误重定向
		onLoad() {
			let timer = setTimeout(() => {
				// clearTimeout(timer)
				console.log('重定向...')
				uni.switchTab({
					url: '/pages/index/index'
				})
			}, 1000)
		},
	}
</script>

<style scoped>
	text {
		text-align: center;
		color: brown;
		font-size: 100rpx;
	}
</style>
