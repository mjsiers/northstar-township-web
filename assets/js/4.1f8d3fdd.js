(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9],{313:function(t,e,n){var r=n(4),o=n(68);t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},315:function(t,e,n){"use strict";n.r(e);n(46),n(67),n(25);var r={name:"TagItem",props:{tag:{type:Object,required:!0}},computed:{num_pages:function(){return console.log(this.tag),this.tag.pages.length}},methods:{formatAnchor:function(t){return t.toLowerCase().replace(/ /g,"-")},formatDate:function(t){return t.slice(0,10)}}},o=n(45),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[n("a",{staticClass:"header-anchor",attrs:{href:"#"+t.formatAnchor(t.tag.tag),"aria-hidden":"true"}},[t._v("#")]),t._v("\n    "+t._s(t.tag.tag)+" ["+t._s(t.num_pages)+"]\n  ")]),t._v(" "),t._l(t.tag.pages,(function(e){return n("div",[n("a",{attrs:{href:e.path}},[t._v(" "+t._s(t.formatDate(e.date)))])])}))],2)}),[],!1,null,null,null);e.default=i.exports},318:function(t,e,n){"use strict";var r=n(319),o=n(320);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},319:function(t,e,n){"use strict";var r=n(0),o=n(3),i=n(97),a=n(13),s=n(169),u=n(168),f=n(167),c=n(4),l=n(1),v=n(99),d=n(48),h=n(313);t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=p?"set":"add",x=o[t],y=x&&x.prototype,_=x,w={},k=function(t){var e=y[t];a(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof x||!(g||y.forEach&&!l((function(){(new x).entries().next()})))))_=n.getConstructor(e,t,p,m),s.REQUIRED=!0;else if(i(t,!0)){var z=new _,E=z[m](g?{}:-0,1)!=z,b=l((function(){z.has(1)})),I=v((function(t){new x(t)})),A=!g&&l((function(){for(var t=new x,e=5;e--;)t[m](e,e);return!t.has(-0)}));I||((_=e((function(e,n){f(e,_,t);var r=h(new x,e,_);return null!=n&&u(n,r[m],{that:r,AS_ENTRIES:p}),r}))).prototype=y,y.constructor=_),(b||A)&&(k("delete"),k("has"),p&&k("get")),(A||E)&&k(m),g&&y.clear&&delete y.clear}return w[t]=_,r({global:!0,forced:_!=x},w),d(_,t),g||n.setStrong(_,t,p),_}},320:function(t,e,n){"use strict";var r=n(7).f,o=n(31),i=n(176),a=n(49),s=n(167),u=n(168),f=n(98),c=n(170),l=n(6),v=n(169).fastKey,d=n(30),h=d.set,p=d.getterFor;t.exports={getConstructor:function(t,e,n,f){var c=t((function(t,r){s(t,c,e),h(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&u(r,t[f],{that:t,AS_ENTRIES:n})})),d=p(e),g=function(t,e,n){var r,o,i=d(t),a=m(t,e);return a?a.value=n:(i.last=a={index:o=v(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=a),r&&(r.next=a),l?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},m=function(t,e){var n,r=d(t),o=v(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(c.prototype,{clear:function(){for(var t=d(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=d(this),n=m(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),l?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=d(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),i(c.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&r(c.prototype,"size",{get:function(){return d(this).size}}),c},setStrong:function(t,e,n){var r=e+" Iterator",o=p(e),i=p(r);f(t,e,(function(t,e){h(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},372:function(t,e,n){"use strict";n.r(e);n(173),n(23),n(171),n(174),n(318),n(10),n(11),n(15),n(101),n(46),n(67);var r={components:{TagItem:n(315).default},computed:{tags:function(){var t=this.$site.pages.filter((function(t){return t.path.startsWith("/township/minutes/")&&t.frontmatter.blog_post})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}));console.log(t);for(var e=new Map,n=0;n<t.length;n++){s=t[n].frontmatter.tags;for(var r=0;r<s.length;r++){var o=t[n].path,i=e.get(s[r]),a={title:t[n].title,date:t[n].frontmatter.date,path:o};void 0===i?(i={tag:s[r],pages:[a]},e.set(s[r],i)):i.pages.push(a)}}var s=Array.from(e.values()).sort((function(t,e){return t.tag>e.tag?1:-1}));return console.log(s),s}},methods:{formatAnchor:function(t){return t.toLowerCase().replace(/ /g,"-")}}},o=n(45),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.tags,(function(t){return e("div",[e("TagItem",{attrs:{tag:t}})],1)})),0)}),[],!1,null,null,null);e.default=i.exports}}]);