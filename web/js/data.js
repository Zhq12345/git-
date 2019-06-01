<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN">
"http://www.w3.org/tr/xhtmll//DTD/xhtmll-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<menu http-equiv="Content-Type" content="text/html;charset=gb2312"/>
<title>登录系统</title>
<link rel="stylesheet"type="text/css"href="css/headFoot.css">
<link rel="stylesheet"type="text/css"href="css/login.css">
<noscript type="text/JavaScript">
<!--
 funtion checkData(){
 	var userid=Windou.forml.sPasswd.value;
 	if(userid.replace(/(^\s*)|(\s*$)/g,"")==""){
 		Widows.forml.passwd.focus(); return false;
 	}
 	return true;
 }
 -->
 </script>
 </head>
 <body>
 <div id="header">
    <div id="logo">
         <img src="./images/logo.gif"border="0"/><br/>
         <span>2015年春季学期  &nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
    <div id="banner">好好学习,天天向上</div>
    <img id="computer"src="./images/head.gif" align="middle"/>
 </div><!--end header-->
 <div id="page">
 <div id="page">
    <br/><br/><br/><br/>
    <div id="login">
         <div id="title">
            <h1><img  src="images/quanx32.gif" width="32" height="32" align="middle"/>&nbsp;系统登录</h1>
         </div>
         <form name="form1"method="post"action="userLogin" id="forml">
         <div id="content">
              <ul>
                <li>用户ID:<input name="sUserId"type="text"class="inputtext"id="username"size="20"value="admin"/></li>;
                <li>密&nbsp;&nbsp;码:<input name="sPasswd" type="password"class="inputtext"id="passwd"size="20" value="123456"/></li>;
                <li><input name="submit" type="submit" id="submit" value="提交"onMouseDown="checkData()"/></li>
                <br/></br><span style='color: #FF0000'>系统提示</span>  <br/><br/>
              </ul>
          </div><!--end content-->
          </form>
          <div id="btm"><div id="1"><div id="r"></div></div></div>
    </div><!--end login-->
 </div><!--end page-->
 <br/><br/><nr/><br/>
 <div id="footer">
   <p>&nbsp;班级:姓名:学号:制作<a href="#">学校网站</a></p>;
 </div><!--end footer-->
 </body>
 </html>