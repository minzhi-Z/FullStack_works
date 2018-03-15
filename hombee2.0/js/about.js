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

   //---  点击公司简介、联系我们等  切换相应内容
   let items=document.querySelectorAll("#items>span");
   let section=document.querySelectorAll("section");
   //-- 设置一个标识位，记录上次点击的索引
   let i=0;
   items.forEach((item,index)=>{
      item.onclick=function(){
        items[i].style.color="#000000";
         this.style.color="#FA552E";
        section[i].style.display="none";
         section[index].style.display="block";
         //--  重置标识位
         i=index;
      }
   });
   items[0].onclick();


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

      //--页内切换内容模块显示
      js.onclick=function(){
         window.location.hash="#js";
         items[0].onclick()
      };
      lx.onclick=function(){
         window.location.hash="#lx";
         items[1].onclick()
      };
      jr.onclick=function(){
         window.location.hash="#jr";
         items[3].onclick()
      };


    //--   根据页脚的标题点击而传入的 key  来判断显示哪个页内模块
    let getInfo=JSON.parse(sessionStorage.getItem("key"));
    if(getInfo.id=="jieshao"){
        items[0].onclick();
        window.location.hash="#js";
        sessionStorage.setItem("key",JSON.stringify({id: null}));
    }else if(getInfo.id=="lianxi"){
        items[1].onclick();
        window.location.hash="#lx";
        sessionStorage.setItem("key",JSON.stringify({id: null}));
    }else if(getInfo.id=="jiaru"){
        items[3].onclick();
        window.location.hash="#jr";
        sessionStorage.setItem("key",JSON.stringify({id: null}));
    }else{
        items[0].onclick();
        sessionStorage.setItem("key",JSON.stringify({id: null}));
    };


    
   




};