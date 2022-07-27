create database if not exists prova_web;

use prova_web;

create table users(
    id int primary key auto_increment,
    nome varchar(40),
    sobrenome varchar(40),
    sport varchar(40),
    email varchar(40) unique,
    senha varchar(40)
);
