import Head from 'next/head'
import Link from 'next/link'

const title = 'First Post'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}