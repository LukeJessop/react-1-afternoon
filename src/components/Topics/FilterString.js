import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state ={
        unFilteredArray: ['I','chose','these','strings'],
        userInput: '',
        filteredArray: []
            
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterString(userInput){
        let names = this.state.unFilteredArray
        let filteredNames = []

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({ filteredNames: filteredNames });
    }

    

    render(){
        return (
        
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput)}></button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
        </div>
        
        )
    }
}

export default FilterString