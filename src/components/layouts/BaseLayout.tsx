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
      <Header />
      <main>
        <div className="background-image" />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default BaseLayout
