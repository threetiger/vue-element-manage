(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{693:function(t,e,n){},846:function(t,e,n){"use strict";var a=n(693);n.n(a).a},887:function(t,e,n){"use strict";n.r(e);var a=n(609),i=n.n(a),o=n(612),s=n.n(o);i.a.GlobalWorkerOptions.workerSrc=s.a;var r={name:"PdfBase",data:function(){return{fileLoading:!1,fileUrl:"http://www.xdocin.com/xdoc?_key=t7t7z6j54vezfdnwptijcmo63i&_func=down&_dir=math.pdf",totalPage:0}},created:function(){this.loadFile()},methods:{loadFile:function(){var t=this;this.fileLoading=!0,i.a.getDocument(this.fileUrl).promise.then(function(e){var n=e.numPages;t.totalPage=n;for(var a=1;a<=n;a++)t.renderPage(e,a);t.fileLoading=!1}).catch(function(){t.$message.error("文件加载失败！"),t.fileLoading=!1})},renderPage:function(t,e){t.getPage(e).then(function(t){var n=800/t.getViewport({scale:1}).width,a=t.getViewport({scale:n}),i=document.getElementById("the-canvas"+e),o=i.getContext("2d");i.height=a.height,i.width=a.width;var s={canvasContext:o,viewport:a};t.render(s)})}}},c=(n(846),n(52)),l=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pdf-base"},[this._m(0),this._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:this.fileLoading,expression:"fileLoading"}],staticClass:"pdf-base__canvas",attrs:{"element-loading-spinner":"el-icon-loading","element-loading-text":"文件加载中"}},this._l(this.totalPage,function(t){return e("canvas",{key:t,attrs:{id:"the-canvas"+t}})}),0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"pdf-base__tip"},[e("a",{attrs:{href:"http://mozilla.github.io/pdf.js",target:"_blank"}},[this._v("pdf.js")])])}],!1,null,"c1494716",null).exports;n.d(e,"default",function(){return l})}}]);