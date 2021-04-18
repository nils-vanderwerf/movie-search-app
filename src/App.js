
import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import About from './pages/Favourites'
import Contact from './pages/Favourites'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor(){
      super()
      this.state = {
            movies: [],
            favourites: []
      }
    }
  //fetches data, converts to json and uses results to get more data
  fetchMovies = (searchValue) => {
    let url = `http://www.omdbapi.com/?apikey=c3b78ed6&s=${searchValue}&plot=short`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.Search[0].Title)
      let titles = data.Search.map(key => key.Title)
      this.getMoreData(titles)
    })
    .catch(error => console.log(error))
  }

  getMoreData = (titles) => {
    titles.map(thisTitle => {
      let secondUrl = `http://www.omdbapi.com/?apikey=c3b78ed6&t=${thisTitle}&plot=short` 
      fetch(secondUrl)
      .then(response => response.json())
      .then(data => 
        this.setState
          ({ 
            movies: [...this.state.movies, data] 
          })
      )
      .catch(error => console.log(error))
  }
  )}

  render() {
  return (
    <div className="app-container">
      
        <div className="sidebar">
          <SearchBar getResult={this.fetchMovies}/>
        </div>

        <div className="main-content">
          <Router>
            <Nav/>
            <Route exact path="/" render={(props) => 
              (<Home{...props} state={this.state}/>)} component={Home}/>
            <Route exact path="/favourites" component={Favourites}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            
          </Router>
        </div>
    </div>
  
  );
  }
  }

export default App;
