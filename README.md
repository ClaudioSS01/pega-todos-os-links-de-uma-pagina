# Script para Filtrar e Baixar Links

Este script em JavaScript foi criado para filtrar links em uma página da web com base em critérios específicos e baixar os resultados filtrados em um arquivo de texto.

## Como Usar

1. Abra a página da web desejada no Google Chrome.
2. Abra o console do navegador:
   - Pressione `Ctrl + Shift + J` (Windows/Linux) ou `Cmd + Opt + J` (Mac).
   - Clique com o botão direito na página, selecione "Inspecionar" e vá para a guia "Console".
3. Cole o código do script na área do console e pressione `Enter`.

## Configuração dos Filtros

- `o_que_deve_conter_no_link`: Lista de palavras que os links devem conter. Substitua conforme necessário.
- `o_que_NAO_deve_conter_no_link`: Lista de palavras que os links não devem conter. Substitua conforme necessário.

## Funções Principais

- `deveConter(link)`: Verifica se o link atende aos critérios de inclusão.
- `naoDeveConter(link)`: Verifica se o link atende aos critérios de exclusão.

## Resultados

Os links que atendem aos critérios são exibidos no console. Além disso, um arquivo chamado `links_filtrados.txt` é baixado automaticamente, contendo os links filtrados.

### Nota:

- O arquivo de texto será baixado automaticamente quando o script for executado.

