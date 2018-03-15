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

   let items=document.querySelectorAll("#items>span");
   let slides1=document.querySelectorAll("#city .slide>p");
   let slides2=document.querySelectorAll("#pension .slide>p");
   let module1=document.querySelectorAll("#city .module");
   let module2=this.document.querySelectorAll("#pension .module");
   let section=document.querySelectorAll("section");
   //--  点击切换智慧城市，酒店和养老
   let i1=0;
   items.forEach((item,index)=>{
      item.onclick=function(){
         items[i1].style.color="#000000";
         this.style.color="#FA552E";
         section[i1].style.display="none";
         section[index].style.display="block";
         //-- 重置标识位
         i1=index;
      }
   })
   items[0].onclick();
   
   //--  点击智慧城市的侧边栏切换对应的内容
   slides1.forEach((item,index)=>{
      item.onclick=function(){
         slides1.forEach(item=>{
            item.style.border="none";
         })
         module1.forEach(item=>{
            item.style.display="none"
         });
         module1[index].style.display="block";
         this.style.borderLeft="3px solid #FA552E";
      }
   })
   slides1[0].onclick();
   
   //--  点击智慧养老的侧边栏切换对应内容
   slides2.forEach((item,index)=>{
      item.onclick=function(){
         slides2.forEach(item=>{
            item.style.border="none";
         })
         module2.forEach(item=>{
            item.style.display="none"
         });
         module2[index].style.display="block";
         this.style.borderLeft="3px solid #FA552E";
      }
   })
   slides2[0].onclick();


   //--   footer页脚的小标题跳转，通过传入的id 来显示相应的页内模块
   let jd=document.getElementById("jiudian"),
      cs=document.getElementById("chengshi"),
      yl=document.getElementById("yanglao"),
      lc=document.getElementById("liucheng"),
      zc=document.getElementById("zhichi"),
      js=document.getElementById("jieshao"),
      lx=document.getElementById("lianxi"),
      jr=document.getElementById("jiaru");
   
   let setInfo={};

   //--- 招商加盟页面中的流程和支持
   lc.onclick=function(){
      setInfo.id="liucheng";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="join.html";
   };
   zc.onclick=function(){
      setInfo.id="zhichi";
      sessionStorage.setItem("key",JSON.stringify(setInfo));
      location.href="join.html";
   };
   
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
   
   //--  页内点击页脚的智慧城市/酒店和养老 切换页面内容显示；
   jd.onclick=function(){
      window.location.hash="#jd";
      items[1].onclick();
   };
   cs.onclick=function(){
      window.location.hash="#cs";
      items[0].onclick();
   };
   yl.onclick=function(){
      window.location.hash="#yl";
      items[2].onclick();
   };


   //--   根据页脚的标题点击而传入的 key  来判断显示哪个页内模块
   let info=JSON.parse(sessionStorage.getItem("key"));
   if(info.id=="yanglao"){
      items[2].onclick();
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   }else if(info.id=="jiudian"){
      items[1].onclick();
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   }else if(info.id=="chengshi"){
      items[0].onclick();
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   }else{
      items[0].onclick();
      sessionStorage.setItem("key",JSON.stringify({id: null}));
   };



  
   

};