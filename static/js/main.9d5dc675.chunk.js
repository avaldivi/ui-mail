(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,a,t){},162:function(e,a,t){},164:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),u=t(49),n=t.n(u),l=(t(63),t(12)),r=t(13),c=t(15),o=t(14),m=t(16),d=t(167),p=t(168),g=t(165),v=t(57),b=t(166),q=t(50),f=t.n(q),h=t(53),E=t.n(h),N=t(55),k=t.n(N),S=t(26),j=t.n(S),M=t(54),P=t.n(M),y=(t(65),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).state={openMenu:!1},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"openCloseMenu",value:function(e){this.setState({openMenu:!this.state.openMenu})}},{key:"render",value:function(){var e=this.props.tags.messages.map(function(e){return e.tags}),a=Object(v.a)(new Set(e.flat())),t=this.state.openMenu;return i.a.createElement("div",{className:"layout"},i.a.createElement("div",{className:"top-navigation"},i.a.createElement("div",{className:"logo"},"Ui-MAiL"),i.a.createElement(f.a,{className:"open-close-btn",onClick:this.openCloseMenu.bind(this)})),i.a.createElement("div",{className:"panel-layout"},i.a.createElement("div",{className:t?"sidebar sidebar-open":"sidebar sidebar-closed"},i.a.createElement(b.a,{className:"sidebar-item",activeClassName:"active",to:"/"},i.a.createElement(E.a,{className:"icon"})," Inbox"),i.a.createElement("b",{className:"tag-title"},i.a.createElement(P.a,{className:"icon"})," Tags Available (",a.length,")"),a.map(function(e,a){return i.a.createElement("div",{className:"tag-wrapper tag-".concat(e),key:a},i.a.createElement(b.a,{activeClassName:"active",to:"/messages/".concat(e)},e))}),i.a.createElement(b.a,{className:"sidebar-item",activeClassName:"active",to:"/messages/deleted"},i.a.createElement(j.a,{className:"icon"})," Trash"),i.a.createElement(b.a,{className:"sidebar-item",activeClassName:"active",to:"/messages/archived"},i.a.createElement(k.a,{className:"icon"})," Archived")),i.a.createElement("div",{className:"messages-wrapper"},this.props.children)))}}]),a}(s.Component)),L=t(19);function w(e){var a=e.className,t=e.name,s=e.value,u=e.children,n=e.selected,l=e.onCheck;return i.a.createElement("label",{className:a},i.a.createElement("input",{name:t,type:"checkbox",value:s,checked:n||!1,onChange:function(e){return l(s,e.target.checked)}}),u)}var I=t(158),O=t(56),U=t.n(O),V=(t(160),function(e){var a=e.message;return i.a.createElement(I.a,{to:"messages/".concat(a.id)},i.a.createElement("div",{className:"message-wrapper"},i.a.createElement("b",null,a.sender),i.a.createElement("div",{className:"message-detail-wrapper"},i.a.createElement("b",{className:"subject"},a.subject),"- ",i.a.createElement("div",{dangerouslySetInnerHTML:function(){var e=a.subject.length;return console.log(e),{__html:a.body.substring(0,85)}}()})),a.tags.map(function(e,a){return i.a.createElement("div",{className:"tags tag-".concat(e),key:a},e)}),i.a.createElement("div",{className:"date-wrapper"},U()(a.date).format("hh:mm a"))))}),A=(t(162),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(o.a)(a).call(this,e))).state={isAllSelected:!1,messagesList:t.props.messagesData.messages},t.props={messagesData:[]},t.onSelected=t.onSelected.bind(Object(L.a)(Object(L.a)(t))),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"onSelected",value:function(e,a){var t="all"===e&&a,s="all"===e&&!a,i=a,u=this.state.messagesList.map(function(a,u){return t||a.id===e?Object.assign({},a,{checked:i}):s?Object.assign({},a,{checked:!1}):a}),n=-1===u.findIndex(function(e){return!1===e.checked})||t;this.setState({messagesList:u,isAllSelected:n})}},{key:"delete",value:function(e){var a=this.state.messagesList;a.indexOf(e)>-1&&(a.splice(a.indexOf(e),1),this.setState({data:a}))}},{key:"deleteBatch",value:function(e){}},{key:"render",value:function(){var e=this,a=this.state,t=a.isAllSelected,s=a.messagesList;return i.a.createElement("div",null,i.a.createElement("h2",null,"All Messages (",s.length,")"),i.a.createElement(w,{name:"select-all",value:"all",selected:t,onCheck:this.onSelected.bind(this)},s.map(function(a,t){return i.a.createElement(w,{key:t,className:"message-with-checkbox",name:a.subject,value:a.id,selected:a.checked,onCheck:e.onSelected.bind(e)},i.a.createElement(V,{message:a}),i.a.createElement(j.a,{onClick:e.delete.bind(e,a)},"Delete"))})))}}]),a}(s.Component)),C=function(e){return i.a.createElement("div",null,i.a.createElement(A,{messagesData:e.messagesData}))},T=function(e){return i.a.createElement("div",null,i.a.createElement("h1",null,"Message Details"))},F=t(28),Z=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(y,{tags:F},i.a.createElement(p.a,null,i.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(C,Object.assign({},e,{messagesData:F}))}}),i.a.createElement(g.a,{path:"/messages/:id",render:function(e){return i.a.createElement(T,Object.assign({},e,{messagesData:F}))}}))))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e){e.exports={messages:[{id:"1",subject:"Hello",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["work"],date:"2017-03-05T03:25:43.511Z",checked:!1},{id:"2",subject:"Important information about your account",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["travel"],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"3",subject:"Lorem ipsum dolor sit amet",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:[],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"4",subject:"Your upcoming appointment",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:[],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"5",subject:"Hello again",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["travel","work"],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"6",subject:"Breaking news!",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["travel"],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"7",subject:"A spam email that got through the filter",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["work"],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"8",subject:"Meeting recap",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["work"],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"9",subject:"Ut lacinia vestibulum eros, a aliquet odio fermentum et",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:[],date:"2017-03-05T10:25:43.511Z",checked:!1},{id:"10",subject:"Your flight confirmation #122345",sender:"bob.smith@gmail.com",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia vestibulum eros, a aliquet odio fermentum et. Fusce in volutpat est, eu aliquam ante. Integer at sapien sit amet nisl venenatis ullamcorper eu sed magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a odio vitae risus dictum pellentesque in vehicula leo. Nam massa sem, pretium at lacus quis, aliquam facilisis odio. Maecenas risus purus, dapibus sed viverra a, efficitur eget leo. Integer quis magna id ante ornare euismod. Nunc aliquet arcu sit amet tincidunt feugiat. Ut et sapien ut leo blandit egestas a non arcu.</p><p>Sed finibus rhoncus nulla, eu molestie urna volutpat non. Etiam molestie faucibus nisi eget molestie. Vestibulum porta a leo a scelerisque. Mauris eget nisl sapien. Aliquam consectetur sed massa eget accumsan. Pellentesque eget arcu quam. Vivamus feugiat lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis quam vitae lorem rhoncus viverra vel et dolor. Sed pharetra cursus risus sit amet accumsan.</p>",tags:["travel","work"],date:"2017-03-05T10:25:43.511Z",checked:!1}]}},58:function(e,a,t){e.exports=t(164)},63:function(e,a,t){},65:function(e,a,t){}},[[58,2,1]]]);
//# sourceMappingURL=main.9d5dc675.chunk.js.map