import axios from 'axios';

const KEY = 'AIzaSyD90I4KkP7IsFQYmEjIkhqWK0-HvdEigF8';

export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY
    }
}); 
