import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config.js'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})


export default appWithTranslation(MyApp, nextI18NextConfig)