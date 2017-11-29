export const dateFormatter = str => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const arr = str.split('-');
  const year = parseInt(arr[0]);
  const month = parseInt(arr[1]) - 1;
  const day = parseInt(arr[2]);

  return `${months[month]} ${day}, ${year}`;
};

export const dateAgoFormatter = str => {
  let date = new Date(str);

  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};

export const convertLyrics = (lyrics, referents) => {
  const addNewLines = str => {
    return str.replace(/(?:\r\n|\r|\n)/g, '\\n');
  };

  const addRef = (l, ref) => {
    let fragment = addNewLines(ref.fragment);
    let i = l.indexOf(fragment);
    if (i > -1) {
      let str = `<a ref-id="${ref.id}">${fragment}</a>`;
      l = l.substring(0, i) + str + l.substring(i + fragment.length);
    }
    return l;
  };

  const addBreaks = str => {
    return str.replace(/\\n/g, '<br />');
  };

  lyrics = addNewLines(`<div class="lyrics">${lyrics}</div>`);

  referents.forEach((ref) => {
    lyrics = addRef(lyrics, ref);
  });

  return addBreaks(lyrics);
};
