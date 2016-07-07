domReady(function()
{
	var oNav = document.getElementById('nav_con');
	var oNav_hide = document.getElementById('nav_con_hide');
	var oCurrent = oNav.children[0].children[1].children[0];
	var aaMenus = oNav.children[0].children[1].children[0].children;

	var aMenus = [];

	//在菜单数组中删除掉第二个菜单
		
	for(var i=0;i<aaMenus.length;i++)
	{
		if(i!=1)
		{
			aMenus.push(aaMenus[i]);
		}
	}


	var timer = null;
	var oPos = document.getElementById('sec_pos');
	var bIssec = false;
	var iSecpos = -1;

	if(oPos)
	{
		bIssec = true;
		iSecpos = parseInt(oPos.getAttribute('pos'));		
	}
	
	
	if(bIssec)
	{
		
		for(var j=0;j<aMenus.length;j++)
		{
			aMenus[j].className = '';
		}

		aMenus[iSecpos].className = 'nowmenu';
	}

	

	var anchors = [];

	for(var i=0;i<aMenus.length;i++)
	{
		anchors.push(aMenus[i].getAttribute('anchor'));
	}

	var anchors_p = [];
	
	for(var i=0;i<anchors.length;i++)
	{
		var obj = document.getElementById(anchors[i]);
		var t2 = getPos(obj).top;
		if(t2!=0)
		{
			t2 = t2-70;
		}
		anchors_p.push(t2);
	}
	

	var total_h = document.documentElement.scrollHeight;
	var show_h = document.documentElement.clientHeight;
	var last_h = total_h-show_h-10;


	for(var i=0;i<anchors_p.length;i++)
	{
		if((total_h-anchors_p[i])<show_h)
		{
			anchors_p[i]=last_h;
		}
	}



	//获取当前菜单指示三角型
	
	var arrp = [];

	for(var i=0;i<anchors_p.length;i++)
	{
		arrp.push(anchors_p[i]);
	}

		
	for(var i=0;i<aMenus.length;i++)
	{	
		aMenus[i].index = i;

		aMenus[i].onclick = function()
		{
			
			var _this = this;

			if(!bIssec){

				scrollto(parseInt(arrp[this.index]),function(){

					for(var j=0;j<aMenus.length;j++)
					{
						aMenus[j].className = '';
					}					

					_this.className = 'nowmenu';

				});

			}
		}
	}
	

	var t=getPos(oNav).top;
	window.onscroll=function()
    {
	   var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;

	   show_cur(scrollTop);

	   if( t<= scrollTop )  
	   {
		    if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
				oNav.style.position='absolute';
				oNav.style.left=0;
				oNav.style.top=scrollTop+'px';
				oNav_hide.style.display='block';
			}else{
				oNav.style.position='fixed';
				oNav.style.left=0;
				oNav.style.top=0;
				oNav_hide.style.display='block';
			}
	   }
	   else
	   {
		   oNav.style.position='';  
		   oNav_hide.style.display='none';
		}		
    };

    

   //根据当前滚动的位置指定当前菜单 


   function show_cur(dis)
   {
   		if(!bIssec)
   		{	   		
	   		for(var i=0;i<anchors_p.length;i++)
	   		{
	   			if(dis>=anchors_p[i])
	   			{
	   				for(var k=0;k<aMenus.length;k++)
					{
						aMenus[k].className = '';
					}

	   				aMenus[i].className = 'nowmenu';
	   			}
	   		}
   		}		
   }

   	function scrollto(po,fn)
	{
		clearInterval(timer);
		timer = setInterval(function(){
		var scrolltop = document.body.scrollTop||document.documentElement.scrollTop;

		var iSpeed=(po-scrolltop)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);	

		if(scrolltop==po)
		{
			
			clearInterval(timer);
			fn && fn();
		}
		else
		{
			document.body.scrollTop=document.documentElement.scrollTop = scrolltop+iSpeed;	
		}
		},30)
	}

		
	if(window.navigator.userAgent.indexOf('Firefox')!=-1)
	{		    
		document.addEventListener('DOMMouseScroll',wheelFn,false);	
    }
	else
	{
	   	document.onmousewheel=wheelFn;
	}

	function wheelFn()
	{
		clearInterval(timer);
	}

	//焦点图幻灯片


	var oDiv=document.getElementById('slide_con');	
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var pic_num = aLi.length;		
	var width=pic_num*aLi[0].offsetWidth;

	if(pic_num>1)
	{
		var oOl = document.createElement('ol');
		oOl.className = 'hots';
		oOl.style.left = 480-parseInt((pic_num*21)/2)+'px';

		for(var i=0;i<pic_num;i++)
		{
			var li = document.createElement('li');
			if(i==0)
			{
				li.className = 'active';
			}
			oOl.appendChild(li);
		}

		var oBtnPrev=document.createElement('span');
		oBtnPrev.className = 'move_left';

		var oBtnNext=document.createElement('span');
		oBtnNext.className = 'move_right';

		oDiv.appendChild(oOl);
		oDiv.appendChild(oBtnPrev);
		oDiv.appendChild(oBtnNext);

		var aBtn = oOl.children;

		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
		
	
		var now=0;
		for(var j=0;j<aBtn.length;j++)
		{
			(function (index){
				aBtn[j].onclick=function ()
				{
					now = now+(index-now%pic_num);				
					tab();
				};
			})(j);
		}
	
		function tab()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			
			if(now>0)
			{
				aBtn[now%aBtn.length].className='active';
			}
			else
			{
				aBtn[(now%aBtn.length+aBtn.length)%aBtn.length].className='active';
			}
			startMove(oUl, -now*aLi[0].offsetWidth);
		}	
	
		oBtnPrev.onclick=function ()
		{
			now--;
			tab();
		};	
		oBtnNext.onclick=function ()
		{
			now++;		
			tab();
		};	
		function autoplay()
		{
			now++;		
			tab();
		}

		oDiv.timer = setInterval(autoplay,4000);
	
		oDiv.onmouseover=function()
		{
		    clearInterval(oDiv.timer);  
		};

		oDiv.onmouseout = function()
		{
			oDiv.timer = setInterval(autoplay,4000);
		};

	}
	
	
	var left=0;
	function startMove(obj, iTarget)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var speed=(iTarget-left)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(left==iTarget)
			{
				clearInterval(obj.timer);
			}
			else
			{
				left+=speed;
				//console.log(left);
				
				if(iTarget<0)
				{
					obj.style.left=left%width+'px';
				}
				else
				{
					obj.style.left=(left%width-width)%width+'px';
				}
			}
		}, 30);
	}


	//演讲嘉宾

	var oGuests = document.getElementById('guests').children;
	
	for(var i=1;i<oGuests.length;i++)
	{
		oGuests[i].onmouseover = function()
		{
			var oDetail = this.children[3];
			var oMask = this.children[2];
			startMove2(oMask,{opacity:70});
			startMove2(oDetail,{top:30});
		}

		oGuests[i].onmouseout = function()
		{
			var oDetail = this.children[3];
			var oMask = this.children[2];
			startMove2(oMask,{opacity:0});
			startMove2(oDetail,{top:230});
		}
	}


	var oSchedule= document.getElementById('schedule');
	var aTiplog = getByClass(oSchedule,'tiplog');

	var tiph_arr = [];

	for(var i=0;i<aTiplog.length;i++)
	{		
		aTiplog[i].children[1].style.display = 'block';
	}

	for(var i=0;i<aTiplog.length;i++)
	{		
		tiph_arr.push(aTiplog[i].children[1].offsetHeight);
	}

	for(var i=0;i<aTiplog.length;i++)
	{		
		aTiplog[i].children[1].style.display = 'none';
	}


	for(var i=0;i<aTiplog.length;i++)
	{

		aTiplog[i].index = i;
		aTiplog[i].onmouseover = function()
		{
			
			
			this.children[1].style.top = -1 * tiph_arr[this.index] + 'px';
			this.children[1].style.display = 'block';
			
		}

		aTiplog[i].onmouseout = function()
		{
			this.children[1].style.display = 'none';
		}
	}

});





