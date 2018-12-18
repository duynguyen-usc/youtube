import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onTermSubmit = this.onTermSubmit.bind(this);        
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        });
    };

    onTermSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onTermSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}