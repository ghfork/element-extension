(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,s,a){"use strict";a.r(s);var e=a(273),r=a(272),n=a(2),l=Object(n.a)(r.a,e.render,e.staticRenderFns,!1,null,null,null),i=a(5);i.install(a(1)),i.compatible&&(t.hot.accept(),t.hot.data?i.reload("1f87b923",l.options):i.createRecord("1f87b923",l.options),t.hot.accept(273,function(t){e=a(273),i.rerender("1f87b923",{render:e.render,staticRenderFns:e.staticRenderFns})}.bind(this))),l.options.__file="example/views/page/timebar.md",s.default=l.exports},272:function(t,s,a){"use strict";var e={data:function(){return{dataPickOptions:{format:"yyyy-MM-dd HH:mm:ss",size:"small",clearable:!1,type:"datetime"},btnItems:{day:!0,week:!0,month:!0,year:!0},currentValue:"day"}},methods:{change:function(t){console.log(t)}},mounted:function(){console.log(this.$refs.timebar.getDate())}};s.a=e},273:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[t._m(0),t._m(1),t._m(2),t._m(3),a("p",[t._v("水平布局")]),a("demo-code",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[a("yl-timebar",{attrs:{dataPickOptions:t.dataPickOptions,currentValue:t.currentValue,btnItems:t.btnItems},on:{change:t.change}})]],2),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"hljs language-html"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-timebar")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":dataPickOptions")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"dataPickOptions"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":currentValue")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"currentValue"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":btnItems")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"btnItems"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"change"')]),t._v("\n   >")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-timebar")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("dataPickOptions")]),t._v(":{\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("format")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"yyyy-MM-dd HH:mm:ss"')]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'small'")]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("clearable")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'datetime'")]),t._v("\n         },\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("btnItems")]),t._v(":{\n             "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("day")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("week")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("month")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(","),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("year")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n         },\n         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("currentValue")]),t._v(":"),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'day'")]),t._v("\n     }\n   },\n   "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n       change(date){\n           "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date)\n       },\n       \n   },\n   mounted(){\n     "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.timebar.getDate())\n     "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// this.$refs.timebar.setDate('2019-01-01','2019-12-01')")]),t._v("\n   }\n }\n ")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n\n")])])])]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("hr")],1)},r=[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"timebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timebar","aria-hidden":"true"}},[this._v("#")]),this._v(" timebar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("标签： "),s("code",{pre:!0},[this._v("<yl-timebar></yl-timebar>")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("功能：")]),this._v(" 提供时间段的过滤器控件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("属性")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("可选值")])])]),a("tbody",[a("tr",[a("td",[t._v("btnItems")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("时间段选项")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Object")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("{ day:true, week:true, month:true, quarter:true, year:true, all:true }")]),a("td",{staticStyle:{"text-align":"right"}})]),a("tr",[a("td",[t._v("currentValue")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前默认时间段")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("'month'")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("'day'、'week'、'month'、'quarter'、'year'、'all'")])]),a("tr",[a("td",[t._v("dataPickOptions")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("时间控件配置")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("{format:'yyyy-MM-dd', size:'small',readonly:false, clearable:false, type:'date',}")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false/true")])]),a("tr",[a("td",[t._v("format")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("格式化")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("String")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("'YYYY-MM-DD'")]),a("td",{staticStyle:{"text-align":"right"}})]),a("tr",[a("td",[t._v("needSetDate")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否在初始化时设置初始值")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("false/true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table-md"},[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("参数")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("getDate")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取当前控件开始时间和结束时间")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("{beginDate:'',endDate:''}")]),a("td",{staticStyle:{"text-align":"right"}})]),a("tr",[a("td",[t._v("setDate")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置当前控件开始时间和结束时间")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("(beginDate,endDate)")]),a("td",{staticStyle:{"text-align":"right"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",{staticClass:"table-md"},[s("thead",[s("tr",[s("th",[this._v("事件")]),s("th",{staticStyle:{"text-align":"center"}},[this._v("说明")]),s("th",{staticStyle:{"text-align":"right"}},[this._v("参数")])])]),s("tbody",[s("tr",[s("td",[this._v("change")]),s("td",{staticStyle:{"text-align":"center"}},[this._v("选择时间或选择时间段或者前进后退时触发")]),s("td",{staticStyle:{"text-align":"right"}},[this._v("{beginDate:'',endDate:''}")])])])])}];e._withStripped=!0,a.d(s,"render",function(){return e}),a.d(s,"staticRenderFns",function(){return r})}}]);