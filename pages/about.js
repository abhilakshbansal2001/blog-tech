import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to Abhilaksh site !</h1>

        <p className="description">
          This is a simple website built on next js.
        
        </p>

       
        <p>
          See my portfolio
          <a href="https://abhilakshbansal2001.github.io/abhilakshbansal/">Abhilaksh Bansal</a>
        </p>
      </Layout>
    </>
  )}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
