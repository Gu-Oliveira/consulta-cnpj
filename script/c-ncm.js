// https://brasilapi.com.br/api/ncm/v1

async function consultaNCM(codigo) {
    try {
      const resultado = await fetch(`https://brasilapi.com.br/api/ncm/v1/${codigo}`);
      const json = await resultado.json();
      console.log(json.codigo); // Exibe o valor da propriedade "codigo" no console
    } catch (error) {
      console.error(error);
    }
  }
  
  consultaNCM('01'); // Substitua "01" pelo código que você deseja consultar
  