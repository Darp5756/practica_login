<?php include("../html/head.html"); ?>

		<title>Práctica Login</title>

	</head>

	<body>

		<form id="formulario-login">

			<label class="elemento etiquetaLogin">Usuario</label>
			<input class="elemento" type="text" name="usuario" maxlength="10" required/> <br/>

			<label class="elemento etiquetaLogin">Clave</label>
			<input class="elemento" type="password" name="clave" maxlength="10" required/> <br/>

			<input class="elemento" type="submit" value="Ingresar"/>

		</form>

<?php include("../html/foot.html"); ?>