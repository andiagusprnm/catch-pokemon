-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 26, 2021 at 02:35 PM
-- Server version: 8.0.26-0ubuntu0.20.04.2
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `Exchanges`
--

CREATE TABLE `Exchanges` (
  `id` int NOT NULL,
  `user_submission` int DEFAULT NULL,
  `pokemon_id` int DEFAULT NULL,
  `wanted` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_exchange` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `Pokemons`
--

CREATE TABLE `Pokemons` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `picture` text,
  `owner_user_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Pokemons`
--

INSERT INTO `Pokemons` (`id`, `name`, `type`, `weight`, `height`, `picture`, `owner_user_id`, `createdAt`, `updatedAt`) VALUES
(1, 'bulbasaur', 'grass', 69, 7, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', 1, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(2, 'ivysaur', 'grass', 10, 130, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(3, 'venusaur', 'grass', 20, 1000, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(4, 'charmander', 'fire', 6, 85, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 1, '2021-08-25 23:46:11', '2021-08-26 06:55:48'),
(5, 'charmeleon', 'fire', 11, 190, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(6, 'charizard', 'fire', 17, 905, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(7, 'squirtle', 'water', 5, 90, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(8, 'wartortle', 'water', 10, 225, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(9, 'blastoise', 'water', 16, 855, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(10, 'caterpie', 'bug', 3, 29, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', NULL, '2021-08-25 23:46:11', '2021-08-25 23:46:11'),
(11, 'caterpie', 'grass', 3, 29, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(12, 'butterfree', 'bug', 11, 320, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(13, 'run-away', 'bug', 6, 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(14, 'kakuna', 'bug', 6, 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(15, 'sniper', 'bug', 10, 295, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(16, 'keen-eye', 'normal', 3, 18, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05'),
(17, 'tangled-feet', 'normal', 3, 28, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png', NULL, '2021-08-26 00:30:05', '2021-08-26 00:30:05');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20210825103100-create-user.js'),
('20210825161339-create-pokemon.js'),
('20210826072828-create-exchange.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `firstname`, `lastname`, `email`, `password`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Aldi', 'Bstm', 'aldibstm@gmail.com', '$2b$10$n/OPOYdkf4N62S5bLfPfAOJipGOuDMR1JhFRkDmgk3JwciOYJG.36', 'default.jpg', '2021-08-25 12:35:05', '2021-08-25 12:35:05'),
(2, 'Farhan', 'Bstm', 'farhanbstm@gmail.com', '$2b$10$g5xz12FXlHDBMSBLRpb/bO/zvuWH0rjM8AjkIQoCAxO1ZXmsFuJna', 'default.jpg', '2021-08-25 12:38:45', '2021-08-25 12:38:45'),
(3, 'Satria', 'Bstm', 'satriabstm@gmail.com', '$2b$10$pkeywcq1gwnetEVJWjHxLeE4kyjUv8UHFkRpFA1I5232Qnpv1JEyG', 'default.jpg', '2021-08-26 03:00:18', '2021-08-26 03:00:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Exchanges`
--
ALTER TABLE `Exchanges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_submission` (`user_submission`),
  ADD KEY `pokemon_id` (`pokemon_id`),
  ADD KEY `user_exchange` (`user_exchange`);

--
-- Indexes for table `Pokemons`
--
ALTER TABLE `Pokemons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `owner_user_id` (`owner_user_id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Exchanges`
--
ALTER TABLE `Exchanges`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Pokemons`
--
ALTER TABLE `Pokemons`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Exchanges`
--
ALTER TABLE `Exchanges`
  ADD CONSTRAINT `Exchanges_ibfk_1` FOREIGN KEY (`user_submission`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Exchanges_ibfk_2` FOREIGN KEY (`pokemon_id`) REFERENCES `Pokemons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Exchanges_ibfk_3` FOREIGN KEY (`user_exchange`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Pokemons`
--
ALTER TABLE `Pokemons`
  ADD CONSTRAINT `Pokemons_ibfk_1` FOREIGN KEY (`owner_user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
