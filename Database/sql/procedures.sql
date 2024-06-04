
-- DROP PROCEDURES

DROP PROCEDURE gs_inserir_estado;

DROP PROCEDURE gs_inserir_cidade;

DROP PROCEDURE gs_inserir_empresa;

DROP PROCEDURE gs_inserir_endereco;

DROP PROCEDURE gs_inserir_veiculo;

DROP PROCEDURE gs_inserir_vistoria;

DROP PROCEDURE gs_inserir_inspetor;

DROP PROCEDURE gs_inserir_inspetor_vistoria;

-- PROCEDURES PARA INSERIR DADOS

--ESTADO

CREATE OR REPLACE PROCEDURE gs_inserir_estado (
    p_nome IN VARCHAR2,
    p_sigla IN VARCHAR2
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_estado';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_ESTADO (NOME, SIGLA) VALUES (p_nome, p_sigla);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END;
/

--CIDADE

CREATE OR REPLACE PROCEDURE gs_inserir_cidade (
    p_nome IN VARCHAR2,
    p_estado_id IN NUMBER
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_cidade';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_CIDADE (NOME, ESTADO_ID) VALUES (p_nome, p_estado_id);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END gs_inserir_cidade;
/

--EMPRESA

CREATE OR REPLACE PROCEDURE gs_inserir_empresa (
    p_cnpj IN VARCHAR2,
    p_nome IN VARCHAR2,
    p_telefone IN VARCHAR2,
    p_email IN VARCHAR2
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_empresa';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_EMPRESA (CNPJ, NOME, TELEFONE, EMAIL) VALUES (p_cnpj, p_nome, p_telefone, p_email);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END gs_inserir_empresa;
/

--ENDERECO

CREATE OR REPLACE PROCEDURE gs_inserir_endereco (
    p_rua IN VARCHAR2,
    p_numero IN VARCHAR2,
    p_cep IN VARCHAR2,
    p_cidade_id IN NUMBER,
    p_empresa_id IN NUMBER
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_endereco';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_ENDERECO (RUA, NUMERO, CEP, CIDADE_ID, EMPRESA_ID) VALUES (p_rua, p_numero, p_cep, p_cidade_id, p_empresa_id);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END gs_inserir_endereco;
/


--VEICULO

CREATE OR REPLACE PROCEDURE gs_inserir_veiculo (
    p_nome IN VARCHAR2,
    p_tipo IN VARCHAR2,
    p_tipo_motor IN VARCHAR2,
    p_sonar IN VARCHAR2,
    p_empresa_id IN NUMBER,
    p_link_imagem IN VARCHAR2
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_veiculo';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_VEICULO (NOME, TIPO, TIPO_MOTOR, SONAR, EMPRESA_ID, LINK_IMAGEM) VALUES (p_nome, p_tipo, p_tipo_motor, p_sonar, p_empresa_id, p_link_imagem);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
     WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END gs_inserir_veiculo;
/

--VISTORIA

CREATE OR REPLACE PROCEDURE gs_inserir_vistoria (
    p_data IN DATE,
    p_nivel_ruido IN NUMBER,
    p_resultado IN VARCHAR2,
    p_observacoes IN VARCHAR2,
    p_veiculo_id IN NUMBER
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_vistoria';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_VISTORIA (DATA, NIVEL_RUIDO, RESULTADO, OBSERVACOES, VEICULO_ID)
    VALUES (p_data, p_nivel_ruido, p_resultado, p_observacoes, p_veiculo_id);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END;
/

--INSPETOR

CREATE OR REPLACE PROCEDURE gs_inserir_inspetor (
    p_nome IN VARCHAR2,
    p_rg IN VARCHAR2,
    p_especializacao IN VARCHAR2,
    p_telefone IN VARCHAR2
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_inspetor';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_INSPETOR (NOME, RG, ESPECIALIZACAO, TELEFONE)
    VALUES (p_nome, p_rg, p_especializacao, p_telefone);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END;
/

-- INSPETOR VISTORIA

CREATE OR REPLACE PROCEDURE gs_inserir_inspetor_vistoria (
    p_inspetor_id IN NUMBER,
    p_vistoria_id IN NUMBER
) IS
    v_nome_procedure VARCHAR2(50) := 'gs_inserir_inspetor_vistoria';
    v_nome_usuario VARCHAR2(50) := USER;
    v_data_ocorrencia DATE := SYSDATE;
    v_codigo_erro NUMBER;
    v_mensagem_erro VARCHAR2(4000);
BEGIN
    INSERT INTO GS_INSPETOR_VISTORIA (INSPETOR_ID, VISTORIA_ID)
    VALUES (p_inspetor_id, p_vistoria_id);
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Duplicate value: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN VALUE_ERROR THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Value error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
    WHEN OTHERS THEN
        v_codigo_erro := SQLCODE;
        v_mensagem_erro := SUBSTR('Other error: ' || SQLERRM, 1, 4000);
        INSERT INTO GS_LOG_ERROS (ID, NOME_PROCEDURE, NOME_USUARIO, DATA_OCORRENCIA, CODIGO_ERRO, MENSAGEM_ERRO)
        VALUES (GS_LOG_ERROS_SEQ.NEXTVAL, v_nome_procedure, v_nome_usuario, v_data_ocorrencia, v_codigo_erro, v_mensagem_erro);
        ROLLBACK;
END;
/

-- TESTANDO PROCEDURES / INSERINDO DADOS
--ESTADO
BEGIN
    gs_inserir_estado('Sao Paulo', 'SP');
    gs_inserir_estado('Rio de Janeiro', 'RJ');
    gs_inserir_estado('Minas Gerais', 'MG');
END;
/

SELECT * FROM GS_ESTADO;

--CIDADE
BEGIN
    gs_inserir_cidade('Sao Paulo', 1);
    gs_inserir_cidade('Rio de Janeiro', 2);
    gs_inserir_cidade('Belo Horizonte', 3);
END;
/

SELECT * FROM GS_CIDADE;

--EMPRESA
BEGIN
    gs_inserir_empresa('12345678000100', 'Empresa D', '11987654321', 'contato@empresaD.com');
    gs_inserir_empresa('23456789000111', 'Empresa E', '21987654321', 'contato@empresaE.com');
    gs_inserir_empresa('34567890000122', 'Empresa F', '31987654321', 'contato@empresaF.com');
END;
/

SELECT * FROM GS_EMPRESA;

--ENDEREÇO
BEGIN
    gs_inserir_endereco('Rua D', '400', '04004004', 1, 1);
    gs_inserir_endereco('Rua E', '500', '05005005', 2, 2);
    gs_inserir_endereco('Rua F', '600', '06006006', 3, 3);
END;
/

SELECT * FROM GS_ENDERECO;

--VEICULO
BEGIN
    gs_inserir_veiculo('Veiculo D', 'Tipo 4', 'Motor 4', 'Sonar 4', 1, 'http://imagemD.com');
    gs_inserir_veiculo('Veiculo E', 'Tipo 5', 'Motor 5', 'Sonar 5', 2, 'http://imagemE.com');
    gs_inserir_veiculo('Veiculo F', 'Tipo 6', 'Motor 6', 'Sonar 6', 3, 'http://imagemF.com');
END;
/

SELECT * FROM GS_VEICULO;

-- VISTORIA
BEGIN
    gs_inserir_vistoria(TO_DATE('2023-05-01', 'YYYY-MM-DD'), 50, 'Aprovado', 'Nenhuma', 1);
    gs_inserir_vistoria(TO_DATE('2023-05-02', 'YYYY-MM-DD'), 60, 'Reprovado', 'Ruido alto', 2);
    gs_inserir_vistoria(TO_DATE('2023-05-03', 'YYYY-MM-DD'), 55, 'Aprovado', 'Ruido aceitavel', 3);
END;
/

SELECT * FROM GS_VISTORIA;


-- INSPETOR
BEGIN
    gs_inserir_inspetor('Ana Rosa', '123456789', 'Especialista A', '11987654321');
    gs_inserir_inspetor('Joao Silva', '987654321', 'Especialista B', '21987654321');
    gs_inserir_inspetor('Maria Santos', '456123789', 'Especialista C', '31987654321');
END;
/

SELECT * FROM GS_INSPETOR;


-- INSPETOR VISTORIA
BEGIN
    gs_inserir_inspetor_vistoria(1, 1);
    gs_inserir_inspetor_vistoria(2, 2);
    gs_inserir_inspetor_vistoria(3, 3);
END;
/

SELECT * FROM GS_INSPETOR_VISTORIA;