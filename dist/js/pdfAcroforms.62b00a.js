(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{697:function(e,t,n){},698:function(e,t,n){},849:function(e,t,n){"use strict";var a=n(697);n.n(a).a},850:function(e,t,n){"use strict";var a=n(698);n.n(a).a},901:function(e,t,n){"use strict";n.r(t);var a=n(609),i=n.n(a),r=n(612),o=n.n(r),s=n(696);i.a.GlobalWorkerOptions.workerSrc=o.a;var c={name:"PdfAcroforms",data:function(){return{fileLoading:!1,fileUrl:"http://www.xdocin.com/xdoc?_key=t7t7z6j54vezfdnwptijcmo63i&_func=down&_dir=math.pdf"}},created:function(){},mounted:function(){this.loadFile()},methods:{loadFile:function(){var e=this;this.fileLoading=!0,i.a.getDocument(this.fileUrl).promise.then(function(t){for(var n=t.numPages,a=1;a<=n;a++)e.renderPage(t,a);e.fileLoading=!1}).catch(function(){e.$message.error("文件加载失败！"),e.fileLoading=!1})},renderPage:function(e,t){var n=this;e.getPage(t).then(function(e){var a=new s.PDFPageView({container:n.$refs.container,id:t,scale:1,defaultViewport:e.getViewport({scale:1}),annotationLayerFactory:new s.DefaultAnnotationLayerFactory,renderInteractiveForms:!0});a.setPdfPage(e),a.draw()})}}},f=(n(849),n(850),n(51)),d=Object(f.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pdf-acroforms"},[this._m(0),this._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.fileLoading,expression:"fileLoading"}],ref:"container",staticClass:"pdf-acroforms__container",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"文件加载中"}})])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pdf-acroforms__tip"},[t("p",[this._v("参考的是pdf.js官方例子：\n      "),t("a",{attrs:{href:"https://github.com/mozilla/pdf.js/tree/master/examples/acroforms",target:"_blank"}},[this._v("acroforms")])]),this._v(" "),t("p",[this._v("清晰度更高。")])])}],!1,null,"7d4406ae",null).exports;n.d(t,"default",function(){return d})}}]);