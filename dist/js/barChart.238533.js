(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{576:function(t,e,a){},649:function(t,e,a){"use strict";var i=a(576);a.n(i).a},700:function(t,e,a){"use strict";a.r(e);var i=a(541),l=a.n(i),c=a(542),r={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{type:"汽车",value:34},{type:"建材家居",value:85},{type:"住宿旅游",value:103},{type:"交通运输与仓储邮政",value:142},{type:"教育",value:367},{type:"建筑房地产",value:251},{type:"IT 通讯电子",value:491},{type:"社会公共管理",value:672},{type:"医疗卫生",value:868},{type:"金融保险",value:1232}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new l.a.Chart({container:t,forceFit:!0,height:this.height,padding:[50,50,50,130],background:{fill:"#fff"}}),i=(new c.DataSet).createView().source(e);i.transform({type:"sort",callback:function(t,e){return t.value-e.value}}),a.source(i,{value:{alias:"销量（百万）"}}),a.axis("type",{tickLine:{length:0},line:{lineWidth:0}}),a.coord().transpose(),a.interval().position("type*value").size(20).label("value",{textStyle:{fill:"#8d8d8d"},offset:10}),a.render()}}},u=a(64),y=Object(u.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})},[],!1,null,null,null).exports,n={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{city:"石家庄",type:"水果",value:14500},{city:"石家庄",type:"米面",value:8500},{city:"石家庄",type:"特产零食",value:1e4},{city:"石家庄",type:"茶叶",value:7e3},{city:"深圳",type:"水果",value:9e3},{city:"深圳",type:"米面",value:8500},{city:"深圳",type:"特产零食",value:11e3},{city:"深圳",type:"茶叶",value:6e3},{city:"温州",type:"水果",value:16e3},{city:"温州",type:"米面",value:5e3},{city:"温州",type:"特产零食",value:6e3},{city:"温州",type:"茶叶",value:1e4},{city:"宁波",type:"水果",value:14e3},{city:"宁波",type:"米面",value:9e3},{city:"宁波",type:"特产零食",value:1e4},{city:"宁波",type:"茶叶",value:9e3},{city:"无锡",type:"水果",value:14e3},{city:"无锡",type:"米面",value:9e3},{city:"无锡",type:"特产零食",value:1e4},{city:"无锡",type:"茶叶",value:6e3},{city:"杭州",type:"水果",value:9e3},{city:"杭州",type:"米面",value:8500},{city:"杭州",type:"特产零食",value:1e4},{city:"杭州",type:"茶叶",value:6e3},{city:"北京",type:"水果",value:17e3},{city:"北京",type:"米面",value:6e3},{city:"北京",type:"特产零食",value:7e3},{city:"北京",type:"茶叶",value:1e4},{city:"上海",type:"水果",value:18e3},{city:"上海",type:"米面",value:11e3},{city:"上海",type:"特产零食",value:15e3},{city:"上海",type:"茶叶",value:14e3}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new l.a.Chart({container:t,forceFit:!0,height:this.height,padding:[20,100,50,80],background:{fill:"#fff"}});a.source(e,{value:{alias:"销售额（万）"}}),a.axis("city",{label:{textStyle:{fill:"#aaa",fontSize:12}},tickLine:{length:0}}),a.axis("value",{label:{textStyle:{fill:"#aaa",fontSize:12}},title:{offset:30,textStyle:{fontSize:14,fontWeight:300}}}),a.legend({position:"right-bottom"}),a.coord().transpose(),a.interval().position("city*value").color("type").adjust([{type:"dodge",marginRatio:.3}]),a.render()}}},o=Object(u.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})},[],!1,null,null,null).exports,p={props:{height:{type:Number,default:360}},data:function(){return{chartId:"chart"+ +new Date+(1e3*Math.random()).toFixed(0),chartData:[{city:"中国（北京）",type:"首都人口",value:.01},{city:"中国（北京）",type:"城市人口",value:.53},{city:"中国（北京）",type:"农村人口",value:.46},{city:"美国（华盛顿）",type:"首都人口",value:.01},{city:"美国（华盛顿）",type:"城市人口",value:.8},{city:"美国（华盛顿）",type:"农村人口",value:.19},{city:"印度（德里）",type:"首都人口",value:.02},{city:"印度（德里）",type:"城市人口",value:.3},{city:"印度（德里）",type:"农村人口",value:.68},{city:"俄罗斯（莫斯科）",type:"首都人口",value:.08},{city:"俄罗斯（莫斯科）",type:"城市人口",value:.66},{city:"俄罗斯（莫斯科）",type:"农村人口",value:.26},{city:"法国（巴黎）",type:"首都人口",value:.16},{city:"法国（巴黎）",type:"城市人口",value:.63},{city:"法国（巴黎）",type:"农村人口",value:.21},{city:"韩国（首尔）",type:"首都人口",value:.19},{city:"韩国（首尔）",type:"城市人口",value:.63},{city:"韩国（首尔）",type:"农村人口",value:.18},{city:"丹麦（哥本哈根）",type:"首都人口",value:.22},{city:"丹麦（哥本哈根）",type:"城市人口",value:.65},{city:"丹麦（哥本哈根）",type:"农村人口",value:.13},{city:"冰岛（雷克雅未克）",type:"首都人口",value:.56},{city:"冰岛（雷克雅未克）",type:"城市人口",value:.38},{city:"冰岛（雷克雅未克）",type:"农村人口",value:.06}]}},mounted:function(){this.createChart(this.chartId,this.chartData)},methods:{createChart:function(t,e){var a=new l.a.Chart({container:t,forceFit:!0,height:this.height,padding:[50,50,50,130],background:{fill:"#fff"}});a.source(e,{value:{alias:"占比"}}),a.axis("city",{label:{textStyle:{fill:"#595959",fontSize:12}},tickLine:{length:0},line:{lineWidth:0}}),a.axis("value",{title:{offset:30,textStyle:{fontSize:14,fontWeight:300}},grid:{lineStyle:{lineWidth:0}}}),a.legend({position:"top-center"}),a.coord().transpose(),a.intervalStack().position("city*value").color("type*city",function(t,e){var a="";return"首都人口"===t&&(a="#1890ff"),"城市人口"===t&&(a="#ced4d9"),"农村人口"===t&&(a="#f0f2f3"),a}).size(26).label("value*type",function(t,e){return!(t<.05)&&{position:"middle",offset:0,textStyle:{fontSize:12,fill:"首都人口"===e?"white":"#47494b",shadowBlur:2,shadowColor:"rgba(0, 0, 0, .45)"}}}),a.render()}}},s={name:"LineChart",components:{ChartBase:y,ChartGroup:o,ChartOverlay:Object(u.a)(p,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.chartId}})},[],!1,null,null,null).exports},data:function(){return{}},mounted:function(){},methods:{}},v=(a(649),Object(u.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-wrap"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("基础条形图")]),t._v(" "),a("chart-base")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("分组条形图")]),t._v(" "),a("chart-group")],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"},[t._v("堆叠条形图")]),t._v(" "),a("chart-overlay")],1),t._v(" "),a("el-col",{attrs:{lg:12,sm:24}},[a("p",{staticClass:"title"})])],1)],1)},[],!1,null,"f35dc366",null));e.default=v.exports}}]);