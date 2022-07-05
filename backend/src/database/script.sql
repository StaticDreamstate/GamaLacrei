DROP DATABASE lacrei;
CREATE DATABASE lacrei;
USE lacrei;

CREATE TABLE `lacrei`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45),
  `numero` VARCHAR(5),
  `complemento` VARCHAR(45),
  `bairro` VARCHAR(45),
  `cidade` VARCHAR(45),
  `createdAt` DATE,
  `updatedAt` DATE, 
  PRIMARY KEY (`id`)
  );

CREATE TABLE `lacrei`.`consultorio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `telefone_fixo` VARCHAR(20),
  `telefone_celular` VARCHAR(20),
  `whatsapp` VARCHAR(20),
  `modalidade_atendimento` VARCHAR(255) NOT NULL,
  `acessibilidade` VARCHAR(255) NOT NULL,
  `horarios_funcionamento` VARCHAR(255) NOT NULL,
  `dias_funcionamento` VARCHAR(255) NOT NULL,
  `convenios` VARCHAR(255) NOT NULL,
	`endereco_id` INT NOT NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
		PRIMARY KEY (`id`),
		CONSTRAINT `fk_consultorio_endereco`
		FOREIGN KEY (`endereco_id`)
		REFERENCES `lacrei`.`endereco` (`id`)
		ON DELETE CASCADE);

CREATE TABLE `lacrei`.`profissional` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_completo` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
	`estado` VARCHAR(2), 
	`prefixo_profissao` VARCHAR(10) NOT NULL,
	`registro_profissional` VARCHAR(45) NOT NULL,
	`senha` VARCHAR(255) NOT NULL,
	`foto_perfil` VARCHAR(255),
	`descricao_foto` VARCHAR(255),
	`sobre_mim` VARCHAR(255),
	`especialidade_clinica` VARCHAR(45),
	`foto_identificacao` VARCHAR(255),
	`carta_entrada` VARCHAR(255),
	`consultorio_id` INT NOT NULL,
	`createdAt` DATE, 
	`updatedAt` DATE, 
		PRIMARY KEY (`id`),
		UNIQUE KEY `UK_email` (`email`),
		CONSTRAINT `fk_profissional_consultorio`
	 	FOREIGN KEY (`consultorio_id`)
	 	REFERENCES `lacrei`.`consultorio` (`id`)
	 	ON DELETE CASCADE);
  
CREATE TABLE `lacrei`.`servico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45),
	`duracao` INT(3),
	`valor` VARCHAR(15),
	`modalidade` VARCHAR(20),
	`consultorio_id` INT NOT NULL,
  	PRIMARY KEY (`id`),
		CONSTRAINT `fk_servico_consultorio`
		FOREIGN KEY (`consultorio_id`)
	 	REFERENCES `lacrei`.`consultorio` (`id`)
	 	ON DELETE CASCADE
);