(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),c=(n(16),n(7)),s=n.n(c),u=n(10),d=n(2),l=n(3),p=n(5),h=n(4),m=n(6),f=n(1),b=(n(20),n(21),n(23),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).spreadContent=n.spreadContent.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"spreadContent",value:function(){var e=this;if(this.props.idioContent)return this.props.idioContent.content.map(function(t){var n={width:"100%",height:"400px",backgroundImage:"url("+t.main_image_url+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"};return o.a.createElement("div",{className:"card",key:t.id},o.a.createElement("div",{className:"cardBackgroundImage",style:n}),o.a.createElement("a",{href:t.full_details_url+"?key="+e.props.apiKey},o.a.createElement("p",null,t.title)))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"all-cards"},this.spreadContent())}}]),t}(o.a.Component)),v=n(25),k=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).fetchIdioContent=n.fetchIdioContent.bind(Object(f.a)(Object(f.a)(n))),n.state={apiKey:"URN4QXKCG3QD3Y5MS51A"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchIdioContent()}},{key:"fetchIdioContent",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t,n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.idio.co/1.0/content?key=".concat(this.state.apiKey),e.prev=1,e.next=4,v(t);case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:a=e.sent,this.setState({idio:a});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",{id:"index-title"},"Articles"),o.a.createElement(b,{idioContent:this.state.idio,apiKey:this.state.apiKey})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.01ded981.chunk.js.map