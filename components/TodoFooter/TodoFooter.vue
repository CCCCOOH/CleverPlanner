<template>
	<el-row class="footer">
		<el-button type="success" @click="clearDone">清除已完成</el-button>
		<el-button type="warning" @click="checkAll">全选/反选</el-button>
	</el-row>
</template>

<script>
	export default {
		name:"TodoFooter",
		methods: {
			clearDone() {
				this.$bus.$emit('clearDone')
			},
			checkAll() {
				this.$bus.$emit('checkAll')
			}
		}
	}
</script>

<style scoped>
	.footer {
		position: absolute;
		bottom: 50rpx;
		width: 90%;
		padding: 30rpx;
		display: flex;
		justify-content: space-around;
		background-color: #e5e9f2;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
</style>