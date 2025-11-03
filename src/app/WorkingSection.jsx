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
            className="relative w-full max-w-[728px] mx-auto">
            <h2 className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-medium leading-[35px] sm:leading-[49px] md:leading-[56px] lg:leading-[70px] text-center text-[#1a3866] w-full"
              style={{ fontFamily: 'Roboto' }}>
              Mientras tu
              <span className="inline-flex items-center align-middle relative" style={{ marginLeft: '0.3em', marginRight: '0.5em' }}>
                <Image
                  src="/images/tarab.svg"
                  alt="Work icon"
                  width={50}
                  height={50}
                  className="inline-block"
                  style={{ height: '1.4em', width: 'auto' }}
                />
                <Image
                  src="/images/brief.svg"
                  alt="Brief icon"
                  width={30}
                  height={30}
                  className="absolute"
                  style={{ height: '0.6em', width: 'auto', top: '50%', left: '10%', transform: 'translateY(-50%)' }}
                />
              </span>
              <br />
              Prisma administra tu empresa.
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[18px] w-full">

            {/* Left Column - Numbers Section */}
            <motion.div
              ref={leftRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="group bg-secondary-background border border-border-primary relative overflow-hidden cursor-pointer w-full lg:w-[653px] h-[367px] rounded-[20px] pr-5"
            >

              <h3 className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-medium leading-[18px] sm:leading-[24px] md:leading-[30px] lg:leading-[36px] text-left text-[#1a3866] mt-4 sm:mt-6 md:mt-7 lg:mt-[28px] ml-2 pl-10"
                style={{ fontFamily: 'Roboto' }}>
                Your numbers, instantly
              </h3>
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] mt-1 sm:mt-2 md:mt-3 lg:mt-[6px] mr-2 sm:mr-4 md:mr-6 lg:mr-[18px] ml-2 pl-10 pr-10">
                <p className="text-[9px] sm:text-[12px] md:text-[13px] lg:text-[16px] font-normal leading-[11px] sm:leading-[15px] md:leading-[17px] lg:leading-[20px] text-left text-text-muted"
                  style={{ fontFamily: 'Roboto' }}>
                  What one person used to do, Prisma does alone. You don't pay salaries,
                  <br />you don't give instructions, you don't correct mistakes.
                </p>
                <p className="text-[7px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-normal leading-[9px] sm:leading-[13px] md:leading-[15px] lg:leading-[18px] text-left text-text-muted"
                  style={{ fontFamily: 'Roboto' }}>
                  <span className="text-[7px] sm:text-[10px] md:text-[11px] lg:text-[13px]">🤖</span>
                  <span className="italic"> Your business updates itself, every day.</span>
                </p>
              </div>
              <div className="transform transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-1">
                <Image
                  src="/images/image754.svg"
                  alt="Business analytics dashboard"
                  width={437}
                  height={210}
                  className="absolute bottom-0 left-10 w-[437px] max-w-full h-auto max-h-[191px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - Phone Section */}
            <motion.div
              ref={rightRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isRightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="group relative bg-[#e3f2ff] overflow-hidden cursor-pointer w-full lg:w-[653px] h-[367px] rounded-[20px]"
            >
              <h3 className="text-[30px] font-medium leading-[36px] text-left text-[#032a48] mt-7 pl-10 max-w-[361px] w-full"
                style={{ fontFamily: 'Roboto' }}>
                Sin exceles, desde tu teléfono.
              </h3>
              <div className="flex flex-col gap-2.5 mt-1.5 pl-10 pr-10">
                <p className="text-[16px] font-normal leading-[20px] text-left text-[#032a48] max-w-[314px] w-full"
                  style={{ fontFamily: 'Roboto' }}>
                  Lo que antes lo hacia una persona,<br />
                  Prisma lo hace solo.No pagas salarios,
                  <br />no das instrucciones, no corriges <br /> errores.
                </p>
                <p className="text-[18px] font-normal leading-[23px] text-left text-[#032a48] max-w-[599px] w-full"
                  style={{ fontFamily: 'Roboto', letterSpacing: '0%', verticalAlign: 'middle' }}>
                  ✨ Así de fácil.
                </p>
              </div>
              <div className="absolute bottom-7 left-10">
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
                    borderRadius: '50px',
                    opacity: 1
                  }}
                />
              </div>
              <div className="transform transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-1">
                <Image
                  src="/images/image772.svg"
                  alt="Mobile phone interface"
                  width={208}
                  height={320}
                  className="absolute top-8 sm:top-12 md:top-14 lg:top-14 right-8 sm:right-10 md:right-12 lg:right-[50px] w-20 h-[123px] sm:w-[120px] sm:h-[185px] md:w-40 md:h-[246px] lg:w-52 lg:h-80 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}