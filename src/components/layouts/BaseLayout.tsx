import Head from 'next/head'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

type Props = {
  className?: string
  children: JSX.Element
}

const BaseLayout = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <div className="layout-container">
      <Head>
        <title>WDTech Cell</title>
      </Head>
      <Header />
      <main>
        <div className="background-image" />
        {children}
      </main>
      <footer>
        {typeof window != 'undefined' && window.innerWidth > 768 &&
          <Footer />
        }
      </footer>
    </div>
  )
}

export default BaseLayout
