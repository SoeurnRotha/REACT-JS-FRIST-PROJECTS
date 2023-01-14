import React, { Component } from 'react';
import '../style/navbar.css';
class Navbar extends Component {

  state = {click :false};

  handleClick = ()=>{
    this.setState({click:!this.state.click})
  }
  render() {

    return (
    <header className='nav-header'>
      <div className='logo'>
        <h3>Soeurn Rotha</h3>
      </div>

      <div >
        <ul id='list' className={this.state.click ? "#list active" : "#list"}>
          <li>
            <a href='/' className='active'>Home</a>
          </li>
          <li>
            <a href='/about'>About us</a>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <a href='/contact'>Contcte</a>
          </li>


        </ul>
      </div>
 
      <div id='mobile' onClick={this.handleClick}>
        <i id='bar' className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} ></i>
      </div>
        
    </header>
    )
  }
} 

export default Navbar