import { URL } from '../config/index';

const URL_CATEGORIES = `${URL}/categorias?_embed=videos`;
const URL_CATEGORIES_ONLY = `${URL}/categorias`;

function getAllWhithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }

      throw new Error('não foi possivel acessar os dados!');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES_ONLY)
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }

      throw new Error('não foi possivel acessar os dados!');
    });
}

function create(categoria) {
  return fetch(URL_CATEGORIES_ONLY, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }

      throw new Error('não foi possivel acessar os dados!');
    });
}

export default { getAllWhithVideos, getAll, create };
