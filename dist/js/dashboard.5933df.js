(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{553:function(t,a,e){},554:function(t,a,e){},555:function(t,a,e){},556:function(t,a,e){},557:function(t,a,e){},558:function(t,a,e){},559:function(t,a,e){},560:function(t,a,e){},561:function(t,a,e){},621:function(t,a,e){"use strict";var n=e(553);e.n(n).a},622:function(t,a,e){"use strict";var n=e(554);e.n(n).a},623:function(t,a,e){"use strict";var n=e(555);e.n(n).a},624:function(t,a,e){"use strict";var n=e(556);e.n(n).a},625:function(t,a,e){"use strict";var n=e(557);e.n(n).a},626:function(t,a,e){"use strict";var n=e(558);e.n(n).a},627:function(t,a,e){"use strict";var n=e(559);e.n(n).a},628:function(t,a,e){"use strict";var n=e(560);e.n(n).a},629:function(t,a,e){t.exports=e.p+"img/login-bg-f009f9.jpg"},630:function(t,a,e){"use strict";var n=e(561);e.n(n).a},697:function(t,a,e){"use strict";e.r(a);var n=e(552),r=e.n(n),s=e(543),i=e(79),o={data:function(){return{grids:[{gridBackground:"grid--red",icon:"icon-visite",name:"访问量",value:""},{gridBackground:"grid--blue",icon:"icon-user",name:"用户数量",value:""},{gridBackground:"grid--green",icon:"icon-goods",name:"商品数量",value:""},{gridBackground:"grid--yellow",icon:"icon-comment",name:"评论数量",value:""}]}},created:function(){this.getGridData()},methods:{getGridData:function(){var t=this;i.a.dashboard.getGridData().then(function(a){a.data;t.grids.forEach(function(t,e){t.value=r()(a.data)[e]})})},handleChart:function(t){s.a.$emit("changeData",t)}}},c=(e(621),e(622),e(64)),l=Object(c.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"grid-wrap"},[e("el-row",{attrs:{gutter:30}},t._l(t.grids,function(a){return e("el-col",{key:a.name,attrs:{lg:6,sm:12}},[e("div",{staticClass:"grid",class:a.gridBackground,on:{click:function(e){return t.handleChart(a.name)}}},[e("i",{staticClass:"iconfont grid-icon",class:a.icon}),t._v(" "),e("div",{staticClass:"grid-right"},[e("p",{staticClass:"grid-name",domProps:{textContent:t._s(a.name)}}),t._v(" "),e("p",{staticClass:"grid-value",domProps:{textContent:t._s(a.value)}})])])])}),1)],1)},[],!1,null,"1c5634a3",null).exports,d=e(541),u=e.n(d),h={data:function(){return{weekChart:null,monthChart:null,chartName:"访问量",weekData:null,monthData:null}},created:function(){var t=this;this.getLineChartData(),s.a.$on("changeData",function(a){var e={"访问量":"visiteData","用户数量":"userData","商品数量":"goodsData","评论数量":"commentData"};t.chartName=a,t.weekChart.changeData(t.weekData[e[a]]),t.monthChart.changeData(t.monthData[e[a]])}),s.a.$on("collapse",function(){setTimeout(function(){t.weekChart.destroy(),t.monthChart.destroy(),t.createChart("weekLineChart",t.weekData.visiteData,"weekChart"),t.createChart("monthLineChart",t.monthData.visiteData,"monthChart")},350)})},mounted:function(){},methods:{getLineChartData:function(){var t=this;this.$axios.all([i.a.dashboard.getLineChartData({type:"week"}),i.a.dashboard.getLineChartData({type:"month"})]).then(this.$axios.spread(function(a,e){t.weekData=a.data,t.monthData=e.data,t.setDate(),t.createChart("weekLineChart",t.weekData.visiteData,"weekChart"),t.createChart("monthLineChart",t.monthData.visiteData,"monthChart")}))},setDate:function(){var t=Date.now();r()(this.weekData).forEach(function(a){a.forEach(function(a,e){var n=new Date(t-864e5*(6-e));a.date=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()})}),r()(this.monthData).forEach(function(a){a.forEach(function(a,e){var n=new Date(t-864e5*(30-e));a.date=n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()})})},createChart:function(t,a,e){var n=new u.a.Chart({container:t,forceFit:!0,height:300,padding:[30,60,50,50],background:{fill:"#fff"}});n.source(a),n.scale({value:{alias:"数量",min:0}}),n.line().position("date*value"),n.point().position("date*value").size(4).shape("circle").style({stroke:"#fff",lineWidth:1}),n.render(),this[e]=n}}},f=(e(623),Object(c.a)(h,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{attrs:{gutter:30}},[e("el-col",{attrs:{lg:12,sm:24}},[e("p",{staticClass:"chart-title"},[t._v("周"+t._s(t.chartName)+"增长趋势图")]),t._v(" "),e("div",{attrs:{id:"weekLineChart"}})]),t._v(" "),e("el-col",{attrs:{lg:12,sm:24}},[e("p",{staticClass:"chart-title"},[t._v("月"+t._s(t.chartName)+"增长趋势图")]),t._v(" "),e("div",{attrs:{id:"monthLineChart"}})])],1)},[],!1,null,"549283f5",null).exports),p={data:function(){return{taskData:[]}},created:function(){this.getTaskData()},methods:{getTaskData:function(){var t=this;i.a.dashboard.getTodoListData().then(function(a){t.taskData=a.data.todoListData})},addTask:function(){var t=this;this.$prompt("添加新的待办事项:","",{inputPlaceholder:"请输入待办事项",inputValidator:function(t){if(!t)return"内容不能为空！"}}).then(function(a){t.taskData.unshift({isCompleted:!1,content:a.value})})},editTask:function(t){var a=this;this.$prompt("修改待办事项","",{inputPlaceholder:"请输入待办事项",inputValidator:function(t){if(!t)return"内容不能为空！"}}).then(function(e){a.taskData[t].content=e.value})},deleteTask:function(t){this.taskData.splice(t,1)}}},v=(e(624),e(625),Object(c.a)(p,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"task-card"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"task-card__header"},[t._v("待办事项")]),t._v(" "),e("el-button",{staticClass:"button--add",attrs:{type:"text"},on:{click:t.addTask}},[t._v("添加")])],1),t._v(" "),e("el-table",{attrs:{data:t.taskData,height:"400"}},[e("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-checkbox",{model:{value:a.row.isCompleted,callback:function(e){t.$set(a.row,"isCompleted",e)},expression:"scope.row.isCompleted"}})]}}])}),t._v(" "),e("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{class:{del:a.row.isCompleted},domProps:{textContent:t._s(a.row.content)}})]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(e){return t.editTask(a.$index,a.row)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(e){return t.deleteTask(a.$index)}}},[t._v("删除")])]}}])})],1)],1)},[],!1,null,"60c088c2",null).exports),g={data:function(){return{}}},m=(e(626),Object(c.a)(g,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"progress-card"},[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"progress-card__header"},[t._v("项目进度")])]),t._v(" "),e("div",{staticClass:"progress-item"},[e("p",[t._v("进度一")]),t._v(" "),e("el-progress",{attrs:{percentage:10,color:"#409eff"}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("p",[t._v("进度二")]),t._v(" "),e("el-progress",{attrs:{percentage:70}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("p",[t._v("进度三")]),t._v(" "),e("el-progress",{attrs:{percentage:80,color:"#8e71c7"}})],1),t._v(" "),e("div",{staticClass:"progress-item"},[e("p",[t._v("进度四")]),t._v(" "),e("el-progress",{attrs:{percentage:100,status:"success"}})],1)])},[],!1,null,"3f244220",null).exports),_={data:function(){return{newGoodsData:[{name:"商品一",address:"产地一产地一产地一产地一产地一",price:"500"},{name:"商品二",address:"产地一",price:"50000"},{name:"商品三",address:"产地一",price:"500"},{name:"商品四",address:"产地一",price:"500"},{name:"商品五",address:"产地一",price:"500"},{name:"商品六",address:"产地一",price:"500"}]}}},C=(e(627),e(628),{name:"Dashboard",components:{GridGroup:l,LineChart:f,TodoList:v,ProgressBar:m,NewGoods:Object(c.a)(_,function(){var t=this.$createElement,a=this._self._c||t;return a("el-card",{staticClass:"goods-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"goods-card__header"},[this._v("今日新上架商品")])]),this._v(" "),a("el-table",{attrs:{data:this.newGoodsData,height:"400"}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),this._v(" "),a("el-table-column",{attrs:{prop:"address",label:"产地",width:"160"}}),this._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格(元)",width:"100"}})],1)],1)},[],!1,null,"f4bdb4aa",null).exports},data:function(){return{img:e(629)}}}),D=(e(630),Object(c.a)(C,function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("grid-group"),this._v(" "),a("line-chart"),this._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("todo-list")],1),this._v(" "),a("el-col",{attrs:{span:8}},[a("progress-bar")],1),this._v(" "),a("el-col",{attrs:{span:8}},[a("new-goods")],1)],1)],1)},[],!1,null,"a607a748",null));a.default=D.exports}}]);