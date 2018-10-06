import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state={
            news:JSON
        }
    }
    render(){
        return (
            <div>
                <Header/>
                <NewsList senddata={this.state.news}/>
            </div>
        )
    }
    
}

ReactDOM.render(<App/>, document.getElementById('root'))



/*
const App = () => {
    console.log(JSON);
    return (
            <div>
                <Header/>
                <h1>This is first Comp</h1>
                <h2>This is react</h2>
            </div>
        )
}
*/