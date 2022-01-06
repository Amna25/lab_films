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
Cinema.prototype.getFilmsByGenre = function(genre){
  const result = this.films.filter((film) =>{
    if (film.genre === genre){
      return film
    }
  })
  return result
}

Cinema.prototype.getFilmByYear = function(year){
  
  const result = this.films.reduce((result,film) => {
    if(film.year === year){
      result = true
    }
    return result;
    
  }, false);

  return result
}

Cinema.prototype.filmLength = function(length){
  const result = this.films.reduce((result, film)=> {
    if(film.length < length){
      result = false
    }
    return result
  }, true)
  return result
}

module.exports = Cinema;
