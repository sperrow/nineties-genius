export const createComment = data => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data
  })
);
