<h1 align="center" id="global-solution">
🌊<br>Global Solution
</h1>

<p align="center">
<picture>
  <!-- <source media="(prefers-color-scheme: dark)" srcset="./Assets/Logo/DarkLogo.svg"> -->
  <img alt="Logo Ocean Style" src="./utils/imagens/logo/OceanCircle.png" width=300>
</picture>

</p>

> Repositório utilizado para a entrega da 1ª Global Solution

<details open>
  <summary><h3><strong>Índice</strong></h3></summary>
  <ol>
    <li><a href="#sobre">Sobre a Global Solution</a></li>
    <li><a href="#requisitos">Requisitos</a></li>
    <li><a href="#autores">Integrantes</a></li>
  </ol>
</details>

<h2 name="sobre">📖 Sobre a Global Solution</h2>

| _Global Solution 2_ |                                        |
| ------------------- | -------------------------------------- |
| _Curso_             | Análise e Desenvolvimento de Sistemas  |
| _Turma_             | 2TDSS                                  |
| _Período_           | 1º                                     |
| _Tema_              | [PDF](./utils/pdfs/GlobalSolution.pdf) |

<h2 name="requisitos">📋 Requisitos</h2>

<h3>COMPLIANCE & QUALITY ASSURANCE</h3>

- [ ] (20 pts) Entrega 1: Plano de backlog de produto, no padrão Scrum, contendo Épicos, Funcionalidades e Itens /componentes da solução.

- [ ] (30 pts) Entrega 2: Descrição dos itens do backlog de produto, explicando quem solicita/necessita do item, por que precisa do item e qual a expectativa de funcionamento; e definição do critério de aceite de cada um, contendo detalhes de formato da entrega do item (explicação de como deve ser construída a aplicação, explicando linguagem de programação a utilizar, padrões de interface de uso/operação, testes/validações que precisam ser feitos).

- [ ] (50 pts) Entrega 3: Arquitetura da solução, representada em um diagrama no padrão TOGAF, utilizando o software Archi (Archimate). Essa arquitetura deve conter: Visão da Arquitetura, Arquitetura de Negócio, Arquitetura de Sistema e Arquitetura de Tecnologia.

- [ ] Entrega: arquivo .ZIP, no portal do aluno FIAP, na área de trabalhos, no trabalho aberto especificamente para a GS. O .ZIP precisa conter o Nome do Projeto, Nome e RM dos alunos integrantes do grupo, o link de acesso ao plano de projeto cadastrado no Azure Boards ou outra ferramenta de planejamento autorizada pelo professor, um arquivo PDF contendo o desenho da arquitetura (não envie o arquivo original feito em Archi).

- [ ] OBS: O Archi possui a opção de gerar PDF. O plano de projeto criado no Azure ou outra ferramenta precisa estar PUBLICO, de forma a facilitar o acesso integral do professor que corrigirá o trabalho.

<h3>MASTERING RELATIONAL AND NON-RELATIONAL DATABASE</h3>

- [x] (10 pts) Contexto: crie um texto contextualizando o seu projeto e liste os seus requisitos e regras de negócio.

- [x] (10 pts) Modelagem: crie o modelo entidade-relacionamento (MER) físico das tabelas que irão compor a solução de persistência de dados em um banco de dados relacional Oracle. Utilize a ferramenta Oracle Data Modeler para essa tarefa. As tabelas devem coincidir com os objetos desenvolvidos no Front/Back do seu trabalho de codificação.

- [x] (20 pts) Scripts DDL: crie os scripts com os comandos DDL gerados pelo Oracle Data Modeler. Execute o script no banco de dados Oracle.

- [x] (30 pts) Carga de dados: para cada tabela crie uma Procedure para efetuar a carga de dados daquela tabela. A carga de dados deve ser feita por passagem de parâmetro, não façam uso de hard-code nas Procedures. Em todos os blocos devem existir a EXCEPTION WHEN OTHERS e mais dois tratamentos de exceção à escolha do grupo. Quando ocorrer uma exceção, o nome da procedure, o nome do usuário, a data de ocorrência de erro, o código de erro e a mensagem de erro devem ser salvos em uma tabela de registro de logs. Para as turmas que não chegaram ao tema Procedures, criar blocos anônimos utilizando variáveis de substituição para informar os valores a serem inseridos.

