import { URL } from '../config/index';

const URL_VIDEOS = `${URL}/videos?_embed=categorias`;

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(video),
  })
    .then(async (responseServer) => {
      if (responseServer.ok) {
        const resposta = await responseServer.json();
        return resposta;
      }

      throw new Error('não foi possivel acessar os dados!');
    });
}

export default { create };
