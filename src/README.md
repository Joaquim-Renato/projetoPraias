# Documentação Projeto Praias 


## Introdução: 
Viajar é uma das experiências mais gratificantes da vida, mas planejar um roteiro pode ser desafiador, especialmente para quem deseja explorar as melhores praias de forma prática e eficiente. 
Pensando nisso, desenvolvemos um projeto web que busca facilitar a vida de viajantes e turistas interessados em conhecer praias incríveis.

Este projeto foi construído utilizando HTML, CSS e uma pitada de JavaScript para criar uma aplicação simples, intuitiva e funcional. O foco principal é fornecer informações úteis e organizadas, tornando o processo de planejamento de viagens mais agradável.

O site utiliza imagens temáticas e uma interface limpa para inspirar viajantes, permitindo que eles explorem destinos de forma visual e organizada

## Descrição Geral 
A aplicação web é projetada para:
Fornecer dicas úteis sobre as melhores praias e destinos costeiros.
Oferecer uma interface amigável e visualmente atraente.
Simplificar a experiência de pesquisa de turistas e viajantes, centralizando as informações de forma organizada e acessível.
Utilizamos HTML para estruturar o conteúdo, CSS para estilizar a página com um design atraente, e JavaScript para adicionar interatividade e melhorar a experiência do usuário.
Com este projeto, buscamos atender às necessidades de quem deseja aproveitar ao máximo sua viagem ao litoral, proporcionando uma ferramenta confiável e eficiente.

## Estrutura do projeto


<img src="/src/img/Captura de tela 2025-01-20 163423.png" alt="captura de tela estrutura de projeto">

Abaixo você encontrará informações mais detalhadas sobre a estrutura deste projetor 🙂

### Diretório Principal 
(PROJETOPRAIAS)

### Subdiretórios

**src/css**
Contém os arquivos de estilo *CSS*:
Esses arquivos estilizam seções ou páginas específicas, como “index” (Home Page),  "Área de Lazer" e "Contato".
areaLazer.css: Estiliza a página dedicada às áreas de lazer das praias.
contato.css: Aplica os estilos ao formulário de contato.
media.css: Responsável pela responsividade do site, ajustando o layout para diferentes tamanhos de tela usando media queries.
styles.css: Contém estilos globais compartilhados entre as páginas, também responsável pelo estilo da nossa home page
 src/favicons
Contém ícones para o site:
cell-phone.png
logotipoPraieiraFonte.png


**src/html**
Contém os arquivos **HTML**:
areaLazer.html
formContato.html
index.html ( a página inicial do site ou como é comumente denominada “home page” ).


src/img
Contém imagens usadas no projeto:
Fotos temáticas de verão e praia.
Arquivos PNG e JPG de logotipos e montagens.


src/js
Contém o arquivo de script JavaScript:
script.js: Adicionar interatividade ao site, como navegação e animações

Outros Arquivos
package-lock.json e package.json: Arquivos relacionados ao gerenciamento de dependências (provavelmente com o npm).
README.md: Documento explicativo do projeto.









# Pontos relevantes : 

Arquivo media.css
O arquivo media.css é responsável por gerenciar a responsividade do site, garantindo que ele se adapte de forma adequada a diferentes tamanhos de tela, como dispositivos móveis, tablets e desktops.

Funções principais:
Define media queries específicas para ajustar o layout conforme a resolução da tela.
Otimiza a experiência do usuário em dispositivos com tamanhos de tela variados.
Ajusta fontes, espaçamentos, e elementos estruturais para manter a usabilidade em diferentes contextos.
Exemplos de uso no media.css:

````css

/* Exemplo de media query para dispositivos móveis */
@media (max-width: 768px) {
  body {
    font-size: 14px;
    padding: 10px;
  }

  .menu {
    display: none; /* Esconde o menu em telas pequenas */
  }
}

/* Exemplo de media query para telas maiores */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
````

# Antoações 

- dot = bolinha de destino e origem do card; 


git config --global user.name "nome do seu usuário "

git config --global user.email “seu email”



git init = inicia o git em um projeto

git clone = clona um projeto de um repositório remoto

git add . = adicionando vários arquivos para o git poder rastrear

git pull = atualiza o seu repositório local conforme um repositório remoto

git checkout -b nome-do-novo-branch

git commit -m "first commit"

### Lembrando que cada um deve subir o sua tarefa em sua respectiva branch 
---

### Sites que podem ajudar na contrução de uma pag web 

https://www.origamid.com/ 

https://www.origamid.com/codex/animacao-de-svg-baseada-em-strokes/

Para icons: 
https://www.flaticon.com/br/


Para o CSS :
https://www.freecodecamp.org/portuguese/news/como-criar-uma-barra-de-navegacao-responsiva-com-um-menu-de-sanduiche-usando-flexbox/

--------------------------------------------------
## Links uteis 
https://www.atlassian.com/br/software/confluence?campaign=470097602&adgroup=1308419274638028&targetid=kwd-81776444924189:loc-20&matchtype=e&bidmatchtype=be&network=o&device=c&creative=81776294078907&keyword=confluence&querystring=confluence&ds_eid=700000001721838&ds_e1=MICROSOFT&msclkid=b1fd79c4fa1b10572a341e4a72dbee51 
