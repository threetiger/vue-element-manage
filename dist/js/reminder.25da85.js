(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{723:function(t,n,e){"use strict";e.r(n);var i=e(231),o={data:function(){return{}},methods:{global:function(){this.$reminder("这是一段普通消息！")},part:function(){Object(i.a)({type:"success",message:"这是一段成功消息！这是一段成功消息！这是一段成功消息！这是一段成功消息！这是一段成功消息！这是一段成功消息！这是一段成功消息！这是一段成功消息！",duration:5e3,onClose:function(t){console.log(t),console.log("关闭之后的回调")}})},alias:function(){this.$reminder.error("这是一段错误消息！")},manualClose:function(){var t=this.$reminder.loading({type:"loading",message:"请求中...",duration:0});setTimeout(t.close,5e3)}}},s=e(64),a=Object(s.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("input",{attrs:{type:"button",value:"使用全局方法调用"},on:{click:this.global}}),this._v(" "),n("input",{attrs:{type:"button",value:"在当前组件内调用"},on:{click:this.part}}),this._v(" "),n("input",{attrs:{type:"button",value:"别名调用"},on:{click:this.alias}}),this._v(" "),n("input",{attrs:{type:"button",value:"不自动关闭，可在异步操作完成之后手动关闭"},on:{click:this.manualClose}})])},[],!1,null,null,null);n.default=a.exports}}]);