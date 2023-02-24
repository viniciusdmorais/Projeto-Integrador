--------------- USUARIO ---------------


CREATE TABLE tipoAcesso (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(20) UNIQUE NOT NULL
);


CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    senha VARCHAR(64) NOT NULL,

    fk_id_tipoAcesso INT NOT NULL,
    CONSTRAINt fk_id_tipoAcesso
        FOREIGN KEY (fk_id_tipoAcesso)
        REFERENCES tipoAcesso (id)
);


-- chave de criptografia em SHA256
CREATE TABLE chave (
    id SERIAL PRIMARY KEY,
    key VARCHAR(64) NOT NULL,

    fk_id_usuario INT NOT NULL,
    CONSTRAINt fk_id_usuario
        FOREIGN KEY (fk_id_usuario)
        REFERENCES usuario (id)
);


--------------- POST ---------------


CREATE TABLE postagem (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    nota INT,
    visualizacao INT,

    fk_id_usuario INT NOT NULL,
    CONSTRAINt fk_id_usuario
        FOREIGN KEY (fk_id_usuario)
        REFERENCES usuario (id)
);


--------------- LOCAIS ---------------


CREATE TABLE estado (
    id SERIAL PRIMARY KEY,
    sigla VARCHAR(2) UNIQUE NOT NULL,
    nome VARCHAR(20) UNIQUE NOT NULL
);


CREATE TABLE cidade (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,

    fk_id_estado INT NOT NULL,
    CONSTRAINt fk_id_estado
        FOREIGN KEY (fk_id_estado)
        REFERENCES estado (id)
);


CREATE TABLE cep (
    id SERIAL PRIMARY KEY,
    cep INT NOT NULL UNIQUE,
    logradouro VARCHAR(100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    
    fk_id_cidade INT NOT NULL,
    CONSTRAINt fk_id_cidade
        FOREIGN KEY (fk_id_cidade)
        REFERENCES cidade (id)
);


CREATE TABLE local (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    sobre VARCHAR(500) NOT NULL,
    foto VARCHAR(200) NOT NULL,
    numero INT NOT NULL,
    horario VARCHAR(15),
    preco INT,
    site VARCHAR(50),
    face VARCHAR(20),
    insta VARCHAR(20),
    telefone INT,
    glg_placeid VARCHAR(30) UNIQUE,
    
    fk_id_postagem INT NOT NULL,
    fk_id_cep INT,
    CONSTRAINt fk_id_postagem
        FOREIGN KEY (fk_id_postagem)
        REFERENCES postagem (id),
    CONSTRAINt fk_id_cep
        FOREIGN KEY (fk_id_cep)
        REFERENCES cep (id)
);


--------------- RECEITAS ---------------


CREATE TABLE dificuldade (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(10) NOT NULL UNIQUE
);


CREATE TABLE receita (
    id SERIAL PRIMARY KEY,
    ingredientes VARCHAR(500) NOT NULL,
    modo_preparo VARCHAR(500) NOT NULL,
    dicas VARCHAR(250),
    porcao VARCHAR(20),
    tmp_prepato INT NOT NULL,
    descricao VARCHAR(150) NOT NULL,

    fk_id_postagem INT NOT NULL,
    fk_id_dificuldade INT NOT NULL,
    CONSTRAINt fk_id_postagem
        FOREIGN KEY (fk_id_postagem)
        REFERENCES postagem (id),
    CONSTRAINt fk_id_dificuldade
        FOREIGN KEY (fk_id_dificuldade)
        REFERENCES dificuldade (id)
);


CREATE TABLE alergenico (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(25) NOT NULL UNIQUE
);


CREATE TABLE receita_alergenico (
    fk_id_receita INT,
    fk_id_alergenico INT,
    CONSTRAINT pk_receita_alergenico
  		PRIMARY KEY (fk_id_receita, fk_id_alergenico),
    CONSTRAINt fk_id_receita
        FOREIGN KEY (fk_id_receita)
        REFERENCES receita (id),
    CONSTRAINt fk_id_alergenico
        FOREIGN KEY (fk_id_alergenico)
        REFERENCES alergenico (id)
);


--------------- COMENTARIOS ---------------


CREATE TABLE comentario (
    id SERIAL PRIMARY KEY,
    comentario VARCHAR(500) NOT NULL,
    
    fk_id_postagem INT NOT NULL,
    fk_id_local INT,
    fk_id_receita INT,
    CONSTRAINt fk_id_postagem
        FOREIGN KEY (fk_id_postagem)
        REFERENCES postagem (id),
    CONSTRAINt fk_id_local
        FOREIGN KEY (fk_id_local)
        REFERENCES local (id),
    CONSTRAINt fk_id_receita
        FOREIGN KEY (fk_id_receita)
        REFERENCES receita (id)
);
