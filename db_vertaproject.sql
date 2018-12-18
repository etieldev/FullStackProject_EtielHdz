-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-12-2018 a las 04:11:18
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_vertaproject`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apoderados`
--

CREATE TABLE `apoderados` (
  `Id_Apoderado` int(10) NOT NULL,
  `NumApoderado` int(10) DEFAULT NULL,
  `Nombre` varchar(30) DEFAULT NULL,
  `Apellido 1` varchar(30) DEFAULT NULL,
  `Apellido2` varchar(30) DEFAULT NULL,
  `Banco` varchar(30) DEFAULT NULL,
  `Oficina` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `apoderados`
--

INSERT INTO `apoderados` (`Id_Apoderado`, `NumApoderado`, `Nombre`, `Apellido 1`, `Apellido2`, `Banco`, `Oficina`) VALUES
(716251, 1, 'Paula', 'Ramírez ', 'González', 'Bankia', 'Oficina de Bankia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apoderados_banco`
--

CREATE TABLE `apoderados_banco` (
  `ApoderadosId_Apoderado` int(10) NOT NULL,
  `BancoId_Banco` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `apoderados_banco`
--

INSERT INTO `apoderados_banco` (`ApoderadosId_Apoderado`, `BancoId_Banco`) VALUES
(716251, 2038);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apoderados_firma`
--

CREATE TABLE `apoderados_firma` (
  `FirmaId_Firma` int(10) NOT NULL,
  `ApoderadosId_Apoderado` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco`
--

CREATE TABLE `banco` (
  `Id_Banco` int(10) NOT NULL,
  `Nombre` varchar(30) DEFAULT NULL,
  `Sede` varchar(30) DEFAULT NULL,
  `País` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`Id_Banco`, `Nombre`, `Sede`, `País`) VALUES
(2038, 'Bankia', 'Madrid', 'España');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco_oficinas`
--

CREATE TABLE `banco_oficinas` (
  `BancoId_Banco` int(10) NOT NULL,
  `OficinasId_Oficinas` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `banco_oficinas`
--

INSERT INTO `banco_oficinas` (`BancoId_Banco`, `OficinasId_Oficinas`) VALUES
(2038, 91827);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `Id_Cliente` int(10) NOT NULL,
  `Nombre` varchar(30) DEFAULT NULL,
  `Apellido1` varchar(30) DEFAULT NULL,
  `Apellido2` varchar(30) DEFAULT NULL,
  `NIF` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`Id_Cliente`, `Nombre`, `Apellido1`, `Apellido2`, `NIF`) VALUES
(1, 'Ernesto', 'Vera', 'Rodríguez', '71625142s'),
(2, 'Pablo', 'González', 'Henríquez', '71625147a'),
(3, 'Laura', 'Fernández', 'Rivero', '71625142s');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `firma`
--

CREATE TABLE `firma` (
  `Id_Firma` int(10) NOT NULL,
  `num_escritura` int(10) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `precio_vivienda` double NOT NULL,
  `num_caras` int(10) NOT NULL,
  `garaje` int(4) NOT NULL,
  `trastero` int(4) NOT NULL,
  `num_persona` int(4) NOT NULL,
  `Id_Oficinas` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `firma`
--

INSERT INTO `firma` (`Id_Firma`, `num_escritura`, `fecha`, `precio_vivienda`, `num_caras`, `garaje`, `trastero`, `num_persona`, `Id_Oficinas`) VALUES
(1, 514231, '30 de noviembre de 2018', 200, 10, 0, 0, 1, 91827),
(2, 19271, '7 de diciembre de 2018', 150000, 10, 1, 1, 1, 91827),
(3, 80, '19 de octubre de 2018', 178716, 12, 0, 0, 1, 91827),
(6, 98712, '11 de diciembre de 2018', 170761, 10, 1, 1, 1, 91827),
(8, 88888899, '1 de agosto de 2018', 0, 900000, 1, 0, 1, 91827);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `firma_cliente`
--

CREATE TABLE `firma_cliente` (
  `FirmaId_Firma` int(10) NOT NULL,
  `ClienteId_Cliente` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `firma_cliente`
--

INSERT INTO `firma_cliente` (`FirmaId_Firma`, `ClienteId_Cliente`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestión del cobro`
--

CREATE TABLE `gestión del cobro` (
  `Id_gestion` int(10) NOT NULL,
  `Borrador` tinyint(1) DEFAULT NULL,
  `Validado` tinyint(1) DEFAULT NULL,
  `Pagado` tinyint(1) DEFAULT NULL,
  `MinutaID` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `minuta`
--

CREATE TABLE `minuta` (
  `Id_Minuta` int(10) NOT NULL,
  `Num_Arancel` int(10) DEFAULT NULL,
  `Concepto` int(10) DEFAULT NULL,
  `Importe` double DEFAULT NULL,
  `NotarioID` int(10) DEFAULT NULL,
  `Gestión del cobroId_gestion` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notario`
--

CREATE TABLE `notario` (
  `Id_Notario` int(10) NOT NULL,
  `Num_Notario` int(10) DEFAULT NULL,
  `Nombre` int(10) DEFAULT NULL,
  `Apellido1` int(10) DEFAULT NULL,
  `Apellido2` int(10) DEFAULT NULL,
  `Oficina` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notario_firma`
--

CREATE TABLE `notario_firma` (
  `NotarioId_Notario` int(10) NOT NULL,
  `FirmaId_Firma` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notario_minuta`
--

CREATE TABLE `notario_minuta` (
  `NotarioId_Notario` int(10) NOT NULL,
  `MinutaId_Minuta` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notary`
--

CREATE TABLE `notary` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `age` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `notary`
--

INSERT INTO `notary` (`id`, `name`, `age`) VALUES
(1, 'Santiago', '27'),
(2, 'Alejandro', '23'),
(3, 'Adrián', '21'),
(6, 'Pablo', '26'),
(8, 'Ernesto', '29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oficinas`
--

CREATE TABLE `oficinas` (
  `Id_Oficinas` int(10) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `horario` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `oficinas`
--

INSERT INTO `oficinas` (`Id_Oficinas`, `nombre`, `direccion`, `horario`) VALUES
(91827, 'Oficina de Bankia', 'Calle León y castillo, 73', '9:00 - 14:00  ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id`, `role`, `user_id`) VALUES
(1, 'ROLE_USER', 1),
(2, 'ROLE_ADMIN', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'usuario', '$2a$04$k.YJ9EfnN7iCX50THmNyGuFI7Uqgp1z.vnouXzXKMKX0ZH29hFbwS'),
(2, 'etiel', '$2a$04$uHuYKAC2LqCmYECMqT6xreENS3jH1Pvx76PXvdJ8VuQMVQAuwEBgC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apoderados`
--
ALTER TABLE `apoderados`
  ADD PRIMARY KEY (`Id_Apoderado`);

--
-- Indices de la tabla `apoderados_banco`
--
ALTER TABLE `apoderados_banco`
  ADD PRIMARY KEY (`ApoderadosId_Apoderado`,`BancoId_Banco`),
  ADD KEY `FKApoderados291495` (`BancoId_Banco`);

--
-- Indices de la tabla `apoderados_firma`
--
ALTER TABLE `apoderados_firma`
  ADD PRIMARY KEY (`FirmaId_Firma`,`ApoderadosId_Apoderado`),
  ADD KEY `FKApoderados357850` (`ApoderadosId_Apoderado`);

--
-- Indices de la tabla `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`Id_Banco`);

--
-- Indices de la tabla `banco_oficinas`
--
ALTER TABLE `banco_oficinas`
  ADD PRIMARY KEY (`BancoId_Banco`,`OficinasId_Oficinas`),
  ADD KEY `FKBanco_Ofic755308` (`OficinasId_Oficinas`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Id_Cliente`);

--
-- Indices de la tabla `firma`
--
ALTER TABLE `firma`
  ADD PRIMARY KEY (`Id_Firma`),
  ADD KEY `Id_Oficinas` (`Id_Oficinas`);

--
-- Indices de la tabla `firma_cliente`
--
ALTER TABLE `firma_cliente`
  ADD PRIMARY KEY (`FirmaId_Firma`,`ClienteId_Cliente`),
  ADD KEY `FKFirma_Clie884896` (`ClienteId_Cliente`);

--
-- Indices de la tabla `gestión del cobro`
--
ALTER TABLE `gestión del cobro`
  ADD PRIMARY KEY (`Id_gestion`);

--
-- Indices de la tabla `minuta`
--
ALTER TABLE `minuta`
  ADD PRIMARY KEY (`Id_Minuta`),
  ADD KEY `FKMinuta178287` (`Gestión del cobroId_gestion`);

--
-- Indices de la tabla `notario`
--
ALTER TABLE `notario`
  ADD PRIMARY KEY (`Id_Notario`);

--
-- Indices de la tabla `notario_firma`
--
ALTER TABLE `notario_firma`
  ADD PRIMARY KEY (`NotarioId_Notario`,`FirmaId_Firma`),
  ADD KEY `FKNotario_Fi652029` (`FirmaId_Firma`);

--
-- Indices de la tabla `notario_minuta`
--
ALTER TABLE `notario_minuta`
  ADD PRIMARY KEY (`NotarioId_Notario`,`MinutaId_Minuta`),
  ADD KEY `FKNotario_Mi550724` (`MinutaId_Minuta`);

--
-- Indices de la tabla `notary`
--
ALTER TABLE `notary`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oficinas`
--
ALTER TABLE `oficinas`
  ADD PRIMARY KEY (`Id_Oficinas`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apoderados`
--
ALTER TABLE `apoderados`
  MODIFY `Id_Apoderado` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=716252;

--
-- AUTO_INCREMENT de la tabla `banco`
--
ALTER TABLE `banco`
  MODIFY `Id_Banco` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2039;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `Id_Cliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `firma`
--
ALTER TABLE `firma`
  MODIFY `Id_Firma` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `gestión del cobro`
--
ALTER TABLE `gestión del cobro`
  MODIFY `Id_gestion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `minuta`
--
ALTER TABLE `minuta`
  MODIFY `Id_Minuta` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notario`
--
ALTER TABLE `notario`
  MODIFY `Id_Notario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notary`
--
ALTER TABLE `notary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `oficinas`
--
ALTER TABLE `oficinas`
  MODIFY `Id_Oficinas` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91828;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apoderados_banco`
--
ALTER TABLE `apoderados_banco`
  ADD CONSTRAINT `FKApoderados291495` FOREIGN KEY (`BancoId_Banco`) REFERENCES `banco` (`Id_Banco`),
  ADD CONSTRAINT `FKApoderados421294` FOREIGN KEY (`ApoderadosId_Apoderado`) REFERENCES `apoderados` (`Id_Apoderado`);

--
-- Filtros para la tabla `apoderados_firma`
--
ALTER TABLE `apoderados_firma`
  ADD CONSTRAINT `FKApoderados357850` FOREIGN KEY (`ApoderadosId_Apoderado`) REFERENCES `apoderados` (`Id_Apoderado`),
  ADD CONSTRAINT `FKApoderados943904` FOREIGN KEY (`FirmaId_Firma`) REFERENCES `firma` (`Id_Firma`);

--
-- Filtros para la tabla `banco_oficinas`
--
ALTER TABLE `banco_oficinas`
  ADD CONSTRAINT `FKBanco_Ofic489522` FOREIGN KEY (`BancoId_Banco`) REFERENCES `banco` (`Id_Banco`),
  ADD CONSTRAINT `FKBanco_Ofic755308` FOREIGN KEY (`OficinasId_Oficinas`) REFERENCES `oficinas` (`Id_Oficinas`);

--
-- Filtros para la tabla `firma`
--
ALTER TABLE `firma`
  ADD CONSTRAINT `FKFirma642813` FOREIGN KEY (`Id_Oficinas`) REFERENCES `oficinas` (`Id_Oficinas`);

--
-- Filtros para la tabla `firma_cliente`
--
ALTER TABLE `firma_cliente`
  ADD CONSTRAINT `FKFirma_Clie204186` FOREIGN KEY (`FirmaId_Firma`) REFERENCES `firma` (`Id_Firma`),
  ADD CONSTRAINT `FKFirma_Clie884896` FOREIGN KEY (`ClienteId_Cliente`) REFERENCES `cliente` (`Id_Cliente`);

--
-- Filtros para la tabla `minuta`
--
ALTER TABLE `minuta`
  ADD CONSTRAINT `FKMinuta178287` FOREIGN KEY (`Gestión del cobroId_gestion`) REFERENCES `gestión del cobro` (`Id_gestion`);

--
-- Filtros para la tabla `notario_firma`
--
ALTER TABLE `notario_firma`
  ADD CONSTRAINT `FKNotario_Fi217538` FOREIGN KEY (`NotarioId_Notario`) REFERENCES `notario` (`Id_Notario`),
  ADD CONSTRAINT `FKNotario_Fi652029` FOREIGN KEY (`FirmaId_Firma`) REFERENCES `firma` (`Id_Firma`);

--
-- Filtros para la tabla `notario_minuta`
--
ALTER TABLE `notario_minuta`
  ADD CONSTRAINT `FKNotario_Mi550724` FOREIGN KEY (`MinutaId_Minuta`) REFERENCES `minuta` (`Id_Minuta`),
  ADD CONSTRAINT `FKNotario_Mi651718` FOREIGN KEY (`NotarioId_Notario`) REFERENCES `notario` (`Id_Notario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
