window.onload=function(){topBar();tabssList();zhifu();rowFake();footer()};var topBar=(function(){function b(){this.name=""}b.prototype={bindDOM:function(){var g="";g+='<li class="active"><a href="#">'+this.name+"</a></li>";g+='<li><a href="#">'+this.name2+"</a></li>";g+='<li><a href="#">'+this.name3+"</a></li>";g+='<li><a href="#">'+this.name4+"</a></li>";g+='<li><a href="#">'+this.name5+"</a></li>";g+='<li><a href="#">'+this.name6+"</a></li>";return g}};var f=new b();f.name="我要投资";f.name2="我要借款";f.name3="平台介绍";f.name4="新手专区";f.name5="最新动态";f.name6="联系我们";var d=[f];var e="";for(var c=0;c<d.length;c++){e+=d[c].bindDOM()}var a=document.getElementById("js_bar_nav");a.innerHTML=e});var tabssList=(function(){function c(){this.name=""}c.prototype={findDom:function(){var g="";g+='<li role="presentation" class="active"><a href="#home" role="tab" data-toggle="tab">'+this.name+"</a></li>";g+='<li role="presentation"><a href="#profile" role="tab" data-toggle="tab">'+this.name2+"</a></li>";g+='<li role="presentation"><a href="#messages" role="tab" data-toggle="tab">'+this.name3+"</a></li>";g+='<li role="presentation"><a href="#settings" role="tab" data-toggle="tab">'+this.name4+"</a></li>";g+='<li role="presentation"><a href="#bbb" role="tab" data-toggle="tab">'+this.name5+"</a></li>";g+='<li role="presentation"><a href="#bbb" role="tab" data-toggle="tab">'+this.name6+"</a></li>";g+='<li role="presentation"><a href="#ccc" role="tab" data-toggle="tab">'+this.name7+"</a></li>";g+='<li role="presentation" class="pull-right hidden-xs hidden-sm"><a href="#ddd" role="tab" data-toggle="tab">'+this.name8+"</a></li>";return g}};var b=new c();b.name="特别推荐";b.name2="微投资";b.name3="微小宝";b.name4="微消费";b.name5="微增利";b.name6="微金宝";b.name7="微金宝宝";b.name8="更多";var d=[b];var f="";for(var a=0;a<d.length;a++){f+=d[a].findDom()}var e=document.getElementsByClassName("js_tabss_list")[0];e.innerHTML=f});var zhifu=(function(){function k(){this.icon="";this.pbs="";this.title=""}k.prototype={domBind:function(){var i="";i+='<div class="col-md-4 col-sm-6">';i+='<a href="#">';i+='<div class="meid">';i+=""+this.icon+"";i+="<h4>"+this.title+"</h4>";i+="<p>"+this.pbs+"</p>";i+="</div>";i+="</a>";i+="</div>";return i}};var j=new k();j.title="支付交易保障";j.pbs="银联支付全程保障资金安全";j.icon='<i class="icon-uniE907"></i>';var e=new k();e.title="支付交易保障";e.pbs="银联支付全程保障资金安全";e.icon='<i class="icon-pay-square"></i>';var d=new k();d.title="支付交易保障";d.pbs="银联支付全程保障资金安全";d.icon='<i class="icon-usd"></i>';var c=new k();c.title="支付交易保障";c.pbs="银联支付全程保障资金安全";c.icon='<i class="icon-uniE907"></i>';var a=new k();a.title="支付交易保障";a.pbs="银联支付全程保障资金安全";a.icon='<i class="icon-uniE907"></i>';var m=new k();m.title="支付交易保障";m.pbs="银联支付全程保障资金安全";m.icon='<i class="icon-uniE907"></i>';var n=[j,e,d,c,a,m];var h="";for(var f=0;f<n.length;f++){h+=n[f].domBind()}var g=document.getElementById("ppp");var b=g.children[0];var l=b.children[0];l.innerHTML=h});var rowFake=(function(){function g(){this.name="";this.text=""}g.prototype={bindDOM:function(){var i="";i+='<div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">';i+='<div class="panel panel-defaults">';i+='<div class="panel-heading">';i+="<p>"+this.sub+" <sub>%</sub></p>";i+=' <p class="p2">'+this.p2+"</p>";i+='<a href="javascript:;" class="a1 badge" data-toggle="tooltip" data-placement="top" title="'+this.title1+'">'+this.a1+"</a>";i+='<a href="javascript:;" class="a2 badge" data-toggle="tooltip" data-placement="top" title="'+this.title2+'">'+this.a2+"</a>";i+="</div>";i+='<div class="panel-body">';i+="<h4>"+this.h4+"</h4>";i+='<div class="row">';i+='<div class="col-xs-6  text-left bbb">';i+="<p>"+this.row_xs_p1+"</p>";i+="<p>"+this.row_xs_p2+"</p>";i+="</div>";i+='<div class="col-xs-6  text-right bbb">';i+="<p>"+this.row_xs_p11+"</p>";i+="<p>"+this.row_xs_p2+"</p>";i+="</div>";i+='<div class="col-xs-6  text-left">';i+="<p>"+this.row_xs_p12+"</p>";i+="<p>"+this.row_xs_p21+"</p>";i+="</div>";i+='<div class="col-xs-6  text-right">';i+="<p>"+this.row_xs_p12+"</p>";i+="<p>"+this.row_xs_p22+"</p>";i+="</div>";i+="</div>";i+='<span class="prev"></span>';i+='<span class="next"></span>';i+="</div>";i+="</div>";i+="</div>";return i}};var c=new g();c.sub=9;c.p2="年利潞";c.title1="北京欢迎你!";c.title2="上海欢迎你!";c.a1="京";c.a2="沪";c.h4="新手体验表0001期";c.row_xs_p1="起步价";c.row_xs_p2="10000.22";c.row_xs_p11="起步价";c.row_xs_p21="10000.22";c.row_xs_p12="起步价";c.row_xs_p22="10000.22";var b=new g();b.sub=8;b.p2="年利潞";b.title1="湖北欢迎你!";b.title2="武汉欢迎你!";b.a1="湖";b.a2="武";b.h4="新手体验表0002期";b.row_xs_p1="起步价";b.row_xs_p2="20000.22";b.row_xs_p11="起步价";b.row_xs_p21="20000.22";b.row_xs_p12="起步价";b.row_xs_p22="20000.22";var a=new g();a.sub=8;a.p2="年利潞";a.title1="湖北欢迎你!";a.title2="武汉欢迎你!";a.a1="湖";a.a2="武";a.h4="新手体验表0002期";a.row_xs_p1="起步价";a.row_xs_p2="20000.22";a.row_xs_p11="起步价";a.row_xs_p21="20000.22";a.row_xs_p12="起步价";a.row_xs_p22="20000.22";var l=new g();l.sub=8;l.p2="年利潞";l.title1="湖北欢迎你!";l.title2="武汉欢迎你!";l.a1="湖";l.a2="武";l.h4="新手体验表0002期";l.row_xs_p1="起步价";l.row_xs_p2="20000.22";
    l.row_xs_p11="起步价";l.row_xs_p21="20000.22";l.row_xs_p12="起步价";l.row_xs_p22="20000.22";var k=new g();k.sub=8;k.p2="年利潞";k.title1="湖北欢迎你!";k.title2="武汉欢迎你!";k.a1="湖";k.a2="武";k.h4="新手体验表0002期";k.row_xs_p1="起步价";k.row_xs_p2="20000.22";k.row_xs_p11="起步价";k.row_xs_p21="20000.22";k.row_xs_p12="起步价";k.row_xs_p22="20000.22";var j=new g();j.sub=8;j.p2="年利潞";j.title1="湖北欢迎你!";j.title2="武汉欢迎你!";j.a1="湖";j.a2="武";j.h4="新手体验表0002期";j.row_xs_p1="起步价";j.row_xs_p2="20000.22";j.row_xs_p11="起步价";j.row_xs_p21="20000.22";j.row_xs_p12="起步价";j.row_xs_p22="20000.22";var d=[c,b,a,l,k,j];var h="";for(var f=0;f<d.length;f++){h+=d[f].bindDOM()}var e=document.getElementById("js_row_tab");e.innerHTML=h});var footer=(function(){function m(){this.icon=""}m.prototype={bindDom:function(){var i="";i+="<li>";i+='<a href="#">';i+=""+this.icon+"";i+="</i>";i+="</a>";i+="</li>";return i}};var g=new m();g.icon='<i class="icon-uniE930">';var f=new m();f.icon='<i class="icon-uniE907">';var e=new m();e.icon='<i class="icon-uniE903">';var d=new m();d.icon='<i class="icon-uniE901">';var c=new m();c.icon='<i class="icon-uniE900">';var b=new m();b.icon='<i class="icon-uniE904">';var a=new m();a.icon='<i class="icon-uniE92F">';var n=new m();n.icon='<i class="icon-uniE92C">';var l=[g,f,e,d,c,b,a,n];var k="";for(var j=0;j<l.length;j++){k+=l[j].bindDom()}var h=document.getElementById("js_ul_icon");h.innerHTML=k});