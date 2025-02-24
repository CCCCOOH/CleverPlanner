import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
    Button,
	Input,
	Row,
	Col,
	Calendar,
	Message,
	Avatar,
}from 'element-ui'

Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Calendar)
Vue.use(Avatar)