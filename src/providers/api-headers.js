function apiHeaders() {
  const Authorization = `Bearer ${sessionStorage.getItem('access_token')}`;

  return {
    'Content-Type': 'application/json',
    Authorization,
  };
}

export default apiHeaders;
