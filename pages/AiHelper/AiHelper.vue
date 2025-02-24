<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-container">
			<view class="top-ai">
				<view v-for="dialog in dialogs" class="one-diag" :key="dialog.id">
					<view class="question">
						<el-avatar class="avatar you-avatar">你</el-avatar>
						<text class="question-text">{{ dialog.question }}</text>
					</view>
					<view class="answer">
						<el-avatar class="avatar-ai avatar">AI</el-avatar>
						<text class="answer-text" >{{ dialog.answer }}</text>
					</view>
					<hr :id="dialog.id"/>
				</view>	
			</view>
		</scroll-view>
		<view class="bottom-ai">
			<el-input class="ask-input" v-model="input"></el-input>
			<el-button icon="el-icon-search" @click="askAi" circle :loading="isLoding"></el-button>
		</view>
	</view>
</template>

<script>
	import { nanoid } from 'nanoid'
	import axios from 'axios';
	export default {
		name: 'AiHelper',
		data() {
			return {
				input: '',
				dialogs: [ 
					// 列表中的测试数据
					// {
					// 	'id': 'abc',
					// 	'question': '我是测试用的问题,我是测试用的问题,我是测试用的问题,我是测试用的问题。',
					// 	'answer': '我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例。',
					// },
					//  {
					// 	'id': 'abcd',
					// 	'question': '我是测试用的问题,我是测试用的问题,我是测试用的问题,我是测试用的问题。',
					// 	'answer': '我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例。',
					// },
					// {
					// 	'id': 'abcde',
					// 	'question': '我是测试用的问题,我是测试用的问题,我是测试用的问题,我是测试用的问题。',
					// 	'answer': '我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例,我是调整css样式用的样例。',
					// },
				],
				conversation_id: '',
				Authorization: 'Bearer bce-v3/ALTAK-WSwgblcSw5EEnFhnZWcpn/10b34f269c0ad203f5bfce81359e36300b024478',
				isLoding: false,
			}
		},
		methods: {
			// 从AI口中获取答案
			askAi() {
				this.isLoding = true
				 let options = {
					'method': 'POST',
					'url': 'https://qianfan.baidubce.com/v2/app/conversation/runs',
					'headers': {
							'Content-Type': 'application/json',
							'X-Appbuilder-Authorization': this.Authorization
					},
					data: JSON.stringify({
							"app_id": "a56498e6-aa63-40db-9044-f48271ecfc80",
							"query": this.input,
							"conversation_id": this.conversation_id,
							"stream": false
					})
			
				};
				axios(options)
					.then(response => {
						let new_ans = response.data.answer				
						console.log('成功获得AI的回答: ', new_ans);
						let new_id = 'id' + nanoid()
						this.dialogs.push({'id': new_id, 'question': this.input, 'answer': new_ans})
						// console.log(this.dialogs)
						this.isLoding = false
						let navi = '#' + new_id
						// console.log(navi)
						let timer = setTimeout(() => {
							clearTimeout(timer)
							uni.pageScrollTo({
								selector: navi,
								duration: 300,
							})
						}, 500)
						
					})
					.catch(error => {
						this.isLoding = false
						throw new Error(error);
					})
			}
		},
		// 初始化对话id
		mounted() {
			this.isLoding = true
			let options = {
				'method': 'POST',
				'url': 'https://qianfan.baidubce.com/v2/app/conversation',
				'headers': {
						'Content-Type': 'application/json',
						'X-Appbuilder-Authorization': this.Authorization
				},
				data: JSON.stringify({
						"app_id": "a56498e6-aa63-40db-9044-f48271ecfc80"
				})
		
			};
		
			axios(options)
				.then(response => {
					this.isLoding = false
					console.log('成功获取对话id: ', response.data)
					this.conversation_id = response.data.conversation_id
				})
				.catch(error => {
					this.isLoding = false
					throw new Error(error);
				})
		}
	}
</script>

<style scoped>
	.scroll-container {
		overflow: auto;
	}
	.top-ai {
		width: 100%;
		margin-bottom: 120rpx;
	}
	.bottom-ai {
		display: flex;
		position: fixed;
		bottom: 80rpx;
		background-color: #F2F6FC;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 145rpx;
	}
	.one-diag {
	}
	.ask-input {
		width: 550rpx;
	}
	.question {
		
	}
	.you-avatar {
		float: right;
		margin-top: 30rpx;
		margin-right: 30rpx;
		margin-left: 10rpx;
	}
	.question-text {
		float: right;
		color: #2b2b2b;
		background-color: #67C23A;
		font-weight: bold;
		border-radius: 20rpx;
		margin: 30rpx;
		padding: 10rpx;
		max-width: 400rpx;
		font-size: 40rpx;
	}
	.answer {
		width: 500rpx;
		display: flex;
		color: #FFFFFF;
	}
	.avatar {
		min-width: 80rpx;
		min-height: 80rpx;
	}
	.avatar-ai {
		margin-left: 10rpx;
	}
	.answer-text {
		border-radius: 20rpx;
		margin-left: 30rpx;
		padding: 20rpx;
		font-size: 40rpx;
		background-color: #37383a;
	}
	hr {
		margin: 50rpx 0;
	}
</style>
