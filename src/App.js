import React, {Component} from 'react'
//import logo from './logo.svg';
import {SearchBox} from './components/Search-box/search-box.component';
import {Cardlist} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monster:[],
      searchfield:' '
      
    };
  //  this.handlechange=this.handlechange.bind(this);
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>
    response.json())
    .then(users=>this.setState({monster:users}))  
  }
  handlechange=(e)=>{
    this.setState({searchfield:e.target.value});
  }
  render()
  {
    const{monster,searchfield}=this.state;

    const filteredmonster=monster.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
      placeholder="search monsters"
      handlechange={this.handlechange}
      />
      <Cardlist monster={filteredmonster}/>
     
     
       
        </div>
    )
  }
}
export default App;
