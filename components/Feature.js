import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Feature = () => {
    return (
        <>
            <section class="fdb-block">
            
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-12 text-left">
                    <Zoom><h1>Features</h1></Zoom>
                    <p class="lead">Beautifully crafted by Abhilaksh Bansal .</p> <p> This site is fully responsive and built on top of NEXT JS. </p>
                </div>
                </div>

                <div class="row text-left mt-5 row-feature">
                <div class="col-md-3 m-sm-auto mr-md-auto ml-md-0">
                    <img alt="image" class="img-fluid rounded" height={'200'} width={'250'} src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                    <h3><strong>SEO</strong></h3>
                    <p>With next js websites are very fast and thus it is very friendly for seo purpose. </p>
                </div>

                <div class="col-md-3 m-sm-auto pt-5 pt-md-0">
                    <img alt="image" class="img-fluid rounded" height={'200'} width={'250'} src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80" />
                    <h3><strong>Responsive</strong></h3>
                    <p> It is responsive for almost any screen size.Google gives point on the basis of mobile friendly. </p>
                </div>

                <div class="col-md-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0">
                    <img alt="image" height={'200'} width={'200'} class="img-fluid rounded" src="https://images.unsplash.com/photo-1511345624864-d6cf46344e8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                    <h3><strong>Fast.Speed.</strong></h3>
                    <p>As the webpages are pre-built during serving of the website to the user. Thus it is pre rendered every time , so it is very fast. </p>
                </div>
                </div>
            </div>
           
            </section>

            <style jsx>{
                `
                section{
                    min-height:100vh;
                    padding:50px 5%;
                    background-color: #ffffff;
                   
                }
                .row-feature{
                    display:flex;
                    justify-content:center;
                }
                h1{
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight:900;
                    font-size:2.3rem;
                    margin-bottom:2rem;
                    margin-top:1.8rem;
                    padding-left:15px;
                    border-left:8px solid #ccc;
                }
                h3 strong{
                    font-family: 'Montserrat', sans-serif !important;
                    font-weight:700;
                }
                
                `
            }
            
        </style>
        </>
        
    )
}

export default Feature
