(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form_step"],{"0d10":function(t,e,a){},"19e0":function(t,e,a){"use strict";var s=a("87c0"),n=a.n(s);n.a},"1d24":function(t,e,a){"use strict";var s=a("0d10"),n=a.n(s);n.a},6141:function(t,e,a){"use strict";var s=a("d4c7"),n=a.n(s);n.a},"84a9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("div",[a("a-icon",{class:[t.isSuccess?"success":"error","icon"],attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t._v(" "),t.title?a("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.description?a("div",{staticClass:"desc"},[t._v(t._s(t.description))]):t._e(),t._v(" "),a("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"action"},[t._t("action")],2)])},n=[],r={name:"Result",props:["isSuccess","title","description"]},i=r,l=(a("6141"),a("2877")),p=Object(l["a"])(i,s,n,!1,null,"5adef350",null);e["a"]=p.exports},"87c0":function(t,e,a){},d4c7:function(t,e,a){},f311:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-steps",{staticClass:"steps",attrs:{current:t.current}},[a("a-step",{attrs:{title:"填写转账信息"}}),t._v(" "),a("a-step",{attrs:{title:"确认转账信息"}}),t._v(" "),a("a-step",{attrs:{title:"完成"}})],1),t._v(" "),a("div",{staticClass:"content"},[0===t.current?a("step1",{on:{nextStep:t.nextStep}}):t._e(),t._v(" "),1===t.current?a("step2",{on:{nextStep:t.nextStep,prevStep:t.prevStep}}):t._e(),t._v(" "),2===t.current?a("step3",{on:{prevStep:t.prevStep,finish:t.finish}}):t._e()],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"}},[a("a-form-item",{attrs:{label:"付款账户",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-select",{attrs:{value:"1",placeholder:"ant-design@alipay.com"}},[a("a-select-option",{attrs:{value:"1"}},[t._v("ant-design@alipay.com")])],1)],1),t._v(" "),a("a-form-item",{attrs:{label:"收款账户",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input-group",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{compact:!0}},[a("a-select",{staticStyle:{width:"100px"},attrs:{defaultValue:"alipay"}},[a("a-select-option",{attrs:{value:"alipay"}},[t._v("支付宝")]),t._v(" "),a("a-select-option",{attrs:{value:"wexinpay"}},[t._v("微信")])],1),t._v(" "),a("a-input",{style:{width:"calc(100% - 100px)"},attrs:{value:"test@example.com"}})],1)],1),t._v(" "),a("a-form-item",{attrs:{label:"收款人姓名",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{attrs:{value:"Alex"}})],1),t._v(" "),a("a-form-item",{attrs:{label:"转账金额",labelCol:{span:5},wrapperCol:{span:19}}},[a("a-input",{attrs:{prefix:"￥",value:"5000"}})],1),t._v(" "),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")])],1)],1)],1)},i=[],l={name:"Step1",methods:{nextStep:function(){this.$emit("nextStep")}}},p=l,c=a("2877"),o=Object(c["a"])(p,r,i,!1,null,"d6c25264",null),u=o.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"}},[a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),t._v(" "),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"付款账户",labelCol:{span:5},wrapperCol:{span:19}}},[t._v("\n      ant-design@alipay.com\n    ")]),t._v(" "),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款账户",labelCol:{span:5},wrapperCol:{span:19}}},[t._v("\n      test@example.com\n    ")]),t._v(" "),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款人姓名",labelCol:{span:5},wrapperCol:{span:19}}},[t._v("\n      Alex\n    ")]),t._v(" "),a("a-form-item",{staticClass:"stepFormText",attrs:{label:"转账金额",labelCol:{span:5},wrapperCol:{span:19}}},[t._v("\n      ￥ 5,000.00\n    ")]),t._v(" "),a("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[a("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.nextStep}},[t._v("提交")]),t._v(" "),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")])],1)],1)],1)},v=[],f={name:"Step2",data:function(){return{loading:!1}},methods:{nextStep:function(){var t=this;t.loading=!0,setTimeout(function(){t.$emit("nextStep")},1500)},prevStep:function(){this.$emit("prevStep")}}},_=f,d=(a("19e0"),Object(c["a"])(_,m,v,!1,null,"1f2105fe",null)),x=d.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"}},[a("result",{attrs:{title:"支付完成","is-success":!0}}),t._v(" "),a("a-form-item",{attrs:{wrapperCol:{span:16,offset:8}}},[a("a-button",{attrs:{type:"primary"},on:{click:t.doOnceAgin}},[t._v("再转一笔")]),t._v(" "),a("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("查看账单")])],1)],1)],1)},b=[],h=a("84a9"),C={name:"Step3",components:{Result:h["a"]},methods:{doOnceAgin:function(){this.$emit("finish")}}},w=C,y=Object(c["a"])(w,S,b,!1,null,"34148868",null),g=y.exports,$={name:"StepForm",components:{Step1:u,Step2:x,Step3:g},data:function(){return{desc:"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",current:0}},methods:{nextStep:function(){this.current<2&&(this.current+=1)},prevStep:function(){this.current>0&&(this.current-=1)},finish:function(){this.current=0}}},k=$,O=(a("1d24"),Object(c["a"])(k,s,n,!1,null,"35a5266b",null));e["default"]=O.exports}}]);