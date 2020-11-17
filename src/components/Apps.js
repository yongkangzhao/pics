import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos',{
            params: { query: term} ,
        });
        this.setState({images: res.data.results});
    }

    // onSearchSubmit = async (term) => {
    //     await unsplash.get('/search/photos',{
    //         params: { query: term},
            
    //     }).then(res => {this.setState({images: res.data.results})});
    // }



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