CREATE database cardusers;

USE cardusers;

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
  `text` VARCHAR(255) NOT NULL,
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
(15,'Her Majesty, Queen Elizabeth II.'),
(16,'Abortions.'),
(17,'Man meat.'),
(18,'Autocannibalism.'),
(19,'Vigorous jazz hands.'),
(20,'Flightless birds.'),
(21,'Pictures of boobs.'),
(22,'Doing the right thing.'),
(23,'Hunting accidents.'),
(24,'A cartoon camel enjoying the smooth, refreshing taste of a cigarette.'),
(25,'The violation of our most basic human rights.'),
(26,'Viagra®.'),
(27,'Self-loathing.'),
(28,'Spectacular abs.'),
(29,'An honest cop with nothing left to lose.'),
(30,'Abstinence.'),
(31,'A balanced breakfast.'),
(32,'Mountain Dew Code Red.'),
(33,'Concealing a boner.'),
(34,'Roofies.'),
(35,'Glenn Beck convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts.'),
(36,'Tweeting.'),
(37,'The Big Bang.'),
(38,'Amputees.'),
(39,'The Rev. Dr. Martin Luther King, Jr.'),
(40,'Former President George W. Bush.'),
(41,'Being marginalized.'),
(42,'Smegma.'),
(43,'Laying an egg.'),
(44,'Cuddling.'),
(45,'Aaron Burr.'),
(46,'The Pope.'),
(47,'A bleached asshole.'),
(48,'Horse meat.'),
(49,'Genital piercings.'),
(50,'Fingering.'),
(51,'Elderly Japanese men.'),
(52,'Stranger danger.'),
(53,'Fear itself.'),
(54,'Science.'),
(55,'Praying the gay away.'),
(56,'Same-sex ice dancing.'),
(57,'The terrorists.'),
(58,'Making sex at her.'),
(59,'German dungeon porn.'),
(60,'Bingeing and purging.')

-- CREATE TABLE 'game_tallys' (
--   id int NOT NULL AUTO_INCREMENT,
--   wins int NOT NULL,
--   losses int NOT NULL
-- )
--
-- INSERT INTO 'game_tallys' (
--
-- )
