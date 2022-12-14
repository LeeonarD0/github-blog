import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { globalStyles } from '../styles/global'

globalStyles()

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp

