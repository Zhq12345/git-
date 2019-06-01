<%@page contentType="text/html;charset=GBK"%>
<html>
<head>
<title>css+div页面布局</title>
<link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<%@include file="header.jsp"%>
<div id="main">
    <div id="left">
        <iframe    src="user.html"  frameborder="0"  name="onlineUser"  width="100%" height="310px" scrolling="auto"></iframe>
    </div>
    <div id="right"><p><img src="images/znz.gif"/></p></div>
</div>
<!--end main-->
<%@include file-"footer.jsp"%>
</body>
</html>