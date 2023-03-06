//Se ejecuta al abrir el documento
$(document).ready(function()
{
	//Agregando submit al formulario para iniciar sesión
	$("#formulario-login").submit(function()
	{
		$.ajax(
		{
			type: "POST",
			data: $("#formulario-login").serialize(),
			url: "../procesos/acceder.php",
			success: function(respuesta)
			{
				if (respuesta == 1)
				{
					location.href = "../vistas/inicio.php";
					alert("Verificación exitosa");
				}
				else
					alert("Usuario o clave inválida");
			},
			async: false
		});
	});

	//Agregando funcionalidad al botón de cerrar sesión
	$("#boton-cerrar-sesion").click(function()
	{
		location.href = "../vistas/login.php";
		alert("Sesión finalizada");
	});
});