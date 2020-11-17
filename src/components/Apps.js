import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [] };
    // onSearchSubmit = async (term) => {
    //     const res = await axios.get('https://api.unsplash.com/search/photos',{
    //         params: { query: term},
    //         headers: {
    //             Authorization: 'Client-ID 0udcEDLLn3YoLKmgMfITljsJe54B7Y9eH1NaaI9m68M'
    //         }
    //     });
    //     this.setState({images: res.data.results});
    // }

    onSearchSubmit = async (term) => {
        await axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 0udcEDLLn3YoLKmgMfITljsJe54B7Y9eH1NaaI9m68M'
            }
        }).then(res => {this.setState({images: res.data.results})});
    }



    render (){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        )
    };
}


export default App;