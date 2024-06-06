
--BLOCOS ANONIMOS

SET SERVEROUTPUT ON;

--SUMARIZA��O N�MERICA SIMPLES
DECLARE
    CURSOR c_dados IS
        SELECT * FROM GS_ESTADO;
BEGIN
    FOR rec IN c_dados LOOP
        DBMS_OUTPUT.PUT_LINE(rec.ID || ' ' || rec.NOME || ' ' || rec.SIGLA);
    END LOOP;
END;
/

-- SUMARIZA��O AGRUPADA POR CRIT�RIO
DECLARE
    CURSOR c_dados IS
        SELECT ESTADO_ID, COUNT(*) AS total_por_estado
        FROM GS_CIDADE
        GROUP BY ESTADO_ID;
BEGIN
    FOR rec IN c_dados LOOP
        DBMS_OUTPUT.PUT_LINE('Estado ID: ' || rec.ESTADO_ID || ' Total de Cidades: ' || rec.total_por_estado);
    END LOOP;
END;
/

--SUMARIZA��O N�MERICA E AGRUPADA
DECLARE
    total_geral NUMBER := 0;
    CURSOR c_dados IS
        SELECT ESTADO_ID, COUNT(*) AS total_por_estado
        FROM GS_CIDADE
        GROUP BY ESTADO_ID;
BEGIN
    FOR rec IN c_dados LOOP
        DBMS_OUTPUT.PUT_LINE('Estado ID: ' || rec.ESTADO_ID || ' Total de Cidades: ' || rec.total_por_estado);
        total_geral := total_geral + rec.total_por_estado;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('Total Geral de Cidades: ' || total_geral);
END;
/

-- BLOCO ANÔNIMO PARA ATUALIZAÇÃO DE NOME DE UM ESTADO
DECLARE
    v_id NUMBER := 1;
    v_novo_nome VARCHAR2(50) := 'Estado Atualizado Teste';
BEGIN
    UPDATE GS_ESTADO
    SET NOME = v_novo_nome
    WHERE ID = v_id;
    IF SQL%ROWCOUNT > 0 THEN
  DBMS_OUTPUT.PUT_LINE('Nome atualizado para o ID ' || v_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Nenhum dado encontrado para o ID ' || v_id);
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro ao atualizar o nome: ' || SQLERRM);
END;
/