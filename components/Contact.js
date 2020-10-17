

const Contact = () => {
    return (
        <>
        <div style={{backgroundColor:'#fff'}}>
            <section class="fdb-block pb-5">
                <div class="container">
                    <div class="row text-center justify-content-center">
                    <div class="col-12 col-md-8 col-lg-7 mb-3">
                        <h1>Contact ME</h1>
                        <p class="lead ">Abhilaksh Bansal 19001015002 Branch - ECS ,YMCA Faridabad.</p>
                    </div>
                    </div>
                    <div class="row-70"></div>
                    <div class="row">
                    <div class="col-12 col-md-8 col-lg m-auto">
                        <form action="mailto:abhilakshbansal2001@gmail.com">
                        <div class="row">
                            <div class="col">
                            <input type="email" class="form-control" placeholder="Enter email" />
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col">
                            <input type="email" class="form-control" placeholder="Subject" />
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col">
                            <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        </form>
                    </div>

                    <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
                        {/* <iframe class="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                        width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen=""></iframe> */}

                        <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{border:'0'}} allowfullscreen="" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ymca%20Faridabad+(college)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                        <p><strong>College</strong></p>
                        <p>
                        YMCA J.C BOSE university ,Faridabad
                            </p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
        <style jsx>
            {`
                h1{
                    font-family: 'Montserrat', sans-serif !important;
                  font-weight:900;
                  font-size:2.3rem;
                  margin-bottom:2rem;
                  padding-left:15px;
                  margin-top:1.8rem;
                  letter-spacing:0.2px !important;
                  margin-left:1.8rem;
                 
                  padding-bottom:10px;
                  padding-top:10px;
                
    
              }
              input{
                  background-color:#fff !important;
                  border-radius:50% !important;
                  border:1px solid #ccc !important;
              }
            `}
        </style>
        </>
    )
}

export default Contact
