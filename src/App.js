import React, {Component} from 'react';
import SearchBar from './component/SearchBar';
import './App.css';
import axios from 'axios';
import Imagelist from './component/Imagelist';
class App extends Component{
    state={picture: []}
    inputSearch=async(event)=>{
       const respose =await axios.get('https://api.unsplash.com/search/photos',
       {params :{query: event},
        headers :{Authorization: 'Client-ID QLj8BRTM09wWis9rBGSCnA7pNcRGJvG4KJjBqyzF1As'}
    })
    this.setState({picture :respose.data.results});
    console.log(respose.data.results);
    }
    render(){
        return <div className="App">
        
            <SearchBar inputSearch={this.inputSearch}/>
            <Imagelist images={this.state.picture}/>
            </div>
    }

}
export default App;