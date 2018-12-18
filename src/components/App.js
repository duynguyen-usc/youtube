import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export default class App extends React.Component {
    
    onTermSubmit = (term) => {
        console.log(term);
        // youtube.get('/search')
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}