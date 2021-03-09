import '../styles/global.css'

// This `App` component is the top-level component which will be common across **all** the different pages.
// You can used this `App` component to keep state when navigating between pages.
export default function App({ Component, pageProps }) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return <Component {...pageProps} />
}