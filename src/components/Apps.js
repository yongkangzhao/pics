import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    // async await method
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const res = await unsplash.get('/search/photos',{
            params: { query: term} ,
        });
        this.setState({images: res.data.results});
    }
    // fetch then method
    // onSearchSubmit = async (term) => {
    //     await unsplash.get('/search/photos',{
    //         params: { query: term},
            
    //     }).then(res => {this.setState({images: res.data.results})});
    // }



    render (){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div>
        )
    };
}


export default App;