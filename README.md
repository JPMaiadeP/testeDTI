# testeDTI
##Instruções para Executar o Código
###Estrutura do Projeto:
Abrir o Arquivo HTML:
Abra o arquivo index.html em um navegador da web. Você pode fazer isso clicando duas vezes no arquivo ou abrindo-o diretamente no navegador.

###Inserir os Dados:
No campo de entrada, insira a data e a quantidade de cães pequenos e grandes no formato DD/MM/YYYY Peq Grande. Por exemplo: 10/06/2024 2 3.

###Calcular:
Clique no botão "Calcular" para determinar o melhor pet shop com base nos dados fornecidos.

###Ver o Resultado:
O resultado será exibido abaixo do botão, mostrando o nome do pet shop e o custo total.

##Lista de Premissas Sobre o Desenvolvimento do Código
###Formato de Entrada:
O input deve seguir o formato DD/MM/YYYY Peq Grande, onde DD é o dia, MM é o mês, YYYY é o ano, Peq é a quantidade de cães pequenos, e Grande é a quantidade de cães grandes.

###Validação do Input:
Não há validação extensiva do formato de entrada além da verificação de que o input não está vazio.

###Datas Válidas:
Presume-se que o usuário fornecerá uma data válida. Não há verificação de datas inválidas (por exemplo, 30/02/2024).

###Fim de Semana:
Se o dia fornecido cair em um sábado ou domingo, será considerado fim de semana e tarifas diferentes serão aplicadas.

###Estrutura de Dados:
A estrutura de dados para os pet shops é fixa e contém três pet shops com preços e distâncias predefinidos.

##Decisões do Projeto
###Separação de Arquivos:
O código foi separado em três arquivos distintos (index.html, script.js, styles.css) para manter uma organização clara entre estrutura, lógica e estilo.

###Cálculo de Custos:
A função calcCusto é usada para calcular o custo total com base no dia da semana (útil ou fim de semana) e na quantidade de cães pequenos e grandes.

###Seleção do Melhor Pet Shop:
O melhor PetShop é determinado com base no custo total mais baixo. Em caso de empate, o pet shop mais próximo é escolhido.

###Interface Simples:
A interface do usuário foi projetada para ser simples e direta, com um campo de entrada, um botão de cálculo e uma área para exibição do resultado.

###Uso de Funções Modernas:
Utilização de funções modernas de JavaScript, como arrow functions e manipulação de arrays, para tornar o código mais conciso e legível.

###Estilo Visual:
O arquivo CSS foi criado para proporcionar uma aparência agradável e moderna, com um design centrado e responsivo.
