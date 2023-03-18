import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { useRouter } from 'next/router';
import THEME from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={THEME}>
       <Component key={router.asPath} {...pageProps} />
    </ThemeProvider>
  )
}