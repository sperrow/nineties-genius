export const dateFormatter = (str) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const arr = str.split('-');
  const year = parseInt(arr[0]);
  const month = parseInt(arr[1]) - 1;
  const day = parseInt(arr[2]);

  return `${months[month]} ${day}, ${year}`;
};
