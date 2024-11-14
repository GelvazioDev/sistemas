CREATE TABLE public.usuario (
  id serial NOT NULL,
  nome varchar(250) ,
  email varchar(250),
  info text,
  senha varchar(100),
  permissao int DEFAULT NULL,
  grupo int DEFAULT NULL,
  cargo int DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE public.voluntario (
  id serial NOT NULL,
  nome varchar(50),
  email varchar(50),
  telefone varchar(20),
  endereco varchar(200),
  cidade varchar(50),
  rg varchar(15),
  cpf varchar(20),
  atuacao text,
  obs text,
  PRIMARY KEY (id)
);

