const XLBox=document.querySelectorAll("body.tt-body-index .XLbox");const LBox=document.querySelectorAll("body.tt-body-index .Lbox");const Box1=document.querySelectorAll("body.tt-body-index .Lbox .box");const Box2=document.querySelectorAll("body.tt-body-index .Lbox .box .box2");XLBox.forEach((e)=>{e.setAttribute("class","swiper CoverSwiper swiper-initialized swiper-horizontal")});LBox.forEach((e)=>{e.setAttribute("class","swiper-wrapper")});Box1.forEach((e)=>{e.setAttribute("class","swiper-slide")})