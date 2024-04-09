CREATE DATABASE  IF NOT EXISTS `sportfit_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sportfit_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: sportfit_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,4,'','','','2024-03-28 13:27:43','2024-03-28 13:27:43');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Adidas','adidas.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'Nike','nike.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'Topper','topper.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,'Puma','puma.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(5,'Atomik','atomik.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(6,'Umbro','umbro.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(7,'Converse','converse.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(8,'Fila','fila.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(9,'Crocs','crocs.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(10,'Salomon','salomon.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(11,'Olympikus','olympikus.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(12,'Rebook','reebok.png','2024-03-19 10:57:12','2024-03-19 10:57:12');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hombre','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'Mujer','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'Niños','2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,'Accesorios','2024-03-19 10:57:12','2024-03-19 10:57:12');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Verder','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'Azul','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'Rojo','2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,'Amarrillo','2024-03-19 10:57:12','2024-03-19 10:57:12'),(5,'Violeta','2024-03-19 10:57:12','2024-03-19 10:57:12'),(6,'Rosa','2024-03-19 10:57:12','2024-03-19 10:57:12'),(7,'Negro','2024-03-19 10:57:12','2024-03-19 10:57:12'),(8,'Celeste','2024-03-19 10:57:12','2024-03-19 10:57:12'),(9,'Naranja','2024-03-19 10:57:12','2024-03-19 10:57:12'),(10,'Blanco','2024-03-19 10:57:12','2024-03-19 10:57:12'),(11,'Gris','2024-03-19 10:57:12','2024-03-19 10:57:12');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `product_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (4,'1171897-500-auto.webp-1711653528353-903094627.webp',3,'2024-03-28 19:18:48','2024-03-28 19:18:48'),(5,'1200781-500-auto.webp-1711653573677-100609601.webp',4,'2024-03-28 19:19:33','2024-03-28 19:19:33'),(6,'1127299-500-auto.webp-1711653586124-286862936.webp',5,'2024-03-28 19:19:46','2024-03-28 19:19:46'),(7,'1200783-500-auto.webp-1711653600967-143868501.webp',6,'2024-03-28 19:20:00','2024-03-28 19:20:00'),(8,'1200791-500-auto.webp-1711653616939-516594638.webp',7,'2024-03-28 19:20:16','2024-03-28 19:20:16'),(9,'1200851-500-auto.webp-1711653634616-377856821.webp',8,'2024-03-28 19:20:34','2024-03-28 19:20:34'),(10,'1200856-500-auto.webp-1711653654984-450605582.webp',9,'2024-03-28 19:20:55','2024-03-28 19:20:55'),(12,'1153492-500-auto.webp-1711653699856-879867979.webp',11,'2024-03-28 19:21:39','2024-03-28 19:21:39'),(13,'1201035-500-auto.webp-1711653719573-50567380.webp',12,'2024-03-28 19:21:59','2024-03-28 19:21:59'),(14,'1200816-500-auto.webp-1711653744072-779001375.webp',13,'2024-03-28 19:22:24','2024-03-28 19:22:24'),(15,'770587-500-auto.webp-1711653797049-988420393.webp',14,'2024-03-28 19:23:17','2024-03-28 19:23:17'),(16,'1200809-500-auto.webp-1711653833592-815742840.webp',15,'2024-03-28 19:23:53','2024-03-28 19:23:53'),(17,'1116190-500-auto.webp-1711654125875-909584256.webp',16,'2024-03-28 19:28:45','2024-03-28 19:28:45'),(18,'1127282-500-auto.webp-1711654140815-497684035.webp',17,'2024-03-28 19:29:00','2024-03-28 19:29:00'),(19,'1047827-500-auto.webp-1711654152624-189436633.webp',18,'2024-03-28 19:29:12','2024-03-28 19:29:12'),(20,'1127286-500-auto.webp-1711654167679-681564436.webp',19,'2024-03-28 19:29:27','2024-03-28 19:29:27'),(21,'803131-500-auto.webp-1711654182642-833480989.webp',20,'2024-03-28 19:29:42','2024-03-28 19:29:42'),(22,'1132336-500-auto.webp-1711654221377-78974776.webp',21,'2024-03-28 19:30:21','2024-03-28 19:30:21'),(23,'1078852-500-auto.webp-1711654251925-5683154.webp',22,'2024-03-28 19:30:51','2024-03-28 19:30:51'),(24,'1182719-500-auto.webp-1711654269103-546925974.webp',23,'2024-03-28 19:31:09','2024-03-28 19:31:09'),(25,'950802-500-auto.webp-1711654329134-437881349.webp',24,'2024-03-28 19:32:09','2024-03-28 19:32:09'),(26,'1200811-500-auto.webp-1711809172608-212884760.webp',1,'2024-03-30 14:32:52','2024-03-30 14:32:52'),(27,'1200812-500-auto.webp-1711809172608-213459580.webp',1,'2024-03-30 14:32:52','2024-03-30 14:32:52'),(28,'1200812-500-auto2.webp-1711809172609-415307452.webp',1,'2024-03-30 14:32:52','2024-03-30 14:32:52'),(29,'1200812-500-auto3.webp-1711809172609-294560563.webp',1,'2024-03-30 14:32:52','2024-03-30 14:32:52'),(30,'1132974-500-auto.webp-1711831202213-382002026.webp',2,'2024-03-30 20:40:02','2024-03-30 20:40:02'),(31,'1132975-500-auto.webp-1711831202214-516347251.webp',2,'2024-03-30 20:40:02','2024-03-30 20:40:02'),(32,'1132975-500-auto1.webp-1711831202215-947928082.webp',2,'2024-03-30 20:40:02','2024-03-30 20:40:02'),(33,'1132975-500-auto2.webp-1711831202215-728518819.webp',2,'2024-03-30 20:40:02','2024-03-30 20:40:02'),(34,'1029134-500-auto.webp-1711831547917-234962517.webp',10,'2024-03-30 20:45:47','2024-03-30 20:45:47'),(35,'1029135-500-auto.webp-1711831547918-415667048.webp',10,'2024-03-30 20:45:47','2024-03-30 20:45:47'),(36,'1029135-500-auto1.webp-1711831547918-994381030.webp',10,'2024-03-30 20:45:47','2024-03-30 20:45:47'),(37,'1029135-500-auto2.webp-1711831547919-166225045.webp',10,'2024-03-30 20:45:47','2024-03-30 20:45:47'),(38,'1171898-500-auto.webp-1712078385454-183000718.webp',3,'2024-04-02 17:19:45','2024-04-02 17:19:45'),(39,'1171898-500-auto2.webp-1712080696958-863714908.webp',3,'2024-04-02 17:58:16','2024-04-02 17:58:16'),(40,'1171898-500-auto3.webp-1712080792028-163902319.webp',3,'2024-04-02 17:59:52','2024-04-02 17:59:52'),(41,'1200782-500-auto.webp-1712080937737-449448030.webp',4,'2024-04-02 18:02:17','2024-04-02 18:02:17');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `status_id` int NOT NULL,
  `total` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `statuses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `discount` int DEFAULT NULL,
  `description` text NOT NULL,
  `stock` int DEFAULT NULL,
  `category_id` int NOT NULL,
  `brand_id` int NOT NULL,
  `color_id` int NOT NULL,
  `section_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `brand_id` (`brand_id`),
  KEY `color_id` (`color_id`),
  KEY `products_ibfk_4_idx` (`section_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Buzo adidas Afa Dna 24 W ADIDAS',104999,10,'Mostrá tu lealtad futbolera con este cómodo buzo con capucha Argentina de adidas. Su tejido de felpa francesa de algodón suave y corte holgado lo hacen muy cómodo. El escudo de la selección bordado sobre le corazón es prueba de tu devoción a los campeones mundiales.',88,2,1,7,2,'2024-03-19 10:57:12','2024-03-30 14:40:56'),(2,'Botines Predator Accuracy',114999,30,'ALCANZÁ TU OBJETIVO CON UNOS BOTINES TEXTURIZADOS HECHOS PARCIALMENTE CON MATERIALES RECICLADOS. Control + precisión = confianza. Cuando el arco está en tus ojos, apuntá a la perfección con adidas Predator Accuracy. El suave exterior textil revestido de estos botines incorpora textura de alta definición en la zona de impacto. Una mezcla de elementos y el estampado en relieve te ayudan a lograr cada pase y cada tiro. Su suela especializada te permite dominar en la cancha de terreno firme.',59,1,1,9,1,'2024-03-19 10:57:12','2024-03-30 21:00:26'),(3,'Botines Con Tapones adidas Copa Pure.4 Fxg',104999,30,'Ajuste clásico.\r\nSistema de atado de cordones.\r\nExterior sintético.\r\nDiseño con cuello en U.\r\nForro interno textil.\r\nSuela multiterreno.\r\nEl exterior contiene al menos un 50 % de material reciclado.\r\nColor del artículo: Core Black / Zero Metalic / Team Shock Pink 2.\r\nNúmero de artículo: GY9081.',77,1,1,7,3,'2024-03-19 10:57:12','2024-04-02 17:59:56'),(4,'Camiseta De Fútbol adidas Titular AFA 24',79999,0,'Vestite como un campeón! La camiseta titular de Argentina. A lo largo de la historia del fútbol, la Albiceleste ha representado un juego y compromiso incomparables. Diseñada para hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. La insignia de campeón del Mundo y la tercera estrella sobre el escudo confirman una victoria memorable. Hecho con materiales reciclados, este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.',77,1,1,10,1,'2024-03-19 10:57:12','2024-04-02 18:02:19'),(5,'Alexandr',88346,89,'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',1,1,1,6,1,'2024-03-19 10:57:12','2024-03-28 19:19:46'),(6,'Arvin',54617,73,'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',85,1,2,2,1,'2024-03-19 10:57:12','2024-03-28 19:20:00'),(7,'Betteann',10294,53,'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',45,1,6,1,1,'2024-03-19 10:57:12','2024-03-28 19:20:16'),(8,'Yelena',59187,43,'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',62,1,4,2,1,'2024-03-19 10:57:12','2024-03-28 19:20:34'),(9,'Andonis',7836,88,'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',91,2,5,6,1,'2024-03-19 10:57:12','2024-03-28 19:20:55'),(10,'Zapatillas Nike W Revolution 6 Nn',115999,0,'Fabricado con al menos un 20 % de material reciclado en peso, los materiales viejos encuentran nuevos comienzos.\r\nAhora puedes encontrar el tuyo. Marca el ritmo al comienzo de tu carrera con la sensación lujosa de Nike Revolution 6 Next Nature.\r\nSabemos que la comodidad es clave para una carrera exitosa, por lo que nos aseguramos de que tus pasos sean amortiguados y flexibles.\r\nEs una evolución de un favorito, con un diseño transpirable.\r\nLa malla de felpa se coloca a lo largo del cuello para una sensación cómoda.\r\nLas pieles adicionales en todas partes agregan durabilidad.\r\nLa entresuela de espuma ofrece una pisada más suave que la Revolution 5.\r\nLa suela exterior tiene un diseño generado por computadora que crea un efecto de pistón natural mientras corres.\r\nProporciona más amortiguación y flexibilidad.\r\nSe combinan para una tracción duradera.\r\nLos puntos de contacto en el talón y la lengüeta crean una sensación natural cuando te pones y te quitas los zapatos.',52,2,2,7,1,'2024-03-19 10:57:12','2024-03-30 20:46:14'),(11,'Jackelyn',18267,8,'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',32,2,3,2,1,'2024-03-19 10:57:12','2024-03-28 19:21:39'),(12,'Etheline',62189,39,'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',63,2,3,1,1,'2024-03-19 10:57:12','2024-03-28 19:21:59'),(13,'Gabrielle',16530,60,'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',6,2,3,4,1,'2024-03-19 10:57:12','2024-03-28 19:22:24'),(14,'Danica',28791,51,'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',46,1,1,6,3,'2024-03-19 10:57:12','2024-03-28 19:23:17'),(15,'Stanwood',61906,8,'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',52,2,4,5,2,'2024-03-19 10:57:12','2024-03-28 19:23:53'),(16,'Essa',85750,38,'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',94,2,4,1,2,'2024-03-19 10:57:12','2024-03-28 19:28:45'),(17,'Nickie',62698,57,'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',16,2,3,2,3,'2024-03-19 10:57:12','2024-03-28 19:29:00'),(18,'Casar',67806,44,'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',51,2,6,2,2,'2024-03-19 10:57:12','2024-03-28 19:29:12'),(19,'Wye',54433,4,'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',47,2,2,6,1,'2024-03-19 10:57:12','2024-03-28 19:29:27'),(20,'Rici',61925,41,'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',65,2,5,4,1,'2024-03-19 10:57:12','2024-03-28 19:29:42'),(21,'Sybyl',44461,15,'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',20,2,4,3,3,'2024-03-19 10:57:12','2024-03-28 19:30:21'),(22,'Burty',42458,64,'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',46,2,3,1,1,'2024-03-19 10:57:12','2024-03-28 19:30:51'),(23,'Editha',67877,69,'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',87,2,4,2,3,'2024-03-19 10:57:12','2024-03-28 19:31:09'),(24,'Kameko',5283,74,'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',23,2,6,1,2,'2024-03-19 10:57:12','2024-03-28 19:32:09');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sizes`
--

DROP TABLE IF EXISTS `products_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `size_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_size_idx` (`product_id`),
  KEY `fk_size_product_idx` (`size_id`),
  CONSTRAINT `fk_product_size` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_size_product` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sizes`
--

LOCK TABLES `products_sizes` WRITE;
/*!40000 ALTER TABLE `products_sizes` DISABLE KEYS */;
INSERT INTO `products_sizes` VALUES (1,1,1,NULL,'2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,1,2,NULL,'2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,1,3,NULL,'2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,2,4,NULL,'2024-03-19 10:57:12','2024-03-19 10:57:12'),(5,2,5,NULL,'2024-03-19 10:57:12','2024-03-19 10:57:12'),(6,4,4,NULL,'2024-04-02 18:05:28','2024-04-02 18:05:28'),(7,4,3,NULL,'2024-04-02 18:05:29','2024-04-02 18:05:29'),(8,4,5,NULL,'2024-04-02 18:05:30','2024-04-02 18:05:30');
/*!40000 ALTER TABLE `products_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2024-03-19 10:57:11','2024-03-19 10:57:11'),(2,'user','2024-03-19 10:57:11','2024-03-19 10:57:11');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'Ultimos lanzamientos'),(2,'Destacados'),(3,'Ofertas del día');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20240221203803-create-rol.js'),('20240221203942-create-user.js'),('20240221212613-create-brand.js'),('20240222212519-create-category.js'),('20240222214952-create-status.js'),('20240222215027-create-order.js'),('20240223020638-create-color.js'),('20240223020644-create-size.js'),('20240223042808-create-address.js'),('20240317212613-create-product.js'),('20240318020341-create-image.js'),('20240319020620-create-item.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'XS','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'S','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'M','2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,'L','2024-03-19 10:57:12','2024-03-19 10:57:12'),(5,'XL','2024-03-19 10:57:12','2024-03-19 10:57:12'),(6,'XXL','2024-03-19 10:57:12','2024-03-19 10:57:12');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'En proceso','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'Finalizada','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'Rechazada','2024-03-19 10:57:12','2024-03-19 10:57:12');
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int NOT NULL,
  `rol_id` int NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Facundo Tomas','Rodriguez','facutomasr@gmail.com',1122334455,1,'$2a$10$WkMIWWmQuplXqDawm2sK7uvjDjm7tpazHYz6V2n0tyDrHx4lp9xPW','HUESO-1705735366835-327121706.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(2,'Julian Ed','Aquino','julian.eduardo.aquino@gmail.com',1150973344,2,'$2a$10$bDwoMRBijHICS96GBsranObqw1S6cErI.PH6PmbJAa7EH4skxnIqO','HUESO-1705735366835-327121706.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(3,'Paola','Moriconi','paomori@gmail.com',1150973344,1,'$2a$10$64LUxHbqd/S3hncQFct3U.nQnU4V.fl1W/Q6vTIAE1lIaJF3WOwtG','HUESO-1705735366835-327121706.png','2024-03-19 10:57:12','2024-03-19 10:57:12'),(4,'admin','admin','admin@gmail.com',111111,1,'$2a$10$6hTRQqHE2Y8a6ACK0j/CqOKw0TfQ5nw3wo.Mc8pGm3TsQ6JsRQeei','default-avatar.jpg','2024-03-28 13:27:43','2024-03-28 13:27:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 15:12:08
