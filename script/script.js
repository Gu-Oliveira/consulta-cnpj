// https://brasilapi.com.br/api/ncm/v1
function qs (s) {
  return document.querySelector(s)
}

// CONSULTA CNPJ (início)


let inputCNPJ = qs('#cnpj-input')
let btnConsultar = qs('#consultar')
let resultadoConsulta = qs('.resultadoConsulta')

let rCNPJ = qs('.r-cnpj')
let rIdMatFilial = qs('.r-id-mat-filial')
let rDescMatFilial = qs('.r-desc-mat-filial')
let rRazaoSocial = qs('.r-razao-social')
let rNomeFantasia = qs('.r-nome-fantasia')
let rSituacaoCad = qs('.r-sit-cad')
let rDescSitCad = qs('.r-desc-sit-cad')
let rDataSitCad = qs('.r-data-sit-cad')
let rDataIniAtiv = qs('.r-data-inicio-ativ')
let rCnaeFiscal = qs('.r-cnae-fiscal')
let rCnaeFiscalDesc = qs('.r-cane-fiscal-desc')
let rTipoLogr = qs('.r-tipo-logr')
let rLogradouro = qs ('.r-logradouro')
let rNumero = qs ('.r-numero')
let rComplemento = qs ('.r-complemento')
let rBairro = qs ('.r-bairro')
let rCep = qs ('.r-cep')
let rUf = qs ('.r-uf')
let rCodMunicipio = qs ('.r-cod-municipio')
let rMunicipio = qs ('.r-municipio')
let rTelefone1 = qs ('.r-tel-1')
let rCapitalSocial = qs ('.r-capital-social')
let rPorte = qs ('.r-porte')

// div socio

let resultSocios = qs('.resultadoSocios')


//let  = qs ('.')

async function consultaCNPJ(cnpj) {

  try {
    const resultado = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
    const json = await resultado.json();

    rCNPJ.innerHTML = `CNPJ: ${json.cnpj}`;
    rIdMatFilial.innerHTML = `ID Filial: ${json.identificador_matriz_filial}`;
    rDescMatFilial.innerHTML = `Desc. ID Filial: ${json.descricao_identificador_matriz_filial}`;
    rRazaoSocial.innerHTML = `Razão Social: ${json.razao_social}`
    rNomeFantasia.innerHTML = `Nome Fantasia: ${json.nome_fantasia}`
    rSituacaoCad.innerHTML = `Situação Cadastral: ${json.descricao_situacao_cadastral}`
    rDataIniAtiv.innerHTML = `Início de Atividade: ${json.data_inicio_atividade}`;
    rCnaeFiscal.innerHTML = `CNAE Principal: ${json.cnae_fiscal}`
    rCnaeFiscalDesc.innerHTML = `Descrição CNAE: ${json.cnae_fiscal_descricao}`;
    rLogradouro.innerHTML = `Logradouro: ${json.descricao_tipo_de_logradouro} 
    ${json.logradouro}, Nº: ${json.numero}, Complemento:${json.complemento}, Bairro: ${json.bairro}, 
    Municipio: ${json.municipio}, CEP: ${json.cep}`;
    rTelefone1.innerHTML = `Telefone 1: ${json.ddd_telefone_1}`;
    rCapitalSocial.innerHTML = `Capital Social: R$ ${json.capital_social.toFixed(2)}`
    rPorte.innerHTML = `Porte: ${json.porte}`

    for (let socio of json.qsa){
      const novoSocio = resultSocios.querySelector('.socio').cloneNode(true);

      novoSocio.querySelector('.r-nomeSocio').innerHTML = `Sócio: ${socio.nome_socio}`;
      novoSocio.querySelector('.r-faixaEtaria').innerHTML = `Faixa etária: ${socio.faixa_etaria}`;
      novoSocio.querySelector('.r-cnpj-cpf-socio').innerHTML = `CPF/CNPJ Sócio: ${socio.cnpj_cpf_do_socio}`;
      novoSocio.querySelector('.r-qualifSocio').innerHTML = `Qualificação: ${socio.qualificacao_socio}`;
      novoSocio.querySelector('.r-dataSociedade').innerHTML = `Data sociedade: ${socio.data_entrada_sociedade}`;

      resultSocios.appendChild(novoSocio)      
    }


  } catch (error) {
    //console.error(error);
  }

}

btnConsultar.addEventListener('click', ()=>{

  const cnpj = inputCNPJ.value;
  const cnp = /[./]/; //caracteres não permitidos

  if(cnpj === ''){
    alert('Insira um CNPJ para consultar.')
  }else if(cnp.test(cnpj)){
    alert("Inrira somente números para consultar.")
  }else{
    document.querySelector('.resultado').classList.toggle('close')

    consultaCNPJ(cnpj);
  
    inputCNPJ.value = ''
  }

  

  

})

// CONSULTA CNPJ (fim)

// BOTOES CONSULTA (inicio)

// btn CNPJ

let btnCNPJ = document.querySelector('.c-cnpj')

btnCNPJ.addEventListener('click', ()=>{
  document.querySelector('.consultaCNPJ').classList.toggle("close")
})

let btnFechar = document.querySelector('#fechar')
btnFechar.addEventListener('click', ()=>{
  document.querySelector('.consultaCNPJ').classList.toggle("close")
})

let btnNovaConsulta = document.querySelector('#novaConsulta')
btnNovaConsulta.addEventListener('click', ()=>{
  document.querySelector('.r-cnpj').innerHTML = '';
  document.querySelector('.r-id-mat-filial').innerHTML = '';
  document.querySelector('.r-desc-mat-filial').innerHTML = '';
  document.querySelector('.r-razao-social').innerHTML = '';
  document.querySelector('.r-nome-fantasia').innerHTML = '';
  document.querySelector('.r-sit-cad').innerHTML = '';
  document.querySelector('.r-desc-sit-cad').innerHTML = '';
  document.querySelector('.r-data-sit-cad').innerHTML = '';
  document.querySelector('.r-data-inicio-ativ').innerHTML = '';
  document.querySelector('.r-cnae-fiscal').innerHTML = '';
  document.querySelector('.r-cane-fiscal-desc').innerHTML = '';
  document.querySelector('.r-tipo-logr').innerHTML = '';
  document.querySelector('.r-logradouro').innerHTML = '';
  document.querySelector('.r-numero').innerHTML = '';
  document.querySelector('.r-complemento').innerHTML = '';
  document.querySelector('.r-bairro').innerHTML = '';
  document.querySelector('.r-cep').innerHTML = '';
  document.querySelector('.r-uf').innerHTML = '';
  document.querySelector('.r-cod-municipio').innerHTML = '';
  document.querySelector('.r-municipio').innerHTML = '';
  document.querySelector('.r-tel-1').innerHTML = '';
  document.querySelector('.r-capital-social').innerHTML = '';
  document.querySelector('.r-porte').innerHTML = '';
  document.querySelector('.resultadoSocios').innerHTML = '';
  document.querySelector('.resultadoSocios').innerHTML = `
                    <div class="socio">
                        <div class="r-nomeSocio"></div>
                        <div class="r-faixaEtaria"></div>
                        <div class="r-cnpj-cpf-socio"></div>
                        <div class="r-qualifSocio"></div>
                        <div class="r-dataSociedade"></div>
                    </div>`
  ;

  document.querySelector('.resultado').classList.toggle('close')
})

// BOTOES CONSULTA (fim)

