<%@page language="Java" import="Java.util.*"
   contentType="text/html;charset=GBK"%>
<html>
<head>
<title>系统后台管理</title>
<link href="../css/style.css"rel="stylesheet"type="text/css"/>
</head>
<body>
    <%@include file="../header.jsp"%>
    <div id="main">
        <div id="left" style="width:20%;">
          <p>系统后台管理</p>
          <div id="list"align="center">
              <ul style="txet-indent:4px;">
                <li><a href="#"target="rightFrame">&nbsp;用户管理</a></li>
                 <li><a href="#"target="rightFrame">&nbsp;学期管理</a></li>
                 <li><a href="#"target="rightFrame">&nbsp;课程管理</a></li>
              </ul>
          </div><!--end list-->
        </div><!--end left-->
        <div id="right"style="width=:79%;">
          <iframe name="rightFrame" id="rightFrame" scrolling"auto" height="500" width="100%"
          src="default.html"marginwidth="0"marginheight="0"border="0"frameborder="0"align="center">不支持</iframe>
          </div><!--end right-->
          </div><!--end main-->
          <%@include file="../footer.jsp"%>
</body>
</html>