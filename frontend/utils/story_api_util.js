export const fetchStories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/stories'
  })
);
