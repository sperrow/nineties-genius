export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const fetchAlbums = () => (
  $.ajax({
    method: 'GET',
    url: 'api/albums'
  })
);

export const createAlbum = data => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data
  })
);

export const updateAlbum = data => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${data.album.id}`,
    data
  })
);

export const destroyAlbum = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  })
);
