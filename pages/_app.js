import Layout from '@/components/layout/layout'
import {CartProvider} from '@/context/provider'
import '@/styles/globals.css'

function App({ Component, pageProps }) {

  return (
      <CartProvider> 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    )
}

export default App