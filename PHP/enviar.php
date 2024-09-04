<?php
// Definir el correo al que se enviarán los comentarios
$destino = "ferjosperez2024@gmail.com";

// Recibir los datos del formulario
$nombres = $_POST["nombres"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$consulta = $_POST["consulta"];

// Crear el asunto y el cuerpo del mensaje
$asunto = "Comentario de $nombres";
$mensaje = "Nombre: $nombres\n";
$mensaje .= "Email: $email\n";
$mensaje .= "Comentario: $consulta\n";

// Enviar el correo usando la función mail()
mail($destino, $asunto, $mensaje);

// Mostrar un mensaje de confirmación
echo "Gracias por tu comentario, $nombres.";
?>
