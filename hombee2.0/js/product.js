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

   navs[4].onclick=function(){
      location.href="APP.html"
   };

   navs[5].onclick=function(){
      location.href="join.html"
   };

   navs[6].onclick=function(){
      location.href="about.html"
   };

   //--- 给回到顶部的按钮添加点击事件
   let backTop=document.querySelector("footer>.backtop");
   backTop.onclick=function(){
       location.href="#"
   };

   //--  点击 #nav 下的二级菜单切换相应内容
   let navs2=document.querySelectorAll("#nav>span");
   let section=document.querySelectorAll("section");
   navs2.forEach((item,index)=>{
      item.onclick=function(){
         navs2.forEach(item=>{
            item.style.color="#000000"
         });
         this.style.color="#FA552E";
         section.forEach(item=>{
            item.style.display="none"
         });
         section[index].style.display="block";
      }
   })
   navs2[0].onclick();

   







};