import apiHeaders from '../api-headers';

function searchV1(query) {
  const endpoint = `${process.env.API_URL}/v1/search?`;
  const queryString = new URLSearchParams({
    q: query,
    type: 'album',
  });

  return fetch(
    `${endpoint}${queryString.toString()}`,
    {
      method: 'GET',
      headers: apiHeaders(),
    },
  );
}

export default {
  searchV1,
};
