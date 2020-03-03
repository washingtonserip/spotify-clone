import apiHeaders from '../api-headers';

function getAlbumV1(id) {
  const endpoint = `${process.env.API_URL}/v1/albums/${id}`;

  return fetch(
    endpoint,
    {
      method: 'GET',
      headers: apiHeaders(),
    },
  );
}

export default {
  getAlbumV1,
};
