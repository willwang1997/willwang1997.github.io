(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{334:function(t,e,a){},363:function(t,e,a){"use strict";a(334)},385:function(t,e,a){"use strict";a.r(e);var i=a(57),s=a.n(i),n={components:{},name:"About",data:()=>({createTime:null,updateTime:null}),created(){this.$page.runTime=null,this.getRunTime(),this.updateTime=s()(this.$page.lastUpdatedTimestamp).format("YYYY年MM月DD日"),this.createTime=s()(this.$frontmatter.date).format("YYYY年MM月DD日")},methods:{getRunTime(){let t=new Date("06/01/2020 08:00:00"),e=(new Date-t)/31536e6,a=Math.floor(e),i=365*(e-a),s=Math.floor(i),n=24*(i-s),o=Math.floor(n),l=60*(n-o),u=Math.floor(l);this.$page.runTime=a+"年"+s+"天"+o+"小时"+u+"分"}}},o=(a(363),a(1)),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-layout"},[e("h1",{staticClass:"title"},[t._v("关于")]),t._v(" "),e("div",{staticClass:"time-info"},[e("div",{staticClass:"create-time"},[t._v("创建于: "+t._s(t.createTime))]),t._v(" "),e("div",{staticClass:"update-time"},[t._v("更新于: "+t._s(t.updateTime))])]),t._v(" "),e("img",{staticClass:"aboutImg",attrs:{src:t.$withBase("/tupian1.jpeg"),alt:""}}),t._v(" "),e("Content")],1)}),[],!1,null,"9648f396",null);e.default=l.exports}}]);