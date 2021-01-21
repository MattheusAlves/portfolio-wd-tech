import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'
import Link from 'next/link'

interface IBsNavLinkProps {
  title: string
  href: string
}

const BsNavLink = (props: IBsNavLinkProps): JSX.Element => {
  const { title, href } = props
  return (
    <Link href={href}>
      <a className="nav-link">{title}</a>
    </Link>
  )
}
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar dark expand="md" className="navbar-absolute">
      <NavbarBrand href="/" className="navbar-brand">
        WD Tech
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="navbar-collapse">
        <Nav className="nav-items-wrapper" navbar>
          <NavItem>
            <BsNavLink title="Inicio" href="/" />
          </NavItem>
          <NavItem>
            <BsNavLink title="Localização" href="/location" />
          </NavItem>
          <NavItem>
            <BsNavLink title="Sobre" href="/about" />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
