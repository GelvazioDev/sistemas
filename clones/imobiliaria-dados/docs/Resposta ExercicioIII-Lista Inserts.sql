-- noinspection SqlDialectInspectionForFile

-- noinspection SqlNoDataSourceInspectionForFile

-- drop table tblogradouro
-- drop table tbpessoa
-- drop table tbpessoacontato
-- drop table tbimovel

-- create database clinicamedica
create table tblogradouro(
	logcodigo int not null,    -- CODIGO DO LOGRADOURO
	logtipo varchar(10),       -- TIPO DO LOGRADOURO
	logdescricao varchar(100), -- NOME DO LOGRADOURO
	CONSTRAINT tblogradouro_pkey PRIMARY KEY (logcodigo)
);


create table tbpessoa(
	pescodigo int not null,        -- CODIGO DA PESSOA
	pesnome varchar(100) not null, -- NOME DA PESSOA
	pessexo smallint not null,     -- SEXO, SENDO 0-Nao informado, 1-Feminino, 2-Masculino
	pestipo smallint not null,     -- TIPO (1-Física e 2 Jurídica)
	logcodigo int not null,        -- CODIGO DO LOGRADOURO
	CONSTRAINT tbpessoa_pkey PRIMARY KEY (pescodigo),
	-- REFERENCIA TBLOGRADOURO EM LOGCODIGO
	CONSTRAINT "FK_PESSOA=>LOGRADOURO" FOREIGN KEY (logcodigo) REFERENCES public.tblogradouro(logcodigo)
);


create table tbpessoacontato(
	pescodigo int not null,     -- CODIGO DA PESSOA
	ctpnumero varchar (18) not null, -- TELEFONE
	ctpdescricao varchar(100),  -- DESCRICAO DO TIPO DO TELEFONE(Telefone Celular, Telefone Comercial, Residencial)
	ctpramal integer,           -- RAMAL
	CONSTRAINT tbpessoacontato_pkey PRIMARY KEY (pescodigo, ctpnumero),
	CONSTRAINT "FK_PESSOACONTATO=>PESSOA" FOREIGN KEY (pescodigo) REFERENCES public.tbpessoa(pescodigo)
);


create table tbimovel(
	pescodigo int not null,             -- CODIGO DA PESSOA
	logcodigo int not null,             -- CODIGO DO LOGRADOURO
	imvdescricao varchar(500) not null, -- DESCRICAO do IMOVEL
	imvlargura numeric(10,2),           -- LARGURA do IMOVEL
	imvcomprimento numeric(10, 2),      -- COMPRIMENTO DO IMOVEL 
	CONSTRAINT tbimovel_pkey PRIMARY KEY (pescodigo, logcodigo),
	CONSTRAINT "FK_IMOVEL=>PESSOA" FOREIGN KEY (pescodigo) REFERENCES public.tbpessoa(pescodigo),
	CONSTRAINT "FK_IMOVEL=>LOGRADOURO" FOREIGN KEY (logcodigo) REFERENCES public.tblogradouro(logcodigo)
);

-- LISTA DE INSERTS 

INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(1,'Rua','XV de Novembro');
INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(2,'Avenida','Carlos Gomes');
INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(3,'Travessa','Pinheiros');
INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(4,'BR','470, KM 242');
INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(5,'Rua','S�o Paulo');
INSERT INTO public.tblogradouro(logcodigo,logtipo,logdescricao)VALUES(6,'Estrada','Fundo Canoas');

INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(1,'Marcos',1,1,2);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(2,'Pedro',1,1,5);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(3,'Jos� S/A',1,2,1);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(4,'Maria',2,1,3);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(5,'Marta',2,1,4);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(6,'Papel & Cia',1,2,5);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(7,'Roberto',1,1,3);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(8,'Tais',2,1,2);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(9,'M�nica Presentes',1,2,4);
INSERT INTO public.tbpessoa(pescodigo,pesnome,pessexo,pestipo,logcodigo)VALUES(10,'Rivaldo',1,1,5);



INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(1,1,'Im�vel de Alvenaria',25,52);
INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(2,2,'Terreno Comercial',20,30);
INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(4,3,'Sala Comercial',5,10);
INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(5,5,'Sitio',200,1000);
INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(8,4,'Apartamento - Cobertura',50,60);
INSERT INTO public.tbimovel (pescodigo,logcodigo,imvdescricao,imvlargura,imvcomprimento) VALUES(10,3,'Im�vel de Madeira',20,15);


INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(1,'3351-2115','Telefone Comercial',2115);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(1,'4432-5526','Telefone Residencial',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(1,'8822-5560','Telefone Celular',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(2,'1123-5526','Telefone Residencial',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(3,'1124-5527','Telefonista',15);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(4,'9925-2265','Telefone Celular',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(5,'6652-2445','Telefone Residencial',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(6,'9952-2265','Telefone Residencial',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(10,'3321-2265','Telefone Comercial',2265);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(10,'6658-2265','Telefone Residencial',1);
INSERT INTO public.tbpessoacontato (pescodigo,ctpnumero,ctpdescricao,ctpramal)VALUES(10,'9925-2256','Telefone Celular',1);

