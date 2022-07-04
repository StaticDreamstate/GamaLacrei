/* O banco de dados ainda está sendo modelado. Esse script é apenas uma 
 * base e pode ser alterado total ou parcialmente a qualquer momento. */

DROP DATABASE IF EXISTS `Lacrei_Database`;
CREATE DATABASE `Lacrei_Database`;
USE `Lacrei_Database`;

/* Informações de PRÉ-CADASTRO. */

CREATE TABLE `profissionais` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(150) NOT NULL,
	`email` varchar(150) NOT NULL,
	`prefixo` varchar(10) NOT NULL,
	`registro` int NOT NULL,
	`senha` varchar(250) NOT NULL,
	`data_cadastro` datetime DEFAULT NOW() NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO `profissionais`(
	`id`,
	`nome`,
	`email`,
	`prefixo`,
	`registro`,
	`senha`,
	`data_cadastro`)

values (
	DEFAULT,
	"Ana Não Sei das Quantas",
	"ana@email.com",
	"CREFITO",
	1542,
	"H2$Fx1504k@J%88&v2",
	DEFAULT
);

INSERT INTO `profissionais`(
	`id`,
	`nome`,
	`email`,
	`prefixo`,
	`registro`,
	`senha`,
	`data_cadastro`)

values (
	DEFAULT,
	"Joãozinho Sei Lá o Que",
	"jhonny@email.com",
	"CREFITO",
	2041,
	"u8$001JF2@0g&12HK32",
	DEFAULT
);

INSERT INTO `profissionais`(
	`id`,
	`nome`,
	`email`,
	`prefixo`,
	`registro`,
	`senha`,
	`data_cadastro`)

values (
	DEFAULT,
	"Pedro Sem Sobrenome",
	"pedrinhoanonimo@email.com",
	"CREFITO",
	8413,
	"iu7G3$@!fgc54@#5f¨K209",
	DEFAULT
);

INSERT INTO `profissionais`(
	`id`,
	`nome`,
	`email`,
	`prefixo`,
	`registro`,
	`senha`,
	`data_cadastro`)

values (
	DEFAULT,
	"Laura Sem Pai",
	"cademeupai@email.com",
	"CREFITO",
	6471,
	"t1v64$@2x#k2$LOPc34*",
	DEFAULT
);
