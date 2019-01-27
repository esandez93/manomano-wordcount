const wordsCount = (text, withOrder) => {
  // Split through words
  const words = text.split(/\W+/);
  const counts = {};
  let results = {};
  const keys = [];
  let lower = undefined;

  for (let i = 0; i < words.length; ++i) {
    // Ignores single characters or 1 letter words
    if (words[i].length > 2) {
      lower = words[i].toLowerCase();

      if (counts[lower]) {
        counts[lower]++;
      } else {
        counts[lower] = 1;
        keys.push(lower);
      }
    }
  }

  if (withOrder) {
    // Order words from most used to less used
    keys.sort((a, b) => counts[b] - counts[a]);

    for (let i = 0; i < keys.length; ++i) {
      results[keys[i]] = counts[keys[i]];
    }
  } else {
    results = counts;
  }

  return {
    count: results,
    keys: keys
  };
}

export default wordsCount;