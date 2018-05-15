# Variados
<!DOCYTIPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport"
    content="width=divice-width, user-scalable=no, initial-scale=1.0, maximum-scale 1.0, minimum-scale 1.0">
	<meta http-equiv="X-UAcompatible" content="ie-edge">
	<title>Página de Cadastro</title>
	<link rel="stylesheet" href="style.css">
	<script  type="text/javascript" src="validation.js"></script>
	
	</head>
	<body>
	<form name="form_cadastro" onsubmit="return validacao ();">
	<fieldset>
	 <legend><b>Cadastro do Usuário</b></legend>
	 
	
	     <div id="name">
	<label for="nome"></br>Nome</br></label>
	  </div>
	<input type="text" id="nome" placeholder="Nome completo">
	<div id="email">
	<label for="email"></br>E-mail</br></label>
	</div>
	<input type="email" id="email">
	<div id="email2">
	<label for="ConfirmarEmail"></br>Confirmar E-mail</br></label>
	</div>
	<input type="email" id=cEmail">
	<div id="senha">
	<label for="senha"></br>Senha</br></label>
	</div>
	<input type="password" id="tsenha">
	<div id="senha2">
	<label for="confirmaSenha"></br>Confirmar Senha</br></label>
	</div>
	<input type="password" id="cSenha">
	</fieldset>
    <div id="botao">
	<input type="submit" value="Enviar">
	</div>
	</form>
	
	</body>
	</html>
