import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <>
    <div className="list_post container-fluid" style={{overflow:'hidden'}} >
      {!posts && <div>No posts!</div>}
      <div class="col-12 text-left">
                    <h1>Trending Technologies</h1>
                    
      </div>
      <Fade left big cascade>
      <div className="row d-flex flex-wrap">
      
        {posts &&
          posts.map((post) => {
            return (
             
            <div className="col-md-4 my-4" >
              <div className="card" key={post.slug} style={{width: "18rem"}}>
                  {post.frontmatter.hero_image && <img src={post.frontmatter.hero_image  } className="card-img-top"  /> }
              
                <div className="card-body">
                  <h5 className="card-title">{post.frontmatter.title}</h5>
                  <p className="card-text">{post.frontmatter.desc}</p>
                  <Link href={`/post/${post.slug}`}>
                  <a  className="btn btn-primary">Go here <i class="fas fa-arrow-right"></i></a>
                  </Link>
                </div>
              </div>
            </div>
            

            )
          })}
          </div>
          </Fade>
 
     
    </div>
    <style jsx>
          {`
          .row{
            padding:30px;
            justify-content:center;
          }
            .card{
              border-radius: 5px;
              background: linear-gradient(225deg, #ffffff, #e6e6e6) !important;
              box-shadow:  -20px 20px 60px #d9d9d9, 
             20px -20px 60px #ffffff  !important;
             border:none;
            }
            h1{
              font-family: 'Montserrat', sans-serif !important;
              font-weight:900;
              font-size:2.3rem;
              margin-bottom:2rem;
              padding-left:15px;
              margin-top:1.8rem;
              letter-spacing:0.2px !important;
              margin-left:1.8rem;
              border-left:8px solid #ccc;

          }
          img{
            border-top-left-radius:5px;
            border-top-right-radius:5px;
          }
          `}
    </style>
    </>
  )
}
