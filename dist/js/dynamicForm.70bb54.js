(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{568:function(e,t,l){},569:function(e,t,l){},637:function(e,t,l){"use strict";var a=l(568);l.n(a).a},638:function(e,t,l){"use strict";var a=l(569);l.n(a).a},711:function(e,t,l){"use strict";l.r(t);var a=l(233),o=l.n(a),i=l(80),n={data:function(){return{formTemplate:{label1:"起止时间",value1:[],label2:"所在单位",value2:"",label3:"主要工作",value3:"",label4:"职务职称",value4:""},form:{workItem:[]},submitLoading:!1}},created:function(){this.initFormItem(3)},methods:{initFormItem:function(e){for(var t=e;t--;)this.addBlock()},addBlock:function(){var e=o()({},this.formTemplate);e.id=Object(i.b)(),this.form.workItem.push(e)},removeBlock:function(e){this.form.workItem.splice(e,1)},submit:function(){this.$message.success("提交成功！")}}},s=(l(637),l(638),l(64)),r=Object(s.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dynamic-form"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-position":"top"}},[l("transition-group",{attrs:{name:"block",tag:"div"}},e._l(e.form.workItem,function(t,a){return l("div",{key:t.id,staticClass:"block-item"},[l("div",{staticClass:"block-item__index",domProps:{textContent:e._s(a+1)}}),e._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.label1}},[l("el-date-picker",{attrs:{type:"daterange",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","unlink-panels":""},model:{value:t.value1,callback:function(l){e.$set(t,"value1",l)},expression:"item.value1"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:t.label2}},[l("el-input",{model:{value:t.value2,callback:function(l){e.$set(t,"value2",l)},expression:"item.value2"}})],1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:t.label3}},[l("el-input",{model:{value:t.value3,callback:function(l){e.$set(t,"value3",l)},expression:"item.value3"}})],1),e._v(" "),l("el-form-item",{attrs:{label:t.label4}},[l("el-input",{model:{value:t.value4,callback:function(l){e.$set(t,"value4",l)},expression:"item.value4"}})],1),e._v(" "),l("div",{staticClass:"block-item--remove",on:{click:function(t){return e.removeBlock(a)}}},[l("span",{staticClass:"block-item--remove__inner"})])],1)}),0)],1),e._v(" "),l("div",{staticClass:"block-item--add",on:{click:e.addBlock}},[e._v("点击新增履历")]),e._v(" "),l("div",{staticStyle:{"text-align":"center"}},[l("el-button",{attrs:{type:"success",round:"",loading:e.submitLoading},on:{click:e.submit}},[e._v("提交")])],1)],1)},[],!1,null,"0ef71ca5",null);t.default=r.exports}}]);