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
    <section ref={ref} className="w-full bg-secondary-background ">
      <div className="w-full max-w-[1382px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-16 sm:gap-20 md:gap-24 lg:gap-[112px] w-full py-8 sm:py-12 md:py-16">

          {/* Header Section with Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full mx-auto"
            style={{
              width: '1260px',
              height: '71px'
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
                width: '1260px',
                height: '71px',
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
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[18px] w-full">

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
                  top: '-11px',
                  left: '51px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}>
                Tus números, al instante
              </h3>
              
              <p className="font-normal text-left text-text-muted"
                style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '23px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  width: '599px',
                  height: '46px',
                  position: 'absolute',
                  top: '78px',
                  left: '51px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}>
                Lo que antes lo hacía una persona, Prisma lo hace solo. No pagas salarios, no das instrucciones, no corriges errores.
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
                  transform: 'rotate(0deg)'
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
                overflow: 'visible'
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

              <div style={{ position: 'absolute', bottom: '28px', left: '29px' }}>
                <Button
                  text="Comenzar"
                  text_font_size="text-md"
                  text_font_weight="font-medium"
                  fill_background_color="bg-accent-blue"
                  border_border_radius=""
                  padding=""
                  className=""
                  onClick={handleGetStarted}
                  style={{
                    width: '151px',
                    height: '34px',
                    borderRadius: '50px',
                    opacity: 1
                  }}
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  top: '47px',
                  left: '378px',
                  width: '208px',
                  height: '320px',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}
              >
                <Image
                  src="/images/image772.svg"
                  alt="Mobile phone interface"
                  width={208}
                  height={320}
                  className="rounded-lg"
                  style={{
                    width: '208px',
                    height: '320px',
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