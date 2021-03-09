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
        <p>I'm a Senior Program Manager at <a href="https://github.com" target="_blank">GitHub</a>, the world's largest software development network. Previously, I worked as a Senior Support Engineer focused on empowering customers with <a href="https://github.community/u/francisfuzz/activity/solved" target="_blank">technical advice</a> for making the most out of GitHub's platform features.</p>
        <p>I made this website to share what I know with the hope of encouraging and empowering readers (like you!). You're welcome to support my writing by <a href="https://www.buymeacoffee.com/francisfuzz">buying me a nigiri</a>. 🍣 </p>
        <p>My <a href="https://www.linkedin.com/in/francis-b">professional background</a> is an eclectic mix of software engineering, support, and teaching. Cultivating high psyschological safety, exercising curiosity, and creating space to learn and solve problems together are my most valued work practices.</p>
      </section>
    </Layout>
  )
}