import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a senior program manager at GitHub empowering developers with experiences to self-solve. Prior to this role, I worked as a senior support engineer where I helped customers best integrate with GitHub Actions and its APIs.</p>
        <p>What drives me is to find opportunities to encourage, educate, and empower anyone I interact with.</p>
      </section>
    </Layout>
  )
}