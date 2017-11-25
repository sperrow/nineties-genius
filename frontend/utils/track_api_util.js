export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);

export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks'
  })
);

export const createTrack = data => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data
  })
);

export const updateTrack = data => (
  $.ajax({
    method: 'PATCH',
    url: 'api/tracks',
    data
  })
);

export const destroyTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  })
);
