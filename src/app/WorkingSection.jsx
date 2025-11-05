'use client';
import Image from 'next/image';
import Button from '../components/ui/Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WorkingSection() {
  const ref = useRef(null);
  // keep a section ref for header/title if desired
  const sectionInView = useInView(ref, { once: true, margin: "-100px" });

  // Independent refs for the two cards so they animate separately
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, threshold: 0.3 });
  const isRightInView = useInView(rightRef, { once: true, threshold: 0.3 });
  const handleGetStarted = () => {
    console.log('Comenzar button clicked')
  }

  const handleScheduleDemo = () => {
    console.log('Agendar demo clicked')
  }

  return (
    <section id="como-funciona" ref={ref} className="w-full bg-secondary-background overflow-x-hidden pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="w-full max-w-[1382px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[64px] w-full">

          {/* Header Section with Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full flex justify-center items-center mx-auto"
            style={{
              maxWidth: '1260px',
              minHeight: '71px'
            }}>
            <h2 className="font-medium text-center text-[#1a3866] whitespace-nowrap"
              style={{ 
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: '45px',
                lineHeight: '70.4px',
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                opacity: 1,
                transform: 'rotate(0deg)'
              }}>
              Mientras tu <span className="inline-flex items-center align-middle relative" style={{ 
              
                padding: '2px 30px',
                backgroundColor: '#FFF4E6',
                borderRadius: '50px',
                position: 'relative',
                display: 'inline-flex'
              }}>
                <Image
                  src="/images/brief.svg"
                  alt="Brief icon"
                  width={29}
                  height={29}
                  style={{ 
                    marginRight: '8px',
                    width: '29px',
                    height: '29px'
                  }}
                />
                <span style={{ color: '#D56E0C', fontFamily: 'Roboto', fontWeight: 500, fontSize: '38px', lineHeight: '56px' }}>trabajas</span>
              </span> Prisma administra tu empresa.
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[18px] w-full justify-center items-center">

            {/* Left Column - Numbers Section */}
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-secondary-background border border-border-primary relative cursor-pointer"
              style={{
                width: '710px',
                height: '367px',
                borderRadius: '20px',
                borderWidth: '1px',
                opacity: 1,
                transform: 'rotate(0deg)',
                overflow: 'visible'
              }}
            >

              <h3 className="font-medium text-left text-[#1a3866]"
                style={{ 
                  fontFamily: 'Roboto', 
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '40px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  width: '580px',
                  height: '80px',
                  position: 'absolute',
                  top: '25px',
                  left: '51px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  zIndex: 10
                }}>
                Tus números, al instante
              </h3>
              
              <p className="font-normal text-left text-text-muted"
                style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '22px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  width: '600px',
                  maxWidth: 'calc(100% - 102px)',
                  height: 'auto',
                  position: 'absolute',
                  top: '80px',
                  left: '51px',
                  right: '51px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  zIndex: 10
                }}>
                Lo que antes lo hacía una persona, Prisma lo hace solo. No pagas salarios, no das instrucciones, no corriges errores.
                <br /><br />
                🤖 Tu empresa se actualiza sola, todos los días
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '42px',
                  width: '437px',
                  height: '191px',
                  overflow: 'hidden',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/image754.svg"
                  alt="Business analytics dashboard"
                  width={437}
                  height={191}
                  style={{
                    width: '437px',
                    height: '191px',
                    opacity: 1,
                    objectFit: 'cover',
                    objectPosition: 'top left',
                    transform: 'rotate(0deg)',
                    display: 'block',
                    boxShadow: 'none',
                    filter: 'none'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Section */}
            <motion.div
              ref={rightRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 8px 24px rgba(3, 42, 72, 0.12)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="relative bg-[#e3f2ff] cursor-pointer"
              style={{
                width: '653px',
                height: '367px',
                borderRadius: '20px',
                opacity: 1,
                transform: 'rotate(0deg)',
                overflow: 'hidden'
              }}
            >
              <h3 className="font-medium text-left text-[#032a48]"
                style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  fontSize: '30px',
                  lineHeight: '40px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  width: '361px',
                  height: '80px',
                  position: 'absolute',
                  top: '29px',
                  left: '29px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}>
                Sin exceles, desde tu teléfono.
              </h3>
              
              <p className="font-normal text-left text-[#032a48]"
                style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '23px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  width: '314px',
                  height: '92px',
                  position: 'absolute',
                  top: '133px',
                  left: '29px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}>
                Lo que antes lo hacía una persona, Prisma lo hace solo. No pagas salarios, no das instrucciones, no corriges errores.
              </p>

              <p style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  position: 'absolute',
                  bottom: '75px',
                  left: '29px',
                  opacity: 1,
                  color: '#032a48'
                }}>
                ✨ Así de fácil.
              </p>

              <motion.div 
                style={{ position: 'absolute', bottom: '28px', left: '29px' }}
                whileHover={{ 
                  scale: 1.08,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <Button
                  text="Comenzar"
                  text_font_size="text-md"
                  text_font_weight="font-medium"
                  fill_background_color="bg-accent-blue"
                  border_border_radius=""
                  padding=""
                  className="cursor-pointer transition-all duration-300 hover:brightness-110 active:brightness-95 shadow-[0_4px_12px_rgba(26,56,102,0.25)] hover:shadow-[0_6px_20px_rgba(26,56,102,0.35)] active:shadow-[0_2px_8px_rgba(26,56,102,0.3)]"
                  onClick={handleGetStarted}
                  style={{
                    width: '151px',
                    height: '34px',
                    borderRadius: '50px',
                    opacity: 1
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: '60px',
                  width: '200px',
                  height: '280px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/image772.svg"
                  alt="Mobile phone interface"
                  width={200}
                  height={280}
                  className="rounded-lg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}