- [x] (30 pts) Relatórios: Crie quatro blocos anônimos que usem cursor explícito e tomada de decisão. Um dos blocos anônimos deve listar todos os dados de uma tabela, mostrar os dados numéricos sumarizados e mostrar a sumarização dos dados agrupados por um critério definido pelo grupo.

  - Exemplo do relatório para facilitar a visualização:

    | Campo1      | Campo2 | Valor |
    | ----------- | ------ | ----- |
    | 1           | 1      | 1000  |
    | 1           | 2      | 2000  |
    | 1           | 3      | 3000  |
    | Sub-Total   |        | 6000  |
    | 2           | 1      | 4000  |
    | 2           | 2      | 5000  |
    | 2           | 3      | 6000  |
    | Sub-Total   |        | 15000 |
    | Total Geral |        | 21000 |

- [x] Entrega: arquivo no portal.

<h3>DEVOPS TOOLS E CLOUD COMPUTING</h3>

O grupo tem duas opções para a entrega (a nota pode valer de 0 a 100 dependendo da qualidade das entregas):

_Opção 1: Implementação em Docker Compose de um dos projetos solicitados nas disciplinas:_

- JAVA ADVANCED

  - [x] Realizar uma dissertação sobre seu projeto, seus objetivos e solução proposta (5 pontos)

  - [ ] Desenhar a Arquitetura do projeto de DevOps (Draw.io, Visual Paradigm ou Excalidraw) (30 pontos)

  - [x] Entregar Arquivo PDF com capa incluindo o nome do Grupo (Solução) e integrantes e RM de cada aluno (Obrigatório)

  - [x] Link do GitHub com os Códigos-fontes, README.md, Dockerfile e Arquivo YAML (Obrigatório)

  - [ ] Persistência de dados acompanhada de um Volume (15 pontos)

  - [ ] Link do vídeo no YouTube comprovando o funcionamento do App, partindo desde o clone do repositório em sua máquina local até a persistência de dados. Mostre todos os detalhes de cada passo (50 pontos)
    - A solução deve conter:
      - O projeto deve ser rodado em Background
      - Utilize imagens para o ponto de partida que apresentem um melhor desempenho de acordo com sua aplicação
      - Utilize um diretório padrão
      - Utilize um usuário que não tenha privilégios administrativos para rodar seu App
      - Utilize um ARG e um ENV no Dockerfile

<h3>JAVA ADVANCED</h3>

- [x] Utilização de anotações do Spring para configuração de beans e injeção de dependências

- [x] Camada model/DTO com utilização correta dos métodos de acesso

- [x] Persistência de dados com Spring Data JPA

- [x] Mapeamento de relacionamentos entre tabelas e pesquisas

- [x] Validação com Bean Validation

- [x] Paginação para recursos com muitos registros

- [x] HATEOAS para atender ao Nível 3 de Maturidade proposto por Leonard Richardson

- [x] Tratamento adequado dos erros e exceptions

- [x] Documentação com SWAGGER

- [ ] Deploy em nuvem

- [ ] Utilização adequada dos verbos HTTP e códigos de status

<h4>Critérios de Avaliação</h4>

- _Cumprimento dos requisitos técnicos_: 60 pontos
- _Relevância e Inovação_: 10 pontos
  - O projeto aborda um problema ou desafio significativo na área ambiental?
  - A solução proposta tem potencial para melhorar a qualidade dos oceanos?
  - O projeto apresenta uma ideia inovadora ou uma abordagem criativa para resolver o problema?
  - A solução proposta incorpora tecnologias modernas e emergentes de forma eficaz?
  - Qual é o potencial impacto positivo da solução na vida marinha e no cuidado ambiental?
- _Viabilidade e Usabilidade_: 10 pontos
  - A solução proposta é tecnicamente viável?
  - Os alunos demonstraram compreensão das tecnologias utilizadas e sua aplicação no projeto?
  - A solução é fácil de usar para o público-alvo e outros stakeholders?
- _Documentação e Apresentação_: 20 pontos
  - A apresentação da proposta está clara e objetiva?
  - Os alunos apresentaram eficazmente o projeto e explicaram sua solução de forma compreensível?

<h4>Forma de Entrega</h4>

1. Arquivo .txt com o RM, Nome do aluno e a turma de cada integrante.
2. Código fonte do software (submetido via GitHub)
3. Links dos Deploys em nuvem, com instruções para acessos e testes (usuário, senha, etc)
4. Link do Vídeo demonstrando o software funcionando (não é o vídeo do Pitch) com câmera e microfone abertos e com duração máxima de 10 minutos (YouTube ou equivalente).
5. Link do Vídeo Pitch com duração máxima de 3 minutos.

<h3>DISRUPTIVE ARCHITECTURES: IOT, IOB & GENERATIVE IA</h3>

