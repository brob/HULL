import React, { useState } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

import Navigation from './navigation'
import Icon from './icon'

import {
  useStore,
  useToggleCart,
  useCartCount,
} from '../contexts/shopify-context'

const Header = ({ menu, transparent }) => {
  const [ref, inView, entry] = useInView()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = (state) => {
    setMenuOpen(state)
    if (typeof document !== `undefined`) {
      document.body.classList.toggle('nav-open', state)
    }
  }

  // context helpers
  const toggleCart = useToggleCart()
  const cartCount = useCartCount()

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to Content
      </a>
      <span ref={ref} className="header--observer" />
      <header
        className={`header${inView && transparent ? ' is-transparent' : ''}`}
      >
        <div className="header--wrapper">
          <div className="header--content">
            <nav className="main-navigation" role="navigation">
              <button
                onClick={() => toggleMenu(!isMenuOpen)}
                className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-label="Toggle Menu"
              >
                <span></span>
              </button>
              {menu.items && <Navigation menu={menu} />}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
