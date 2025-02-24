<template>
	<view>
		<view class="top-list">
			<el-row :span="6" type="flex" justify="space-around">
				<el-input class="todo-input" v-model="input" placeholder="在这里输入待办..."></el-input>
				<el-button class="todo-add" type="primary" @click="addTodo">添加</el-button>
			</el-row>
			<el-row>
				<scroll-view scroll-y="true" class="item-list">
					<Todo v-for="todo in todos" :key="todo.id" :title="todo.title" :todo="todo"></Todo>
				</scroll-view>
			</el-row>
		</view>
		<view class="footer-container">
			<TodoFooter></TodoFooter>	
		</view>
	</view>
</template>

<script>
	import { nanoid } from 'nanoid'
	export default {
		name: 'TodoApp',
		data() {
			return {
				input: '',
				todos: [ ],
			}
		},
		methods: {
			addTodo() {
				if (this.input === '') {
					return
				}
				let new_todo = {'id': nanoid(), 'title': this.input, 'done': false}
				this.todos.push(new_todo)
				this.$message({
				  message: '添加成功!',
				  type: 'success'
				});
				this.input = ''
			},
			delDone() {  
				
			},
			updateTodoDone(_todo) {
				this.todos.forEach(todo => {
					if (todo.id === _todo.id) {
						todo.done = !todo.done
					}
				})
			},
			clearDone() {
				this.todos = this.todos.filter(todo => {
					return todo.done === false
				})
			},
			checkAll() {
				// 代表全选
				let flag = true
				for (let i = 0; i < this.todos.length; i ++ ) {
					if (this.todos[i].done === false) {
						flag = false
					}
				}
				if (flag) {
					this.todos.forEach(todo => {
						todo.done = false
					})
				} else {
					this.todos.forEach(todo => {
						todo.done = true
					})
				}
				
			}
		},
		beforeMount() {
			this.$bus.$on('updateTodoDone', this.updateTodoDone)
			this.$bus.$on('clearDone', this.clearDone)
			this.$bus.$on('checkAll', this.checkAll)
		},
	}
</script>

<style scoped>
	ul {
		padding: 0;
	}
	.top-list {
		border-radius: 10rpx;
		padding: 30rpx;
		margin: 20rpx auto;
		width: 600rpx;
		background-color: #e5e9f2;
		min-height: 400rpx;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	.unadd-alert {
		margin-bottom: 10rpx;
	}
	.todo-input {
		margin-right: 40rpx;
	}
	.item-list {
		/* overflow: auto; */
		margin-top: 30rpx;
		max-height: 800rpx;
		display: flex;
		flex-direction: column;
	}
	.footer-container {
		display: flex;
		justify-content: center;
	}
</style>
