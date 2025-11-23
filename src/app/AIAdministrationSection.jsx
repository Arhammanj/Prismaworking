'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIAdministrationSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const iaBadgeRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Three card refs (the three layers)
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const [badgeText, setBadgeText] = useState('IA'); // Set directly to 'IA' for mobile
  const [isMobile, setIsMobile] = useState(false);

  const handleLearnMore = () => {
    console.log('IA button clicked');
  };

  useEffect(() => {
    // Check if we're on mobile (screen width < 1024px for lg breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Only run animations on desktop
    if (isMobile) {
      setBadgeText('IA'); // Set full text immediately on mobile
      return; // Exit early on mobile - no animations
    }

    const ctx = gsap.context(() => {
      // IA Badge typing effect when section enters viewport
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          // Typing animation
          const text = 'IA';
          let index = 0;
          const typingInterval = setInterval(() => {
            if (index < text.length) {
              setBadgeText(text.substring(0, index + 1));
              index++;
            } else {
              clearInterval(typingInterval);
              // Add glow effect after typing
              gsap.to(iaBadgeRef.current, {
                boxShadow: '0 0 20px rgba(53, 61, 240, 0.6), 0 0 40px rgba(53, 61, 240, 0.4)',
                duration: 0.5,
                repeat: 1,
                yoyo: true
              });
            }
          }, 150);
        }
      });

      // Create a timeline for first card to appear gradually with heading
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 2,
          pin: false,
        }
      });

      // Create second timeline for pinned stacking of remaining cards
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top top',
          end: '+=2500', // Shorter for quicker transitions
          scrub: 0.1, // Very low scrub for immediate response - feels more natural
          pin: true,
          pinSpacing: true, // Maintains spacing to prevent layout shifts
          anticipatePin: 1, // Starts pinning slightly early for seamless transition
          invalidateOnRefresh: true, // Recalculates on resize for smooth behavior
          smoothChildTiming: true, // Makes child animations smoother
        }
      });

      // Set initial states - all cards visible at the start
      gsap.set(card1Ref.current, { opacity: 1, y: 0, scale: 1 });
      gsap.set(card2Ref.current, { opacity: 1, y: 0, scale: 1 });
      gsap.set(card3Ref.current, { opacity: 1, y: 0, scale: 1 });

      // Timeline: Cards slide away one by one as you scroll
      tl2
        .to({}, { duration: 0.15, ease: 'none' }) // Minimal initial pause

        // ===== CARD 1 slides out (moves up and fades) =====
        .to(card1Ref.current, {
          y: -800,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: 'sine.inOut' // Sine easing for ultra-smooth, natural motion
        })
        .to({}, { duration: 0.02, ease: 'none' }) // Tiny pause

        // ===== CARD 2 slides out (moves up and fades) =====
        .to(card2Ref.current, {
          y: -800,
          opacity: 0,
          scale: 0.95,
          duration: 0.7,
          ease: 'sine.inOut' // Sine easing for ultra-smooth, natural motion
        })
        .to({}, { duration: 0.02, ease: 'none' }) // Tiny pause

        // ===== CARD 3 stays (final card remains visible) =====
        .to({}, { duration: 0.2, ease: 'none' }); // Short final hold

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]); // Add isMobile as dependency

  return (
    <section ref={sectionRef} className="w-full bg-secondary-background overflow-hidden">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        {/* -------------------- HEADER -------------------- */}
        <div ref={headerRef} className="flex flex-col justify-start items-center w-full pt-2 sm:pt-4 lg:pt-16 pb-0 lg:pb-8"
          style={{
            gap: 'clamp(8px, 64px, 4.44vw)'
          }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <h2
              className="text-[#1a3866] text-center font-medium whitespace-nowrap"
              style={{
                fontFamily: 'Roboto',
                fontSize: 'clamp(24px, 50px, 3.47vw)',
                lineHeight: 'clamp(28px, 59px, 4.1vw)'
              }}
            >
              Tu administración hecha con
            </h2>
            <motion.div
              ref={iaBadgeRef}
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              whileTap={!isMobile ? { scale: 0.95 } : {}}
              className="flex items-center gap-3 bg-[#edf1fe] text-[#353df0] rounded-full font-medium cursor-pointer"
              style={{
                fontSize: 'clamp(20px, 40px, 2.78vw)',
                padding: 'clamp(4px, 6px, 0.42vw) clamp(14px, 26px, 1.81vw)'
              }}
              onClick={handleLearnMore}
            >
              <Image
                src="/images/Vector2.svg"
                alt="AI icon"
                width={30}
                height={30}
                style={{
                  width: 'clamp(16px, 30px, 2.08vw)',
                  height: 'clamp(16px, 30px, 2.08vw)'
                }}
              />
              <span>{badgeText}</span>
            </motion.div>
          </div>
        </div>

        {/* -------------------- CARDS CONTAINER (PINNED) -------------------- */}
        <div
          ref={cardsContainerRef}
          className="relative w-full pt-8 lg:pt-0"
          style={{ minHeight: 'clamp(10vh, 10vh, 10vh)' }}
        >
          {/* On mobile: cards displayed vertically one by one. On desktop: stacked with offset positioning */}
          <div className="relative w-full flex flex-col lg:block lg:h-screen gap-1.5 lg:gap-0">

            {/* ==================== CARD 1 (Outer Blue Layer) ==================== */}
            <div
              ref={card1Ref}
              className="relative lg:absolute flex items-end justify-center"
              style={{
                top: 'auto',
                bottom: '0',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 3
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-start lg:justify-between px-4 sm:px-6 rounded-[20px] lg:max-w-[1270px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none lg:h-[clamp(336px,497px,34.5vw)]"
                style={{
                  background: '#90A1FA',
                  minHeight: '460px',
                  height: '480px',
                  width: '100%',
                  overflow: 'hidden',
                  gap: 'clamp(16px, 32px, 2.22vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)'
                }}
              >
                <div className="flex flex-col items-center gap-2 lg:gap-[clamp(8px,32px,2.22vw)] pt-[12px] lg:pt-0">
                  <div
                    className="bg-[#ABFC00] text-[#90A1FA] font-extrabold rounded-full flex items-center justify-center lg:hidden"
                    style={{
                      fontSize: '20px',
                      width: '30px',
                      height: '30px',
                      marginBottom: '17px'
                    }}
                  >
                    1
                  </div>
                  <div className="flex items-center justify-center mb-[17px] lg:mb-0" style={{ gap: 'clamp(6px, 10px, 0.69vw)' }}>
                    <div
                      className="bg-[#ABFC00] text-[#90A1FA] font-extrabold rounded-full items-center justify-center hidden lg:flex"
                      style={{
                        fontSize: 'clamp(12px, 20px, 1.39vw)',
                        width: 'clamp(20px, 30px, 2.08vw)',
                        height: 'clamp(20px, 30px, 2.08vw)'
                      }}
                    >
                      1
                    </div>
                    <h3
                      className="text-[23px] lg:text-[clamp(16px,30px,2.08vw)]"
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        lineHeight: '42px',
                        color: '#ADFF00',
                        whiteSpace: 'nowrap',
                        margin: 0
                      }}
                    >
                      Prisma descarga tus facturas
                    </h3>
                  </div>

                  <p
                    className="text-[22px] lg:text-[23px] leading-[23px] lg:leading-[23px] pb-2 lg:pb-0 max-w-[320px] lg:max-w-[575px] font-[300] lg:font-normal lg:-mt-2"
                    style={{
                      width: '100%',
                      fontFamily: 'Roboto',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      letterSpacing: '0%'
                    }}
                  >
                    Cada vez que emites o recibes una factura, Prisma la<br className="hidden lg:block" /> descarga <br className="lg:hidden" /> y la{' '}
                    <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#ADFF00', fontSize: '21px' }}>
                      registra automáticamente.
                    </span>
                  </p>
                </div>

                <div className="parallax-image lg:hidden" style={{ width: '150%', marginBottom: '16px', marginLeft: '-25%' }}>
                  <Image
                    src="/images/image756.svg"
                    alt="Automatic reports generation"
                    width={833}
                    height={700}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', objectPosition: 'top', paddingLeft: '24%', paddingRight: '8%' }}
                  />                </div>

                <div className="parallax-image hidden lg:block" style={{ width: '650px', height: '300px' }}>
                  <Image
                    src="/images/image756.svg"
                    alt="Automatic reports generation"
                    width={833}
                    height={700}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </div>
            </div>

            {/* ==================== CARD 2 (Middle Layer) ==================== */}
            <div
              ref={card2Ref}
              className="relative lg:absolute flex items-end justify-center"
              style={{
                top: 'auto',
                bottom: '0',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 2
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-start lg:justify-between px-4 sm:px-6 rounded-[20px] h-[480px] lg:h-[513px] lg:max-w-[1270px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none"
                style={{
                  background: '#E1EBFF',
                  width: '100%',
                  overflow: 'hidden',
                  gap: 'clamp(16px, 32px, 2.22vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)'
                }}
              >
                <div className="flex flex-col items-center gap-2 lg:gap-[clamp(8px,32px,2.22vw)] pt-[12px] lg:pt-0">
                  <div
                    className="bg-[#485264] text-[#E1EBFF] font-extrabold rounded-full flex items-center justify-center lg:hidden"
                    style={{
                      fontSize: '20px',
                      width: '30px',
                      height: '30px',
                      marginBottom: '17px'
                    }}
                  >
                    2
                  </div>
                  <div className="flex items-center justify-center mb-[17px] lg:mb-0" style={{ gap: 'clamp(6px, 10px, 0.69vw)' }}>
                    <div
                      className="bg-[#485264] text-[#E1EBFF] font-extrabold rounded-full items-center justify-center hidden lg:flex"
                      style={{
                        fontSize: 'clamp(12px, 20px, 1.39vw)',
                        width: 'clamp(20px, 30px, 2.08vw)',
                        height: 'clamp(20px, 30px, 2.08vw)'
                      }}
                    >
                      2
                    </div>
                    <h3
                      className="text-[24px] lg:text-[clamp(16px,30px,2.08vw)] leading-[40px] lg:leading-[clamp(20px,40px,2.78vw)] font-extrabold lg:font-extrabold"
                      style={{
                        fontFamily: 'Roboto',
                        color: '#485264',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        width: '352px',
                        textAlign: 'center'
                      }}
                    >
                      Tómale foto a tus recibos
                    </h3>
                  </div>

                  <p
                    className="text-[19px] lg:text-[clamp(11px,20px,1.39vw)] leading-[23px] lg:leading-[clamp(15px,26px,1.81vw)] pb-2 lg:pb-0 font-[400] lg:font-normal max-w-[334px] lg:max-w-[clamp(280px,575px,39.93vw)] px-0 lg:px-[clamp(8px,16px,1.11vw)]"
                    style={{
                      width: '100%',
                      fontFamily: 'Roboto',
                      textAlign: 'center',
                      color: '#1a3866',
                      margin: 0
                    }}
                  >
                    Pagaste algo sin factura?  Solo <br className="lg:hidden" /> tómale una foto.<br className="hidden lg:block" /> {' '}Prisma reconoce la información y {' '}
                    <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#485264', fontSize: '19px' }}>
                      registra el gasto por ti.
                    </span>
                  </p>
                </div>

                <div className="flex justify-center items-center w-full mb-3 pt-4 lg:mb-0 lg:pt-[13px] lg:block lg:w-[376px] lg:h-[376px] lg:-mt-10">
                  <Image
                    src="/images/2ff787b93c4e4adba399f7ac24d7545c84bb22b2 (1).png"
                    alt="Intelligent classification system"
                    width={376}
                    height={376}
                    className="w-[221px] h-[221px] lg:w-full lg:h-full object-contain mt-[-20px] lg:mt-0"
                    style={{
                      transform: 'rotate(-0.48deg)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ==================== CARD 3 (Inner Layer with Content) ==================== */}
            <div
              ref={card3Ref}
              className="relative lg:absolute flex items-end justify-center"
              style={{
                top: 'auto',
                bottom: '0',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 1
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-start lg:justify-between px-4 sm:px-6 rounded-[20px] h-[480px] lg:h-[550px] lg:max-w-[1270px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none"
                style={{
                  background: '#1A73E8',
                  width: '100%',
                  overflow: 'hidden',
                  gap: 'clamp(16px, 32px, 2.22vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)'
                }}
              >
                <div className="flex flex-col items-center gap-2 lg:gap-[clamp(8px,32px,2.22vw)] pt-[12px] lg:pt-2">
                  <div
                    className="bg-white text-[#1A73E8] font-extrabold rounded-full flex items-center justify-center lg:hidden"
                    style={{
                      fontSize: '20px',
                      width: '30px',
                      height: '30px',
                      marginBottom: '17px'
                    }}
                  >
                    3
                  </div>
                  <div className="flex items-center justify-center mb-[17px] lg:mb-0" style={{ gap: 'clamp(6px, 10px, 0.69vw)' }}>
                    <div
                      className="bg-white text-[#1A73E8] font-extrabold rounded-full items-center justify-center hidden lg:flex"
                      style={{
                        fontSize: 'clamp(12px, 20px, 1.39vw)',
                        width: 'clamp(20px, 30px, 2.08vw)',
                        height: 'clamp(20px, 30px, 2.08vw)'
                      }}
                    >
                      3
                    </div>
                    <h3
                      className="text-[24px] lg:text-[clamp(16px,30px,2.08vw)] leading-[40px] lg:leading-[clamp(20px,40px,2.78vw)] font-extrabold lg:font-extrabold"
                      style={{
                        fontFamily: 'Roboto',
                        color: '#FFFFFF',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        textAlign: 'center'
                      }}
                    >
                      Tus reportes hechos en <br className="lg:hidden" /> automático
                    </h3>
                  </div>

                  <p
                    className="text-[19px] lg:text-[20px] leading-[23px] lg:leading-[25px] pb-2 lg:pb-0 font-[300] lg:font-[400] max-w-[334px] lg:max-w-none px-0 lg:px-[clamp(8px,16px,1.11vw)]"
                    style={{
                      width: '100%',
                      fontFamily: 'Roboto',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      margin: 0,
                      letterSpacing: '0%',
                      verticalAlign: 'middle'
                    }}
                  >
                    Ve cuánto compraste, cuánto <br className="lg:hidden" /> gastaste y cuánto vendiste este <br /> mes. Todo ordenado y {' '}
                    <span style={{ fontWeight: 500, fontStyle: 'italic', color: '#FFFFFF', fontSize: '19px' }}>
                      actualizado automáticamente.
                    </span>
                  </p>
                </div>

                <div className='flex justify-between items-end mt-0 lg:mt-[clamp(8px,70px,4.86vw)]' style={{
                  gap: 'clamp(8px, 40px, 2.78vw)',
                  width: '100%',
                  maxWidth: 'clamp(280px, 1000px, 69.44vw)',
                  position: 'relative',
                  marginBottom: '-4px'
                }}>
                  <div className="parallax-image lg:hidden" style={{
                    width: '113px',
                    height: '180px',
                    flexShrink: 0,
                    position: 'relative',
                    marginBottom: '0',
                    marginLeft: '-14px'
                  }}>
                    <Image
                      src="/images/image772.svg"
                      alt="Reports and analysis"
                      width={113}
                      height={180}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="hidden lg:block" style={{
                    width: '273px',
                    height: '295.5px',
                    flexShrink: 0,
                    position: 'relative',
                    marginBottom: 'clamp(-20px, -50px, -3.47vw)',
                    transform: 'rotate(0deg)',
                    opacity: 1
                  }}>
                    <Image
                      src="/images/image772.svg"
                      alt="Reports and analysis"
                      width={273}
                      height={295.5}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="parallax-image lg:hidden" style={{
                    width: '200px',
                    height: '100px',
                    flexShrink: 0,
                    marginBottom: '60px',
                    paddingLeft: '10px'
                  }}>
                    <Image
                      src="/images/image 7733.svg"
                      alt="Reports and analysis"
                      width={200}
                      height={100}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="parallax-image hidden lg:block" style={{
                    width: '548px',
                    height: '295px',
                    flexShrink: 0,
                    marginBottom: '40px',
                    transform: 'rotate(0deg)',
                    opacity: 1
                  }}>
                    <Image
                      src="/images/image 7733.svg"
                      alt="Reports and analysis"
                      width={548}
                      height={295}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
