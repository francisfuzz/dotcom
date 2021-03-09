import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const title = 'First Post'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}