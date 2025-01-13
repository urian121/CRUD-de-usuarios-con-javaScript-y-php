-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-01-2025 a las 21:52:50
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_crud_javascript_php`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `speak_english` varchar(10) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`id`, `name`, `email`, `age`, `speak_english`, `created_at`, `updated_at`) VALUES
(1, 'Urian', 'urian@gmail.com', 35, 'Si', '2025-01-13 15:21:48', '2025-01-13 15:21:54'),
(2, 'Brenda', 'brenda@gmail.com', 18, 'No', '2025-01-14 15:24:06', '2025-01-15 15:24:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
