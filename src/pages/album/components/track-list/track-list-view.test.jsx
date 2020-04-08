import React from 'react';
import renderer from 'react-test-renderer';
import TrackListView from './track-list-view';

jest.mock('../../../../utils/time', () => ({
  millisToMinutesAndSeconds: jest.fn(),
}));

const mockTracks = [
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
    name: 'You Gon’ Learn (feat. Royce Da 5\'9" & White Gold)',
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
  {
    duration_ms: 194706,
    id: '7Dj2wqPYXfSRFwa6qyOztr',
    name: 'In Too Deep',
  },
  {
    duration_ms: 210800,
    id: '7FIWs0pqAYbP91WWM0vlTQ',
    name: 'Godzilla (feat. Juice WRLD)',
  },
  {
    duration_ms: 337146,
    id: '5SiZJoLXp3WOl3J4C8IK0d',
    name: 'Darkness',
  },
  {
    duration_ms: 265946,
    id: '5CpsIb7SMFHjmAG8RvIWfq',
    name: 'Leaving Heaven (feat. Skylar Grey)',
  },
  {
    duration_ms: 286960,
    id: '5mZXWEH2eh8zMZGCxT5aW0',
    name: 'Yah Yah (feat. Royce Da 5\'9", Black Thought, Q-Tip & Denaun)',
  },
];

describe('TrackListView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <TrackListView
          tracks={mockTracks}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
