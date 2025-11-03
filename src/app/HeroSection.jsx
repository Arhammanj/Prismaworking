'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full bg-white overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto relative" style={{ height: '850px', overflow: 'hidden' }}>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            width: '680px',
            top: '149px',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '50px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0.18px',
            color: '#013264'
          }}
        >
          Tu negocio se administra solo
        </motion.h1>

        {/* Complete Subtitle - Two lines */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{
            width: '1100px',
            maxWidth: '90%',
            height: '80px',
            top: '214px',
            fontFamily: 'Roboto',
            fontSize: '28px',
            lineHeight: '40px',
            letterSpacing: '0.18px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            color: '#485264'
          }}
        >
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span
              style={{
                fontWeight: 700,
                background: 'linear-gradient(91.26deg, #485264 31.83%, #5588CC 40.67%, #A0B0E4 50.5%, #0FA58F 62%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Prisma
            </span>
            <span style={{ fontWeight: 300, marginRight: '4px' }}>
              registra tus compras, gastos y ventas
            </span>
            <span style={{ fontWeight: 700 }}>
              sin que captures nada.
            </span>
          </div>
          <div style={{ fontWeight: 300, marginTop: '8px' }}>
            Te muestra cuánto ganaste este mes, en segundos.
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer flex items-center justify-center"
          style={{
            width: '251px',
            height: '40px',
            top: '324px',
            background: '#4379EE',
            borderRadius: '15px'
          }}
          onClick={() => console.log('Activa Prisma clicked')}
        >
          <span
            style={{
              width: '206px',
              height: '25px',
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#FFFFFF'
            }}
          >
            Activa Prisma en tu negocio
          </span>
        </motion.div>

        {/* Product Images Container - positioned relative to section */}
        
          {/* Image 1 - Dashboard (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: '356px', 
              height: '239px', 
              left: '13px', 
              top: '386px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 4
            }}>
            <Image
              src="/images/image754.svg"
              alt="Product Screenshot 1"
              width={356}
              height={239}
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </motion.div>

          {/* Image 2 - Mobile Interface */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: '151px', 
              height: '329px', 
              left: '380px', 
              top: '466px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 5
            }}>
            <Image
              src="/images/image755.svg"
              alt="Product Screenshot 2"
              width={151}
              height={329}
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </motion.div>

          {/* Image 3 - Center Document */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: '357px', 
              height: '233px', 
              left: '550px', 
              top: '491px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 3
            }}>
            <Image
              src="/images/image756.svg"
              alt="Product Screenshot 3"
              width={357}
              height={233}
              style={{
                width: '100%',
                height: '100%',
                boxShadow: '0px 4px 4px 0px #00000040'
              }}
            />
          </motion.div>

          {/* Image 4 - Right Document */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: '155px', 
              height: '335px', 
              left: '925px', 
              top: '413px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 2
            }}>
            <Image
              src="/images/image777.svg"
              alt="Product Screenshot 4"
              width={155}
              height={335}
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </motion.div>

          {/* Image 5 - Purple Mobile App (50% visible on right edge) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: '367px', 
              height: '240px', 
              left: '1095px', 
              top: '466px',
              opacity: 1,
              transform: 'rotate(0deg)',
              zIndex: 1
            }}>
            <Image
              src="/images/image756.svg"
              alt="Product Screenshot 5"
              width={367}
              height={240}
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </motion.div>


      </div>
    </section>
  );
}