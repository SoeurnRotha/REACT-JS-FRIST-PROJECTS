import React, { Component } from 'react'
import '../../style/home.css';


export class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='container'>

          <h1>Welcome to Devloper By <span>Soeurn Rotha</span></h1>

          <p>Hello everyone my name is Soeurn Rotha study at RUPP year 3  </p>


          <button>Get start</button>
          <button>Read more</button>
        </div>


        <div className='row'>
          <div className='box1'>

            <button>Read more</button>

          </div>

          <div className='box2'>

          <button>Read more</button>
            
          </div>
          <div className='box3'>
          <button>Read more</button>
            
          </div>
            
        </div>



        <div className='gif'>
          <img src='/image/03.gif' alt='gif'></img>
        </div>

        <footer className='footer'>
          <div className='footer-col'>
            <h1>About us</h1>
            <ul>
              <li>
                <a href='/'>Email</a>
              </li>
              <li>
                <a href='/'>Address</a>
              </li>
              <li>
                <a href='/'>Phone</a>
              </li>
           
            </ul>
          </div>
          <div className='footer-col'>
            <h1>Contact</h1>
            <ul>
              <li>
                <a href='/'>Email</a>
              </li>
              <li>
                <a href='/'>Address</a>
              </li>
              <li>
                <a href='/'>Phone</a>
              </li>
           
            </ul>
          </div>

          <div className='footer-col'>
            <h1>Follow us</h1>
            <ul>
              <li>
                <a href='/'>
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='/'>
                <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href='/'>
                <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
           
            </ul>
          </div>
        </footer>

        


        
        
      </div>
    )
  }
}

export default Home