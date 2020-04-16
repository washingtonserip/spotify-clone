export const mockQuery = 'Eminem';

export const mockResults = {
  albums: {
    items: [
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '4otkd9As6YaxxEkIjXPiZ6',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c',
          },
        ],
        name: 'Music To Be Murdered By',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '2cWBwpqMsDJC1ZUwz813lo',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4',
          },
        ],
        name: 'The Eminem Show',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '47BiFcV59TQi2s9SkBo2pb',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100',
          },
        ],
        name: 'Recovery',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '3HNnxK7NgLXbDoxRZxNWiR',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273e4073def0c03a91e3fceaf73',
          },
        ],
        name: 'Kamikaze',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '6t7956yu5zYf5A829XRiHC',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273dbb3dd82da45b7d7f31b1b42',
          },
        ],
        name: 'The Marshall Mathers LP',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '2bBDybnvM234YGjNVcMQaK',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273a2458e298106612662510936',
          },
        ],
        name: 'Eminem Presents The Re-Up',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '6DN7GcZF1HywzrkGN6Eeqk',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273cb66bcc14c6f857c127d5969',
          },
        ],
        name: 'The Marshall Mathers LP2 (Deluxe)',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '1rfORa9iYmocEsnnZGMVC4',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273b6ef2ebd34efb08cb76f6eec',
          },
        ],
        name: 'Just Lose It',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '0U6ldwLBEMkwgfQRY4V6D2',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273dee6b58d35215322626b5701',
          },
        ],
        name: 'Revival',
      },
      {
        artists: [
          {
            name: 'Eminem',
          },
        ],
        id: '7tsXPtLqhab1zWeubbf6JH',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273dfd0ebe9b4b99f621f376453',
          },
        ],
        name: 'Encore',
      },
    ],
  },
};

export const mockError = {
  status: 500,
  message: 'Internal Server Error',
};

export const mockState = {
  search: {
    isFetching: false,
    error: mockError,
    byQueries: {
      [mockQuery]: mockResults.albums.items,
    },
  },
};

export const mockEmptyState = {
  search: {
    isFetching: false,
    error: {},
    byQueries: {},
  },
};
