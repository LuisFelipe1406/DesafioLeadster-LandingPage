This is a [Next.js](https://nextjs.org/) project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Deploy on Vercel

The project can be access in: https://desafio-leadster-landing-page.vercel.app


## Sobre o processo de desenvolvimento

Olá, meu nome é Luis e eu estou aqui para contar um pouco de como foi o processo de desenvolvimento desse desafio proposto pela Leadster.
Primeiramente, acho importante destacar que essa foi minha primeira experiência com o NextJS, já havia estudado React antes, mas com o Next foi a primeira vez. 

Durante o desenvolvimento, organizei as pastas de modo a separar funcionalidades: cada componente possui sua pasta (componente + estilização); os estilos globais 
e cores estão em uma outra pasta; há ainda pastas para images, fontes e nosso arquivo de configuração.

Por falar nisso, utilizei um arquivo de configuração em formato JSON para exibir os vídeos, como foi requisitado, no arquivo dispomos um título para o vídeo, uma descrição, 
além do seu ID no Youtube, é dessa forma que podemos visualizar o vídeo diretamente na página. Tomei a liberdade de pegar um vídeo do canal de vocês para ficar no clima. 
Desenvolvi um sistema de paginação que verifica a quantidade de vídeos no arquivo e os dispõe na tela, além disso, também foi feito um carrosel animado quando trocamos de página.

Temos componentes para botões, header, footer, para os cartões dos vídeos exibidos no carrosel, para os banners superior e inferior e para a tela de visualização do vídeo. Todos eles possuem
propriedades únicas referentes a seu uso (comentários são dispostos para explicitar).

Para além do meu conhecimento baixo da ferramenta, acredito que outro ponto que me deixou um pouco inseguro é a responsividade, essa é de fato uma skill que eu ainda preciso estudar para
evoluir, espero poder mostrar projetos ainda melhores no futuro.

Obrigado por terem lido até aqui, espero que possamos conversar, até breve!