"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{47:function(t,n,e){e.d(n,{e:function(){return i}});e(791);var r,c=e(731),a=e(168),o=e(202).default.ul(r||(r=(0,a.Z)(["\n  margin-top: ","px;\n  font-size: 18px;\n  /* font-weight: 500; */\n\n  a {\n    display: block;\n    padding-top: ","px;\n    padding-bottom: ","px;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"])),(function(t){return t.theme.space[3]}),(function(t){return t.theme.space[1]}),(function(t){return t.theme.space[1]}),(function(t){return t.theme.colors.accent})),u=e(184),i=function(t){var n=t.movies,e=t.isMoviePage,r=void 0!==e&&e,a=t.previousLocation;return(0,u.jsx)(o,{children:r?n.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"".concat(n),state:{from:"".concat(a)},children:e})},n)})):n.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"movies/".concat(n),state:{from:"".concat(a)},children:e})},n)}))})}},524:function(t,n,e){e.d(n,{$h:function(){return r},S4:function(){return u},SR:function(){return s},_n:function(){return c},ax:function(){return f},js:function(){return p},mw:function(){return i},vu:function(){return o},wi:function(){return a}});var r="1351fe1fee33f4dc7ca86c3a4fb4a61c",c="https://api.themoviedb.org/3/",a="trending/movie/day",o="search/movie",u="movie/",i="/credits",s="/reviews",p="https://image.tmdb.org/t/p/w500",f="https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg"},304:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,c=e(982),a=e(861),o=e(885),u=e(687),i=e.n(u),s=e(791),p=e(933),f=e(168),v=e(202).default.main(r||(r=(0,f.Z)(["\n  padding: ","px;\n\n  h2 {\n    color: ",";\n  }\n"])),(function(t){return t.theme.space[4]}),(function(t){return t.theme.colors.accentTextColor})),h=e(47),l=e(689),d=e(184),m=function(){var t=(0,s.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],u=(0,l.TH)();return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.E.getTrendingMovies();case 3:n=t.sent,r((0,c.Z)(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,d.jsxs)(v,{children:[(0,d.jsx)("h2",{children:"Trending Today"}),e.length>0&&(0,d.jsx)(h.e,{movies:e,previousLocation:u.pathname})]})}},933:function(t,n,e){e.d(n,{E:function(){return d}});var r=e(413),c=e(861),a=e(671),o=e(144),u=e(274),i=e(359),s=e(687),p=e.n(s),f=e(44),v=e(524),h=(0,i.Z)("params"),l=function(){function t(){(0,a.Z)(this,t),Object.defineProperty(this,h,{writable:!0,value:{api_key:v.$h,language:"en-US"}})}return(0,o.Z)(t,[{key:"getTrendingMovies",value:function(){var t=(0,c.Z)(p().mark((function t(){var n,e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(v._n).concat(v.wi),t.prev=1,t.next=4,f.ZP.get(n,{params:(0,r.Z)((0,r.Z)({},(0,u.Z)(this,h)[h]),{},{page:1})});case 4:return e=t.sent,t.abrupt("return",e.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"searchByKeyWord",value:function(){var t=(0,c.Z)(p().mark((function t(n){var e,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(v._n).concat(v.vu),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)((0,r.Z)({},(0,u.Z)(this,h)[h]),{},{query:n,page:1})});case 4:return c=t.sent,t.abrupt("return",c.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieDetailsById",value:function(){var t=(0,c.Z)(p().mark((function t(n){var e,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(v._n).concat(v.S4).concat(n),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)({},(0,u.Z)(this,h)[h])});case 4:return c=t.sent,t.abrupt("return",c.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieCreditsById",value:function(){var t=(0,c.Z)(p().mark((function t(n){var e,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(v._n).concat(v.S4).concat(n).concat(v.mw),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)({},(0,u.Z)(this,h)[h])});case 4:return c=t.sent,t.abrupt("return",c.data.cast);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},{key:"getMovieReviewsById",value:function(){var t=(0,c.Z)(p().mark((function t(n){var e,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(v._n).concat(v.S4).concat(n).concat(v.SR),t.prev=1,t.next=4,f.ZP.get(e,{params:(0,r.Z)((0,r.Z)({},(0,u.Z)(this,h)[h]),{},{page:1})});case 4:return c=t.sent,t.abrupt("return",c.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()}]),t}(),d=new l}}]);
//# sourceMappingURL=304.8ddc988d.chunk.js.map