(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(t,a,e){"use strict";e.r(a);var s=e(123),r=e(124),n=e.n(r),l={data:function(){return{tableloading:!1,tableData:[]}},computed:{tableNConfig:{get:function(){return{table:{attr:{highlightCurrent:!0}},columns:[{attr:{type:"index",label:"序号",width:55,align:"center",headerAlign:"center"}},{isParent:!0,attr:{label:"基本信息",headerAlign:"center"},items:[{attr:{prop:"code",label:"编码",width:120}},{attr:{prop:"name",label:"名称",width:160}},{attr:{prop:"model",label:"规格",width:160}},{attr:{prop:"unit",label:"单位",width:70}}]},{attr:{prop:"quantity",label:"数量",width:100}},{attr:{prop:"created",label:"添加时间",scopedSlot:"createdAt"}}]}}}},methods:{formatDate:function(t,a){return n()(t).format(a)},gettableData:function(){var t=this;this.tableloading=!0,setTimeout((function(){t.tableData=s,t.tableloading=!1}),1e3)}},mounted:function(){this.gettableData()}},i=e(10),c=Object(i.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("demo-code",[e("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[e("yl-only-table",{staticStyle:{height:"300px"},attrs:{tableloading:t.tableloading,tableData:t.tableData,configs:t.tableNConfig},scopedSlots:t._u([{key:"createdAt",fn:function(a){return[t._v(" "+t._s(t.formatDate(a.row.created,"YYYY-MM-DD hh:mm:ss"))+"\n  ")]}}])})]],2),t._v(" "),e("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-only-table")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"height:300px"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tableloading")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tableloading"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tableData")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("tableData")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":configs")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tableNConfig"')]),t._v("\n>")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"createdAt"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("slot-scope")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"scope"')]),t._v("\n  >")]),t._v(" {{formatDate(scope.row.created,'YYYY-MM-DD hh:mm:ss')}}\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("yl-only-table")]),t._v(">")]),t._v("\n\n "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" DataR "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'../data/dataR.json'")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" dayjs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'dayjs'")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n   data(){\n     "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tableloading")]),t._v(":"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tableData")]),t._v(":[]\n     }\n   },\n   "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("computed")]),t._v(":{\n     "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tableNConfig")]),t._v(": {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("get")]),t._v("() {\n              "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n                  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("table")]),t._v(": {\n                      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": {\n                          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("highlightCurrent")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n                      }\n                  },\n                  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("columns")]),t._v(": [\n                      { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": {"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"index"')]),t._v(","),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"序号"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("55")]),t._v(","),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("align")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"center"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("headerAlign")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"center"')]),t._v("}},\n                      { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("isParent")]),t._v(":"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", \n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基本信息"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("headerAlign")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"center"')]),t._v(" },\n                        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("items")]),t._v(":[\n                          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"code"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"编码"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("120")]),t._v(" } },\n                          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"名称"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("160")]),t._v(" } },\n                          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"model"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"规格"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("160")]),t._v("  } },\n                          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"unit"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"单位"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("70")]),t._v(" } },\n                      ]},\n                      { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"quantity"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"数量"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(" } },\n                      { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attr")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("prop")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"created"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"添加时间"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scopedSlot")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"createdAt"')]),t._v(" }  }\n                  ]\n              }\n          }\n      },\n   },\n   "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(":{\n     formatDate(value,format){\n         "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" dayjs(value).format(format);\n      },\n      gettableData(){\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".tableloading="),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n          setTimeout("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v("=>")]),t._v("{\n             "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".tableData = DataR\n             "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".tableloading = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n          },"),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(")\n      }\n   },\n   mounted(){\n     "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".gettableData();\n  }\n }\n ")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lang")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"css"')]),t._v(" >")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n")])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("hr")],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{attrs:{id:"onlytable-%E8%A1%A8%E6%A0%BC"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onlytable-%E8%A1%A8%E6%A0%BC"}},[t._v("#")]),t._v(" OnlyTable 表格")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("blockquote",[e("p",[t._v("标签： "),e("code",{pre:!0},[t._v("<yl-only-table></yl-only-table>")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("strong",[t._v("功能：")]),t._v("  只提供一个单据显示的表格组建")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("strong",[t._v("示例：")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("strong",[t._v("属性")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"hljs language-js"}},[t._v(" tableloading:"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("/"),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 数据加载遮罩层")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tableData")]),t._v(":[  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// 数据")]),t._v("\n     {}  "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// data项结构")]),t._v("\n ]  \n configs：{ "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("//table结构配置 参照例子")]),t._v("\n\n } \n\n\n")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("strong",[t._v("slot")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table-md"},[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("自定义")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("表格列显然的插槽块")])])])])}],!1,null,null,null);a.default=c.exports},123:function(t){t.exports=JSON.parse('[{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"},{"id":"451006549381120","code":"00000100300051","name":"混凝土","model":"C30","unit":"m3","rate":0.8,"quantity":23055,"created":"2019-03-11 11:36:20","creator":"张三"},{"id":"451008115757056","code":"00000300100007","name":"机制砂","model":"C30","unit":"吨","rate":0.4,"quantity":233055,"created":"2019-03-11 11:36:20","creator":"李四"},{"id":"451151386513408","code":"00000100300051","name":"普通硅酸盐水泥","model":"C30","unit":"吨","rate":0.5,"quantity":25,"created":"2019-03-11 11:36:20","creator":"王五"}]')},124:function(t,a,e){t.exports=function(){"use strict";var t="millisecond",a="second",e="minute",s="hour",r="day",n="week",l="month",i="quarter",c="year",o="date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v=function(t,a,e){var s=String(t);return!s||s.length>=a?t:""+Array(a+1-s.length).join(e)+t},_={s:v,z:function(t){var a=-t.utcOffset(),e=Math.abs(a),s=Math.floor(e/60),r=e%60;return(a<=0?"+":"-")+v(s,2,"0")+":"+v(r,2,"0")},m:function t(a,e){if(a.date()<e.date())return-t(e,a);var s=12*(e.year()-a.year())+(e.month()-a.month()),r=a.clone().add(s,l),n=e-r<0,i=a.clone().add(s+(n?-1:1),l);return+(-(s+(e-r)/(n?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(p){return{M:l,y:c,w:n,d:r,D:o,h:s,m:e,s:a,ms:t,Q:i}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},u={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",m={};m[h]=u;var f=function(t){return t instanceof $},j=function(t,a,e){var s;if(!t)return h;if("string"==typeof t)m[t]&&(s=t),a&&(m[t]=a,s=t);else{var r=t.name;m[r]=t,s=r}return!e&&s&&(h=s),s||!e&&h},g=function(t,a){if(f(t))return t.clone();var e="object"==typeof a?a:{};return e.date=t,e.args=arguments,new $(e)},y=_;y.l=j,y.i=f,y.w=function(t,a){return g(t,{locale:a.$L,utc:a.$u,$offset:a.$offset})};var $=function(){function v(t){this.$L=this.$L||j(t.locale,null,!0),this.parse(t)}var _=v.prototype;return _.parse=function(t){this.$d=function(t){var a=t.date,e=t.utc;if(null===a)return new Date(NaN);if(y.u(a))return new Date;if(a instanceof Date)return new Date(a);if("string"==typeof a&&!/Z$/i.test(a)){var s=a.match(p);if(s){var r=s[2]-1||0,n=(s[7]||"0").substring(0,3);return e?new Date(Date.UTC(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],r,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(a)}(t),this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return y},_.isValid=function(){return!("Invalid Date"===this.$d.toString())},_.isSame=function(t,a){var e=g(t);return this.startOf(a)<=e&&e<=this.endOf(a)},_.isAfter=function(t,a){return g(t)<this.startOf(a)},_.isBefore=function(t,a){return this.endOf(a)<g(t)},_.$g=function(t,a,e){return y.u(t)?this[a]:this.set(e,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,i){var p=this,d=!!y.u(i)||i,v=y.p(t),_=function(t,a){var e=y.w(p.$u?Date.UTC(p.$y,a,t):new Date(p.$y,a,t),p);return d?e:e.endOf(r)},u=function(t,a){return y.w(p.toDate()[t].apply(p.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(a)),p)},h=this.$W,m=this.$M,f=this.$D,j="set"+(this.$u?"UTC":"");switch(v){case c:return d?_(1,0):_(31,11);case l:return d?_(1,m):_(0,m+1);case n:var g=this.$locale().weekStart||0,$=(h<g?h+7:h)-g;return _(d?f-$:f+(6-$),m);case r:case o:return u(j+"Hours",0);case s:return u(j+"Minutes",1);case e:return u(j+"Seconds",2);case a:return u(j+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(n,i){var p,d=y.p(n),v="set"+(this.$u?"UTC":""),_=(p={},p[r]=v+"Date",p[o]=v+"Date",p[l]=v+"Month",p[c]=v+"FullYear",p[s]=v+"Hours",p[e]=v+"Minutes",p[a]=v+"Seconds",p[t]=v+"Milliseconds",p)[d],u=d===r?this.$D+(i-this.$W):i;if(d===l||d===c){var h=this.clone().set(o,1);h.$d[_](u),h.init(),this.$d=h.set(o,Math.min(this.$D,h.daysInMonth())).$d}else _&&this.$d[_](u);return this.init(),this},_.set=function(t,a){return this.clone().$set(t,a)},_.get=function(t){return this[y.p(t)]()},_.add=function(t,i){var o,p=this;t=Number(t);var d=y.p(i),v=function(a){var e=g(p);return y.w(e.date(e.date()+Math.round(a*t)),p)};if(d===l)return this.set(l,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return v(1);if(d===n)return v(7);var _=(o={},o[e]=6e4,o[s]=36e5,o[a]=1e3,o)[d]||1,u=this.$d.getTime()+t*_;return y.w(u,this)},_.subtract=function(t,a){return this.add(-1*t,a)},_.format=function(t){var a=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",s=y.z(this),r=this.$locale(),n=this.$H,l=this.$m,i=this.$M,c=r.weekdays,o=r.months,p=function(t,s,r,n){return t&&(t[s]||t(a,e))||r[s].substr(0,n)},v=function(t){return y.s(n%12||12,t,"0")},_=r.meridiem||function(t,a,e){var s=t<12?"AM":"PM";return e?s.toLowerCase():s},u={YY:String(this.$y).slice(-2),YYYY:this.$y,M:i+1,MM:y.s(i+1,2,"0"),MMM:p(r.monthsShort,i,o,3),MMMM:p(o,i),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:p(r.weekdaysMin,this.$W,c,2),ddd:p(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(n),HH:y.s(n,2,"0"),h:v(1),hh:v(2),a:_(n,l,!0),A:_(n,l,!1),m:String(l),mm:y.s(l,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:s};return e.replace(d,(function(t,a){return a||u[t]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(t,o,p){var d,v=y.p(o),_=g(t),u=6e4*(_.utcOffset()-this.utcOffset()),h=this-_,m=y.m(this,_);return m=(d={},d[c]=m/12,d[l]=m,d[i]=m/3,d[n]=(h-u)/6048e5,d[r]=(h-u)/864e5,d[s]=h/36e5,d[e]=h/6e4,d[a]=h/1e3,d)[v]||h,p?m:y.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return m[this.$L]},_.locale=function(t,a){if(!t)return this.$L;var e=this.clone(),s=j(t,a,!0);return s&&(e.$L=s),e},_.clone=function(){return y.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},v}(),b=$.prototype;return g.prototype=b,[["$ms",t],["$s",a],["$m",e],["$H",s],["$W",r],["$M",l],["$y",c],["$D",o]].forEach((function(t){b[t[1]]=function(a){return this.$g(a,t[0],t[1])}})),g.extend=function(t,a){return t(a,$,g),g},g.locale=j,g.isDayjs=f,g.unix=function(t){return g(1e3*t)},g.en=m[h],g.Ls=m,g}()}}]);
//# sourceMappingURL=12.mini.js.map