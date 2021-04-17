import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MailLayout from "../component/layouts/main";
import { Info,About,WhyMe,WhatIDo } from '../component/resume';

const Index = (props) => {
  const { t } = useTranslation()
  return (
    <MailLayout>
      <Info />

      <About/>

      <WhyMe/>


      <WhatIDo/>

    </MailLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Index