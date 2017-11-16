<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>

<head>
  <title>LearnOS</title>
	<link rel="stylesheet" type="text/css" href="index.css" />
	<script src="conmutaAcceso.js"></script>
</head>

<body>

  <script type="text/javascript">
  //Mostramos un texto u otro depediendo si JavaScript esta activo
  document.write("<a onclick='muestraFormAcceso()'>");
  document.write("<span class='acceso'>");
  document.write("Acceder");
  document.write("</span></a>");
</script>
<div id="formacceso">
  <form action="menu" method="post">
    <p>
      <label for="user">Login</label><br /> <input type="text"
        name="user" size="10" id="user" />
    </p>
    <p>
      <label for="ps">Clave:</label> <br /> <input type="password"
        name="ps" size="14" id="ps" />
    </p>
    <p>
      <input class="button" type="submit" name="in" value="in" />
      &nbsp;&nbsp; <input class="button" type="button" name="cancel"
        value="cancel" onclick="ocultaFormAcceso()" />
    </p>
  </form>
</div>

<script type="text/javascript">
  //Mostramos un texto u otro depediendo si JavaScript esta activo
  document.write("<a onclick='showAccessForm()'>");
  document.write("<span class='access'>");
  document.write("Acceder");
  document.write("</span></a>");
</script>
<div id="accessform">
  <form action="menu" method="post">
    <div>
      <img class="_5h01 img"
       src="https://www.facebook.com/rsrc.php/v3/yy/r/uPlIYLfynqH.png"
       alt="app-facebook" width="16" height="16" />
      <input id="FacebookCode" name="FacebookCode" type="hidden" value>
      <input id="FacebookAccessToken" name="FacebookAccessToken" type="hidden" value>
      <input data-val="true" data-val-required="The IsFromSecureRequest field is required."
        id="IsFromSecureRequest" name="IsFromSecureRequest" type="hidden" value="False">
    </div>
    <p>
      <br /> <input type="text" value="Email"
        name="email" size="10" id="email" />
    </p>
    <p>
      <br /> <input type="Password"
        name="ps" size="14" id="ps" />
    </p>
    <p>
      <input class="button" type="submit" name="in" value="Sign in" />
      &nbsp;&nbsp; <input class="button" type="button" name="cancel"
        value="Cancel" onclick="hideAccessForm()" />
    </p>
  </form>
</div>


<h1 class="header">LearnOS</h1>
<p class="info">
LearnOS is a place where to learn different programming language in an easy and funny way.
</p>
<div class="light">
<h2 class="languages">C</h2>
<p class="definition">ST about c</p>
</div>
<div class="light">
<h2 class="languages">Java</h2>
<p class="definition">ST about Java</p>
</div>
<div class="light">
<h2 class="languages">Python</h2>
<p class="definition">ST about Python</p>
</div>
</body>

</html>
