<?php

/**
 * Creando una API RESTful con los métodos GET, POST, PUT y DELETE utilizando PHP y MySQLi
 */
// Establecer encabezados CORS para permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require('configBD.php');
$METHOD = $_SERVER['REQUEST_METHOD'];
$tbl_usuarios = 'tbl_usuarios';

switch ($METHOD) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = mysqli_real_escape_string($con, $_GET['id']);
            $query = "SELECT * FROM $tbl_usuarios WHERE id = $id";
            $resultado = mysqli_query($con, $query);

            if (mysqli_num_rows($resultado) > 0) {
                $usuario = mysqli_fetch_assoc($resultado);
                echo json_encode($usuario);
            } else {
                echo json_encode(['mensaje' => 'No se encontró ningún usuario con el ID proporcionado']);
            }
        } else {
            $query = "SELECT * FROM $tbl_usuarios";
            $resultado = mysqli_query($con, $query);

            $usuarios = [];
            while ($fila = mysqli_fetch_assoc($resultado)) {
                $usuarios[] = $fila;
            }
            echo json_encode($usuarios);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $name = mysqli_real_escape_string($con, $data['name']);
        $email = mysqli_real_escape_string($con, $data['email']);
        $age = mysqli_real_escape_string($con, $data['age']);
        $speak_english = (isset($data['speak_english']) && $data['speak_english'] === 'Si') ? 1 : 0;

        $query = "INSERT INTO $tbl_usuarios (name, email, age, speak_english) VALUES ('$name', '$email', '$age', '$speak_english')";
        if (mysqli_query($con, $query)) {
            echo json_encode(['message' => 'Nuevo usuario creado correctamente']);
        } else {
            echo json_encode(['error' => 'Error al crear usuario: ' . mysqli_error($con)]);
        }
        break;

    case 'PUT':

        $id = isset($_GET['id']) ? mysqli_real_escape_string($con, $_GET['id']) : null;

        $data = json_decode(file_get_contents("php://input"), true);
        $name = mysqli_real_escape_string($con, $data['name']);
        $email = mysqli_real_escape_string($con, $data['email']);
        $age = mysqli_real_escape_string($con, $data['age']);
        $speak_english = mysqli_real_escape_string($con, $data['speak_english']);

        $query = "UPDATE $tbl_usuarios SET name='$name', email='$email', age='$age', speak_english='$speak_english' WHERE id=$id";
        if (mysqli_query($con, $query)) {
            echo json_encode(['message' => 'Usuario actualizado correctamente']);
        } else {
            echo json_encode(['error' => 'Error al actualizar usuario: ' . mysqli_error($con)]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = mysqli_real_escape_string($con, $_GET['id']);
            $query = "DELETE FROM $tbl_usuarios WHERE id=$id";
            if (mysqli_query($con, $query)) {
                echo json_encode(['message' => 'Usuario eliminado correctamente']);
            } else {
                echo json_encode(['error' => 'Error al eliminar usuario: ' . mysqli_error($con)]);
            }
        } else {
            echo json_encode(['error' => 'ID no proporcionado para eliminar usuario']);
        }
        break;

    default:
        echo json_encode(['error' => 'Método no permitido']);
        break;
}

mysqli_close($con);