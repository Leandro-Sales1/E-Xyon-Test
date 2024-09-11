# E-Xyon-Test
## Tecnologias utilizadas:
* React.JS
* Material UI
* TypeScript
* Vite.JS
* React-Router
* Recoil
* Date-fns

## Procedimento para rodar o projeto:
### Em produção:
https://e-xyon-test.vercel.app/
### Localmente:
* Faça o clone do repositório
* Vá até a pasta referente ao projeto
* Instale as dependências com o comando `npm install` ou `yarn install`
* Rode o comando `npm run dev` ou `yarn dev` para iniciar o projeto

## Observações e comentários do teste:
Primeiramente, gostaria de agradecer mais uma vez a oportunidade de participar desse processo seletivo.
Sobre comentários no código, tento seguir sempre as boas práticas e não deixar comentários irrelevantes no código, além de usar sempre nomes de constantes bem condizentes com sua função, mas se tratando de um teste, tentei deixar tudo o mais claro possível, adicionando comentários extras.

Tentei seguir o mais fiel possível ao figma, mas tendo em vista que os frames lá estão com 1146px x 836px e telas normais têm 1920px x 1080px - 100% de zoom, optei por fazer alguns ajustes de medidas para que a proporções do design se mantenham. E como o tempo é reduzido, não foquei muito em responsividade dos componentes para as diversas configurações de telas, tendo em vista que isso demanda tempo e testes nas respectivas configurações.

Adicionei extras, como o icon do E-xyon ao projeto e o status inativo, se o toggle não for ativado no momento do preenchimento do formulário.

Link do figma do teste: https://www.figma.com/design/rE4iwgKXITKktINqF4Ca44/Desafio-Devs?node-id=5-706&node-type=frame&t=0aW5jNu8QW42GGaB-0

![image](https://github.com/Leandro-Sales1/E-Xyon-Test/blob/main/public/Tela1.png)
## Primeira Tela:
Levando em consideração o tempo disponível e que seria somente feita a página refente à Área judicial, coloquei apenas de forma visual o menu lateral, ele tem toda a estilização e efeito de "OnClick" como no figma, porém sem ação real na tela.

Na parte da Área judicial, todo o menu está funcional, com a pesquisa por texto, os botões de filtro também estão funcionais, refletindo seu efeito na lista de itens da área.

Na parte inferior, deixei apenas os números referentes à exibição dinâmicos e o componente de Select também está funcional, refletindo também na lista. A parte de troca de páginas da lista, está estática, somente de forma visual. Travei a lista para a exibição de no máximo 8 elementos, para que não aconteça nenhum tipo de overflow visual. A visualização desses itens excedentes levaria a uma próxima página de lista, o que não foi levantado no teste.

Para adicionar novos elementos na lista, clique no botão "Nova" e será redirecionado para a próxima página.

![image](https://github.com/Leandro-Sales1/E-Xyon-Test/blob/main/public/Tela2.png)
## Segunda Tela:
Aqui nos deparamos com um formulário para a adição de uma nova área, todo o fomulário está funcional e com o tratamento referente ao necessário para a adição, sendo assim, se não forem adicionados os campos obrigatórios o botão de "Salvar" não será habilitado.
Se clicar o botão de "Cancelar" o usuário é direcionado para tela inicial e o formulário zerado.

![image](https://github.com/Leandro-Sales1/E-Xyon-Test/blob/main/public/Tela3.png)
## Terceira Tela:
Com o formulário preenchido, o usuário poderá então salvar a nova área, onde receberá um alert com a mensagem de sucesso, dando o feedback necessário para o usuário. Ao fechar o alert, automaticamente o formulário será apagado e o usuário será direcionado para a página inicial do teste já com a lista atualizada com sua nova adição. 


### Mais uma vez, obrigado pela oportunidade e espero que gostem do resultado!
### Leandro Sales. 
