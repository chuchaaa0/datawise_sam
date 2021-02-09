import React, { Component } from 'react';
import CardList from '../components/CardList';
import axios from 'axios';
import Scroll from '../components/Scroll';
import './App.css';
var robots = {} ;
var t1 ;
var r2 ;
var json ;
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var url1 = "https://api.exchangeratesapi.io/latest";
class App extends Component {
  constructor(props) {
    super(props) ;
    this.state = { isLoading: true, pokemon: undefined , isLoading1: true, pokemon1: undefined };
    //this.state = { isLoading1: true, pokemon1: undefined };
  }

  componentDidMount() {
    console.debug("After mount! Let's load data from API...");
    axios.get(url).then(response => {
      this.setState({ pokemon: response.data });
      this.setState({ isLoading: false });
    });
    axios.get(url1).then(response => {
      this.setState({ pokemon1: response.data });
      this.setState({ isLoading1: false });
    });
  }

  

  render() {
    const { isLoading, pokemon , isLoading1 , pokemon1} = this.state;
    //const { robots } = this.robots;
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
    if (isLoading1) {
      return <div className="App">Loading...</div>;
    }
    console.log(pokemon) ;
    console.log(pokemon1) ;
    t1 = pokemon["time"]["updated"] ;
    r2= pokemon["bpi"]["EUR"]["rate"] ;
    console.log(t1) ;
    console.log(r2) ;
    r2=r2.replace(/\,/g,''); 
    r2=parseInt(r2,10);
        return       (
        <div className='tc'>
          <h1 className='f1'><u>Bitcoin Price</u></h1>
          <Scroll>
            <CardList robots={pokemon1} t1={t1} r2={r2}/>
          </Scroll>
        </div>
      );
					
    
		
		
  }
}

export default App;