1. _Entrega 1 – Total (50 pontos)_

   - _OPÇÃO 01_: Detecção e Classificação de Espécies: Utilizar técnicas de Deep Learning para identificar e classificar espécies marinhas em imagens subaquáticas ou superficiais (20 pontos). O objetivo é desenvolver um modelo que possa distinguir entre diferentes espécies, ajudando a monitorar a biodiversidade e detectar espécies ameaçadoras, invasoras, poluidores ou corrosão dos corais entre outros habitats (30 pontos).
   - _OPÇÃO 02_: Desenvolver modelos preditivos usando técnicas de Machine Learning para prever condições ambientais marítimas. O desenvolvimento envolve as etapas de exploração de dados, levantamento de hipótese, criação e treinamento de modelo com validações e conclusão (20 pontos). Tenha em mente como ajudar a antecipar eventos prejudiciais para a vida marinha (30 pontos).

2. _Entrega 2 – Total (50 pontos)_
   - [ ] O grupo deve entregar um vídeo de até 5 minutos apresentando a descrição do problema e o sistema desenvolvido (20 pontos).
   - [ ] O grupo deve entregar um relatório técnico com a descrição do problema, a metodologia utilizada, os resultados obtidos e as conclusões (10 pontos).
   - [ ] O grupo deve entregar o código fonte do sistema desenvolvido (20 pontos).

<h3>MOBILE APP DEVELOPMENT</h3>

- [x] Utilizar navegação no aplicativo conforme sua escolha (10 pts)

- [x] Implementar um CRUD com Firebase e/ou uma API REST (para API REST: forneça um endpoint funcional fakeapi ou mock) (10 pts)

- [ ] Tratar os erros das requisições de forma adequada (20 pts)

- [x] Estilização do aplicativo, incluindo cores, fontes e imagens personalizadas (30 pts)

- [x] Arquitetura: será avaliada a organização dos arquivos, nomes das variáveis, funções e componentes utilizados (30 pts)

<h3>ADVANCED BUSINESS DEVELOPMENT WITH .NET</h3>

- _Requisitos da Entrega_

  - [x] Aplicação MVC usando de forma correta a separação das regras de negócios nas controllers e views (20 pontos)

  - [x] Utilização dos pilares da Programação Orientada a Objetos (Abstração, Herança, Polimorfismo e Encapsulamento) (10 pontos)

  - [x] Conexão com banco de dados Oracle estabelecida e funcional (20 pontos)

  - [x] Models bem planejadas, com annotation (identificação de tabelas e colunas) (15 pontos)

  - [x] Relacionamento 1..1, 1..N e N..N (10 pontos)

  - [x] Utilização do design pattern Repository (10 pontos)

  - [x] Utilização das convenção de nomenclaturas de classes e variáveis (5 pontos)

  - [x] CRUD para todas as Models planejadas (10 pontos)

  - [x] Diagrama Modelo Entidade Relacionamento (10 pontos)

- _Forma de Entrega_
  - Arquivo .txt com o RM, Nome do aluno e a turma de cada integrante.
  - Código fonte completo (limpe a solução antes de compactar)
  - Imagem Modelo Entidade Relacionamento (MER)

<h2 name="autores">✍️ Integrantes</h2>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Asteriuz">
        <img src="https://avatars.githubusercontent.com/u/89879115?v=4" width="115px;" alt="Foto do Augusto no GitHub"/><br>
        <sub>
          <strong>Augusto Barcelos Barros</strong>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com">
        <img src="https://avatars.githubusercontent.com/u/126920453?v=4" width="115px;" alt="Foto do Gabriel Gribl no GitHub"/><br>
        <sub>
          <strong>Izabelly De Oliveira Menezes</strong>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lucas-pmelo">
        <img src="https://avatars.githubusercontent.com/u/104542931?v=4" width="115px;" alt="Foto do Lucas Pinheiro de Mel no GitHub"/><br>
        <sub>
          <strong>Lucas Pinheiro de Melo</strong>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GabsBecca">
        <img src="https://avatars.githubusercontent.com/u/126920453?v=4" width="115px;" alt="Foto da  Marcos Henrique Garrido da Silva no GitHub"/><br>
        <sub>
          <strong>Marcos Henrique Garrido da Silva</strong>
        </sub>
      </a>
    </td>
    <td align="center">
        <a href="">
        <img src="https://avatars.githubusercontent.com/u/126920453?v=4" width="115px;" alt="Foto da  Marcos Henrique Garrido da Silva no GitHub"/><br>
        <sub>
          <strong>Mel Maia Rodrigues</strong>
        </sub>
      </a>
    </td>
  </tr>
</table>

[⬆ Voltar ao topo](#global-solution)<br>
