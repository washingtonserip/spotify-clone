export function headers(method) {
  const Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;

  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization,
    },
  };
}
