

function usrpas()
{
	if (document.form1.txt_user.value=="admin" && document.form1.txt_pass.value=="1234")
		{
			window.location="index.html"
		}
	else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
}

document.oncontextmenu=new Function("return false");

