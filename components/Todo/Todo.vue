<template>
	<view class="todo-item">
		<!-- todo左边 -->
		<view class="todo-left">
			<checkbox type="checkbox" class="todo-check" :checked="todo.done" @click="updateTodoDone(todo)"/>
			<view class="todo-title">
					{{ title }}
			</view>
		</view>
		<!-- todo右边 -->
		<view class="todo-right">
		</view>	
	</view>
</template>

<script>
	export default {
		name:"Todo",
		props: ['title', 'todo'],
		methods: {
			updateTodoDone(todo) {
				this.$bus.$emit('updateTodoDone', todo)
			},
		},
	}
</script>

<style scoped>
	.todo-item {
		display: flex;
		font-weight: bold;
		justify-content: space-between;
		background-color: #EBEEF5;
		width: 570rpx;
		margin: auto;
		padding: 10rpx;
		border-radius: 3rpx;
		margin: 20rpx auto;
		overflow: auto;
		align-items: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}
	.todo-left {
		display: flex;
	}
	.todo-title {
		font-size: 45rpx;
		color: #44565e;
	}
	.todo-check {
		float: left;
	}
	.todo-right {
	}
</style>