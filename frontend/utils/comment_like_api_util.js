export const createLike = data => (
  $.ajax({
    method: 'POST',
    url: 'api/comment_likes',
    data
  })
);

export const destroyLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comment_likes/${id}`
  })
);
