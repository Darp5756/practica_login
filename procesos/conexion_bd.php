<?php

	function emplear_bd ($sql)
	{
		//Datos necesarios para la conexión
		$host = "localhost";
		$usuario = "root";
		$clave = "";
		$bd = "practica_login";

		$conexion = mysqli_connect($host, $usuario, $clave, $bd);

		//Si se hizo la conexión, se devuelve como salida la consulta
		if ($conexion)
			return mysqli_query($conexion, $sql);

		//Si no, acciona en caso de conexión fallida
		else
			echo mysqli_connect_error(); //Muestra el mensaje de error
	}

?>