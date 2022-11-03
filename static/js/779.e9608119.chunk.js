"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(861),c=e(885),u=e(687),o=e.n(u),s=e(791),i=e(689),p=e(933),f=e(168),h=e(202).default.ul(r||(r=(0,f.Z)(["\n  li {\n    padding: ","px;\n    border-radius: 5px;\n    box-shadow: ",";\n    max-height: 300px;\n    overflow-y: scroll;\n\n    @media screen and (max-width: 479.98px) {\n      overflow-x: scroll;\n    }\n\n    &:not(:last-of-type) {\n      margin-bottom: ","px;\n    }\n  }\n\n  h3 {\n    margin-bottom: ","px;\n  }\n"])),(function(t){return t.theme.space[3]}),(function(t){return t.theme.boxShadow.second}),(function(t){return t.theme.space[2]}),(function(t){return t.theme.space[2]})),v=e(184),l=function(){var t=(0,i.UO)(),n=(0,s.useState)(null),e=(0,c.Z)(n,2),r=e[0],u=e[1];return(0,s.useEffect)((function(){function n(){return n=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.E.getMovieReviewsById(t.movieId);case 2:e=n.sent,u(e);case 4:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t.movieId]),r?(0,v.jsxs)(v.Fragment,{children:[0===r.length&&(0,v.jsx)("p",{children:"We do not have any reviews for this movie"}),0!==r.length&&(0,v.jsx)(h,{children:r.map((function(t){var n=t.author,e=t.content,r=t.id;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:n}),(0,v.jsx)("p",{children:e})]},r)}))})]}):null}},524:function(t,n,e){e.d(n,{$h:function(){return r},S4:function(){return o},SR:function(){return i},_n:function(){return a},ax:function(){return f},js:function(){return p},mw:function(){return s},vu:function(){return u},wi:function(){return c}});var r="1351fe1fee33f4dc7ca86c3a4fb4a61c",a="https://api.themoviedb.org/3/",c="trending/movie/day",u="search/movie",o="movie/",s="/credits",i="/reviews",p="https://image.tmdb.org/t/p/w500",f="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},933:function(t,n,e){e.d(n,{E:function(){return d}});var r=e(413),a=e(861),c=e(671),u=e(144),o=e(274),s=e(359),i=e(687),p=e.n(i),f=e(44),h=e(524),v=(0,s.Z)("params"),l=function(){function t(){(0,c.Z)(this,t),Object.defineProperty(this,v,{writable:!0,value:{api_key:h.$h,language:"en-US"}})}return(0,u.Z)(t,[{key:"getTrendingMovies",value:function(){var t=(0,a.Z)(p().mark((function t(){var n,e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(h._n).concat(h.wi),t.prev=1,t.next=4,f.ZP.get(n,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,v)[v]),{},{page:1})});case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"searchByKeyWord",value:function(){var t=(0,a.Z)(p().mark((function t(n){var e,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(h._n).concat(h.vu),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,v)[v]),{},{query:n,page:1})});case 4:return a=t.sent,t.abrupt("return",a.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var t=(0,a.Z)(p().mark((function t(n){var e,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(h._n).concat(h.S4).concat(n),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)({},(0,o.Z)(this,v)[v])});case 4:return a=t.sent,t.abrupt("return",a.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieCreditsById",value:function(){var t=(0,a.Z)(p().mark((function t(n){var e,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(h._n).concat(h.S4).concat(n).concat(h.mw),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)({},(0,o.Z)(this,v)[v])});case 4:return a=t.sent,t.abrupt("return",a.data.cast);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var t=(0,a.Z)(p().mark((function t(n){var e,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(h._n).concat(h.S4).concat(n).concat(h.SR),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)((0,r.Z)({},(0,o.Z)(this,v)[v]),{},{page:1})});case 4:return a=t.sent,t.abrupt("return",a.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()}]),t}(),d=new l}}]);
//# sourceMappingURL=779.e9608119.chunk.js.map