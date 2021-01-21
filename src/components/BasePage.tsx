import { Container } from 'reactstrap'

interface Props {
  children?: React.ReactNode
}

const BasePage = (props: Props): JSX.Element => {
  const { children } = props
  return <div className="base-page">{children}</div>
}
export default BasePage
