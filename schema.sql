CREATE database sequelize_passport;

USE sequelize_passport;

CREATE TABLE `blackCards` (
  `id` INT(9) NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`id`)
);

INSERT INTO `blackCards` (`id`, `text`)
VALUES
  (1,'In the seventh circle of Hell, sinners must endure ____ for all eternity.'),
  (2,'After months of practice with ____, I think I\'m finally ready for ____.'),
  (3,'The blind date was going horribly until we discovered our shared interest in ____.'),
  (4,'____. Awesome in theory, kind of a mess in practice.'),
  (5,'With enough time and pressure, ____ will turn into ____.'),
  (6,'I\'m not like the rest of you. I\'m too rich and busy for ____.'),
  (7,'And what did <i>you</i> bring for show and tell?'),
  (8,'Having problems with ____? Try ____!'),
  (9,'As part of his contract, Prince won\'t perform without ____ in his dressing room.'),
  (10,'How did I lose my virginity?'),
  (11,'Here is the church<br>Here is the steeple<br>Open the doors<br>And there is ____.'),
  (12,'During his childhood, Salvador Dalí produced hundreds of paintings of ____.'),
  (13,'In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?'),
  (14,'What don\'t you want to find in your Kung Pao chicken?'),
  (15,'The Smithsonian Museum of Natural History has just opened an exhibit on ____.');

CREATE TABLE `whiteCards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `whiteCards` (`id`, `text`)
VALUES
(1,'Being fat and stupid.'),
(2,'Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.'),
(3,'A pyramid of severed heads.'),
(4,'Crucifixion.'),
(5,'A subscription to Men\'s Fitness.'),
(6,'Some god-damn peace and quiet.'),
(7,'A micropig wearing a tiny raincoat and booties.'),
(8,'Used panties.'),
(9,'The penny whistle solo from \"My Heart Will Go On.\"'),
(10,'A tribe of warrior women.'),
(11,'An oversized lollipop.'),
(12,'Helplessly giggling at the mention of Hutus and Tutsis.'),
(13,'Not wearing pants.'),
(14,'Consensual sex.'),
(15,'Her Majesty, Queen Elizabeth II.');
--
-- CREATE TABLE 'game_tallys' (
--   id int NOT NULL AUTO_INCREMENT,
--   wins int NOT NULL,
--   losses int NOT NULL
-- )
--
-- INSERT INTO 'game_tallys' (
--
-- )
