export const createAnnotation = data => (
  $.ajax({
    method: 'POST',
    url: 'api/annotations',
    data
  })
);
