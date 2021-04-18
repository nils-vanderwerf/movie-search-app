import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';

class SearchBar extends Component{
    state = {
        userSearch: ''
    }

    handleInput = event => {
        this.setState({
            userSearch: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getResult(this.state.userSearch)
    }

    render() {
        return(
            <Fragment>
                <input onChange={this.handleInput} placeholder="Type in a movie to start"></input>
                <button onClick={this.handleSubmit}>Search</button>
            </Fragment>
        )
    }
}

export default SearchBar;