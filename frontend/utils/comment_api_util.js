export const createComment = data => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data
  })
);

export const destroyComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
);
