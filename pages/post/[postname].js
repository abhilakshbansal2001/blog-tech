import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'
import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'
import getTitles from '@utils/getTitles'
import { Parallax, Background } from 'react-parallax';
import BlogHeader from '@components/BlogHeader'

export default function BlogPost({ siteTitle, frontmatter, markdownBody,slugs,postSlug,titles }) {

  const index = slugs.findIndex(slug => slug === postSlug);

  if (!frontmatter) return <></>



  useEffect(() => {
    const disqus_config = function () {
      this.page.url = "http://localhost:3000/post/" +postSlug ;  
      this.page.identifier = postSlug; 
      };
  


    const script = document.createElement('script');
      script.src = 'https://http-localhost-3000-veen2k2glg.disqus.com/embed.js';
      script.setAttribute('data-timestamp', + Date.now().toString());

      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments</a></noscript>
  }, [])

      
      // (function() { 
        // if (process.browser) {
      
        // }
      // })();



  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        {/* <BlogHeader author={frontmatter.author} location={postSlug} /> */}
        <div className="back">
          
          <Link href="/">
            <a> Back to post list</a>
          </Link>
          
          <small>by {frontmatter.author}</small>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
             <Parallax
             blur={{ min: -15, max: 15 }}
             bgImage={frontmatter.hero_image}
             bgImageAlt="the dog"
             strength={-200}
             bgImageStyle={{backgroundPosition: 'center'}}
             className="mb-5"
         >
            {/* <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            /> */}
             <div style={{ height: '600px' }} />
            </Parallax>
          )}
          <div>
            {/* {markdownBody} */}
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>


            <div className="post-next-prev my-5 py-1 px-4">
        {(index !== 0) && 
          <div  >
            <p>
        <h2>{titles[index-1].title}</h2>

              <Link href={{ pathname: `/post/${slugs[index-1]}` }}>
              <a> PREV</a>
              </Link>
              </p>
          </div>
        }
        {(index < slugs.length -1) && 
          <div  >
            <p>
            <h2>{titles[index+1].title}</h2>

              <Link href={{ pathname: `/post/${slugs[index+1]}` }}>
              <a>NEXT</a>
              </Link>
              </p>
          </div>
        }
        </div>

    <div id="disqus_thread"></div>

            
      </Layout>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap');
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 3rem;
        }
        h3 {
          font-size: 2rem;
        }
        .hero {
          width: 100%;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: #000;
          padding:30px;
          padding-left:0;
        }
        small{
          font-size:15px;
          display:block;
        }
        p{
          font-family: 'Raleway', sans-serif !important;
          font-size: 18px;
        }
        article{
          overflow:hidden;
        }
        h1{
          font-family: 'Raleway', sans-serif;
          font-weight:900;
          font-size:4rem;
          margin-bottom:25px;
          margin-top:10px;
        }
        img{
          width:90% !important;
        }
        h2{
          font-size:18px;
        }
        .post-next-prev{
          display:flex;
          justify-content:space-between;
          align-items:center;
          width:100%;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps(ctx) {
  const { postname } = ctx.params
 
  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  const blogData = ((context) => {

    // const titles = getTitles(content);
    const slugs = getSlugs(context)
    const titles = getTitles(context)
    return {
      slugs,
      titles
    }

  })(require.context('../../posts', true, /\.md$/))



  return {
    props: {
      postSlug:postname,
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      slugs:blogData.slugs,
      titles:blogData.titles,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, 
    fallback: false, 
  }
}
