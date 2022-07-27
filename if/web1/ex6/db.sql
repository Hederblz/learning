create database projeto_login;

use projeto_login;

create table usuario(
	id_usuario int primary key auto_increment,
    email varchar(40),
    senha varchar(40),
    nome varchar (40),
    telefone varchar(40),
    sport varchar (40)
);
