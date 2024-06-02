--APAGANDO TABELAS

DROP SEQUENCE GS_ESTADO_SEQ;

DROP TABLE GS_ESTADO CASCADE CONSTRAINTS;

DROP SEQUENCE GS_CIDADE_SEQ;

DROP TABLE GS_CIDADE CASCADE CONSTRAINTS;

DROP SEQUENCE GS_EMPRESA_SEQ;

DROP TABLE GS_EMPRESA CASCADE CONSTRAINTS;

DROP SEQUENCE GS_ENDERECO_SEQ;

DROP TABLE GS_ENDERECO CASCADE CONSTRAINTS;

DROP SEQUENCE GS_VEICULO_SEQ;

DROP TABLE GS_VEICULO CASCADE CONSTRAINTS;

DROP SEQUENCE GS_VISTORIA_SEQ;

DROP TABLE GS_VISTORIA CASCADE CONSTRAINTS;

DROP SEQUENCE GS_INSPETOR_SEQ;

DROP TABLE GS_INSPETOR CASCADE CONSTRAINTS;

DROP SEQUENCE GS_INSPETOR_VISTORIA_SEQ;

DROP TABLE GS_INSPETOR_VISTORIA CASCADE CONSTRAINTS;

DROP SEQUENCE GS_LOG_ERROS_SEQ;

DROP TABLE GS_LOG_ERROS CASCADE CONSTRAINTS;

--CRIANDO TABELAS

CREATE SEQUENCE GS_ESTADO_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_CIDADE_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_EMPRESA_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_ENDERECO_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_VEICULO_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_VISTORIA_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_INSPETOR_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE SEQUENCE GS_INSPETOR_VISTORIA_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;
    
CREATE SEQUENCE GS_LOG_ERROS_SEQ
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

CREATE TABLE GS_ESTADO (
    ID NUMBER DEFAULT GS_ESTADO_SEQ.NEXTVAL PRIMARY KEY,
    NOME VARCHAR2(50) NOT NULL,
    SIGLA VARCHAR2(2) NOT NULL
);

CREATE TABLE GS_CIDADE (
    ID NUMBER DEFAULT GS_CIDADE_SEQ.NEXTVAL PRIMARY KEY,
    NOME VARCHAR2(50) NOT NULL,
    ESTADO_ID NUMBER NOT NULL,
    FOREIGN KEY (ESTADO_ID) REFERENCES GS_ESTADO(ID)
);

CREATE TABLE GS_EMPRESA (
    ID NUMBER DEFAULT GS_EMPRESA_SEQ.NEXTVAL PRIMARY KEY,
    CNPJ VARCHAR2(14) NOT NULL,
    NOME VARCHAR2(50) NOT NULL,
    TELEFONE VARCHAR2(11) NOT NULL,
    EMAIL VARCHAR2(50) NOT NULL
);

CREATE TABLE GS_ENDERECO (
    ID NUMBER DEFAULT GS_ENDERECO_SEQ.NEXTVAL PRIMARY KEY,
    RUA VARCHAR2(100) NOT NULL,
    NUMERO VARCHAR2(10) NOT NULL,
    CEP VARCHAR2(11) NOT NULL,
    CIDADE_ID NUMBER NOT NULL,
    EMPRESA_ID NUMBER NOT NULL,
    FOREIGN KEY (CIDADE_ID) REFERENCES GS_CIDADE(ID),
    FOREIGN KEY (EMPRESA_ID) REFERENCES GS_EMPRESA(ID)
);

CREATE TABLE GS_VEICULO (
    TIE NUMBER DEFAULT GS_VEICULO_SEQ.NEXTVAL PRIMARY KEY,
    NOME VARCHAR2(30) NOT NULL,
    TIPO VARCHAR2(50) NOT NULL,
    TIPO_MOTOR VARCHAR2(50) NOT NULL,
    SONAR VARCHAR2(50) NOT NULL,
    EMPRESA_ID NUMBER NOT NULL,
    LINK_IMAGEM VARCHAR2(100) NOT NULL,
    FOREIGN KEY (EMPRESA_ID) REFERENCES GS_EMPRESA(ID)
);

CREATE TABLE GS_VISTORIA (
    ID NUMBER DEFAULT GS_VISTORIA_SEQ.NEXTVAL PRIMARY KEY,
    DATA DATE NOT NULL,
    NIVEL_RUIDO NUMBER NOT NULL,
    RESULTADO VARCHAR2(30) NOT NULL,
    OBSERVACOES VARCHAR2(100) NOT NULL,
    VEICULO_ID NUMBER NOT NULL,
    FOREIGN KEY (VEICULO_ID) REFERENCES GS_VEICULO(TIE)
);

CREATE TABLE GS_INSPETOR (
    ID NUMBER DEFAULT GS_INSPETOR_SEQ.NEXTVAL PRIMARY KEY,
    NOME VARCHAR2(50) NOT NULL,
    RG VARCHAR2(11) NOT NULL,
    ESPECIALIZACAO VARCHAR2(50),
    TELEFONE VARCHAR2(11) NOT NULL
);

CREATE TABLE GS_INSPETOR_VISTORIA (
    ID NUMBER DEFAULT GS_INSPETOR_VISTORIA_SEQ.NEXTVAL PRIMARY KEY,
    INSPETOR_ID NUMBER NOT NULL,
    VISTORIA_ID NUMBER NOT NULL,
    FOREIGN KEY (INSPETOR_ID) REFERENCES GS_INSPETOR(ID),
    FOREIGN KEY (VISTORIA_ID) REFERENCES GS_VISTORIA(ID)
);

CREATE TABLE GS_LOG_ERROS (
    ID NUMBER PRIMARY KEY,
    NOME_PROCEDURE VARCHAR2(50),
    NOME_USUARIO VARCHAR2(50),
    DATA_OCORRENCIA DATE,
    CODIGO_ERRO NUMBER,
    MENSAGEM_ERRO VARCHAR2(4000)
);