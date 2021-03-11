import React, {Component} from 'react';
import '../App.css'
class SearchBar extends Component{
    state={searchTerm :''}
    onChangehandler=(event)=>{
        this.setState({searchTerm:event.target.value})
    }
    onsubmithandler=(e)=>{
        e.preventDefault()
        this.props.inputSearch(this.state.searchTerm);
        this.setState({searchTerm:''})
    }
    render(){
        return (
        <div className="searchbar-container">
            <form onSubmit={this.onsubmithandler} className="search-form">
            <label htmlFor="inpt"></label>
            <input type='text' 
            name="inpt"
            value={this.state.searchTerm} 
            onChange={this.onChangehandler}
            placeholder="Search Here:)" />
            </form>
        </div>
        
        )
    }
}
export default SearchBar; 
