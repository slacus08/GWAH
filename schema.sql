DROP DATABASE IF EXISTS gw_cahDB;
CREATE database gw_cahDB;

USE gw_cahDB;


DROP TABLE IF EXISTS `black_cards`;

CREATE TABLE `black_cards` (
  `id` INT(9) NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NOT NULL,
  `draw` smallint(6) NOT NULL DEFAULT '0',
  `pick` smallint(6) NOT NULL DEFAULT '1',
  `card_set_id` int(9) NOT NULL,
  PRIMARY KEY (`id`)

INSERT INTO `black_cards` (`id`, `text`, `draw`, `pick`, `card_set_id`)
VALUES
  (1,'In the seventh circle of Hell, sinners must endure ____ for all eternity.',0,1,4),
  (2,'After months of practice with ____, I think I\'m finally ready for ____.',0,2,4),
  (3,'The blind date was going horribly until we discovered our shared interest in ____.',0,1,4),
  (4,'____. Awesome in theory, kind of a mess in practice.',0,1,4),
  (5,'With enough time and pressure, ____ will turn into ____.',0,2,4),
  (6,'I\'m not like the rest of you. I\'m too rich and busy for ____.',0,1,4),
  (7,'And what did <i>you</i> bring for show and tell?',0,1,4),
  (8,'Having problems with ____? Try ____!',0,2,4),
  (9,'As part of his contract, Prince won\'t perform without ____ in his dressing room.',0,1,4),
  (10,'How did I lose my virginity?',0,1,1),
  (11,'Here is the church<br>Here is the steeple<br>Open the doors<br>And there is ____.',0,1,1),
  (12,'During his childhood, Salvador Dalí produced hundreds of paintings of ____.',0,1,1),
  (13,'In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?',0,1,1),
  (14,'What don\'t you want to find in your Kung Pao chicken?',0,1,1),
  (15,'The Smithsonian Museum of Natural History has just opened an exhibit on ____.',0,1,1);

DROP TABLE IF EXISTS `white_cards`;

CREATE TABLE `white_cards` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `card_set_id` int(9) NOT NULL,
  PRIMARY KEY (`id`)

INSERT INTO `white_cards` (`id`, `text`, `card_set_id`)
VALUES
(1,'Being fat and stupid.',1),
(2,'Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.',1),
(3,'A pyramid of severed heads.',1),
(4,'Crucifixion.',1),
(5,'A subscription to Men\'s Fitness.',1),
(6,'Some god-damn peace and quiet.',1),
(7,'A micropig wearing a tiny raincoat and booties.',1),
(8,'Used panties.',1),
(9,'The penny whistle solo from \"My Heart Will Go On.\"',1),
(10,'A tribe of warrior women.',1),
(11,'An oversized lollipop.',1),
(12,'Helplessly giggling at the mention of Hutus and Tutsis.',1),
(13,'Not wearing pants.',1),
(14,'Consensual sex.',1),
(15,'Her Majesty, Queen Elizabeth II.',1);
