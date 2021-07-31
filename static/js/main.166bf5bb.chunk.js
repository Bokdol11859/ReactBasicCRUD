(this["webpackJsonpbasic-react"]=this["webpackJsonpbasic-react"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(7),a=n.n(c),r=(n(12),n(2)),o=n(3),d=n(5),h=n(4),l=(n(13),n(0)),j=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:Object(l.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),this.props.onChangePage()}.bind(this),children:this.props.title})}),this.props.intro]})}}]),n}(i.Component),u=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=[],e=this.props.data,n=0;n<e.length;)t.push(Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/content/"+e[n].id,onClick:function(t,e){e.preventDefault(),this.props.onChangePage(t)}.bind(this,e[n].id),children:e[n].title})},e[n].id)),n++;return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:t})})}}]),n}(i.Component),b=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("article",{children:[Object(l.jsx)("h1",{children:this.props.title}),Object(l.jsx)("p",{children:this.props.desc})]})}}]),n}(i.Component),p=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"/create",onClick:function(t){t.preventDefault(),this.props.onChangeMode("create")}.bind(this),children:"Create"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"/create",onClick:function(t){t.preventDefault(),this.props.onChangeMode("update")}.bind(this),children:"Update"})}),Object(l.jsx)("input",{type:"button",value:"Delete",onClick:function(t){t.preventDefault(),this.props.onChangeMode("delete")}.bind(this)})]})}}]),n}(i.Component),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("article",{children:[Object(l.jsx)("h1",{children:"Create"}),Object(l.jsxs)("form",{action:"/create_process",method:"post",onSubmit:function(t){t.preventDefault(),this.props.ifSubmitted(t.target.title.value,t.target.desc.value)}.bind(this),children:[Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",name:"title",placeholder:"Create Title"})}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{name:"desc",placeholder:"Create Description"})}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"submit",value:"Submit"})})]})]})}}]),n}(i.Component),f=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("article",{children:[Object(l.jsx)("h1",{children:"Update"}),Object(l.jsxs)("form",{action:"/update_process",method:"post",onSubmit:function(t){t.preventDefault(),this.props.ifSubmitted(t.target.title.value,t.target.desc.value)}.bind(this),children:[Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",name:"title",placeholder:this.props.title})}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{name:"desc",placeholder:this.props.desc})}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"submit",value:"Submit"})})]})]})}}]),n}(i.Component),m=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).content_num=3,i.state={mode:"read",selected_content_id:2,subject:{title:"WEB",intro:"HELLO, MY NAME IS ERIC"},welcome:{title:"Welcome",desc:"Hello, React!!"},contents:[{id:1,title:"HTML",desc:"HTML is for information"},{id:2,title:"CSS",desc:"CSS is for design"},{id:3,title:"JavaScript",desc:"JavaScript is for interactive"}]},i}return Object(o.a)(n,[{key:"render",value:function(){var t,e,n=null;if("welcome"===this.state.mode)t=this.state.welcome.title,e=this.state.welcome.desc,n=Object(l.jsx)(b,{title:t,desc:e});else if("read"===this.state.mode){for(var i=0;i<this.state.contents.length;){var s=this.state.contents[i];s.id===this.state.selected_content_id&&(t=s.title,e=s.desc),i++}n=Object(l.jsx)(b,{title:t,desc:e})}else if("create"===this.state.mode)n=Object(l.jsx)(O,{ifSubmitted:function(t,e){this.content_num++;var n=this.state.contents.concat({id:this.content_num,title:t,desc:e});this.setState({contents:n})}.bind(this)});else if("update"===this.state.mode)this.state.contents.length>0&&(n=Object(l.jsx)(f,{id:this.state.selected_content_id,title:this.state.contents[this.state.selected_content_id-1].title,desc:this.state.contents[this.state.selected_content_id-1].desc,ifSubmitted:function(t,e){var n=Array.from(this.state.contents);n[this.state.selected_content_id-1].title=t,n[this.state.selected_content_id-1].desc=e,this.setState({contents:n})}.bind(this)}));else if("delete"===this.state.mode&&this.state.contents.length>0){var c=Array.from(this.state.contents);c.pop(),this.setState({mode:"welcome",contents:c,selected_content_id:1})}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{title:this.state.subject.title,intro:this.state.subject.intro,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),Object(l.jsx)(u,{onChangePage:function(t){this.setState({mode:"read",selected_content_id:Number(t)})}.bind(this),data:this.state.contents}),Object(l.jsx)(p,{onChangeMode:function(t){this.setState({mode:t})}.bind(this)}),n]})}}]),n}(i.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),c(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.166bf5bb.chunk.js.map