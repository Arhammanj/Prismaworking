'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full bg-white" style={{ overflowX: 'hidden' }}>
  <div className="max-w-[1440px] w-full mx-auto relative" style={{ height: '850px', overflow: 'hidden' }}>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute"
          style={{
            width: '680px',
            height: '25px',
            left: '387px',
            top: '149px',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '50px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
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
          className="absolute"
          style={{
            width: '1100px',
            height: '80px',
            left: '170px',
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
          className="absolute cursor-pointer flex items-center justify-center"
          style={{
            width: '251px',
            height: '40px',
            left: '586px',
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

        {/* Product Images */}
        {/* Image 1 - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="absolute cursor-pointer hidden lg:block" style={{ width: '383px', height: '257px', left: '17px', top: '386px' }}>
          <Image
            src="/images/image754.svg"
            alt="Product Screenshot 1"
            width={383}
            height={257}
            style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="absolute cursor-pointer hidden lg:block" style={{ width: '162px', height: '354px', left: '424px', top: '466px' }}>
          <Image
            src="/images/image755.svg"
            alt="Product Screenshot 2"
            width={162}
            height={354}
            style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </motion.div>

        {/* Image 3 - Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="absolute cursor-pointer hidden lg:block" style={{ width: '384px', height: '251px', left: '610px', top: '491px' }}>
          <Image
            src="/images/image756.svg"
            alt="Product Screenshot 3"
            width={384}
            height={251}
            style={{
              width: '100%',
              height: '100%',
              boxShadow: '0px 4px 4px 0px #00000040'
            }}
          />
        </motion.div>

        {/* Image 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="absolute cursor-pointer hidden lg:block" style={{ width: '167px', height: '360px', left: '1022px', top: '413px' }}>
          <Image
            src="/images/image777.svg"
            alt="Product Screenshot 4"
            width={167}
            height={360}
            style={{
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
            }}
          />
        </motion.div>

        {/* Image 5 - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          className="absolute cursor-pointer hidden lg:block" style={{ width: '222px', height: '258px', left: '1217px', top: '466px' }}>
          <Image
            src="/images/image756.svg"
            alt="Product Screenshot 5"
            width={222}
            height={258}
            style={{
              width: '100%',
              height: '100%',
              // boxShadow: '0px 4px 4px 0px #00000040'
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}