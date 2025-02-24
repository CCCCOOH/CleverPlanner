<template>
	<view>
		<view class="container">
			<view class="text-area">
				<text>{{ title }}</text>
			</view>
			<el-row class="apps-row">
				<el-col :span="6">
					<el-button @click="toTodoPage" class="app-icon" icon="el-icon-s-order" circle></el-button>
					<text class="icon-title">待办</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-release" circle></el-button>
					<text class="icon-title">任务管理</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-management" circle></el-button>
					<text class="icon-title">日记</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-menu" circle></el-button>
					<text class="icon-title">常用功能</text>
				</el-col>
			</el-row>
			
			<el-row class="apps-row">
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-opportunity" circle></el-button>
					<text class="icon-title">时间跟踪</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-marketing" circle></el-button>
					<text class="icon-title">习惯养成</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-promotion" circle></el-button>
					<text class="icon-title">学习规划</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-picture" circle></el-button>
					<text class="icon-title">旅行规划</text>
				</el-col>
			</el-row>
			<el-row class="apps-row">
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-comment" circle @click="toAiPage"></el-button>
					<text class="icon-title">智能助手</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-s-check" circle></el-button>
					<text class="icon-title">个性推荐</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-share" circle></el-button>
					<text class="icon-title">社交管理</text>
				</el-col>
				<el-col :span="6">
					<el-button class="app-icon" icon="el-icon-user-solid" circle></el-button>
					<text class="icon-title">个人中心</text>
				</el-col>
			</el-row>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '应用列表',
			}
		},
		methods: {
			toAiPage() {
				console.log('正在跳转到Ai助手...')
				uni.switchTab({
					url: '/pages/AiHelper/AiHelper'
				})
			},
			toTodoPage() {
				console.log('正在跳转到Todo页面...')
				uni.switchTab({
					url: '/pages/TodoApp/TodoApp'
				})
			}
		}
	}
</script>

<style scoped>
	.icon-title {
		color: #606266;
		display: inline-block;
		font-size: 30rpx;
		width: 120rpx;
		text-align: center;
	}
	.app-icon {
		width: 120rpx;
		height: 120rpx;
	}
	.apps-row {
		padding-left: 40rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		margin: 60rpx 30rpx;
		border-radius: 4px;
		background-color: #E4E7ED;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}

	.container {
		border-radius: 60rpx;
		background-color: #F2F6FC;
		padding-top: 100rpx;
		height: 1000rpx;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.text-area text {
		font-size: 50rpx;
		color: #409EFF;
		margin-left: 40rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
