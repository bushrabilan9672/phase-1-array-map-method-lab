function titleCased() {
  return this.map(function(title) {
    return title
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}

module.exports = {
  titleCased
};


