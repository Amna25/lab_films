const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.getFilmTitles = function(){
  const result = this.films.map((film) =>{
    return film.title;
  })
  return result;
}

Cinema.prototype.getFilmByTitle= function(title){
  const result = this.films.reduce((previousValue, currentValue) => {
    if (currentValue.title === title){
      previousValue = currentValue
    }
  return previousValue
  }, null)
  return result
}

module.exports = Cinema;
