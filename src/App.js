import React, { Component } from 'react';
import {BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
  	//dodajac to mozemy uzywac routingu wewnatrz taga BrowserRouter
    return (
    	//jesli chcemy serwowac strone na innym adresie niz / musimy ustawic basename
	    <BrowserRouter basename="/my-app">
	      <div className="App">
	        <Blog />
	      </div>
	    </BrowserRouter>
    );
  }
}

export default App;
