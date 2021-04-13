import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/Saerch-box/search-box.component';

class App extends Component {

  constructor(){ 
    super();
    this.state = {
      monsters: [],
      searchField:''
    };

  }

  //react life cycle // fetch json data
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monster => this.setState({'monsters':monster}));
  }

  //the 'this' is automatic bind when the arrow function was defined in the first place which is the "App" component
  handleChange= (e) =>{
    this.setState({searchField : e.target.value});
  }


  render(){
    //destructor  this code == const monster = this.state.monsters; / const searchField = this.state.searchField;
    const{monsters,searchField} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filterMonsters}></CardList>       
    </div>
    );
  } 
}

export default App;
