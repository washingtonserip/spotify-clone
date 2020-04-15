export const mockId = '4otkd9As6YaxxEkIjXPiZ6';

export const mockAlbum = {
  album_type: 'album',
  artists: [
    {
      id: '7dGJo4pcD2V6oG8kP0tJRR',
      name: 'Eminem',
    },
  ],
  id: '4otkd9As6YaxxEkIjXPiZ6',
  images: [
    {
      url: 'https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4',
    },
  ],
  name: 'The Eminem Show',
  release_date: '2002-05-26',
  tracks: {
    items: [
      {
        duration_ms: 173893,
        id: '7ccTcabbJlCJiIqtrSSwBk',
        name: 'Premonition - Intro',
      },
      {
        duration_ms: 216600,
        id: '0q2vG0UVuy6ajjcpkQHdZM',
        name: 'Unaccommodating (feat. Young M.A)',
      },
      {
        duration_ms: 234653,
        id: '0GQ5bFTVFFKpwNPc7KwQnB',
        name: 'You Gon’ Learn (feat. Royce Da 5\'9\' & White Gold)',
      },
      {
        duration_ms: 30133,
        id: '4EmunTy7kNBYQivOa8F6b8',
        name: 'Alfred - Interlude',
      },
      {
        duration_ms: 177693,
        id: '0VSzREd1OjEWJ9tXoFHRQH',
        name: 'Those Kinda Nights (feat. Ed Sheeran)',
      },
    ],
  },
};

export const mockError = {
  status: 500,
  message: 'Internal Server Error',
};

export const mockState = {
  albums: {
    isFetching: false,
    error: mockError,
    byIds: {
      [mockId]: mockAlbum,
    },
  },
};

export const mockEmptyState = {
  albums: {
    isFetching: false,
    error: {},
    byIds: {},
  },
};
