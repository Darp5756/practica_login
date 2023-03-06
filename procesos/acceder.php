<?php

	require_once("conexion_bd.php");

	$usuario = $_POST["usuario"];
	$clave = $_POST["clave"];

	$sql = "SELECT es_acceso_concedido('$usuario', '$clave')";

	$consulta = mysqli_fetch_row(emplear_bd($sql))[0];

	echo $consulta;

?>