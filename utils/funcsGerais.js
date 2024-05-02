import axios from "axios";

// Função para remover atributos vazios de uma lista de objetos:
export function removerAtributosVazios(objeto) {
  // Função recursiva para percorrer todos os atributos do objeto
  function percorrerAtributos(obj) {
    for (const chave in obj) {
      if (typeof obj[chave] === "object") {
        // Se o valor for um objeto, chama a função recursivamente
        percorrerAtributos(obj[chave]);
      } else if (obj[chave] === "") {
        // Se o valor for vazio, remove o atributo
        delete obj[chave];
      }
    }
  }

  // Chama a função para percorrer o objeto inicial
  percorrerAtributos(objeto);

  return objeto;
}

export function trocarNullPorVazio(objeto) {
  const objetoNovo = {};
  for (const chave in objeto) {
    if (objeto[chave] === null) {
      objetoNovo[chave] = "";
    } else if (Array.isArray(objeto[chave])) {
      // Se for um array, chama a função recursivamente para trocar "null" por "" na lista de objetos
      objetoNovo[chave] = trocarNullPorVazioLista(objeto[chave]);
    } else if (typeof objeto[chave] === "object") {
      // Se for um objeto, chama a função recursivamente para trocar "null" por "" no objeto aninhado
      objetoNovo[chave] = trocarNullPorVazio(objeto[chave]);
    } else {
      // Se for um valor simples, adiciona ao novo objeto
      objetoNovo[chave] = objeto[chave];
    }
  }
  return objetoNovo;
}

export function trocarNullPorVazioLista(listaObjetos) {
  const listaObjetosNova = [];
  for (const obj of listaObjetos) {
    listaObjetosNova.push(trocarNullPorVazio(obj));
  }
  return listaObjetosNova;
}

export async function puxarDados(url, method = "get", token_jwt, body = {}) {
  let headers = token_jwt
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_jwt}`,
      }
    : { "Content-Type": "application/json" };

  try {
    const response = await axios({ method, url, data: body, headers });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
