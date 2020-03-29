import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
//import 'whatwg-fetch';
import axios from 'axios';



export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  } 
 /* fetch returns a response object
  the json DATA is used to set state
  good idea to use fetchPolyfill on projects that use fetch
 */
  // componentDidMount(){
  //   fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({gifs: responseData.data})
  //     })
  //     .catch(error => console.log('Error fetching and parsing data', error))
  // }

  /* axios is used to get data objects form api requests
  */
  componentDidMount(){
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  .then(response => { 
    //check the axios response schema and the giphy API sample array
    this.setState({gifs: response.data.data}
    // handle success
  )})
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  })
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
  .then(response => { 
    //check the axios response schema and the giphy API sample array
    this.setState({gifs: response.data.data, loading: false}
    // handle success
  )})
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  })
  }

  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">
          {this.state.loading ? <p> Loading...</p> : <GifList data={this.state.gifs}/>}
        </div>
      </div>
    );
  }

}