'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

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
    { text: "How it works", href: "#how-it-works" },
    { text: "Prices", href: "#prices" },
    { text: "FAQ", href: "#faq" },
    { text: "Other solutions", href: "#other-solutions" }
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-40">
      <div className="max-w-[1440px] w-full mx-auto px-8 grid grid-cols-3 items-center" style={{ height: '80px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={hideMenuOnScroll ? { opacity: 0, x: -20, pointerEvents: 'none' } : { opacity: 1, x: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center">
          {/* Logo */}
          <Image
            src="/images/erus.svg"
            alt="Erus Business Management Platform Logo"
            width={50}
            height={50}
          />
          <p
            className="ml-[3px]"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '32px',
              background: 'linear-gradient(107.31deg, #101D36 39.19%, #5588CC 44.72%, #A0B0E4 52.91%, #0FA58F 59.99%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              width: '160px',
              height: '32px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            prisma
          </p>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.35, delay: 0, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30 rounded-[30px] mx-auto"
          style={{
            width: 'auto',
            minWidth: '480px',
            height: '42px',
            padding: '0 32px',
            gap: '32px',
            padding: '16px 32px',
            gap: '32px',
            boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {navigationItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
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
          <div className="flex items-center  cursor-pointer">
            <Image
              src="/images/Vector.svg"
              alt="phone icon"
              width={12}
              height={12}
            />
            <span
              className="hover:text-[#4379EE] transition-colors  duration-200"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '0.18px',
                color: '#485264',
                marginLeft: '8px',
                height: '25px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              Agendar demo
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: '140px',
              height: '34px',
              background: '#4379EE',
              borderRadius: '15px'
            }}
            onClick={() => console.log('Empieza ahora clicked')}
          >
            <span
              style={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '0.18px',
                color: '#FFFFFF',
                height: '25px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              Empieza ahora
            </span>
          </motion.div>
        </motion.div>

      {/* Scroll listener to hide central nav but keep logo and CTA visible */}
      <style jsx>{``}</style>
      

        {/* Mobile Menu Button - Hidden on desktop (1440px) */}
        <button
          className="lg:hidden absolute right-4 top-6 p-2 text-[#485264] hover:text-[#4379EE] transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header