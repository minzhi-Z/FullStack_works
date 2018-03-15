window.onload=function(){
   //-  导航栏的点击切换样式
   let navs=document.querySelectorAll("header>div");

   //--  跳转到相关页面
   navs[0].onclick=function(){
      location.href="index.html"
   };

   navs[1].onclick=function(){
      location.href="product.html"
   };

   navs[2].onclick=function () {
      location.href="proposal.html"
   };

   navs[3].onclick=function(){
      location.href="softOutfit.html"
   };

   navs[5].onclick=function(){
      location.href="join.html"
   };

   navs[4].onclick=function(){
      location.href="APP.html"
   };

   navs[6].onclick=function(){
      location.href="about.html"
   };

   //--- 给回到顶部的按钮添加点击事件
   let backTop=document.querySelector("footer>.backtop");
   backTop.onclick=function(){
       location.href="#"
   };
   

   //---  点击立即加盟 显示加盟申请单下载内容
   let contentDiv=document.querySelector("#content");
   let join=document.querySelector("#content>.banner>span");
   let downloadDiv=document.querySelector("#download");
   join.onclick=function(){
      contentDiv.style.display="none";
      downloadDiv.style.display="block";
   };


   //--   footer页脚的小标题跳转，通过传入的id 来显示相应的页内模块
   let jd=document.getElementById("jiudian"),
       cs=document.getElementById("chengshi"),
       yl=document.getElementById("yanglao"),
       lc=document.getElementById("lc"),
       zc=document.getElementById("zc"),
       js=document.getElementById("jieshao"),
       lx=document.getElementById("lianxi"),
       jr=document.getElementById("jiaru");
   
   let setInfo={};

   // --- 智慧解决方案中的城市，酒店和养老模块
   jd.onclick=function(){
      setInfo.id="jiudian";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="proposal.html";
   }
   cs.onclick=function(){
      setInfo.id="chengshi";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="proposal.html";
   }
   yl.onclick=function(){
      setInfo.id="yanglao";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="proposal.html";
   }

   //--- 关于我们页面中的 介绍，联系和加入模块
   js.onclick=function(){
      setInfo.id="jieshao";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="about.html";
   };
   lx.onclick=function(){
      setInfo.id="lianxi";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="about.html";
   };
   jr.onclick=function(){
      setInfo.id="jiaru";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="about.html";
   };

   //---  页内点击加盟流程和加盟支持切换到相应位置
   lc.onclick=function(){
      window.location.hash="#liucheng"
   };
   zc.onclick=function(){
      window.location.hash="#zhichi"
   };

   //--   根据页脚的标题点击而传入的 key  来判断显示到页面什么位置
   let getInfo=JSON.parse(sessionStorage.getItem("key"));
   if(getInfo.id=="liucheng"){
      window.location.hash="#liucheng"
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   }else if(getInfo.id=="zhichi"){
      window.location.hash="#zhichi"
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   }else{
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   };
   
  
   
   

    
   


};