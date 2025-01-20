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
Contém os arquivos de estilo *CSS*: <br>
Esses arquivos estilizam seções ou páginas específicas, como “index” (Home Page),  "Área de Lazer" e "Contato". <br>
``areaLazer.css:`` Estiliza a página dedicada às áreas de lazer das praias. <br>
``contato.css:`` Aplica os estilos ao formulário de contato.<br>
``media.css:`` Responsável pela responsividade do site, ajustando o layout para diferentes tamanhos de tela usando media queries.<br>
``styles.css:`` Contém estilos globais compartilhados entre as páginas, também responsável pelo estilo da nossa home page. <br>

 ``src/favicons`` 
Contém ícones para o site:
cell-phone.png
logotipoPraieiraFonte.png


``src/html``
Contém os arquivos **HTML**:
``areaLazer.html`` <br>
``formContato.html`` <br>
``index.html`` ( a página inicial do site ou como é comumente denominada “home page” ).
<br>

``src/img``
Contém imagens usadas no projeto: <br>
Fotos temáticas de verão e praia.
Arquivos PNG e JPG de logotipos e montagens.


``src/js``
Contém o arquivo de script JavaScript:
``script.js``: Adicionar interatividade ao site, como navegação e animações

**Outros Arquivos**
``package-lock.json`` e ``package.json:`` Arquivos relacionados ao gerenciamento de dependências (provavelmente com o npm).
``README.md:`` Documento explicativo do projeto.


## Tecnologias utilizadas: 

**HTML (HyperText Markup Language)**
Linguagem de marcação utilizada para estruturar o conteúdo da página web. 
Em nosso projeto, o HTML define o layout, como navegação, carrossel de imagens e seções como "Ofertas" e "Newsletter".
<br>

**CSS (Cascading Style Sheets)** 
Responsável pela estilização do site, como cores, fontes, posicionamento e espaçamento. No seu código, o **CSS** é usado para criar um design atraente, com estilos como rolagem suave, navbar fixa e responsividade. <br>

**JavaScript**
Linguagem de programação que adiciona interatividade à página. No nosso projeto, foi  usada para a funcionalidade do menu hambúrguer.<br>

**Bootstrap**
Framework CSS que facilita o desenvolvimento de layouts responsivos e modernos. O nosso projeto utiliza a versão 4.1.3 para componentes como o carrossel e a navbar.

**Google Fonts**
Fonte personalizada "Poppins", importada para garantir uma estética uniforme e profissional ao texto.

**Imagens e Ícones**
Inclui logotipos, imagens ilustrativas e ícones, que enriquecem visualmente o nosso site.
Responsividade
A responsividade do site é garantida por meio de media queries no arquivo media.css e pela integração com o framework Bootstrap. Esses recursos permitem que o layout e os estilos sejam adaptados a diferentes tamanhos de tela, oferecendo uma navegação consistente e acessível em dispositivos móveis, tablets e desktops.


## Home Page  (Página Inicial):

A **Home Page** é a porta de entrada do site e foi projetada para causar uma boa primeira impressão nos usuários. <br>
Ela apresenta:
**Layout intuitivo e visual atrativo:** proporciona uma experiência agradável e acolhedora para o visitante. <br>
**Destaques do site:** Inclui seções que direcionam para informações principais, como dicas de praias, área de lazer e contato. <br>

**Navegação clara:** Links para as páginas principais, organizados em uma barra de navegação responsiva.<br>
**Elementos Visuais:** Imagens temáticas de praia e verão, além do logotipo da marca, reforçando a identidade visual do projeto. <br>
**Design Responsivo:** Ajusta-se perfeitamente a dispositivos móveis, tablets e desktops, garantindo acessibilidade e usabilidade em diferentes plataformas. <br>

A Home Page serve como o ponto de partida da experiência do usuário, convidando-o a explorar o restante do conteúdo do site.<br> <br>

### HTML

**1. Estrutura do Documento**
O documento segue o padrão HTML5 ``DOCTYPE html``, garantindo compatibilidade com navegadores modernos. <br>
A head inclui metadados importantes, links para bibliotecas externas (Bootstrap, Google Fonts) e arquivos de estilos personalizados. <br>
**2. Navegação**
Inclui uma barra de navegação ``nav`` com: <br>
Logotipo: Um link com uma imagem representando a identidade visual do site.
Links de navegação: Menu para acesso rápido às seções e páginas internas do site.
Menu hambúrguer: Implementado para versões responsivas. <br>
**3. Carrossel**
Um carrossel ``div class="carousel slide"`` exibe imagens rotativas de alta qualidade, destacando o tema das praias. Ele é gerenciado pelo Bootstrap e inclui botões para navegar entre as imagens. <br>
**4. Seção de Ofertas**
Apresenta cartões ``div class="card"`` que mostram diferentes destinos turísticos com imagens e descrições curtas. <br>
**5. Newsletter**
Contém um formulário de inscrição simples ``form``, onde os usuários podem se cadastrar para receber atualizações e ofertas exclusivas. <br>
**6. Rodapé**
Fornece informações de copyright e um e-mail de contato para suporte ou informações adicionais.


## CSS
**1. Tipografia e Estilo Global**
A fonte principal utilizada é a Poppins (importada do Google Fonts), que traz um visual moderno e limpo. <br>
A rolagem suave é implementada com a propriedade scroll-behavior: smooth, oferecendo uma transição suave entre as seções. <br>
**2. Estilização do Corpo da Página**
Centralização dos elementos com Flexbox, proporcionando um layout mais flexível e equilibrado.<br>
O fundo da página é claro e fixo, criando uma sensação de leveza e harmonia.
<br><br>

**3. Navbar**
A barra de navegação tem:
Design Responsivo: A barra de navegação se adapta a diferentes tamanhos de tela, incluindo um menu hambúrguer para dispositivos móveis. <br>
Estilização Personalizada: Utilização de cores vibrantes e efeitos de hover para criar uma navegação interativa e atrativa. <br>

**4. Carrossel**
Totalmente responsivo, as imagens se ajustam ao tamanho da tela com classes do Bootstrap.<br>
**5. Cartões de Ofertas**
Os cartões são estilizados para apresentar informações organizadas e visuais atraentes com imagens e localizações.<br>
**6. Formulário de Newsletter**
O formulário é simples e funcional, destacando-se com botões e campos alinhados.<br>


____________________



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
