import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { ProvideAuth } from '../utils/auth'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  )
}

export default MyApp