function startMove2(obj,json,fn)
{
	clearInterval(obj.timer);
		
	obj.timer=setInterval(function(){
		var bStop = true;

		for(var attr in json)
		{
			var iCur=0;

			if(attr=='opacity')
			{
				iCur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj,attr));
			}

			var iSpeed=(json[attr]-iCur)/6;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			if(attr=='opacity')
			{
				
				obj.style.filter='alpha(opacity='+(iCur+iSpeed)+')';

				obj.style.opacity=(iCur+iSpeed)/100;


			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}

			if(iCur!=json[attr])
			{
				bStop=false;
			}
		}

		if(bStop)
		{
			clearInterval(obj.timer)
			fn && fn();
		}

	},30);
}

function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
	 	return getComputedStyle(obj,false)[name];
	}
}

function getPos(obj)
{
   var l=0;
   var t=0;
   while(obj)
   {
	   l+=obj.offsetLeft;
	   t+=obj.offsetTop;
	   obj=obj.offsetParent;   
   };
   
   return {left:l,top:t}
};


function getByClass(oParent, sClass)
{
	if(oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sClass);
	}
	
	var aEle=oParent.getElementsByTagName('*');
	
	var re=new RegExp('\\b'+sClass+'\\b');
	var result=[];
	
	for(var i=0;i<aEle.length;i++)
	{
		if(re.test(aEle[i].className))
		{
			result.push(aEle[i]);
		}
	}
	
	return result;
}




function domReady(fn){
	if(document.addEventListener){  
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();	
		},false);	
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn && fn();	
			}	
		}	
	}	
}