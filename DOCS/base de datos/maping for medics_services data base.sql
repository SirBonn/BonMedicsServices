DROP DATABASE IF EXISTS medics_services;
CREATE SCHEMA IF NOT EXISTS medics_services;

USE medics_services;

CREATE TABLE IF NOT EXISTS administradores(
	codigo INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(45) NOT NULL,
	usuario VARCHAR(45) NOT NULL,
	contrasena VARCHAR(66) NOT NULL,
	telefono INT(8) NOT NULL,
	correo VARCHAR(45) NOT NULL,
	fechaNacimiento DATE NULL,
	saldo decimal(10,2) NULL DEFAULT 0,
	PRIMARY KEY(codigo)	
);

CREATE TABLE IF NOT EXISTS medicos(
	codigo INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(45) NOT NULL,
	usuario VARCHAR(45) NOT NULL,
	contrasena varchar(66) NOT NULL,
	CUI VARCHAR(13) NOT NULL,
	telefono INT(8) NOT NULL,
	correo VARCHAR(45) NOT NULL,
	direccion VARCHAR(75) NOT NULL,
	fechaNacimiento DATE NULL,
	saldo decimal(10,2) NULL DEFAULT 0,
	PRIMARY KEY(codigo)	
);

CREATE TABLE IF NOT EXISTS pacientes(
	codigo INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(45) NOT NULL,
	usuario VARCHAR(45) NOT NULL,
	contrasena varchar(66) NOT NULL,
	CUI VARCHAR(13) NOT NULL,
	telefono INT(8) NOT NULL,
	correo VARCHAR(45) NOT NULL,
	direccion VARCHAR(75) NOT NULL,
	fechaNacimiento DATE NULL,
	saldo decimal(10,2) NULL DEFAULT 0,
	PRIMARY KEY(codigo)
);


CREATE TABLE IF NOT EXISTS especialidades(
	codigo INT NOT NULL,
	nombre VARCHAR(40) NOT NULL,
	costoConsulta DECIMAL(10,2) NOT NULL,
	descripcion VARCHAR(500) NOT NULL,
	PRIMARY KEY(codigo)	
);


CREATE TABLE IF NOT EXISTS tipos_examenes(
	codigo INT NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	requiereOrden VARCHAR(9) NULL,
	descripcion VARCHAR(500) NOT NULL,
	costo DECIMAL(10,2) NOT NULL,
	PRIMARY KEY(codigo)
);

CREATE TABLE IF NOT EXISTS laboratorios(
	codigo INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(45) NOT NULL,
	usuario VARCHAR(45) NOT NULL,
	contrasena varchar(66) NOT NULL,
	CUI VARCHAR(13) NOT NULL,
	telefono INT(8) NOT NULL,
	correo VARCHAR(45) NOT NULL,
	direccion VARCHAR(75) NOT NULL,
	saldo decimal(10,2) NULL DEFAULT 0,
	fechaNacimiento DATE NULL,
	PRIMARY KEY(codigo)
);



CREATE TABLE IF NOT EXISTS especialidades_medico(
	Medico_codigo INT,
	Especialidad_codigo INT,
	FOREIGN KEY(Medico_codigo) REFERENCES medicos(codigo),
	FOREIGN KEY(Especialidad_codigo) REFERENCES especialidades(codigo)	
);

CREATE TABLE IF NOT EXISTS examenes_laboratorio(
	Laboratorio_codigo INT,
	Examen_codigo INT,
	FOREIGN KEY(Laboratorio_codigo) REFERENCES laboratorios(codigo),
	FOREIGN KEY(Examen_codigo) REFERENCES tipos_examenes(codigo)
);

CREATE TABLE IF NOT EXISTS informeMedico(
	codigo INT NOT NULL,
	descripcion VARCHAR(1500) NOT NULL,
	fecha DATE NOT NULL,
	hora TIME NOT NULL,
	Medico_codigo INT NOT NULL,
	Paciente_codigo INT NOT NULL,
	PRIMARY KEY(codigo),
	FOREIGN KEY(Medico_codigo) REFERENCES medicos(codigo),
	FOREIGN KEY(Paciente_codigo) REFERENCES pacientes(codigo)
);

CREATE TABLE IF NOT EXISTS informeSaldos(
	paciente INT NOT NULL,
	monto DECIMAL(10,2) NOT NULL,
	fechaPago DATE NOT NULL,
	FOREIGN KEY (paciente) REFERENCES pacientes(codigo)
);

CREATE TABLE IF NOT EXISTS consultas_medicas(
	codigo INT NOT NULL,
	fecha DATE NOT NULL,
	hora TIME NOT NULL,
	costo DECIMAL(10,2) NOT NULL,
	estaFinalizado VARCHAR(9) NOT NULL,
	Medico_codigo INT NOT NULL,
	Paciente_codigo INT NOT NULL,
	PRIMARY KEY(codigo),
	FOREIGN KEY(Medico_codigo) REFERENCES medicos(codigo),
	FOREIGN KEY(Paciente_codigo) REFERENCES pacientes(codigo)	
);

CREATE TABLE IF NOT EXISTS citas_examenes(
	codigo INT NOT NULL,
	fecha DATE NOT NULL,
	hora TIME NOT NULL,
	costo DECIMAL(10,2) NOT NULL,
	resultado VARCHAR(100),
	ordenExamen VARCHAR(100),
	estaFinalizado VARCHAR(9) NOT NULL,
	Paciente_codigo INT NOT NULL,
	Medico_codigo INT,
	Examen_codigo INT NOT NULL,
	PRIMARY KEY(codigo),
	FOREIGN KEY(Paciente_codigo) REFERENCES pacientes(codigo),
	FOREIGN KEY(Medico_codigo) REFERENCES medicos(codigo),
	FOREIGN KEY(Examen_codigo) REFERENCES tipos_examenes(codigo)	
);

CREATE TABLE IF NOT EXISTS examenRealizado(
	laboratorista_codigo INT NOT NULL,
	citaExamen_codigo INT NOT NULL,
	fecha DATE NOT NULL,
	PRIMARY KEY(laboratorista_codigo, citaExamen_codigo),
	FOREIGN KEY(laboratorista_codigo) REFERENCES laboratorios(codigo),
	FOREIGN KEY(citaExamen_codigo) REFERENCES tipos_examenes(codigo)
);

INSERT administradores VALUES (1, 'admin', 'admin', 'admin', 54775114, 'byronvasquez@gmail.com', null, null);
INSERT medicos VALUES (1, 'admin', 'admin', 'admin', 2750217421202, 54775114, 'byronvasquez@gmail.com', 'direccion 11111', null, null);
INSERT pacientes VALUES (1, 'admin', 'admin', 'admin', 2750217421202, 54775114, 'byronvasquez@gmail.com', 'direccion 11111', null, null);
INSERT laboratorios VALUES (1, 'admin', 'admin', 'admin', 2750217421202, 54775114, 'byronvasquez@gmail.com', 'direccion 11111', null, null);

