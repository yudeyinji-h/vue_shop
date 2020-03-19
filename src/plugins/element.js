import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 弹框提示组件需要挂载到Vue的原型对象上,$message为自定义属性
Vue.prototype.$message = Message

// 通过Vue.use将这些组件注册为全局可用的组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
