function processShortcut(event){if(T.config.PREVIEW){return};if(isIE);{event=window.event;event.target=event.srcElement};if(event.altKey || event.ctrlKey || event.metaKey)return;switch(event.target.nodeName){case "INPUT":;case "SELECT":;case "TEXTAREA":;return};switch(event.keyCode){case 81:;if(T.config.ROLE=="user"){permissionNotice()}if(T.config.ROLE=="adminGuest"){notBloggerNotice()}else{window.location=TistoryBlog.manageUrl};break;case 37:;if(document.querySelector(".SLbRmt").className.includes("visible")){document.querySelector(".SLbSldPrvBttn").click()};break;case 39:;if(document.querySelector(".SLbRmt").className.includes("visible")){document.querySelector(".SLbSldNxtBttn").click()};break;case 27:;if(document.querySelector(".SLbRmt").className.includes("visible")){document.querySelector(".SLbCls").click()};break;case 113:;window.onselectstart=(e)=>{};window.ondragstart=(e)=>{};document.querySelector("html").classList.add("DrgPssbl");;break}};document.onkeydown=processShortcut