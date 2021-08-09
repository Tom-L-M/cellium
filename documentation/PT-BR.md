
# THIS FILE IS OUTDATED, SEE /documentation/EN-US.md

# Cellium  

#### Cellium é um pacote para implementação de uma versão simplificada de *namespaces*.

[![npm status](https://img.shields.io/npm/v/cellium)](https://www.npmjs.org/package/cellium)

### Informações Gerais
A implementação do recurso de *namespacing* com o pacote Cellium é baseada em objetos JavaScript.  
Esses objetos são criados dinamicamente pela classe ```Namespace```, e são gerenciados pela classe ```Cellium``` importada.

**Instalação:**
```bash
$ npm install cellium
```

**Importando para uso:**
``` javascript
const Cellium = require('cellium');
```

### Cellium
A classe ```Cellium``` possui três métodos embutidos que podem ser utilizados: **```create```**, **```extend```** e **```depth```**.

+ **```create```**
   +  **```create(nome)```** este método aceita um único dado, que será utilizado como nome do *namespace*, e será o valor da propriedade ```name``` do mesmo. Essa propriedade ```name``` não pode ser alterada, nem redefinda posteriormente.
   + Este método retorna um novo objeto ```Namespace```.

+ **```extend```**   
  +  **```extend(namespace, additions)```** este método aceita dois dados de entrada. O primeiro é a variável em que está armazenado o objeto ```Namespace``` que será alterado.   

     O segundo é uma lista de itens, que pode conter qualquer quantidade de objetos. Esses objetos devem possuir duas propriedades: ```path``` e ```data```.
  
     A entrada ```path``` deve ser uma *string*, contendo o 'caminho' dentro do objeto *namespace*, no final do qual será armazenado o dado contido na entrada ```data```.  

     A entrada ```data``` pode ser omitida. Se for esse o caso, então a propriedade criada no final do caminho informado em ```path``` terá ```{}``` como valor inicial.
   
   + Este método adiciona os novos métodos e propriedades alterando diretamente o *namespace*, e também retorna o objeto *namespace* alterado (tornando possível utilizá-lo para copiar objetos e *namespaces* facilmente.

+ **```depth```**   
   + **```depth(namespace)```** este médoto aceita apenas um dado: a variável armazenando o objeto ```Namespace```.
   + O retorno deste método é a 'profundidade' do objeto: um número inteiro equivalente á 'distância' entre o próprio objeto e a sua propriedade mais interna, incluindo os referidos extremos.

### Os objetos *Namespace*
Os objetos criados com o método ```Cellium.create()``` são instâncias da classe **```Namespace```** e contém duas propriedades pré-definidas: a entrada ```name``` e o método ```size()```.

Nenhuma das duas propriedades pode ser redefinida ou alterada, e não irão ser detectadas por nenhuma forma de listagem de entradas por iteração em objetos, nem mesmo por ```Object.keys()``` ou *loops* ```for .. in```. Portanto, para acessar tais propriedades, é necessário chamá-las diretamente (veja exemplo abaixo).

### Exemplo:
``` javascript
const Cellium = require('cellium');

let foo = Cellium.create('foo'); // foo = Namespace {}

Cellium.extend(foo, [
  {path: 'propA', data: [1, 2, 3]},
  {path: 'propB', data: 'abc'},
  {path: 'propC.propC1', data: (a, b) => a + b},
  {path: 'propC.propC2', data: function(a, b) {return a - b}},
  {path: 'propD', data: {}},
  {path: 'propE.propE1.propE12', '1'}
]); 
// Se Cellium.extend() fosse chamado e atribuído a uma variável, 
// esta iria então conter uma cópia exata do objeto 'foo',
// incluindo as propriedades recentemente adicionadas

/*
'foo' será igual a:
  Namespace {
    propA: [1, 2, 3],
    propB: 'abc',
    propC: {
      propC1: (a, b) => a + b,
      propC2: function(a, b) { return a - b}
    },
    propD: {},
    propE: {
      propE1: {
        propE12: '1'
      }
    }
  }
*/

let a = foo.size(); // a = 5
let b = foo.name; // b = 'foo'
let c = Cellium.depth(foo); // c = 4

for (let i in foo) {
  console.log(i);
} // isto não identificará foo.name ou foo.size()

```

### Suporte, Contribuições e Licença:

Veja o arquivo README [aqui](https://github.com/Tom-L-M/cellium/blob/main/README.md) para obter informações a respeito desses tópicos.
