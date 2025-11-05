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
          className="absolute left-1/2 transform -translate-x-1/2 px-4"
          style={{
            width: 'clamp(300px, 680px, 90vw)',
            top: 'clamp(100px, 169px, 11.7vw)',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: 'clamp(24px, 50px, 3.47vw)',
            lineHeight: 'clamp(12px, 24px, 1.67vw)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            letterSpacing: '0.18px',
            color: '#013264',
            whiteSpace: 'nowrap'
          }}
        >
          Tu negocio se administra solo
        </motion.h1>

        {/* Complete Subtitle - Two lines */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 px-4"
          style={{
            width: 'clamp(350px, 1100px, 95vw)',
            maxWidth: '95%',
            height: 'clamp(60px, 80px, 5.5vw)',
            top: 'clamp(150px, 234px, 16.25vw)',
            fontFamily: 'Roboto',
            fontSize: 'clamp(14px, 30px, 2.08vw)',
            lineHeight: 'clamp(18px, 30px, 2.08vw)',
            letterSpacing: '0.18px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            color: '#485264'
          }}
        >
          <div className="flex items-center justify-center gap-1 flex-wrap">
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
            <span style={{ fontWeight: 300, marginRight: '2px' }}>
              registra tus compras, gastos y ventas
            </span>
            <span style={{ fontWeight: 700 }}>
              sin que captures nada.
            </span>
          </div>
          <div style={{ fontWeight: 300, marginTop: '2px' }}>
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
            width: 'clamp(180px, 251px, 17.43vw)',
            height: 'clamp(32px, 40px, 2.78vw)',
            top: 'clamp(230px, 344px, 23.9vw)',
            background: '#4379EE',
            borderRadius: 'clamp(10px, 15px, 1.04vw)'
          }}
          onClick={() => console.log('Activa Prisma clicked')}
        >
          <span
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 'clamp(12px, 16px, 1.11vw)',
              lineHeight: 'clamp(18px, 24px, 1.67vw)',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap'
            }}
          >
            Activa Prisma en tu negocio
          </span>
        </motion.div>

        {/* Product Images Container - All 5 images scaled proportionally */}
        
          {/* Image 1 - Dashboard (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="absolute cursor-pointer" 
            style={{ 
              width: 'clamp(120px, 356px, 24.72vw)', 
              height: 'clamp(80px, 239px, 16.6vw)', 
              left: 'clamp(5px, 13px, 0.9vw)', 
              top: 'clamp(280px, 386px, 26.8vw)',
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
              width: 'clamp(50px, 151px, 10.49vw)', 
              height: 'clamp(110px, 329px, 22.85vw)', 
              left: 'clamp(130px, 380px, 26.39vw)', 
              top: 'clamp(330px, 466px, 32.36vw)',
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
              width: 'clamp(120px, 357px, 24.79vw)', 
              height: 'clamp(80px, 233px, 16.18vw)', 
              left: 'clamp(185px, 550px, 38.19vw)', 
              top: 'clamp(345px, 491px, 34.1vw)',
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
              width: 'clamp(52px, 155px, 10.76vw)', 
              height: 'clamp(112px, 335px, 23.26vw)', 
              left: 'clamp(310px, 925px, 64.24vw)', 
              top: 'clamp(290px, 413px, 28.68vw)',
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
              width: 'clamp(123px, 367px, 25.49vw)', 
              height: 'clamp(80px, 240px, 16.67vw)', 
              left: 'clamp(365px, 1095px, 76.04vw)', 
              top: 'clamp(330px, 466px, 32.36vw)',
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