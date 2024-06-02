
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
