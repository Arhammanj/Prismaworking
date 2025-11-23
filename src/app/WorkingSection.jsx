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
        <div className="flex flex-col justify-start items-center gap-4 sm:gap-16 md:gap-20 lg:gap-[64px] w-full">

          {/* Header Section with Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full flex justify-center items-center mx-auto overflow-x-auto"
            style={{
              maxWidth: '1260px',
              minHeight: '71px'
            }}>
            <h2 className="font-medium text-center text-[#1a3866] whitespace-nowrap text-[13px] sm:text-xl md:text-2xl lg:text-[45px] leading-snug sm:leading-[50px] md:leading-[60px] lg:leading-[70.4px]"
              style={{
                fontFamily: 'Roboto',
                fontWeight: 500,
                letterSpacing: '0%',
                textAlign: 'center',
                verticalAlign: 'middle',
                opacity: 1,
                transform: 'rotate(0deg)'
              }}>
              Mientras tu <span className="inline-flex items-center align-middle relative px-2 pt-0 pb-0 sm:px-3 sm:py-0.5 md:px-6 md:py-1 lg:px-[30px] lg:py-[2px]" style={{

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
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[29px] mr-1 sm:mr-1.5 md:mr-2 lg:mr-[8px]"
                />
                <span className="text-[13px] sm:text-lg md:text-2xl lg:text-[38px] leading-tight sm:leading-normal md:leading-loose lg:leading-[56px]" style={{ color: '#D56E0C', fontFamily: 'Roboto', fontWeight: 500 }}>trabajas</span>
              </span> Prisma administra tu empresa.
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[18px] w-full justify-center items-center">

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
              className="bg-secondary-background border border-border-primary relative cursor-pointer w-full sm:w-[90%] md:w-[600px] lg:w-[710px] min-h-[480px] sm:min-h-[500px] md:min-h-[420px] lg:min-h-0 lg:h-[367px]"
              style={{
                borderRadius: '20px',
                borderWidth: '1px',
                opacity: 1,
                transform: 'rotate(0deg)',
                overflow: 'visible'
              }}
            >

              <h3 className="font-medium text-left text-[#1a3866] absolute top-5 left-5 sm:top-6 sm:left-6 md:top-6 md:left-8 lg:top-[25px] lg:left-[51px] text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-snug lg:leading-[40px] w-[calc(100%-40px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[580px] z-10"
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 500,
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }}>
                Tus números, al instante
              </h3>

              <p className="font-normal text-left text-text-muted absolute top-16 left-5 right-5 sm:top-20 sm:left-6 sm:right-6 md:top-20 md:left-8 md:right-8 lg:top-[70px] lg:left-[51px] lg:right-[51px] text-sm sm:text-base md:text-base lg:text-[14px] leading-relaxed lg:leading-[20px] z-10 pb-56 sm:pb-56 md:pb-48 lg:pb-0"
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word'
                }}>
                Lo que antes lo hacía una persona, Prisma lo hace solo. No pagas salarios, no das instrucciones, no corriges errores.
                <br /><br />
                🤖 Tu empresa se actualiza sola, todos los días
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="absolute bottom-0 left-5 sm:left-6 md:left-8 lg:left-[42px] w-[calc(100%-40px)] sm:w-[calc(100%-48px)] md:w-[400px] lg:w-[437px] h-auto lg:h-[191px] z-1"
                style={{
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
                  className="w-full h-auto lg:w-[437px] lg:h-[191px]"
                  style={{
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
              className="relative bg-[#e3f2ff] cursor-pointer w-full sm:w-[90%] md:w-[600px] lg:w-[710px] min-h-[420px] sm:min-h-[450px] md:min-h-[400px] lg:min-h-0 lg:h-[367px]"
              style={{
                borderRadius: '20px',
                opacity: 1,
                transform: 'rotate(0deg)',
                overflow: 'hidden'
              }}
            >
              <h3 className="font-medium text-left text-[#032a48] absolute top-5 left-5 sm:top-6 sm:left-6 md:top-6 md:left-8 lg:top-[29px] lg:left-[29px] text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-snug lg:leading-[40px] w-[calc(100%-160px)] sm:w-[calc(100%-200px)] md:w-[calc(100%-240px)] lg:w-[400px]"
                style={{ 
                  fontFamily: 'Roboto',
                  fontWeight: 500
                }}>
                Sin exceles, desde tu teléfono.
              </h3>              <p className="font-normal text-left text-[#032a48] absolute top-20 left-5 right-5 sm:top-24 sm:left-6 sm:right-6 md:top-24 md:left-8 md:right-8 lg:top-[133px] lg:left-[29px] text-xs sm:text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[20px] w-[calc(100%-160px)] sm:w-[calc(100%-200px)] md:w-[calc(100%-260px)] lg:w-[300px] pb-4 sm:pb-6 md:pb-8 lg:pb-0"
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  wordBreak: 'break-word'
                }}>
                Lo que antes lo hacía una persona, Prisma lo hace solo. No pagas salarios, no das instrucciones, no corriges errores.
              </p>

              <p className="absolute bottom-32 left-5 sm:bottom-36 sm:left-6 md:bottom-32 md:left-8 lg:bottom-[105px] lg:left-[29px] text-sm sm:text-base lg:text-[16px]" style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: '24px',
                opacity: 1,
                color: '#032a48'
              }}>
                ✨ Así de fácil.
              </p>

              <motion.div
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 md:bottom-7 md:left-8 lg:bottom-[28px] lg:left-[29px]"
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
                className="absolute bottom-0 right-2 sm:right-4 md:right-6 lg:right-[20px] w-36 sm:w-[172px] md:w-[202px] lg:w-[230px] h-auto lg:h-[322px] z-1"
              >
                <Image
                  src="/images/image772.svg"
                  alt="Mobile phone interface"
                  width={180}
                  height={252}
                  className="rounded-lg w-full h-auto lg:w-[230px] lg:h-[322px]"
                  style={{
                    objectFit: 'contain'
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