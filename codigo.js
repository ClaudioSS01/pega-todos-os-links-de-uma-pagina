var arr = [];
var l = document.links;

// Definir as variáveis para os filtros como listas
var o_que_deve_conter_no_link = [".php"]; // Substitua com o que deve conter no link
var o_que_NAO_deve_conter_no_link = ["google"]; // Substitua com o que não deve conter no link

// Funções para verificar se o link atende aos critérios
function deveConter(link) {
  return o_que_deve_conter_no_link.length === 0 || o_que_deve_conter_no_link.some(word => new RegExp(word, 'i').test(link));
}

function naoDeveConter(link) {
  return o_que_NAO_deve_conter_no_link.length === 0 || !o_que_NAO_deve_conter_no_link.some(word => new RegExp(word, 'i').test(link));
}

for (var i = 0; i < l.length; i++) {
  var link = l[i].href;

  // Aplicar os filtros
  if (deveConter(link) && naoDeveConter(link)) {
    arr.push(link);
    console.log("link " + i + " : " + arr[arr.length - 1]);
  }
}

// Criar um elemento de texto com os links
var textContent = arr.join('\n');

// Função para baixar o arquivo
function download() {
  var element = document.createElement('a');

  // Configurar o atributo 'href' com os links filtrados em formato de texto
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textContent));

  // Configurar o atributo 'download' com o nome do arquivo
  element.setAttribute('download', 'links_filtrados.txt');

  // Adicionar o elemento ao corpo do documento
  element.style.display = 'none';
  document.body.appendChild(element);

  // Simular o clique para iniciar o download
  element.click();

  // Remover o elemento do corpo do documento
  document.body.removeChild(element);
}

// Chamar a função download
download();
