export const dateFormatter = (str) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const arr = str.split('-');
  const year = parseInt(arr[0]);
  const month = parseInt(arr[1]) - 1;
  const day = parseInt(arr[2]);

  return `${months[month]} ${day}, ${year}`;
};

export const convertLyrics = (lyrics, fragment) => {
  lyrics = `<div class="lyrics">${lyrics}</div>`;
  const addNewLines = str => {
    return str.replace(/(?:\r\n|\r|\n)/g, '\\n');
  };

  const addRef = (l, f) => {
    let i = l.indexOf(f);
    if (i > -1) {
      let ref = `<a ref-id="3">${f}</a>`;
      return l.substring(0, i) + ref + l.substring(i + f.length);
    }
    return l;
  };

  const addBreaks = str => {
    return str.replace(/\\n/g, '<br />');
  };

  return addBreaks(addRef(addNewLines(lyrics), fragment));
};
