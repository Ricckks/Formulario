function validacao () {
	 if (document.form_cadastro.nome.value==""){
		 alert ("Por favor preecha o campo Nome");  //Validação do campo Nome
		 document.form_cadastro.nome.focus();
		 return false;
	 }
	 if (document.form_cadastro.email.value=="" ||
	     document.form_cadastro.email.value.indexOf("@")==-1 ||
		 document.form_cadastro.email.value.indexOf(".")==-1) {  //validação do campo E-mail
			 alert ("Por Favor, Digite um E-mail válido");
			 document.form_cadastro.email.focus ();
			 return false;
			 }
	     if (document.form_cadastro.tsenha.value.lenght < 6){
		 alert ("O campo deverá conter no mínimo 6 digitos"); //Validação do campo Senha
		 document.form_cadastro.tsenha.focus();
		 return false;
		 
}
} 
