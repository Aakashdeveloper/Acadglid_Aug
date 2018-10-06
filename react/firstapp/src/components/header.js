import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)

        this.state = {
            logo:'React App',
            search:''
        }
    }

    inputChange(event){
        this.setState({search: event.target.value})
    }
    render(){
        return (
            <header>
                <h1 className="logo"
                onClick={()=> console.log("hii from logo")}>
                    {this.state.logo}
                </h1>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>Your are searching with:{this.state.search}</p>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;


/*
const Header = () => {
    return (
        <header>
            <h1>Logo</h1>
            <center>
                <input/>
            </center>
            <hr/>
        </header>
    )
}

const styles ={
            header:{
                background:'maroon'
            },
            h1:{
                textAlign:'center',
                color:'#fff'
            }
        }

        return (
            <header style={styles.header}>
                <h1 style={styles.h1}>Logo</h1>
                <center>
                    <input/>
                </center>
                <hr/>
            </header>
        )
*/