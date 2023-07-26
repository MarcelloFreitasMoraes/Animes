import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material'
import { useRouter } from 'next/router'
import THEME from '@/theme'
import { GlobalStyle } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyle />
            <Component key={router.asPath} {...pageProps} />
        </ThemeProvider>
    )
}
