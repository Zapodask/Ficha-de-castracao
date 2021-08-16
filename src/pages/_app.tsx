import { AppProps } from 'next/app'

import { ThemeProvider } from '@/contexts/ThemeContext'
import GlobalStyle from '@/styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
        <Component {...pageProps} />

        <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp