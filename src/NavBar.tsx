import React, { Component } from 'react';
//import React, { Component } from 'react';
import {NavLink, Link} from "react-router-dom";

type CounterProps = {

}

type CounterState = {
  isOpen: boolean,
  logo: string,
}

class NavBar extends Component<CounterProps,CounterState> {
    
    constructor(props:any){
        super(props);
        this.state = {
            isOpen: false,
            logo: "Home",
        };
    }
    clickHandler = (e:React.MouseEvent) => {
        this.setState({isOpen: !this.state.isOpen})
    };
    clickHandlerLinks = (s:string) => {
        this.setState({isOpen: false})
        let a:any = document.getElementById("logo");
        a.innerHTML = s;
        this.setState({logo: s});
    };

    render(){
    return <div>
            <nav>
                <ul className="burger-links" style={{transform: this.state.isOpen ? "translateX(0px)":""}}>
                    <image onClick={this.clickHandler} className="fas fa-bars burger"></image>
                    <li><NavLink exact to="/" activeClassName="active" onClick={() => this.clickHandlerLinks("Home")}>Home</NavLink></li>
                    <li><NavLink to="/navigation/product" activeClassName="active" onClick={() => this.clickHandlerLinks("Product")}>Product</NavLink></li>
                    <li><NavLink to="/navigation/services" activeClassName="active" onClick={() => this.clickHandlerLinks("Services")}>Services</NavLink></li>
                    <li><NavLink to="/navigation/about" activeClassName="active" onClick={() => this.clickHandlerLinks("About")}>About</NavLink></li>
                    <li><NavLink to="/navigation/contact" activeClassName="active" onClick={() => this.clickHandlerLinks("Contact")}>Contact</NavLink></li>
                </ul>
                <image onClick={this.clickHandler} className="fas fa-bars burger"></image>

                <div className="logo" id="logo">
                    Home
                </div>
                <ul className="nav-links">
                    <li><NavLink exact to="/" activeClassName="active" onClick={() => this.clickHandlerLinks("Home")}>Home</NavLink></li>
                    <li><NavLink to="/navigation/product" activeClassName="active" onClick={() => this.clickHandlerLinks("Product")}>Product</NavLink></li>
                    <li><NavLink to="/navigation/services" activeClassName="active" onClick={() => this.clickHandlerLinks("Services")}>Services</NavLink></li>
                    <li><NavLink to="/navigation/about" activeClassName="active" onClick={() => this.clickHandlerLinks("About")}>About</NavLink></li>
                    <li><NavLink to="/navigation/contact" activeClassName="active" onClick={() => this.clickHandlerLinks("Contact")}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>;
    }
}

export default NavBar;