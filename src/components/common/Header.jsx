'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hideMenuOnScroll, setHideMenuOnScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      // hide nav when scrolled more than 80px, show otherwise
      setHideMenuOnScroll(y > 80)
    }

    // attach listener
    window.addEventListener('scroll', onScroll, { passive: true })
    // run once to initialize
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigationItems = [
    { text: "Como funciona", href: "#como-funciona" },
    { text: "Precios", href: "#precios" },
    { text: "FAQ", href: "#faq" },
    { text: "Otras soluciones", href: "#otras-soluciones" }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Update URL hash
      window.history.pushState(null, '', href)
      
      // Use Lenis for smooth scroll if available, otherwise fallback to native
      if (window.lenis) {
        window.lenis.scrollTo(offsetPosition, {
          offset: 0,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 items-center h-16 sm:h-18 lg:h-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={hideMenuOnScroll ? { opacity: 0, x: -20, pointerEvents: 'none' } : { opacity: 1, x: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center">
          <div className="flex items-center relative h-[40px] sm:h-[45px] lg:h-[50px]">
            <Image
              src="/images/erus.svg"
              alt="Erus Business Management Platform Logo"
              width={50}
              height={50}
              className="shrink-0 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px]"
            />
            <span
              className="absolute left-[43px] sm:left-[48px] lg:left-[53px] flex items-center text-[18px] sm:text-[19px] lg:text-[21px] top-[10px] sm:top-[11px] lg:top-[12px]"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: 1,
                background: 'linear-gradient(107.31deg, #101D36 39.19%, #5588CC 44.72%, #A0B0E4 52.91%, #0FA58F 59.99%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              prisma
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.35, delay: 0, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-[30px] min-w-[480px] h-10 px-8 gap-8 z-50"
          style={{ marginLeft: '-100px' }}
        >
          {navigationItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'center',
                color: '#000000',
                whiteSpace: 'nowrap',
                paddingLeft: '4px',
                paddingRight: '4px'
              }}
              className="hover:bg-white/70 rounded-[20px] px-3 py-1.5 transition-all duration-300"
            >
              {item.text}
            </motion.a>
          ))}
        </motion.nav>

        {/* Desktop Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={hideMenuOnScroll ? { opacity: 0, x: 20, pointerEvents: 'none' } : { opacity: 1, x: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
          className="hidden lg:flex items-center gap-3 justify-end">
         
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="flex items-center gap-2 border border-white/30 rounded-[15px] px-4 py-2 hover:bg-white/5 transition-all duration-200"
          >
            <Image
              src="/images/Vector.svg"
              alt="Calendar icon"
              width={12}
              height={12}
            />
            <span className="text-[#485264] font-medium text-sm leading-6 whitespace-nowrap">
              Agendar demo
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="flex items-center justify-center w-[140px] h-[34px] bg-[#4379EE] rounded-[15px]"
            onClick={() => console.log('Prisma te habla clicked')}
          >
            <span className="text-white font-medium text-sm">Empieza ahora</span>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <button
          className="lg:hidden absolute right-4 top-5 sm:top-6 p-2 text-[#485264] hover:text-[#4379EE] transition-colors duration-200 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-4">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#485264] hover:text-[#4379EE] font-medium text-base py-2 transition-colors duration-200"
                    style={{
                      fontFamily: 'Instrument Sans'
                    }}
                  >
                    {item.text}
                  </a>
                ))}
                
                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-3 mt-2 pb-2">
                  <button className="flex items-center justify-center gap-2 border border-[#485264]/20 rounded-[15px] px-4 py-2.5 hover:bg-[#485264]/5 transition-all duration-200">
                    <Image
                      src="/images/Vector.svg"
                      alt="Calendar icon"
                      width={12}
                      height={12}
                    />
                    <span className="text-[#485264] font-medium text-sm">
                      Agendar demo
                    </span>
                  </button>
                  <button 
                    className="flex items-center justify-center bg-[#4379EE] rounded-[15px] px-4 py-2.5"
                    onClick={() => {
                      console.log('Empieza ahora clicked')
                      handleNavClick()
                    }}
                  >
                    <span className="text-white font-medium text-sm">Empieza ahora</span>
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header