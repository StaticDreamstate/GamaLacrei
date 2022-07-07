DROP DATABASE IF EXISTS `teste`;
CREATE DATABASE `teste`;
USE `teste`;

CREATE TABLE `dados_pessoais` (
	`id` int NOT NULL AUTO_INCREMENT,
	`foto` varchar(255) NOT NULL,
	`fotoDescricao` varchar(255) NOT NULL,
	`sobre` varchar(300) NOT NULL,
	PRIMARY KEY(`id`),
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `dados_profissionais` (
	`id` int NOT NULL AUTO_INCREMENT,
	`especialidade` varchar(255),
	`carta` varchar(300) NOT NULL,
	`foto` varchar(255) NOT NULL,
	PRIMARY KEY(`id`),
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `enderecos` (
	`id` int NOT NULL AUTO_INCREMENT,
	`rua` varchar(255) NOT NULL,
	`numero` varchar(50) NOT NULL,
	`bairro` varchar(50),
	`cidade` varchar(255) NOT NULL,
	PRIMARY KEY(`id`),
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `servicos` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`duracao` int NOT NULL,
	`valor` float,
	`tipoConsulta` varchar(255) NOT NULL,
	PRIMARY KEY(`id`),
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


CREATE TABLE `consultorio` (
	`id` int NOT NULL AUTO_INCREMENT,
	`endereco_id` int NOT NULL,
	`celular` varchar(255),
	`fixo` varchar(255),
	`whatsapp` varchar(255),
	`tipoConsulta` varchar(255) NOT NULL,
	`acessibilidade` varchar(255) NOT NULL,
	`horarioFuncionamento` varchar(255) NOT NULL,
	`convenios` varchar(255) NOT NULL,
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id`),
	KEY `FK_endereco` (`endereco_id`),
	CONSTRAINT `FK_endereco` FOREIGN KEY (`endereco_id`) REFERENCES `enderecos` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE `cadastro` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`profissao` varchar(20) NOT NULL,
	`registro` varchar(255) NOT NULL,
	`senha` varchar(300) NOT NULL,
	`aprovado` boolean,
	`dadosPessoais_id` int,
	`dadosProfissionais_id` int,
	`consultorio_id` int,
	`servico_id` int,
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id`),
	UNIQUE KEY(`email`),
	UNIQUE KEY(`registro`),
	KEY `FK_dados_pessoais` (`dadosPessoais_id`),
	KEY `FK_dados_profissionais` (`dadosProfissionais_id`),
	KEY `FK_consultorio_id` (`consultorio_id`),
	KEY `FK_servico_id` (`servico_id`),
	CONSTRAINT `FK_dados_pessoais` FOREIGN KEY (`dadosPessoais_id`) REFERENCES `dados_pessoais` (`id`) ON DELETE CASCADE, 
	CONSTRAINT `FK_dados_profissionais` FOREIGN KEY (`dadosProfissionais_id`) REFERENCES `dados_profissionais` (`id`) ON DELETE CASCADE,
	CONSTRAINT `FK_consultorio_id` FOREIGN KEY (`consultorio_id`) REFERENCES `consultorio` (`id`) ON DELETE CASCADE ,
	CONSTRAINT `FK_servico_id` FOREIGN KEY (`servico_id`) REFERENCES `servicos` (`id`) ON DELETE CASCADE 
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


CREATE TABLE `lista_de_espera` (
	`id` int NOT NULL AUTO_INCREMENT,
	`email` varchar(255) NOT NULL,
	`profissao` varchar(20) NOT NULL,
	`createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	`updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

