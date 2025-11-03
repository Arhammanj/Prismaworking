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
  <div className="max-w-[1440px] w-full mx-auto px-8 grid grid-cols-3 items-center h-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={hideMenuOnScroll ? { opacity: 0, x: -20, pointerEvents: 'none' } : { opacity: 1, x: 0, pointerEvents: 'auto' }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center">
          {/* Logo */}
          <div className="flex items-center relative h-[50px]">
            <Image
              src="/images/erus.svg"
              alt="Erus Business Management Platform Logo"
              width={50}
              height={50}
              className="shrink-0"
            />
            <span
              className="absolute left-[53px] flex items-center"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '21px',
                lineHeight: 1,
                background: 'linear-gradient(107.31deg, #101D36 39.19%, #5588CC 44.72%, #A0B0E4 52.91%, #0FA58F 59.99%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                top: '12px'
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
              Comenzar
            </span>
          </motion.button>
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
            <span className="text-white font-medium text-sm">Prisma te habla</span>
          </motion.button>
        </motion.div>

  {/* Scroll listener to hide central nav but keep logo and CTA visible */}

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