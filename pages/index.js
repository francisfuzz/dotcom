import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.bio}>
        <p>I'm a <a href="https://github.com/francisfuzz" target="_blank">program manager at GitHub</a> and have had the privilege of staffing numerous ships including GitHub Actions, the GraphQL API, and Pull Request Reviews.</p>
        <p>My working style is a blend of cultivating psychological safety, building trust, exercising curiosity, and collaborating with others to produce amazing work.</p>
        <p>My <a href="https://www.linkedin.com/in/francis-b">professional background</a> is an eclectic mix of software engineering and customer support and I believe the secret to living is giving.</p>
      </section>
    </Layout>
  )
}