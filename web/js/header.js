<%@page language="Java" import="Java.util.*"
   contentType="text/html;charset=GBK"%>
<%
   String path = request.getContextPath();
   String bassPath = request.getScheme()+"://"
              +request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<link href="../css/style.css" rel="stylesheet" type="text/css"/>
<div id="header">
     <div id="logo">
         <img src="<%=bassPath%>../img/images/logol.gif"border="0"/><br/>
         <span>2015年春季学期&nbsp;&nbsp;&nbsp;&nbsp;当前用户：小李（管理员）</span>
	</div>
	<!--div id="banner">好好学习，天天向上</div-->
	<div id="menu">
	    <ul><li><a href="<%=bassPath%>main.jsp">首页</a></li>
	        <li><a href="#">在线学习</a></li>
	        <li><a href="#">作业管理</a></li>
	        <li><a href="<%=bassPath%>sysAdm/indexAdm.jsp">后台管理</a></li>
	        <li><a href="#">关于我们</a></li>
	        li><a href="<%=bassPath%>index.jsp" title="回到登录页面.">重新登录</a></li>
	        </ul></div><!--end menu-->
	    <img id="computer" src="<%=bassPath%>images/head.gif"align="middle"/>
</div>