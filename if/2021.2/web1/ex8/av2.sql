create database if not exists liga;

use liga;

create table equipes(
    id int primary key auto_increment,
    cnpj int unique,
    equipe varchar(200),
    titulo int,
    estadio varchar(200),
    pais varchar(200)
);
