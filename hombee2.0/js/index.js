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


  





};