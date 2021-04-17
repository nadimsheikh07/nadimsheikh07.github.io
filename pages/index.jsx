import MailLayout from "../component/layouts/main";
import { Info,About,WhyMe,WhatIDo } from '../component/resume';

const Index = () => {
  return (
    <MailLayout>
      <Info />

      <About/>

      <WhyMe/>


      <WhatIDo/>

    </MailLayout>
  )
}

export default Index