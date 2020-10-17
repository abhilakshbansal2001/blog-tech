import Link from 'next/link'
// import {useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Hero = () => {

    return (
        <>
        <div className="hero-div">
    <nav className="navbar navbar-expand-lg  ">
      <Fade top><a className="navbar-brand">Abhilaksh</a></Fade>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <Fade top cascade>
      <div className="collapse navbar-collapse " id="navbarColor01">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
          </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
            <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
        
         
        </ul>
      
      </div>
      </Fade>
    </nav>
            <div style={{textAlign:'center'}}>
            <Fade bottom><h1 className="hero-h1">Tech.</h1></Fade>
           <Zoom cascade left> <h6 className="hero-h6">by- Abhilaksh Bansal</h6> </Zoom>
            </div>
            
            <div className="scroll">
            <i class="fas fa-arrow-alt-circle-down"></i>
            </div>

       </div>
        <style jsx>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900;600;700;800;500&display=swap');
        .hero-div{
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url('https://images.unsplash.com/photo-1495127780552-a14eb19a381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
            min-height: 100vh;
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            position:relative;
            
            flex-direction: column;
            background-attachment: fixed;
            clip-path: polygon(0 92%, 50% 100%, 100% 92%, 100% 0, 0 0);
                    
        }
        .hero-div::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            
            background: rgb(246,245,245);
            background: linear-gradient(90deg, rgba(246,245,245,1) 0%, rgba(238,238,238,1) 65%, rgba(231,231,222,1) 100%);
            opacity:0;
          
        }
        
        .hero-div *{
            z-index: 10;
        }
        .hero-h1{
            font-size: 6rem;
            font-family: 'Montserrat', sans-serif !important;
            font-weight: 900 !important;
            
        }
        nav{
            position:absolute;
            width:100%;
            top:0;
            left:0;
            z-index:100;
        }
        nav ul li a{
            color:#000 !important;
        }
        .custom-shape-divider-top-1602846936 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }
        
        .custom-shape-divider-top-1602846936 svg {
            position: relative;
            display: block;
            width: calc(141% + 1.3px);
            height: 88px;
        }
        
        .custom-shape-divider-top-1602846936 .shape-fill {
            fill: #F6F5F5;
        }

        .scroll{
            position:absolute;
            left:50%;
            bottom:40px;
            transform:translateX(-50%);
            font-size:20px;
            animation:key 1s ease-in-out alternate infinite;
        }
        @keyframes key{
            from{
                transform : translateY(-10%);
            }
            to{
                transform : translateY(0%);

            }
        }
        
        `}
        </style>
        </>
    )
}

export default Hero
