export const createLike = data => (
  $.ajax({
    method: 'POST',
    url: 'api/annotation_likes',
    data
  })
);

export const destroyLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/annotation_likes/${id}`
  })
);
