(this.webpackJsonpnx=this.webpackJsonpnx||[]).push([[0],{155:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},167:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),l=a.n(n),s=a(27),i=a.n(s),o=(a(155),a(82)),r=a(9),j=(a(156),a(157),a(12));a(158);var u=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),l=a[0],s=a[1];return Object(n.useEffect)((function(){s(e.loggedIn)})),Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-div",children:[Object(c.jsxs)(j.b,{to:"/",className:"textStyle",children:["Landing"," "]}),l?null:Object(c.jsxs)(j.b,{to:"/sign-up",className:"textStyle",children:["Sign Up"," "]}),l?null:Object(c.jsxs)(j.b,{to:"/sign-in",className:"textStyle",children:["Sign In"," "]}),Object(c.jsxs)(j.b,{to:"/view-projects",className:"textStyle",children:["Projects"," "]}),l?Object(c.jsxs)(j.b,{to:"/profile/".concat(l._id),className:"textStyle",children:["Profile"," "]}):null,l?Object(c.jsxs)(j.b,{to:"/",onClick:e.onLogout,className:"textStyle",children:["Logout"," "]}):null]})})};a(163);var d=function(){return Object(c.jsx)("div",{className:"landing-body",children:Object(c.jsxs)("div",{className:"landing-page",children:[Object(c.jsx)("h2",{children:"Welcome To"}),Object(c.jsx)("img",{src:"/images/BestTestItLogo-removebg.png"}),Object(c.jsxs)("h2",{children:["Ever needed to show your frontend to someone to make it look and perform better?"," "]}),Object(c.jsx)("h2",{children:"Now you can do it with this app!"}),Object(c.jsx)("h2",{children:"Here people can leave feedback about your frontend!"})]})})},b=(a(164),a(208));var p=function(e){return Object(c.jsx)("div",{className:"main-cont",children:Object(c.jsx)("div",{className:"form-cont",children:Object(c.jsxs)("form",{className:"form",onSubmit:e.onSignIn,children:[Object(c.jsx)("h3",{children:"Enter your email"}),Object(c.jsx)("div",{className:"ui input",children:Object(c.jsx)(b.a,{name:"email",type:"email",placeholder:"John@Doe.com"})}),Object(c.jsx)("h3",{children:"Enter your password"}),Object(c.jsx)("div",{className:"ui input",children:Object(c.jsx)(b.a,{name:"password",type:"password"})}),Object(c.jsx)("button",{className:"textStyle",type:"submit",children:"Sign In"})]})})})};a(167);var h=function(e){return Object(c.jsx)("div",{className:"main-cont",children:Object(c.jsx)("div",{className:"form-cont",children:Object(c.jsxs)("form",{className:"form",onSubmit:e.onSignUp,children:[Object(c.jsx)("h3",{children:"Enter your username"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"username",type:"text",placeholder:"JohnDoe011"})}),Object(c.jsx)("h3",{children:"Enter your email"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"email",type:"email",placeholder:"John@Doe.com"})}),Object(c.jsx)("h3",{children:"Enter your password"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"password",type:"password",placeholder:"At least 8 characters with an uppercase letter, number, special character."})}),Object(c.jsxs)("div",{className:"password-message",children:[Object(c.jsx)("p",{children:"You can enter any password, password format check has been disabled for testing"}),Object(c.jsxs)("p",{children:["You can view the code for checking password format here"," ",Object(c.jsx)("a",{target:"_blank",href:"https://github.com/VykiPetr/best-test-it-server",children:"Github repository"})]})]}),Object(c.jsx)("button",{className:"textStyle",type:"submit",children:"Sign Up"})]})})})},m=a(13),O=a(11),x=a.n(O),v=a(211),f=a(137);a(185);var g=function(e){var t=e.project,a=t.userRefId,n=t.appName,l=t.appLogo,s=t.likes,i=t._id,o=t.appDescription;return Object(c.jsx)("div",{children:Object(c.jsx)(v.a.Group,{children:Object(c.jsx)(v.a,{className:"card-style",children:Object(c.jsxs)(v.a.Content,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{floated:"left",className:"header-image",src:l})}),Object(c.jsx)(v.a.Header,{textAlign:"left",children:Object(c.jsxs)(j.b,{to:"/project/".concat(i),children:[n," "]})}),Object(c.jsx)(j.b,{to:"/profile/".concat(a._id),children:Object(c.jsx)(v.a.Meta,{floated:"right",children:a.username})}),Object(c.jsx)(v.a.Description,{className:"project-header-description",children:o}),Object(c.jsxs)(v.a.Meta,{textAlign:"right",children:[s.length," - Likes"]})]})})})})},y="https://best-test-it.herokuapp.com/api/";a(186);var N=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),u=o[0],d=o[1],b=Object(n.useState)(null),p=Object(r.a)(b,2),h=p[0],m=p[1],O=function(t){x.a.get("".concat(y,"/profile/").concat(e.match.params.profileId),{withCredentials:!0}).then((function(a){s(a.data),x.a.get("".concat(y,"/userProjects/").concat(e.match.params.profileId),{withCredentials:!0}).then((function(e){d(e.data),a.data._id===t._id?m(!0):m(null)}))}))};return Object(n.useEffect)((function(){return e.loggedIn?O(e.loggedIn):x.a.get("".concat(y,"/user"),{withCredentials:!0}).then((function(e){m(e.data),O(e.data)})),function(){}}),[]),e.loggedIn?Object(c.jsxs)("div",{className:"main-profile-cont",children:[Object(c.jsxs)("div",{className:"top-cont",children:[Object(c.jsxs)("div",{className:"image-and-name-cont",children:[Object(c.jsx)("img",{src:l.userImage,className:"profile-image",alt:"profile avatar"}),Object(c.jsxs)("div",{className:"username-edit-button-cont",children:[Object(c.jsx)("h2",{children:l.username}),h?Object(c.jsx)(j.b,{to:"/edit-profile/".concat(e.loggedIn._id),children:"Edit profile"}):null]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"profile-desc",children:l.mySkills}),Object(c.jsx)("article",{children:Object(c.jsx)("p",{className:"profile-desc",children:l.aboutMe})})]})]}),Object(c.jsxs)("h2",{children:[l.username," Projects"]}),Object(c.jsx)("div",{className:"projects-div",children:u.map((function(e,t){return Object(c.jsx)(g,{project:e},t)}))}),h?Object(c.jsxs)(j.b,{className:"textStyle",to:"/add-project",children:["Add a project"," "]}):null]}):null},S=a(69),k=(a(187),[{value:"Javascript",label:"Javascript"},{value:"MongoDB",label:"MongoDB"},{value:"Beer",label:"Beer"},{value:"Express.js",label:"Express.js"},{value:"React",label:"React"},{value:"HTML",label:"HTML"},{value:"Angular",label:"Angular"},{value:"Ruby",label:"Ruby"},{value:"Yii",label:"Yii"},{value:"MeteorJS",label:"MeteorJS"},{value:"Zend",label:"Zend"},{value:"Django",label:"Django"},{value:"Laravel",label:"Laravel"},{value:"CoffeeScript",label:"CoffeeScript"},{value:"Python",label:"Python"},{value:"Ruby",label:"Ruby"},{value:"PHP",label:"PHP"},{value:"Go",label:"Go"},{value:"Java",label:"Java"},{value:"DDP",label:"DDP"},{value:"REST",label:"REST"},{value:"JSON",label:"JSON"},{value:"XML",label:"XML"},{value:"CSV",label:"CSV"},{value:"Backbone",label:"Backbone"},{value:"Ember",label:"Ember"}]);var w=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),l=a[0],s=a[1],i=function(e){e.preventDefault(),s(!l)};return Object(c.jsx)("div",{className:"main-cont",children:Object(c.jsx)("div",{className:"form-cont",children:Object(c.jsxs)("form",{className:"form",onSubmit:e.onProjectAdd,children:[Object(c.jsx)("h3",{children:"What is the name of your project?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"appName",type:"text",placeholder:"Awesome Project"})}),Object(c.jsx)("h3",{children:"Anything you would like to tell about it?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"appDescription",type:"text",placeholder:"It is Awesome!"})}),Object(c.jsx)("h3",{children:"What are you using to create/develop this"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(S.a,{isMulti:!0,name:"appToolsData",options:k,className:"basic-multi-select",classNamePrefix:"select"})}),Object(c.jsx)("h3",{children:"What is the link of the deployed project?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"deploymentLink",type:"text",placeholder:"awesome-project.herokuapp.com"})}),Object(c.jsx)("h3",{children:"Where is the repository?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"repoLink",type:"text",placeholder:"github.com/john/doeProject"})}),Object(c.jsx)("div",{className:"upload-link-handler-cont",children:l?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Paste it here!"}),Object(c.jsx)("div",{class:"ui input input-for-upload",children:Object(c.jsx)(b.a,{name:"appLogoLink",type:"text"})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Upload your logo"}),Object(c.jsx)("input",{type:"file",className:"form-control",name:"uploadedAppLogo",id:"image"})]})}),l?Object(c.jsx)("button",{className:"textStyle",onClick:i,children:"I have a link!"}):Object(c.jsx)("button",{className:"textStyle",onClick:i,children:"Or actually I want to upload"}),Object(c.jsx)("h3",{children:"What version is it right now?"}),Object(c.jsx)(b.a,{name:"projectVersion",type:"text",placeholder:"0.0.0.0.0.0.1b"}),Object(c.jsx)("button",{className:"textStyle",type:"submit",children:"Add this project!"})]})})})},I=(a(189),[{value:"Javascript",label:"Javascript"},{value:"MongoDB",label:"MongoDB"},{value:"Beer",label:"Beer"},{value:"Express.js",label:"Express.js"},{value:"React",label:"React"},{value:"HTML",label:"HTML"},{value:"Angular",label:"Angular"},{value:"Ruby",label:"Ruby"},{value:"Yii",label:"Yii"},{value:"MeteorJS",label:"MeteorJS"},{value:"Zend",label:"Zend"},{value:"Django",label:"Django"},{value:"Laravel",label:"Laravel"},{value:"CoffeeScript",label:"CoffeeScript"},{value:"Python",label:"Python"},{value:"Ruby",label:"Ruby"},{value:"PHP",label:"PHP"},{value:"Go",label:"Go"},{value:"Java",label:"Java"},{value:"DDP",label:"DDP"},{value:"REST",label:"REST"},{value:"JSON",label:"JSON"},{value:"XML",label:"XML"},{value:"CSV",label:"CSV"},{value:"Backbone",label:"Backbone"},{value:"Ember",label:"Ember"}]);function L(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),j=o[0],u=o[1],d=Object(n.useState)(""),b=Object(r.a)(d,2),p=(b[0],b[1]),h=Object(n.useState)(""),m=Object(r.a)(h,2),O=(m[0],m[1]),v=Object(n.useState)(""),f=Object(r.a)(v,2),g=(f[0],f[1]),N=Object(n.useState)(""),k=Object(r.a)(N,2),w=(k[0],k[1]),L=Object(n.useState)(""),D=Object(r.a)(L,2),C=(D[0],D[1]),P=Object(n.useState)(""),E=Object(r.a)(P,2),M=E[0],R=E[1],T=Object(n.useState)(""),A=Object(r.a)(T,2),B=(A[0],A[1]);Object(n.useEffect)((function(){return x.a.get("".concat(y,"/project/").concat(e.match.params.projectId)).then((function(e){var t=e.data,a=t._id,c=t.appLogo,n=t.appDescription,l=t.appName,s=t.appTools,i=t.deploymentLink,o=t.projectVersion,r=t.repoLink;u(a),p(l),B(o),R(J(s)),C(r),w(i),O(n),g(c)})),function(){}}),[]);var J=function(e){var t=[];if(!e.length)return t;for(var a=0;a<e.length;a++)return t.push({value:e[a],label:e[a]}),t},_=function(e){e.preventDefault(),s(!l)};return M?Object(c.jsxs)("form",{onSubmit:function(t){e.onProjectEdit(t,j)},children:[Object(c.jsx)("h3",{children:"Change the name here!"}),Object(c.jsx)("input",{name:"appName",type:"text"}),Object(c.jsx)("h3",{children:"The description"}),Object(c.jsx)("input",{name:"appDescription",type:"text"}),Object(c.jsx)("h3",{children:"What are you using to create/develop this"}),Object(c.jsx)(S.a,{isMulti:!0,defaultValue:M,name:"appToolsData",options:I,className:"basic-multi-select",classNamePrefix:"select"}),Object(c.jsx)("h3",{children:"Deployment link"}),Object(c.jsx)("input",{name:"deploymentLink",type:"text"}),Object(c.jsx)("h3",{children:"Repository link"}),Object(c.jsx)("input",{name:"repoLink",type:"text"}),l?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Paste it here!"}),Object(c.jsx)("input",{name:"appLogo",type:"text"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Upload your logo"}),Object(c.jsx)("input",{type:"file",className:"form-control",name:"appLogo",id:"image"})]}),l?Object(c.jsx)("button",{onClick:_,children:"I have a link!"}):Object(c.jsx)("button",{onClick:_,children:"Or actually I want to upload"}),Object(c.jsx)("h3",{children:"What version is it right now?"}),Object(c.jsx)("input",{name:"projectVersion",type:"text"}),Object(c.jsx)("button",{type:"submit",children:"Edit this project!"})]}):null}a(190);var D=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),l=(a[0],a[1]),s=Object(n.useState)(null),i=Object(r.a)(s,2),o=(i[0],i[1],Object(n.useState)(!1)),j=Object(r.a)(o,2),u=j[0],d=j[1],p=Object(n.useState)(""),h=Object(r.a)(p,2),m=h[0],O=h[1],v=Object(n.useState)(""),f=Object(r.a)(v,2),g=f[0],N=f[1],S=Object(n.useState)(""),k=Object(r.a)(S,2),w=k[0],I=k[1];Object(n.useEffect)((function(){return x.a.get("".concat(y,"/profile/").concat(e.match.params.profileId),{withCredentials:!0}).then((function(e){l(e.data),O(e.data.aboutMe),N(e.data.mySkills),I(e.data.userImage)})),function(){}}),[]);var L=function(e){e.preventDefault(),d(!u)},D=function(e,t){t(e.target.value)};return Object(c.jsx)("div",{className:"main-cont",children:Object(c.jsx)("div",{className:"form-cont",children:Object(c.jsxs)("form",{className:"form",onSubmit:function(t){e.onProfileEdit(t,w)},children:[Object(c.jsx)("h3",{children:"Anything you would like to tell about yourself?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"aboutMe",type:"text",onChange:function(e){D(e,O)},value:m})}),Object(c.jsx)("h3",{children:"What are your skills?"}),Object(c.jsx)("div",{class:"ui input",children:Object(c.jsx)(b.a,{name:"mySkills",type:"text",onChange:function(e){D(e,N)},value:g})}),Object(c.jsxs)("div",{className:"image-handler-cont",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:w,style:{width:"50px",height:"50px"}})}),Object(c.jsxs)("div",{className:"upload-link-handler-cont",children:[u?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Paste it here!"}),Object(c.jsx)("div",{class:"ui input input-for-upload",children:Object(c.jsx)(b.a,{onChange:function(e){D(e,I)},value:w,name:"userImageLink",type:"text"})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Upload your profile picture"}),Object(c.jsx)("input",{type:"file",className:"form-control",name:"uploadedUserImage",id:"image"})]}),u?Object(c.jsx)("button",{className:"textStyle",onClick:L,children:"Or actually I want to upload"}):Object(c.jsx)("button",{className:"textStyle",onClick:L,children:"I have a link!"})]})]}),Object(c.jsx)("button",{className:"textStyle",type:"submit",children:"Edit your profile!"})]})})})},C=a(209),P=a(196),E=a(210);a(191);var M=function(e){return Object(c.jsx)("div",{className:"comment-grouping",children:Object(c.jsx)(E.a.Group,{className:"comment-container",children:Object(c.jsxs)(E.a,{className:"comment-container",children:[Object(c.jsx)(f.a,{size:"tiny",as:"a",src:e.data.userRefId.userImage}),Object(c.jsx)(E.a.Author,{as:"a",children:Object(c.jsx)(j.b,{to:"/profile/".concat(e.data.userRefId._id),children:e.data.userRefId.username})}),Object(c.jsxs)(E.a.Metadata,{children:[Object(c.jsxs)("div",{children:["Flag: ",e.data.commentFlag]}),Object(c.jsxs)("div",{children:["App Version: v.",e.data.projectVersion]}),Object(c.jsx)("div",{children:"Posted: "})]}),Object(c.jsx)("div",{className:"comment-text-box",children:Object(c.jsx)(E.a.Text,{className:"comment-text",children:e.data.commentBody})})]})})})},R=(a(192),[{value:"Bug",label:"Bug"},{value:"Good feature",label:"Good feature"},{value:"Bad feature",label:"Bad feature"}]);var T=Object(m.g)((function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),j=o[0],u=o[1],d=Object(n.useState)(""),b=Object(r.a)(d,2),p=b[0],h=b[1];return Object(n.useEffect)((function(){return x.a.get("".concat(y,"/project/").concat(e.match.params.projectId),{withCredentials:!0}).then((function(t){u(t.data.projectVersion),x.a.get("".concat(y,"/comments/").concat(e.match.params.projectId),{withCredentials:!0}).then((function(e){s(e.data.comments)}))})),function(){}}),[]),Object(c.jsxs)("div",{className:"all-comments-section",children:[Object(c.jsxs)(C.a,{className:"comment-form",reply:!0,onSubmit:function(t){t.preventDefault();var a=t.target.flag,c={commentBody:p,commentFlag:a.value,creatorCheck:!1,projectVersion:j};x.a.post("".concat(y,"/comment/").concat(e.match.params.projectId),c,{withCredentials:!0}).then((function(){x.a.get("".concat(y,"/comments/").concat(e.match.params.projectId),{withCredentials:!0}).then((function(e){s(e.data.comments),h("")}))}))},children:[Object(c.jsx)(S.a,{className:"basic-single",classNamePrefix:"select",name:"flag",options:R,labelPosition:"right",placeholder:"What category is your comment?"}),Object(c.jsx)(C.a.TextArea,{name:"commentBody",placeholder:"Enter your comment here",onChange:function(e){!function(e){e.preventDefault(),h(e.target.value)}(e)},value:p}),Object(c.jsx)(P.a,{content:"Add Comment",labelPosition:"left",icon:"edit",primary:!0})]}),Object(c.jsx)("div",{className:"comments-row",children:l.map((function(e,t){return Object(c.jsx)("div",{className:"comment-group",children:Object(c.jsx)(M,{data:e},t)})}))})]})}));a(193);var A=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),l=a[0],s=a[1],i=Object(n.useState)(null),o=Object(r.a)(i,2),u=o[0],d=o[1],b=Object(n.useState)(!1),p=Object(r.a)(b,2),h=p[0],m=p[1],O=Object(n.useState)([]),v=Object(r.a)(O,2),f=v[0],g=v[1],N=Object(n.useState)(""),S=Object(r.a)(N,2),k=S[0],w=S[1],I=Object(n.useState)(""),L=Object(r.a)(I,2),D=L[0],C=L[1],P=Object(n.useState)(""),E=Object(r.a)(P,2),M=E[0],R=E[1];Object(n.useEffect)((function(){x.a.get("".concat(y,"/project/").concat(e.match.params.projectId)).then((function(t){console.log(t),console.log(t.data.userRefId.username),x.a.get("".concat(y,"/user"),{withCredentials:!0}).then((function(a){C(t.data.userRefId.username),R(t.data.userRefId._id),d(a.data),s(t.data),d(e.loggedIn),w(A(t.data.appTools)),g(t.data.likes),a.data._id===t.data.userRefId?m(!0):m(!1)}))}))}),[]);var A=function(e){for(var t="",a=0;a<e.length;a++)t+=e[a]+", ";return t};return Object(c.jsxs)("div",{className:"main-project-cont",children:[Object(c.jsxs)("div",{className:"description-comment-cont",children:[Object(c.jsxs)("div",{className:"main-description-header",children:[Object(c.jsxs)("div",{className:"descrciption-header",children:[Object(c.jsxs)("div",{className:"like-delete-buttons",children:[h?Object(c.jsx)(j.b,{to:"/edit-project/".concat(l._id),children:"Edit"}):null,h?Object(c.jsx)(j.b,{onClick:function(e){e.preventDefault()},children:"Delete"}):null]}),Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{className:"project-img",style:{width:"150px"},src:l.appLogo})}),Object(c.jsxs)("div",{className:"like-version-container",children:[Object(c.jsxs)(j.b,{onClick:function(e){e.preventDefault();var t={userId:u,projectId:l._id};x.a.post("".concat(y,"/projectLike"),t,{withCredentials:!0}).then((function(e){g(e.data.likes)}))},children:[f.length," - Likes"]}),Object(c.jsxs)("p",{children:["Version - ",l.projectVersion]})]})]}),Object(c.jsx)("h1",{className:"header",children:l.appName}),Object(c.jsxs)("div",{className:"tools-made-by-desc-container",children:[Object(c.jsxs)("div",{children:["Tools used -",k]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["made by ",Object(c.jsx)(j.b,{to:"/profile/".concat(M),children:D})]}),Object(c.jsx)("p",{className:"description-box",children:l.appDescription})]})]})]}),Object(c.jsxs)("div",{className:"iframe-cont",children:[Object(c.jsxs)("h2",{children:["Check it out"," ",Object(c.jsxs)("a",{target:"_blank",href:"".concat(l.deploymentLink),children:[" ","Here!"," "]})]}),Object(c.jsx)("iframe",{className:"iframe",src:l.deploymentLink,title:"Iframe Example"})]})]}),Object(c.jsx)("div",{className:"comment-cont",children:Object(c.jsx)("div",{className:"all-comment-cont",children:Object(c.jsx)(T,{project:l})})})]})};a(194);var B=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){x.a.get("".concat(y,"/project")).then((function(e){l(e.data)}))}),[]),Object(c.jsx)("div",{className:"all-projects-body",children:Object(c.jsx)("div",{className:"all-projects-list",children:a.map((function(e,t){return Object(c.jsx)(g,{className:"project-header",project:e},t)}))})})};var J=function(){var e=Object(m.f)(),t=Object(n.useState)(null),a=Object(r.a)(t,2),l=a[0],s=a[1];Object(n.useEffect)((function(){return l||x.a.get("".concat(y,"/user"),{withCredentials:!0}).then((function(e){s(e.data)})),function(){}}),[]);var i=function(t){t.preventDefault();var a=t.target,c=a.email,n=a.password,l={email:c.value,password:n.value};x.a.post("".concat(y,"/signin"),l,{withCredentials:!0}).then((function(t){s(t.data),e.push("/profile/".concat(t.data._id))}))},j=function(t){t.preventDefault();var a=t.target,c=a.username,n=a.email,l=a.password,i={username:c.value,email:n.value,password:l.value};x.a.post("".concat(y,"/signup"),i,{withCredentials:!0}).then((function(t){s(t.data),e.push("/profile/".concat(t.data._id))}))},b=function(t,a,c,n,s,i,o){var r={appName:a,appDescription:c,appTools:n,deploymentLink:s,repoLink:i,appLogo:t,projectVersion:o};x.a.post("".concat(y,"/project/create"),r,{withCredentials:!0}).then((function(){e.push("/profile/".concat(l._id))}))},O=function(e){e.preventDefault();var t=e.target,a=t.appName,c=t.appDescription,n=t.appToolsData,l=t.deploymentLink,s=t.repoLink,i=t.uploadedAppLogo,o=t.appLogoLink,r=t.projectVersion,j="",u=[];if(n.length>1)for(var d=0;d<n.length;d++)u.push(n[d].value);else u.push(n.value);if(i){var p=i.files[0],h=new FormData;h.append("logoUrl",p),x.a.post("".concat(y,"/logo-upload"),h,{withCredentials:!0}).then((function(e){j=e.data.appLogo,b(j,a.value,c.value,u,l.value,s.value,r.value)}))}else 0==o.value.length?b(j="https://www.severnedgevets.co.uk/sites/default/files/styles/medium/public/guides/kitten.png?itok=Wpg9ghjs",a.value,c.value,u,l.value,s.value,r.value):o&&(j=o.value,b(j,a.value,c.value,u,l.value,s.value,r.value))},v=function(t,a){t.preventDefault();var c=t.target,n=c.appName,s=c.appDescription,i=c.appTools,o=c.deploymentLink,r=c.repoLink,j=c.uploadedAppLogo,u=(c.appLogoLink,c.projectVersion),d={appName:n.value,appDescription:s.value,appTools:i.value,deploymentLink:o.value,repoLink:r.value,appLogo:j.value,projectVersion:u.value};x.a.post("".concat(y,"/project//edit"),d,{withCredentials:!0}).then((function(){e.push("/profile/".concat(l._id))}))},f=function(t,a,c){var n={userImage:t,aboutMe:a,mySkills:c};x.a.post("".concat(y,"/profile/").concat(l._id),n,{withCredentials:!0}).then((function(){e.push("/profile/".concat(l._id))}))},g=function(e,t){e.preventDefault();var a=e.target,c=a.aboutMe,n=a.mySkills,l=a.userImageLink,s=a.uploadedUserImage,i="";if(s&&s.files.length){var o=s.files[0],r=new FormData;r.append("logoUrl",o),x.a.post("".concat(y,"/logo-upload"),r,{withCredentials:!0}).then((function(e){i=e.data.appLogo,f(i,c.value,n.value)}))}else l?l&&(i=l.value,f(i,c.value,n.value)):f(i=t,c.value,n.value)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{loggedIn:l,onLogout:function(t){t.preventDefault(),x.a.post("".concat(y,"/logout"),{},{withCredentials:!0}).then((function(){s(null),e.push("/")}))}}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/edit-profile/:profileId",render:function(e){return Object(c.jsx)(D,Object(o.a)({onProfileEdit:g,loggedIn:l},e))}}),Object(c.jsx)(m.a,{path:"/edit-project/:projectId",render:function(e){return Object(c.jsx)(L,Object(o.a)({onProjectEdit:v,loggedIn:l},e))}}),Object(c.jsx)(m.a,{path:"/add-project",render:function(){return Object(c.jsx)(w,{onProjectAdd:O,loggedIn:l})}}),Object(c.jsx)(m.a,{path:"/project/:projectId",render:function(e){return Object(c.jsx)(A,Object(o.a)({loggedIn:l},e))}}),Object(c.jsx)(m.a,{path:"/profile/:profileId",render:function(e){return Object(c.jsx)(N,Object(o.a)({loggedIn:l},e))}}),Object(c.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(c.jsx)(d,{})}}),Object(c.jsx)(m.a,{path:"/sign-in",render:function(){return Object(c.jsx)(p,{onSignIn:i})}}),Object(c.jsx)(m.a,{path:"/sign-up",render:function(){return Object(c.jsx)(h,{onSignUp:j})}}),Object(c.jsx)(m.a,{path:"/view-projects",render:function(){return Object(c.jsx)(B,{})}})]})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,213)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};i.a.render(Object(c.jsx)(j.a,{children:Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(J,{})})}),document.getElementById("root")),_()}},[[195,1,2]]]);
//# sourceMappingURL=main.bc820104.chunk.js.map