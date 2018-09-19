import React, { Component } from 'react'; 
import { getMovies } from "../services/fakeMovieService"; 

class Movies extends Component {
  state = {
    movies: getMovies()  
  };

  handleDelete = movie => { 
     
  };

  render() { 
    return (
      table.table>thead>tr>th*4 
    ); 
  }
}; 

export default Movies; 

