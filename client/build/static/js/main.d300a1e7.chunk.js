(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a(372)},152:function(e,t,a){},201:function(e,t,a){},203:function(e,t,a){},207:function(e,t,a){},22:function(e){e.exports=[{id:0,name:"Clayton Bondy",image:"images/profile-clay.png",active:!0,rate:25,profession:"Scenic Designer",employer:!1},{id:1,name:"Issac Hormel",image:"images/profile-isaac.png",active:!0,rate:30,profession:"Back-end Web Developer",employer:!1},{id:2,name:"Peng Si",image:"images/profile-peng.png",active:!0,rate:25,profession:"Front-end Web Developer",employer:!1},{id:3,name:"Anna Park",image:"images/profile-anna.png",rate:25,profession:"Front-end Web Developer",active:!1,employer:!1},{id:4,name:"Brian Duong",image:"images/profile-brian.png",rate:30,profession:"Back-end Web Developer",active:!1,employer:!1}]},243:function(e,t,a){},245:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){},370:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),i=a(387),c=a(386),s=a(14),m=a(15),u=a(17),d=a(16),p=a(18),h=(a(152),a(384)),g=a(373),E=a(374);var f=function(e){var t=!1;return t=void 0==e.isLoggedIn||e.isLoggedIn,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,r.a.createElement(h.a.Brand,null,r.a.createElement("a",{href:"/",id:"brand"},e.page)),r.a.createElement(h.a.Toggle,null)),t&&r.a.createElement(h.a.Collapse,null,r.a.createElement(g.a,{pullRight:!0},r.a.createElement(E.a,{eventKey:1,href:"/dashboard"},"Dashboard"),r.a.createElement(E.a,{eventKey:2,href:"/profile"},"Profile"),r.a.createElement(E.a,{eventKey:3,onClick:e.logout,href:"/"},"Sign Out")))))};a(201);var v=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},y=(a(203),a(376)),b=a(377),k=a(375);var S=function(e){return r.a.createElement("div",{className:"f-card",xs:12,sm:12,md:4},r.a.createElement(k.a,{to:"/account/"+e.id},r.a.createElement(y.a,{className:"profile-sm",alt:e.first_name,src:e.image,circle:!0}),r.a.createElement("div",{className:"f-text"},r.a.createElement("p",null,e.first_name," ",e.last_name),e.active?r.a.createElement("p",null,r.a.createElement(b.a,{bsStyle:"success"},"Active",e.active)):r.a.createElement("p",null,r.a.createElement(b.a,{bsStyle:"default"},"Idle")))))},C=a(23),j=(a(207),a(383)),O=a(378),N=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e,a))).handleHide=n.handleHide.bind(Object(C.a)(Object(C.a)(n))),n.state={show:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleHide",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"img-card",xs:12,sm:12,md:4},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setState({show:!0})},className:"button-refresh"},r.a.createElement("img",{src:"images/user.png",alt:"New User"}))),r.a.createElement("div",{className:"modal-container",style:{height:200}},r.a.createElement(j.a,{show:this.state.show,onHide:this.handleHide,container:this,"aria-labelledby":"contained-modal-title"},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,{id:"contained-modal-title"},"Add User")),r.a.createElement(j.a.Body,null,"Enter the Justo ID of the user you would like to add:",r.a.createElement("form",{style:{marginTop:"10px"}},r.a.createElement("input",{type:"text",placeholder:"Justo ID",name:"add_id"}))),r.a.createElement(j.a.Footer,null,r.a.createElement(O.a,{onClick:this.handleHide},"Close")))))}}]),t}(r.a.Component),w=a(187),T=a(379),x=a(27),I=a.n(x),P=a(22),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={freelancers:P},a.showPeople=function(e){console.log(a.state.freelancers.id);var t=a.state.freelancers.find(function(t){return t.id===e});a.setState({freelancers:[t]})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleLogout",value:function(){var e=this;I.a.post("/api/logout",function(){console.log("logged out")}).then(function(){e.props.history.push("/dashboard")})}},{key:"componentDidMount",value:function(){I.a.get("/api/allUsers",function(){console.log(!0)}).then(function(e){console.log(e.data.users)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{page:"Dashboard",image:"<i class='fas fa-plus'></i>",logout:this.handleLogout}),r.a.createElement(v,null,r.a.createElement(w.a,null,r.a.createElement(T.a,null,this.state.freelancers.map(function(t){return r.a.createElement(S,{style:{float:"left"},key:t.id,id:t.id,first_name:t.first_name,last_name:t.last_name,image:t.image,active:t.active,showPeople:e.showPeople})}),r.a.createElement(N,null)))))}}]),t}(n.Component),B=a(146),D=(a(243),a(143)),R=a.n(D),A=(a(245),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).printPDF=function(){var e=new R.a;console.log("test"),e.text(10,10,"You have to pay $ ".concat(a.props.payAmount.toFixed(2))),e.save("".concat(a.props.id,"_invoice.pdf"))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"p-card"},r.a.createElement("div",{className:"p-text"},r.a.createElement("p",null,r.a.createElement("strong",null,"Justo ID: "),"#",this.props.id),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Profession: "),this.props.profession),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Project Hours: "),this.props.hours,":",this.props.minutes,":",this.props.seconds),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Rate/hour: "),"$",this.props.rate),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Pay Accrued: "),"$",this.props.payAmount.toFixed(2)))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.printPDF,className:"justo-button"},"Make Payment"),r.a.createElement(k.a,{to:"/screenshare"},r.a.createElement("button",{className:"justo-button"},"Request Screen Share"))))}}]),t}(r.a.Component)),J=a(380),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={timerStarted:!1,timerStopped:!0,hours:0,minutes:0,seconds:0,hourlyPay:20,payAmount:0,captures:[],id:e.id,freelancers:P,user_id:null},a.doMath=a.doMath.bind(Object(C.a)(Object(C.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({user_id:this.props.id}),I.a.post("/api/requestInfoOnUser",function(){console.log("retrieve user")}).then(function(t){console.log(e.state.id),console.log(t)})}},{key:"handleTimerStart",value:function(e){var t=this;e.preventDefault(),this.state.timerStopped&&(this.timer=setInterval(function(){t.setState({timerStarted:!0,timerStopped:!1}),t.state.timerStarted&&(t.setState(function(e){return{seconds:e.seconds+1}}),t.state.seconds>=60&&t.setState(function(e){return{minutes:e.minutes+1,seconds:0}}),t.state.minutes>=60&&t.setState(function(e){return{hours:e.hours+1,minutes:0,seconds:0}}))},1e3))}},{key:"handleTimerStop",value:function(e){e.preventDefault(),this.setState({timerStarted:!1,timerStopped:!0}),clearInterval(this.timer)}},{key:"handleTimerReset",value:function(e){e.preventDefault(),this.setState({timerStarted:!1,timerStopped:!0,seconds:0,minutes:0,hours:0}),clearInterval(this.timer)}},{key:"doMath",value:function(e,t,a){var n=(e+t/60+a/60/60)*this.state.hourlyPay;return this.setState({payAmount:n}),this.state.payAmount}},{key:"handleTimeCapture",value:function(){var e=this;this.setState(function(t){return{captures:[].concat(Object(B.a)(t.captures),[e.state.hours+":"+e.state.minutes+":"+e.state.seconds])}}),this.doMath(this.state.hours,this.state.minutes,this.state.seconds)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(w.a,null,r.a.createElement(T.a,null,r.a.createElement(J.a,{xs:12,sm:12,md:6},r.a.createElement(S,{name:P[this.state.user_id].name,image:"../"+P[this.state.user_id].image,active:P[this.state.user_id].active,showPeople:this.showPeople})),r.a.createElement(J.a,{xs:12,sm:12,md:6},r.a.createElement(A,{key:P[this.state.user_id].id,id:P[this.state.user_id].id,name:P[this.state.user_id].name,profession:P[this.state.user_id].profession,hours:this.state.hours,minutes:this.state.minutes,seconds:this.state.seconds,rate:P[this.state.user_id].rate,payAmount:this.state.payAmount}),r.a.createElement("div",{className:"timer-controls"},r.a.createElement("div",{style:{paddingTop:"20px",color:"#ECECEC"}},"Use the buttons below to track your progress:"),r.a.createElement("button",{className:"timer-buttons",onClick:this.handleTimerStart.bind(this)},r.a.createElement("span",{className:"glyphicon glyphicon-play"})),r.a.createElement("button",{className:"timer-buttons",onClick:this.handleTimerStop.bind(this)},r.a.createElement("span",{className:"glyphicon glyphicon-pause"})),r.a.createElement("button",{className:"timer-buttons",onClick:this.handleTimeCapture.bind(this)},r.a.createElement("span",{className:"glyphicon glyphicon-usd"})),r.a.createElement("button",{className:"timer-buttons",onClick:this.handleTimerReset.bind(this)},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"}))))))))}}]),t}(r.a.Component);var L=function(e){return r.a.createElement("div",null,r.a.createElement(f,{page:"Account"}),r.a.createElement(U,{id:e.match.params.id}))};a(247);var M=function(e){return r.a.createElement("div",{className:"f-card",xs:12,sm:12,md:4},r.a.createElement("button",{style:{display:"block",textAlign:"center"},id:"upload-link",className:"justo-button"},"Upload Profile Photo"),r.a.createElement(y.a,{className:"profile-sm",alt:e.name,src:e.image,circle:!0}))};var H=function(e){return r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(w.a,null,r.a.createElement(T.a,null,r.a.createElement(J.a,{style:{paddingBottom:"20px"},xs:12,sm:12,md:6},r.a.createElement(M,{image:"../"+P[e.id].image})),r.a.createElement(J.a,{xs:12,sm:12,md:6},r.a.createElement("div",{className:"p-card"},r.a.createElement("div",{className:"p-input"},r.a.createElement("p",null,r.a.createElement("strong",null,"Justo ID: "),"#",e.id),r.a.createElement("hr",null),r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Username: "),r.a.createElement("input",{data_id:e.id,type:"text",name:"username"})),r.a.createElement("hr",null)),r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Password: "),r.a.createElement("input",{data_id:e.id,type:"text",name:"password"})),r.a.createElement("hr",null)),r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Name: "),r.a.createElement("input",{data_id:e.id,type:"text",name:"name"})),r.a.createElement("hr",null)),r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Profession: "),r.a.createElement("input",{data_id:e.id,type:"text",name:"profession"})),r.a.createElement("hr",null)),r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Rate/hour: "),r.a.createElement("input",{data_id:e.id,type:"text",name:"rate"})),r.a.createElement("hr",null)))))))))};var F=function(){return r.a.createElement("div",null,r.a.createElement(f,{page:"Profile"}),r.a.createElement(H,{id:1}))};var W=function(){return r.a.createElement("div",{className:"landing-page"},r.a.createElement(f,{page:"Justo",isLoggedIn:!1}),r.a.createElement("img",{className:"landing-logo",src:"images/justo-logo.png",alt:"justo-logo"}),r.a.createElement("p",{className:"text-block"},"Justo is a robust tracking application that allows for clear real-time information regarding rates, hours, payment and invoicing, and important dates for freelancers and employers. Justo acts as the acts as the intermediary - keeping all parties on the same timeline and ensuring that fair work is rewarded with fair pay."),r.a.createElement("div",null,r.a.createElement("button",{className:"justo-button"},r.a.createElement("a",{href:"/signup"},"Sign Up")),r.a.createElement("button",{className:"justo-button"},r.a.createElement("a",{href:"/login"},"Login"))))},q=a(57),K=a(381),$=a(385),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(q.a)({},e,n))}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;I.a.post("/api/attemptLogin",{email:n,password:r}).then(function(e){console.log(e),console.log(e.data),a.props.history.push("/dashboard")})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",null,r.a.createElement(f,{page:"Login",isLoggedIn:!1}),r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",{style:{textAlign:"center",fontSize:"16px",color:"#ECECEC",paddingBottom:"20px"}},"Login to your account to continue..."),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"email",placeholder:"Email",value:t,onChange:this.handleChange("email")})),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"password",placeholder:"Password",value:a,onChange:this.handleChange("password")})),r.a.createElement(O.a,{className:"justo-button",type:"submit"},"Submit"))))}}]),t}(n.Component),V=a(382),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={first_name:"",last_name:"",email:"",password:"",image:"",selectedOption:"employer"},a.handleChange=function(e){return function(t){var n=t.target.value;a.setState(Object(q.a)({},e,n))}},a.handleOptionChange=function(e){a.setState({selectedOption:e.target.value}),console.log(a.state.selectedOption)},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password,l=t.first_name,o=t.last_name,i=t.selectedOption,c=t.image;I.a.post("/api/newUser",{first_name:l,last_name:o,email:n,password:r,user_type:i,image:c}).then(function(e){console.log(e),console.log(e.data),a.props.history.push("/login")})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.first_name,l=e.last_name,o=e.image,i=e.selectedOption;return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Signup"),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"name",placeholder:"first name",value:n,onChange:this.handleChange("first_name")})),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"name",placeholder:"last name",value:l,onChange:this.handleChange("last_name")})),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"email",placeholder:"Email",value:t,onChange:this.handleChange("email")})),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"password",placeholder:"Password",value:a,onChange:this.handleChange("password")})),r.a.createElement(K.a,null,r.a.createElement($.a,{type:"name",placeholder:"image url",value:o,onChange:this.handleChange("image")})),r.a.createElement(K.a,null,r.a.createElement(V.a,{name:"radioGroup",value:"employer",onChange:this.handleOptionChange,checked:"employer"===i,inline:!0},"Employer")," ",r.a.createElement(V.a,{name:"radioGroup",value:"employee",onChange:this.handleOptionChange,checked:"employee"===i,inline:!0},"Employee")," "),r.a.createElement(O.a,{className:"justo-button",type:"submit"},"Submit")))}}]),t}(n.Component),Y=a(58),Q=Object(Y.a)(),X=(a(249),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={userName:""},a.handleChange=a.handleChange.bind(Object(C.a)(Object(C.a)(a))),a.handleClick=a.handleClick.bind(Object(C.a)(Object(C.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({userName:e.target.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.state.userName?(document.getElementById("identity-controls").style.display="none",document.getElementById("room-controls").style.display="inline",console.log(this.state.userName),this.props.token(this.state.userName)):alert("Please enter your name.")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"identity-controls"},r.a.createElement("p",{className:"instructions"},"Name:"),r.a.createElement("input",{id:"identity",type:"text",onChange:this.handleChange}),r.a.createElement("button",{id:"identity-connect",onClick:this.handleClick},"Connect")))}}]),t}(r.a.Component)),Z=a(144),ee=a.n(Z),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({roomName:e.target.value})},a.handleJoin=function(){if(a.state.roomName){a.log("Joining room '"+a.state.roomName+"'...");var e={name:a.state.roomName,tracks:[]};ee.a.connect(a.props.data.token,e).then(a.props.roomJoined,function(e){a.log("Could not connect to Twilio: "+e.message)})}else alert("Please enter a room name.")},a.handleLeave=function(){a.log("Leaving room..."),a.props.activeRoom.disconnect()},a.handleShareScreen=function(){a.props.getUserScreen().then(function(e){a.props.setScreenTrack(e.getVideoTracks()[0]),a.props.activeRoom.localParticipant.publishTrack(e.getVideoTracks()[0]),document.getElementById("button-share-screen").style.display="none",document.getElementById("button-unshare-screen").style.display="inline"})},a.handleUnshareScreen=function(){a.props.activeRoom.localParticipant.unpublishTrack(a.props.screenTrack),a.props.setScreenTrack(null),document.getElementById("button-share-screen").style.display="inline",document.getElementById("button-unshare-screen").style.display="none"},a.state={roomName:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"log",value:function(e){var t=document.getElementById("log");t.innerHTML+="<p>&gt;&nbsp;"+e+"</p>",t.scrollTop=t.scrollHeight}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"room-controls"},r.a.createElement("p",{className:"instructions"},"Room Name:"),r.a.createElement("input",{id:"room-name",type:"text",onChange:this.handleChange}),r.a.createElement("button",{id:"button-join",onClick:this.handleJoin},"Join Room"),r.a.createElement("button",{id:"button-leave",onClick:this.handleLeave},"Leave Room"),r.a.createElement("button",{id:"button-share-screen",onClick:this.handleShareScreen},"Share screen"),r.a.createElement("button",{id:"button-unshare-screen",onClick:this.handleUnshareScreen},"Unshare screen")))}}]),t}(r.a.Component),ae=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).isFirefox=function(){var e=!!navigator.mediaDevices.getSupportedConstraints().mediaSource,t=navigator.userAgent.match(/Firefox\/(\d+)/),a=0;return t&&t[1]&&(a=parseInt(t[1],10)),e&&a>=52},e.isChrome=function(){return"chrome"in window},e.canScreenShare=function(){return e.isChrome||e.isFirefox},e.getUserScreen=function(){if(e.canScreenShare())return e.isChrome()?new Promise(function(e,t){var a={sources:["screen"]};chrome.runtime.sendMessage("chghiijpejnhlachknhopppjcnbelpin",a,function(n){console.log("sendMessage request:"+JSON.stringify(a)),console.log("runtime response: "+n),console.log("runtime response.type: "+n.type),n&&"success"===n.type?e({streamId:n.streamId}):t(new Error("Could not get stream"))})}).then(function(e){return navigator.mediaDevices.getUserMedia({video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:e.streamId}}})}):e.isFirefox()?navigator.mediaDevices.getUserMedia({video:{mediaSource:"screen"}}):void 0},e.attachTracks=function(e,t){e.forEach(function(e){t.appendChild(e.attach())})},e.attachParticipantTracks=function(t,a){var n=Array.from(t.tracks.values());e.attachTracks(n,a)},e.detachTracks=function(e){e.forEach(function(e){e.detach().forEach(function(e){e.remove()})})},e.detachParticipantTracks=function(t){var a=Array.from(t.tracks.values());e.detachTracks(a)},e.transAwayFromPage=function(){window.addEventListener("beforeunload",e.leaveRoomIfJoined)},e.getToken=function(t){I.a.get("/token?identity="+encodeURIComponent(t)).then(function(t){console.log("getData: "+JSON.stringify(t.data)),e.setState({data:t.data}),e.log("Ready and connected as '"+e.state.data.identity+"'..."),document.getElementById("room-controls").style.display="block"})},e.roomJoined=function(t){e.setState({activeRoom:t}),e.log("Joined as '"+e.state.data.identity+"'"),document.getElementById("button-join").style.display="none",document.getElementById("button-leave").style.display="inline",e.canScreenShare()&&(document.getElementById("button-share-screen").style.display="inline"),t.participants.forEach(function(t){e.log("Already in Room: '"+t.identity+"'");var a=document.getElementById("remote-media");e.attachParticipantTracks(t,a)}),t.on("participantConnected",function(t){e.log("Joining: '"+t.identity+"'")}),t.on("trackAdded",function(t,a){e.log(a.identity+" added track: "+t.kind);var n=document.getElementById("remote-media");e.attachTracks([t],n)}),t.on("trackRemoved",function(t,a){e.log(a.identity+" removed track: "+t.kind),e.detachTracks([t])}),t.on("participantDisconnected",function(t){e.log("Participant '"+t.identity+"' left the room"),e.detachParticipantTracks(t)}),t.on("disconnected",function(){e.log("Left"),e.detachParticipantTracks(t.localParticipant),t.participants.forEach(e.detachParticipantTracks),e.setState({activeRoom:null}),document.getElementById("button-join").style.display="inline",document.getElementById("button-leave").style.display="none"})},e.log=function(e){var t=document.getElementById("log");t.innerHTML+="<p>&gt;&nbsp;"+e+"</p>",t.scrollTop=t.scrollHeight},e.leaveRoomIfJoined=function(){e.state.activeRoom&&e.state.activeRoom.disconnect()},e.setScreenTrack=function(t){e.setState({screenTrack:t})},e.state={activeRoom:null,roomName:null,screenTrack:null,data:null},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"remote-media"}),r.a.createElement("div",{id:"controls"},r.a.createElement(X,{token:this.getToken}),r.a.createElement(te,{data:this.state.data,activeRoom:this.state.activeRoom,screenTrack:this.state.screenTrack,setScreenTrack:this.setScreenTrack,getUserScreen:this.getUserScreen,roomJoined:this.roomJoined}),r.a.createElement("div",{id:"log",className:"sidebyside"})))}}]),t}(r.a.Component);var ne=function(){return r.a.createElement("div",null,r.a.createElement(f,{page:"ScreenShare"}),r.a.createElement(ae,null))};var re=function(){return r.a.createElement(i.a,{history:Q},r.a.createElement("div",null,r.a.createElement(c.a,{exact:!0,path:"/",component:W}),r.a.createElement(c.a,{exact:!0,path:"/login",component:G}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:z}),r.a.createElement(c.a,{exact:!0,path:"/dashboard",component:_}),r.a.createElement(c.a,{exact:!0,path:"/signout",component:W}),r.a.createElement(c.a,{path:"/account/:id",component:L}),r.a.createElement(c.a,{exact:!0,path:"/screenshare",component:ne}),r.a.createElement(c.a,{path:"/profile",component:F})))};a(370);o.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[147,2,1]]]);
//# sourceMappingURL=main.d300a1e7.chunk.js.map