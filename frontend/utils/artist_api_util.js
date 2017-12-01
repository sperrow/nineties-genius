export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);

export const fetchArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
);

export const createArtist = data => (
  $.ajax({
    method: 'POST',
    url: 'api/artists',
    data
  })
);

export const updateArtist = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/artists/${data.artist.id}`,
    data
  })
);

export const destroyArtist = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/artists/${id}`
  })
);
