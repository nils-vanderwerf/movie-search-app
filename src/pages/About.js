import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <h1>Movie Discovery Channel </h1>
                <input className="search"
                placeholder="Type to search..."> 
                {/* // Sets the value of the search to the users input
                // onChange ={(event) => props.setSearchValue(event.target.value)}>  */}
                </input>
            </div>
        )
    }
}

export default About;