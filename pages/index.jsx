import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MailLayout from "../component/layouts/main";
import { Col, Image, Row } from "react-bootstrap"
import { Info,About,WhyMe } from '../component/resume';

const Index = (props) => {
  const { t } = useTranslation()
  return (
    <MailLayout>
      <Info />

      <About/>

      <WhyMe/>

    </MailLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Index