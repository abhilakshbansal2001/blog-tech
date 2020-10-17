import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Build = () => {
    return (
        <>
        <div style={{padding:'2rem'}}>
        <Bounce left> <h1 className="header">
               Tech stack Used.
           </h1>
           </Bounce>
           <Fade top big cascade>
          <div className="d-flex align-items-center justify-content-center flex-wrap">
<div className="flip" style={{display:'none'}} data-aos='fade-up'>
    <div className="front react" style={{backgroundImage:'url(https://hackernoon.com/images/z2xg2bpo.jpg)'}}>
       <h1 className="text-shadow--s"></h1>
    </div>
    <div className="back">
       <h2>Framework</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div className="flip">
    <div className="front next" style={{backgroundImage:'url(https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png)'}}>
       <h1 className="text-shadow--s"></h1>
    </div>
    <div className="back">
       <h2>SSR</h2>
       <p>Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. Server-side sends a fully rendered page to the client; the client’s JavaScript bundle takes over and allows the SPA framework to operate. </p>
    </div>
</div>
<div className="flip ">
    <div className="front bootstrap" style={{backgroundImage:'url(./static/CSS.png)'}}>
       <h1 className="text-shadow--s"></h1>
    </div>
    <div className="back">
       <h2>Bootstrap</h2>
       <p>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.Bootstrap 4 is the newest version of Bootstrap IS BEING USED HERE.</p>
    </div>
</div>
<div className="flip ">
    <div className="front markdown" style={{backgroundImage:'url(./static/md.png)'}}>
       <h1 className="text-shadow--s"></h1>
    </div>
    <div className="back">
       <h2>MD Files</h2>
       <p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz. Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
    </div>
</div>
</div>
</Fade>
<div style={{margin:'10px'}}></div>
  
       

        </div>

        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap');
            .row{
                padding:30px;
                justify-content:center;
            }
            
            * {
                box-sizing: border-box;
                font-weight: normal;
            }

            .card{
              border-radius: 5px;
              background: linear-gradient(225deg, #ffffff, #e6e6e6) !important;
              box-shadow:  -20px 20px 60px #d9d9d9, 
             20px -20px 60px #ffffff  !important;
             border:none;
            }
            h1.header{
                font-family: 'Montserrat', sans-serif !important;
              font-weight:900;
              font-size:2.3rem;
              margin-bottom:2rem;
              padding-left:15px;
              margin-top:1.8rem;
              letter-spacing:0.2px !important;
              margin-left:1.8rem;
              border-left:8px solid #ccc;
              padding-bottom:10px;
              padding-top:10px;
            

          }
            img{
                border-top-left-radius:5px;
                border-top-right-radius:5px;
            }
            @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");


            .react,.next,.bootstrap,.markdown{
                background-image: url('https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb');

            }

            h1.text-shadow--s {
            font-size: 2.2em !important;
            color:white !important;
            font-family: 'Montserrat', sans-serif !important;
            text-align:center;

            }

            .flip {
            position: relative;
            }
            .flip > .front,
            .flip > .back {
            display: block;
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transition-duration: .5s;
            transition-property: transform, opacity;
            }
            .flip > .front {
            transform: rotateY(0deg);
            }
            .flip > .back {
            position: absolute;
            opacity: 0;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            transform: rotateY(-180deg);
            }
            .flip:hover > .front {
            transform: rotateY(180deg);
            }
            .flip:hover > .back {
            opacity: 1;
            transform: rotateY(0deg);
            }
            .flip.flip-vertical > .back {
            transform: rotateX(-180deg);
            }
            .flip.flip-vertical:hover > .front {
            transform: rotateX(180deg);
            }
            .flip.flip-vertical:hover > .back {
            transform: rotateX(0deg);
            }

            .flip {
            position: relative;
            display: inline-block;
         
            margin: 1em;
            width: 400px;
            }
            .flip > .front,
            .flip > .back {
            display: block;
            color: white;
            width: inherit;
            background-size: cover !important;
            background-position: center !important;
            
            height: 220px;
            padding: 1em 2em;
            background: #f9f9f9;
            border-radius: 10px;
            }
            .flip > .front p,
            .flip > .back p {
            font-size: 0.9125rem;
            line-height: 160%;
            color: #999;
            }

            .text-shadow--s {
            text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
            }

          `}
    </style>

        </>
    )
}

export default Build
