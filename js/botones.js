//Se ejecuta al abrir el documento
$(document).ready(function()
{
	//Agregando submit al formulario para iniciar sesión
	$("#formulario-login").submit(function(event)
	{
		event.preventDefault();
		$.ajax(
		{
			type: "POST",
			data: $("#formulario-login").serialize(),
			url: "../procesos/acceder.php",
			success: function(respuesta)
			{
				if (respuesta == 1)
				{
				    alert("Verificación exitosa");
				    window.location.href = "../vistas/inicio.php";
				}
				else
					alert("Usuario o clave inválida");
			}
		});
	});

	//Agregando funcionalidad al botón de cerrar sesión
	$("#boton-cerrar-sesion").click(function()
	{
	    alert("Sesión finalizada");
	    window.location.href = "../vistas/login.php";
	});
});
