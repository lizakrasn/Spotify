(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],Array(18).concat([function(e){e.exports=JSON.parse('{"name":"Adam","surname":"Lowenthal","image":"/images/user.jpg"}')},function(e){e.exports=JSON.parse('[{"artist":"Hoodie Allen","imgUrl":"/images/hoodie.jpg"},{"artist":"Mike Stud","imgUrl":"/images/mikestud.jpg"},{"artist":"Drake","imgUrl":"/images/drake.jpg"},{"artist":"J. Cole","imgUrl":"/images/jcole.jpg"},{"artist":"Big Sean","imgUrl":"/images/bigSean.jpg"},{"artist":"Wiz Khalifa","imgUrl":"/images/wiz.jpeg"},{"artist":"Yonas","imgUrl":"/images/yonas.jpg"}]')},function(e){e.exports=JSON.parse('{"list":["Doo Wop","Pop Classics","Love Songs","Hipster","New Music Friday","Techno Poppers","Summer Soothers","Hard Rap","Pop Rap","5 Stars","Dope Dancin","Sleep"]}')},function(e){e.exports=JSON.parse('{"name":"Some Type of Love","artist":"Charlie Puth","image":"/images/cur-song.jpg"}')},,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(2),i=t.n(c),n=t(17),r=t.n(n),l=(t(32),t(3)),j=(t(33),t(34),t(35),function(e){var s=e.value,t=e.onChange;return Object(a.jsx)("input",{value:s,onChange:function(e){return t(e.target.value)},className:"search",type:"text",placeholder:"Search"})}),d=(t(36),t(7)),o=t(4),m=function(e){var s=e.user,t=Object(c.useState)(!1),i=Object(l.a)(t,2),n=i[0],r=i[1];return Object(a.jsxs)("div",{className:"user",children:[Object(a.jsx)("div",{className:"user__notifications",children:Object(a.jsx)(d.a,{size:17})}),Object(a.jsx)("div",{className:"user__inbox",children:Object(a.jsx)(d.c,{size:17})}),Object(a.jsxs)("div",{className:"user__info",children:[Object(a.jsx)("img",{src:s.image,alt:"user",className:"user__photo"}),Object(a.jsx)("p",{className:"user__name",children:"".concat(s.name," ").concat(s.surname)})]}),Object(a.jsxs)("div",{className:"user__actions",children:[Object(a.jsx)("button",{className:"user__button",type:"button",onClick:function(){r(!n)},children:Object(a.jsx)(o.c,{size:25})}),n?Object(a.jsxs)("ul",{className:"user__actions-list",children:[Object(a.jsx)("li",{className:"user__action",children:Object(a.jsx)("a",{className:"user__action-item",href:"#",children:"Private session"})}),Object(a.jsx)("li",{className:"user__action",children:Object(a.jsx)("a",{className:"user__action-item",href:"#",children:"Account"})}),Object(a.jsx)("li",{className:"user__action",children:Object(a.jsx)("a",{className:"user__action-item",href:"#",children:"Settings"})}),Object(a.jsx)("li",{className:"user__action",children:Object(a.jsx)("a",{className:"user__action-item",href:"#",children:"Log Out"})})]}):Object(a.jsx)(a.Fragment,{})]})]})},b=t(18),u=(t(37),function(){return Object(a.jsxs)("div",{className:"flows",children:[Object(a.jsx)("span",{className:"flows__item flows__item--is-active",children:Object(a.jsx)(o.b,{size:27})}),Object(a.jsx)("span",{className:"flows__item",children:Object(a.jsx)(o.d,{size:27})})]})}),O=function(){var e=Object(c.useState)(""),s=Object(l.a)(e,2),t=s[0],i=s[1],n=Object(c.useState)(b),r=Object(l.a)(n,2),d=r[0];r[1];return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsxs)("div",{className:"header__search-block",children:[Object(a.jsx)("div",{className:"header__flows",children:Object(a.jsx)(u,{})}),Object(a.jsx)("div",{className:"header__search",children:Object(a.jsx)(j,{value:t,onChange:function(e){i(e)}})})]}),Object(a.jsx)(m,{user:d})]})},_=(t(38),t(39),t(40),function(e){var s=e.type,t=e.className,c=e.text,i=e.children,n="primary"===s?"button--primary":"circle"===s?"button--circle":"";return Object(a.jsx)("button",{className:"button ".concat(null!==t&&void 0!==t?t:""," ").concat(n),children:null!==c&&void 0!==c?c:i})}),x=(t(41),t(42),function(e){var s=e.artist,t=e.imgUrl;return Object(a.jsxs)("div",{className:"artist-card",children:[Object(a.jsx)("div",{className:"artist-card__image-container",children:Object(a.jsx)("img",{className:"artist-card__image",src:t,alt:"artist"})}),Object(a.jsx)("a",{href:"#",className:"artist-card__name",children:s})]})}),h=function(e){var s=e.artistsData;return Object(a.jsx)("div",{className:"related-artists",children:s.map((function(e){return Object(a.jsx)("div",{className:"related-artists__item",children:Object(a.jsx)(x,{artist:e.artist,imgUrl:e.imgUrl})})}))})},g=(t(43),t(44),t(45),t(12)),p=t(11),v=function(e){var s=e.song,t=e.index;return Object(a.jsxs)("div",{className:"track",children:[Object(a.jsx)("img",{className:"track__art",alt:"artist",src:s.imgUrl}),Object(a.jsx)("p",{className:"track__number",children:t+1}),Object(a.jsx)("button",{className:"track__added",children:s.isAdded?Object(a.jsx)(p.a,{}):Object(a.jsx)(g.a,{})}),Object(a.jsx)("p",{className:"track__name",children:s.name}),Object(a.jsx)("p",{className:"track__explicit",children:"explicit"}),Object(a.jsx)("p",{className:"track__listens",children:(new Intl.NumberFormat).format(s.listens)})]})},N=function(e){var s=e.songs;return Object(a.jsxs)("div",{className:"tracks",children:[Object(a.jsx)("div",{className:"tracks__list",children:s.map((function(e,s){return Object(a.jsx)("div",{className:"tracks__track",children:Object(a.jsx)(v,{song:e,index:s})})}))}),Object(a.jsx)("div",{className:"tracks__button",children:Object(a.jsx)(_,{type:"basic",text:"Show 5 more"})})]})},f=(t(46),t(47),t(5)),y=function(e){var s,t,c=e.song,i=e.index,n=Math.floor(c.durationSeconds/60),r=(c.durationSeconds%60).toString().padStart(2,"0");return Object(a.jsxs)("div",{className:"song",children:[Object(a.jsx)("p",{className:"song__number",children:i+1}),Object(a.jsx)("button",{className:"song__added",children:c.isAdded?Object(a.jsx)(p.a,{}):Object(a.jsx)(g.a,{})}),Object(a.jsxs)("p",{className:"song__name",children:[c.name,Object(a.jsx)("span",{className:"song__coartists",children:(t=c.coartists,0===t.length?"":" - ".concat(t))})]}),Object(a.jsx)("p",{className:"song__explicit",children:"explicit"}),Object(a.jsx)("p",{className:"song__duration",children:"".concat(n," : ").concat(r)}),Object(a.jsx)("div",{className:"song__popularity",children:(s=c.popularity,"up"===s?Object(a.jsx)(f.e,{size:20}):"down"===s?Object(a.jsx)(f.d,{size:20}):Object(a.jsx)(a.Fragment,{}))})]})},S=t(8),k=t(9),w=t(13),A=function(e){var s=e.album;return Object(a.jsxs)("div",{className:"album",children:[Object(a.jsxs)("div",{className:"album__info",children:[Object(a.jsx)("img",{className:"album__image",alt:"album",src:s.imgUrl}),Object(a.jsxs)("div",{className:"album__details",children:[Object(a.jsx)("p",{className:"album__year",children:s.release.year}),Object(a.jsx)("p",{className:"album__name",children:s.name}),Object(a.jsxs)("div",{className:"album__actions",children:[Object(a.jsx)(_,{type:"basic",text:"Save",className:"album__button"}),Object(a.jsx)(_,{type:"circle",children:Object(a.jsx)("p",{children:Object(a.jsx)(S.a,{size:15})})})]})]})]}),Object(a.jsxs)("div",{className:"album__song-heading",children:[Object(a.jsx)("p",{className:"album__heading-number",children:"#"}),Object(a.jsx)("p",{className:"album__heading-title",children:"Song"}),Object(a.jsx)("div",{className:"album__heading-length",children:Object(a.jsx)(k.a,{size:20})}),Object(a.jsx)("div",{className:"album__heading-popularity",children:Object(a.jsx)(w.b,{size:20})})]}),Object(a.jsx)("div",{children:s.songs.map((function(e,s){return Object(a.jsx)("div",{className:"album__song",children:Object(a.jsx)(y,{song:e,index:s})})}))})]})},z=(t(48),function(e){var s=e.album,t="".concat(s.release.day," ").concat(s.release.month," ").concat(s.release.year);return Object(a.jsxs)("div",{className:"latest-release",children:[Object(a.jsx)("img",{className:"latest-release__image",alt:"album",src:s.imgUrl}),Object(a.jsxs)("div",{className:"latest-release__info",children:[Object(a.jsx)("p",{children:s.name}),Object(a.jsx)("p",{children:t})]})]})}),U=(t(49),function(e){var s=e.artist;return Object(a.jsxs)("div",{className:"related-artist",children:[Object(a.jsx)("img",{className:"related-artist__image",alt:"artist",src:s.imgUrl}),Object(a.jsx)("a",{href:"#",className:"related-artist__name",children:s.artist})]})}),I=(t(50),function(){return Object(a.jsxs)("span",{className:"view-types",children:[Object(a.jsx)("span",{className:"view-types__icon view-types__icon--active",children:Object(a.jsx)(f.f,{size:15})}),Object(a.jsx)("span",{className:"view-types__icon",children:Object(a.jsx)(d.e,{size:15})})]})}),T=function(e){var s=e.albums,t=e.lastAlbum,c=e.popularSongs,i=e.relatedArtists;return Object(a.jsxs)("div",{className:"overview",children:[Object(a.jsxs)("div",{className:"overview__info",children:[Object(a.jsxs)("div",{className:"overview__artist",children:[Object(a.jsx)("p",{className:"overview__title",children:"Latest Release"}),Object(a.jsx)("div",{className:"overview__latest-release",children:Object(a.jsx)(z,{album:t})}),Object(a.jsx)("p",{className:"overview__title",children:"Popular"}),Object(a.jsx)("div",{className:"overview__popular",children:Object(a.jsx)(N,{songs:c})})]}),Object(a.jsxs)("div",{className:"overview__related",children:[Object(a.jsx)("p",{className:"overview__title",children:"Related Artists"}),Object(a.jsx)("div",{className:"overview__related-artists",children:i.map((function(e){return Object(a.jsx)(U,{artist:e})}))})]})]}),Object(a.jsxs)("div",{className:"overview__albums",children:[Object(a.jsxs)("div",{className:"overview__album-head",children:[Object(a.jsx)("p",{className:"overview__title",children:"Albums"}),Object(a.jsx)(I,{})]}),s.map((function(e){return Object(a.jsx)("div",{className:"overview__album",children:Object(a.jsx)(A,{album:e})})}))]})]})},D=t(19),C=(t(51),function(e){var s=e.tab,t=e.index,c=e.onClick,i=e.isActive,n=e.renderTab;return Object(a.jsx)("li",{className:i?"tabs__tab tabs__tab--is-active":"tabs__tab",onClick:function(){return c()},children:n?n(s,t):s.label})});function M(e,s){return 100/e.length*e.indexOf(s)*e.length}var L=function(e){var s=e.tabs,t=e.activeTab,c=e.onChange,i=e.renderTab;return Object(a.jsxs)("div",{className:"tabs",children:[Object(a.jsx)("ul",{className:"tabs__list",children:s.map((function(e,s){return Object(a.jsx)(C,{isActive:Object.is(t,e),tab:e,index:s,onClick:function(){return c(e)},renderTab:i},s)}))}),Object(a.jsx)("div",{className:"tabs__slider",style:{width:"calc(100% / ".concat(s.length),transform:"translate(".concat(M(s,t),"%, 0)")}})]})},E={name:"G-Eazy",id:1,imgUrl:"/images/g-eazy.jpg",backgroundImgUrl:"/images/bg-artist.png",listeners:15662810,albums:[{id:1,name:"When It's Dark Out",imgUrl:"/images/song-image-2.jpg",release:{year:2015,month:"december",day:25},artistId:1,songs:[{name:"Intro",imgUrl:"",durationSeconds:71,id:1,listens:1,albumId:1,popularity:"up",isAdded:!0,coartists:""},{name:"Random",imgUrl:"",durationSeconds:180,id:2,listens:1,albumId:1,popularity:"up",isAdded:!0,coartists:""},{name:"Me, Myself & I",imgUrl:"",durationSeconds:251,listens:1,id:3,albumId:1,popularity:"up",isAdded:!0,coartists:"Bebe Rexha"},{name:"One Of Them",imgUrl:"",durationSeconds:200,listens:1,id:4,albumId:1,popularity:"down",isAdded:!0,coartists:"Big Sean"},{name:"Drifting",imgUrl:"",durationSeconds:273,listens:1,id:5,albumId:1,popularity:"up",isAdded:!0,coartists:"Chris Brown, Tory Lanez"},{name:"Of All Things",imgUrl:"",durationSeconds:214,listens:1,id:6,albumId:1,popularity:"up",isAdded:!0,coartists:"Too $hort"},{name:"Order More",imgUrl:"",durationSeconds:209,listens:1,id:7,albumId:1,popularity:"up",isAdded:!0,coartists:"Starrah"},{name:"Calm Down",imgUrl:"",durationSeconds:127,listens:1,id:8,albumId:1,popularity:"up",isAdded:!0,coartists:""},{name:"Don't Let Me Go",imgUrl:"",durationSeconds:191,listens:1,id:9,albumId:1,popularity:"down",isAdded:!1,coartists:"Grace"},{name:"You Got Me",imgUrl:"",durationSeconds:203,listens:1,id:10,albumId:1,popularity:"up",isAdded:!0,coartists:""},{name:"What If",imgUrl:"",durationSeconds:253,listens:1,id:11,albumId:1,popularity:"up",isAdded:!0,coartists:"Gizzle"},{name:"Some Kind Of Drug",imgUrl:"",durationSeconds:223,listens:1,id:12,albumId:1,popularity:"up",isAdded:!0,coartists:"Marc E. Bassy"},{name:"Think About You",imgUrl:"",durationSeconds:179,listens:1,id:13,albumId:1,popularity:"up",isAdded:!0,coartists:"Quin"},{name:"Everything Will Be OK",imgUrl:"",durationSeconds:311,listens:1,id:14,albumId:1,popularity:"up",isAdded:!0,coartists:"Kehlani"},{name:"For This",imgUrl:"",durationSeconds:251,listens:1,id:15,albumId:1,popularity:"up",isAdded:!0,coartists:"Iamnobodi"},{name:"Nothing to Me",imgUrl:"",durationSeconds:330,listens:1,id:16,albumId:1,popularity:"up",isAdded:!0,coartists:"Keyshia Cole E-40"}]}],lastAlbum:{id:2,name:"Drifting (Track Commentary)",imgUrl:"/images/song-image-2.jpg",release:{year:2015,month:"December",day:4},artistId:1,songs:[]},popularSongs:[{name:"Me, Myself & I",imgUrl:"/images/song-image-2.jpg",listens:147544165,durationSeconds:245,id:1,albumId:1,isAdded:!0,coartists:""},{name:"I Mean It",imgUrl:"/images/song-image.jpg",listens:74568782,durationSeconds:205,id:2,albumId:1,isAdded:!1,coartists:""},{name:"Calm Down",imgUrl:"/images/song-image-2.jpg",listens:13737506,durationSeconds:185,id:3,albumId:1,isAdded:!0,coartists:""},{name:"Some Kind Of Drug",imgUrl:"/images/song-image-2.jpg",listens:12234881,durationSeconds:265,id:4,albumId:1,isAdded:!1,coartists:""},{name:"Let's Get Lost",imgUrl:"/images/song-image.jpg",listens:40882954,durationSeconds:198,id:5,albumId:1,isAdded:!0,coartists:""}]},R=[{value:"overview",label:"OVERVIEW"},{value:"related",label:"RELATED ARTISTS"}],B=function(){var e=Object(c.useState)(D),s=Object(l.a)(e,2),t=s[0],i=(s[1],Object(c.useState)(R[0])),n=Object(l.a)(i,2),r=n[0],j=n[1],d=Object(c.useState)(E),o=Object(l.a)(d,2),m=o[0];o[1];return Object(a.jsxs)("div",{className:"artist",children:[Object(a.jsxs)("div",{className:"artist__header",children:[Object(a.jsx)("div",{className:"artist__header-image",style:{backgroundImage:"url(".concat(m.backgroundImgUrl,")")}}),Object(a.jsxs)("div",{className:"artist__info-block",children:[Object(a.jsx)("div",{className:"artist__image-container",children:Object(a.jsx)("img",{className:"artist__image",alt:"artist",src:m.imgUrl})}),Object(a.jsxs)("div",{className:"artist__info",children:[Object(a.jsxs)("div",{className:"artist__details",children:[Object(a.jsx)("p",{className:"artist__title",children:"Artist"}),Object(a.jsx)("p",{className:"artist__name",children:m.name})]}),Object(a.jsxs)("div",{className:"artist__actions",children:[Object(a.jsx)(_,{type:"primary",className:"artist__button",children:Object(a.jsxs)("p",{className:"button__text",children:[" ",Object(a.jsx)(f.c,{size:20})," Play"]})}),Object(a.jsx)(_,{text:"Follow",type:"basic",className:"artist__button"}),Object(a.jsx)(_,{type:"circle",className:"artist__button",children:Object(a.jsx)("p",{children:Object(a.jsx)(S.a,{size:15})})})]})]}),Object(a.jsxs)("div",{className:"artist__listeners",children:[Object(a.jsx)("p",{className:"artist__count",children:(new Intl.NumberFormat).format(m.listeners)}),Object(a.jsx)("p",{className:"artist__label",children:"Monthly Listeners"})]})]}),Object(a.jsx)("div",{className:"artist__tabs",children:Object(a.jsx)(L,{tabs:R,activeTab:r,onChange:j})})]}),"related"===r.value?Object(a.jsx)("div",{className:"artist__related-artists",children:Object(a.jsx)(h,{artistsData:t})}):Object(a.jsx)("div",{children:Object(a.jsx)(T,{albums:m.albums,lastAlbum:m.lastAlbum,popularSongs:m.popularSongs,relatedArtists:t})})]})},F=(t(52),t(20)),P=t(21),J=(t(53),function(e){var s=e.name,t=e.children,i=Object(c.useState)(!0),n=Object(l.a)(i,2),r=n[0],j=n[1];Object(c.useEffect)((function(){var e=function(){var e=window.innerWidth;j(!(e<=768))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return Object(a.jsxs)("div",{className:"navigation menu__navigation",children:[Object(a.jsxs)("button",{type:"button",className:"navigation__button",onClick:function(){j(!r)},children:[Object(a.jsx)("p",{className:"navigation__name",children:s}),r?Object(a.jsx)(o.e,{size:15}):Object(a.jsx)(o.c,{size:15})]}),r?Object(a.jsx)("div",{className:"navigation__list-items",children:t}):Object(a.jsx)(a.Fragment,{})]})}),W=(t(54),function(){return Object(a.jsxs)("a",{href:"#",className:"add-playlist",children:[Object(a.jsx)(o.a,{size:25}),Object(a.jsx)("p",{className:"add-playlist__text",children:"New Playlist"})]})}),G=(t(55),function(e){var s=e.song;return Object(a.jsxs)("div",{className:"playing",children:[Object(a.jsx)("img",{src:s.image,alt:"artist",className:"playing__image"}),Object(a.jsxs)("div",{className:"playing__info",children:[Object(a.jsx)("a",{href:"#",className:"playing__text",children:s.name}),Object(a.jsx)("a",{href:"#",className:"playing__text",children:s.artist})]}),Object(a.jsx)("div",{className:"playing__mark",children:Object(a.jsx)(k.b,{size:15})})]})}),K=t(22),Y=t(23),H=function(){var e=Object(c.useState)(P),s=Object(l.a)(e,2),t=s[0];s[1];return Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsxs)("section",{className:"menu__navigation-block",children:[Object(a.jsxs)(J,{name:"Main",children:[Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(K.a,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Browse"})]}),Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(f.a,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Activity"})]}),Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(Y.a,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Radio"})]})]}),Object(a.jsxs)(J,{name:"Your music",children:[Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(d.b,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Songs"})]}),Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(d.d,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Albums"})]}),Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(f.b,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Artists"})]}),Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(w.a,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:"Local Files"})]})]}),Object(a.jsx)(J,{name:"Playlists",children:F.list.map((function(e){return Object(a.jsxs)("a",{href:"#",className:"navigation__item",children:[Object(a.jsx)("span",{className:"navigation__icon",children:Object(a.jsx)(d.d,{size:12})}),Object(a.jsx)("p",{className:"navigation__item-text",children:e})]})}))})]}),Object(a.jsx)("section",{className:"menu__playlist",children:Object(a.jsx)(W,{})}),Object(a.jsx)("section",{className:"menu__playing",children:Object(a.jsx)(G,{song:t})})]})},V=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"content__menu",children:Object(a.jsx)(H,{})}),Object(a.jsx)("div",{className:"content__artist",children:Object(a.jsx)(B,{})})]})},Q=t(6),$=t(10),q=(t(57),function(){var e=Object(c.useState)([50]),s=Object(l.a)(e,2),t=s[0],i=s[1];return Object(a.jsx)("div",{className:"track-progress-bar",children:Object(a.jsx)($.Range,{values:t,step:.1,min:0,max:100,onChange:function(e){return i(e)},renderTrack:function(e){var s=e.props,c=e.children;return Object(a.jsx)("div",{onMouseDown:s.onMouseDown,onTouchStart:s.onTouchStart,className:"track-progress-bar__container-track",style:Object(Q.a)(Object(Q.a)({},s.style),{},{display:"flex",width:"100%"}),children:Object(a.jsx)("div",{ref:s.ref,className:"track-progress-bar__track",style:{background:Object($.getTrackBackground)({values:t,colors:["#1ed760","rgb(66, 66, 66)"],min:0,max:100})},children:c})})},renderThumb:function(e){var s=e.props;return Object(a.jsx)("div",Object(Q.a)(Object(Q.a)({className:"track-progress-bar__thumb"},s),{},{style:Object(Q.a)(Object(Q.a)({},s.style),{},{cursor:"pointer"})}))}})})}),X=(t(58),function(){return Object(a.jsxs)("div",{className:"track-progress",children:[Object(a.jsx)("p",{className:"track-progress__start",children:"0:01"}),Object(a.jsx)(q,{}),Object(a.jsx)("p",{className:"track-progress__end",children:"3:07"})]})}),Z=(t(59),function(){return Object(a.jsxs)("div",{className:"actions",children:[Object(a.jsx)("button",{className:"actions__skip-backward",children:Object(a.jsx)(o.f,{size:25})}),Object(a.jsx)("button",{className:"actions__play",children:Object(a.jsx)(S.b,{size:50})}),Object(a.jsx)("button",{className:"actions__skip-forward",children:Object(a.jsx)(o.g,{size:25})})]})}),ee=(t(60),t(24)),se=t(25),te=t(26),ae=(t(61),function(){var e=Object(c.useState)([50]),s=Object(l.a)(e,2),t=s[0],i=s[1];return Object(a.jsxs)("div",{className:"volume",children:[Object(a.jsx)(f.g,{size:15}),Object(a.jsx)($.Range,{values:t,step:.1,min:0,max:100,onChange:function(e){return i(e)},renderTrack:function(e){var s=e.props,c=e.children;return Object(a.jsx)("div",{onMouseDown:s.onMouseDown,onTouchStart:s.onTouchStart,className:"volume__container-track",style:Object(Q.a)(Object(Q.a)({},s.style),{},{display:"flex",width:"70px"}),children:Object(a.jsx)("div",{className:"volume__track",ref:s.ref,style:{background:Object($.getTrackBackground)({values:t,colors:["rgb(170, 170, 170)","rgb(66, 66, 66)"],min:0,max:100})},children:c})})},renderThumb:function(e){var s=e.props;return Object(a.jsx)("div",Object(Q.a)(Object(Q.a)({className:"volume__thumb"},s),{},{style:Object(Q.a)(Object(Q.a)({},s.style),{},{cursor:"pointer"})}))}})]})}),ce=function(){return Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)("a",{href:"#",className:"options__lyrics",children:"Lyrics"}),Object(a.jsx)("a",{href:"#",className:"options__control",children:Object(a.jsx)(k.c,{size:12})}),Object(a.jsx)("a",{href:"#",className:"options__control",children:Object(a.jsx)(ee.a,{size:12})}),Object(a.jsx)("a",{href:"#",className:"options__control",children:Object(a.jsx)(se.a,{size:12})}),Object(a.jsxs)("a",{href:"#",className:"options__control",children:[Object(a.jsx)(te.a,{size:10})," Devices available"]}),Object(a.jsx)(ae,{})]})},ie=(t(62),function(){return Object(a.jsxs)("div",{className:"current-track",children:[Object(a.jsxs)("div",{className:"current-track__block",children:[Object(a.jsx)("div",{className:"current-track__actions",children:Object(a.jsx)(Z,{})}),Object(a.jsx)("div",{className:"current-track__progress",children:Object(a.jsx)(X,{})})]}),Object(a.jsx)("div",{className:"current-track__options",children:Object(a.jsx)(ce,{})})]})});var ne=function(){var e=Object(c.useState)(E),s=Object(l.a)(e,2);return s[0],s[1],Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{}),Object(a.jsx)(V,{}),Object(a.jsx)(ie,{})]})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ne,{})}),document.getElementById("root"))}]),[[63,1,2]]]);
//# sourceMappingURL=main.572b79cd.chunk.js.map