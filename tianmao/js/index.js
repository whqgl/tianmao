$(function(){
	//天猫超市选项卡
	var daohang2a=$("li",$(".daohang2")[0]);
	var daohang2lg=$(".daohang2lg");
	// console.log(daohang2lg)
	for(var q=0;q<daohang2a.length;q++){
		daohang2a[q].index=q;
		daohang2a[q].onmouseover=function(){
			for(var p=0;p<daohang2lg.length;p++){
				animate(daohang2lg[p],{opacity:0,top:0},300)
			}
			animate(daohang2lg[this.index],{opacity:1,top:-18},300)
		}
		daohang2a[q].onmouseout=function(){
			for(var p=0;p<daohang2lg.length;p++){
				animate(daohang2lg[p],{opacity:0,top:0},300)
			}
			animate(daohang2lg[this.index],{opacity:0,top:0},300)
		}
	}


	//banner轮播图
	var win=$(".banner")[0];
	var banimgs=$("li",$(".bannera")[0]);
	var banlis=$("li",$(".banbtn")[0]);	
	// console.log(banimgs)
	//状态初
	banimgs[0].style.display="block";
	banlis[0].style.background="#A2A2A2";

	var num=0;
	var t=setInterval(move,2000);
	//鼠标移入  移出
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		t=setInterval(move,2000);
	}

	//底部选项卡
	for(var i=0;i<banlis.length;i++){
		banlis[i].index=i;
		banlis[i].onclick=function(){
			for(var j=0;j<banimgs.length;j++){
				// animate(banimgs[j],{opacity:0})
				banimgs[j].style.display="none";
				banlis[j].style.background="#F1F1F1";
			}
			// animate(banimgs[this.index],{opacity:1})
			banimgs[this.index].style.display="block";
			banlis[this.index].style.background="#A2A2A2";
			num=this.index;
		}			
	}

	function move(){
		num++;
		if(num==banimgs.length){
			num=0;
		}
		for(var j=0;j<banimgs.length;j++){
			// animate(banimgs[j],{opacity:0})
			banimgs[j].style.display="none";
			banlis[j].style.background="#F1F1F1";
		}
		banimgs[num].style.display="block";
		banlis[num].style.background="#A2A2A2";
	}


	//banner左边选项卡
	var daohangli=$(".daohangli");
	var daohang=$(".daohang")[0];
	var daohangnrs=$("div",$(".daohang")[0]);
	// console.log(daohangnrs)
	for(var i=0;i<daohangli.length;i++){
		daohangli[i].index=i;
		daohangli[i].onmouseover=function(){
			for(var j=0;j<daohangnrs.length;j++){
				daohangnrs[j].style.display="none";
			}
			daohangnrs[this.index].style.display="block";
		}
		daohangli[i].onmouseout=function(){
			for(var j=0;j<daohangnrs.length;j++){
				daohangnrs[j].style.display="none";
			}
			daohangnrs[this.index].style.display="none";
		}
	}
	
/*---------------------------------------------------*/ 


	//按需加载
	var ch=document.documentElement.clientHeight;
	var floors=$(".floor");
	//搜索框	
	var tmdh=$(".tmdh")[0];
	//放楼层颜色
	var arr=["hot0","hot1","hot2","hot3","hot4","hot5","hot6","hot7"];

	var arr1=[];
	
	for(var i=0;i<floors.length;i++){
		arr1.push(floors[i].offsetTop);
		// console.log(arr1[i])
	}	
    // 楼层跳转
    var lctz=$(".lctz")[0];
	var lcli=$("li",$(".lctz")[0]);
	// console.log(lcli)

	 //楼层开关
	 var flag=true;
	 //搜索框开关
	 var tflag=true;

	//返回顶层
	var back=$(".back")[0];
	back.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}

	// //楼层跳转选项卡
	lcli[0].id="hot0";
	for(var i=0;i<lcli.length;i++){
		lcli[i].index=i;
		lcli[i].onclick=function(){
			flag=false;
			for(var j=0;j<lcli.length;j++){
				lcli[j].id="";
				// console.log(lcli[j].id)
			}
			lcli[this.index].id=arr[this.index];//arr[this.index]
			console.log(lcli[this.index].style.background);
			animate(document.body,{scrollTop:arr1[this.index]},function(){
				flag=true;
			})
			animate(document.documentElement,{scrollTop:arr1[this.index]},function(){
				flag=true;
			})
		}
	}


	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;
		for(var i=0;i<floors.length;i++){
			if(ch+scrolltop>=arr1[i]+50){
				//楼层图片
				var floorimg=$("img",floors[i]);
				// console.log(floorimg)
				for(var j=0;j<floorimg.length;j++){
					floorimg[j].src=floorimg[j].getAttribute("srce");
				}
			}
		}
		if(!flag) return;
		//楼层按钮
		for(var i=0;i<floors.length;i++){
			if(ch+scrolltop>=arr1[i]+50){
				for(var j=0;j<lcli.length;j++){
					lcli[j].id="";
				// console.log(lcli[j].id)
				}
				lcli[i].id=arr[i];//arr[this.index]
			}
		}

		//搜索框
		if(scrolltop>=arr1[0]){
			if(tflag){
				tflag=false;
				animate(tmdh,{top:0});
				animate(lctz,{opacity:1});
				animate(back,{opacity:1});
			}
			
		}else{
			if(!tflag){
				tflag=true;
				animate(tmdh,{top:-50});
				animate(lctz,{opacity:0});
				animate(back,{opacity:0});
			}
			
		}
	}

	

	/*-----------------------------------------*/ 


	//购物车变图
	var youce2=$("a",$(".youce2")[0])[0];
	// console.log(youce2)
	var youce2img=$(".youce2img")[0];
	// console.log(youce2img)	
	youce2.onmouseover=function(){
		youce2img.style.display="block";
	}
	youce2.onmouseout=function(){
		youce2img.style.display="none";
	}

	var youce1aa=$(".youcea",$(".youce")[0]);
	var youce1a=$(".youce1a");
	// console.log(youce1a)
	for(var j=0;j<youce1aa.length;j++){			
		youce1aa[j].index=j;
		youce1aa[j].onmouseover=function(){			
			for(var j=0;j<youce1aa.length;j++){
				animate(youce1a[j],{opacity:0},function(){
					// animate(youce1a[j],{right:10})
				})
			}
			animate(youce1a[this.index],{opacity:1,right:34})
		}	
		youce1aa[j].onmouseout=function(){
			for(var j=0;j<youce1aa.length;j++){
				animate(youce1a[j],{opacity:0})
			}
			animate(youce1a[this.index],{opacity:0,right:75})
		}						
	
	}

	//热门品牌动画
	var rmppzli=$("li",$(".rmppz")[0]);
	var rmppz1=$(".rmppz1");
	// console.log(rmppz1)
	for(var r=0;r<rmppzli.length;r++){
		rmppzli[r].index=r;
		rmppzli[r].onmouseover=function(){
			for(var r=0;r<rmppz1.length;r++){
				animate(rmppz1[r],{opacity:0})
			}
			animate(rmppz1[this.index],{opacity:1})
		}
			rmppzli[r].onmouseout=function(){
			for(var r=0;r<rmppz1.length;r++){
				animate(rmppz1[r],{opacity:0})
			}
			animate(rmppz1[this.index],{opacity:0})
		}
	}
	


	//亲子时光动画
	var qzsgrimgc=$(".qzsgrimgc");
	var qzsgrimgcimg=$("img",$(".qzsgr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<qzsgrimgc.length;p++){
		qzsgrimgc[p].index=p;
		qzsgrimgc[p].onmouseover=function(){
			for(var i=0;i<qzsgrimgcimg.length;i++){
				animate(qzsgrimgcimg[i],{left:0})
			}
			animate(qzsgrimgcimg[this.index],{left:-10})
		}
		qzsgrimgc[p].onmouseout=function(){
			for(var i=0;i<qzsgrimgcimg.length;i++){
				animate(qzsgrimgcimg[i],{left:0})
			}
			animate(qzsgrimgcimg[this.index],{left:0})
		}
	}

	//户外出行动画
	var hwcxrimgc=$(".hwcxrimgc");
	var hwcxrimgcimg=$("img",$(".hwcxr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<hwcxrimgc.length;p++){
		hwcxrimgc[p].index=p;
		hwcxrimgc[p].onmouseover=function(){
			for(var i=0;i<hwcxrimgcimg.length;i++){
				animate(hwcxrimgcimg[i],{left:0})
			}
			animate(hwcxrimgcimg[this.index],{left:-10})
		}
		hwcxrimgc[p].onmouseout=function(){
			for(var i=0;i<hwcxrimgcimg.length;i++){
				animate(hwcxrimgcimg[i],{left:0})
			}
			animate(hwcxrimgcimg[this.index],{left:0})
		}
	}

	//打造爱巢动画
	var dzacrimgc=$(".dzacrimgc");
	var dzacrimgcimg=$("img",$(".dzacr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<dzacrimgc.length;p++){
		dzacrimgc[p].index=p;
		dzacrimgc[p].onmouseover=function(){
			for(var i=0;i<dzacrimgcimg.length;i++){
				animate(dzacrimgcimg[i],{left:0})
			}
			animate(dzacrimgcimg[this.index],{left:-10})
		}
		dzacrimgc[p].onmouseout=function(){
			for(var i=0;i<dzacrimgcimg.length;i++){
				animate(dzacrimgcimg[i],{left:0})
			}
			animate(dzacrimgcimg[this.index],{left:0})
		}
	}

	//居家生活动画
	var jjshrimgc=$(".jjshrimgc");
	var jjshrimgcimg=$("img",$(".jjshr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<jjshrimgc.length;p++){
		jjshrimgc[p].index=p;
		jjshrimgc[p].onmouseover=function(){
			for(var i=0;i<jjshrimgcimg.length;i++){
				animate(jjshrimgcimg[i],{left:0})
			}
			animate(jjshrimgcimg[this.index],{left:-10})
		}
		jjshrimgc[p].onmouseout=function(){
			for(var i=0;i<jjshrimgcimg.length;i++){
				animate(jjshrimgcimg[i],{left:0})
			}
			animate(jjshrimgcimg[this.index],{left:0})
		}
	}

	//潮流酷玩动画
	var clkwrimgc=$(".clkwrimgc");
	var clkwrimgcimg=$("img",$(".clkwr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<clkwrimgc.length;p++){
		clkwrimgc[p].index=p;
		clkwrimgc[p].onmouseover=function(){
			for(var i=0;i<clkwrimgcimg.length;i++){
				animate(clkwrimgcimg[i],{left:0})
			}
			animate(clkwrimgcimg[this.index],{left:-10})
		}
		clkwrimgc[p].onmouseout=function(){
			for(var i=0;i<clkwrimgcimg.length;i++){
				animate(clkwrimgcimg[i],{left:0})
			}
			animate(clkwrimgcimg[this.index],{left:0})
		}
	}

	//美丽人生动画
	var mlrsrimgc=$(".mlrsrimgc");
	var mlrsrimgcimg=$("img",$(".mlrsr")[0]);
	// console.log(qzsgrimgc)
	for(var p=0;p<mlrsrimgc.length;p++){
		mlrsrimgc[p].index=p;
		mlrsrimgc[p].onmouseover=function(){
			for(var i=0;i<mlrsrimgcimg.length;i++){
				animate(mlrsrimgcimg[i],{left:0})
			}
			animate(mlrsrimgcimg[this.index],{left:-10})
		}
		mlrsrimgc[p].onmouseout=function(){
			for(var i=0;i<mlrsrimgcimg.length;i++){
				animate(mlrsrimgcimg[i],{left:0})
			}
			animate(mlrsrimgcimg[this.index],{left:0})
		}
	}

	

})