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
          <div className="relative w-full flex flex-col lg:block lg:h-screen gap-4 lg:gap-0">

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
                className="w-full flex flex-col items-center justify-between px-4 sm:px-6 rounded-[20px] lg:max-w-[1120px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none lg:h-[clamp(336px,497px,34.5vw)]"
                style={{
                  background: '#90A1FA',
                  minHeight: '425px',
                  width: '100%',
                  overflow: 'hidden',
                  gap: 'clamp(16px, 32px, 2.22vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)'
                }}
              >
                <div className="flex flex-col items-center" style={{ gap: 'clamp(8px, 32px, 2.22vw)', paddingTop: 'clamp(12px, 24px, 1.67vw)' }}>
                  <div className="flex items-center justify-center" style={{ gap: 'clamp(6px, 10px, 0.69vw)' }}>
                    <div 
                      className="bg-[#ABFC00] text-[#90A1FA] font-extrabold rounded-full flex items-center justify-center"
                      style={{
                        fontSize: 'clamp(12px, 20px, 1.39vw)',
                        width: 'clamp(20px, 30px, 2.08vw)',
                        height: 'clamp(20px, 30px, 2.08vw)'
                      }}
                    >
                      1
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 800,
                        fontSize: 'clamp(16px, 30px, 2.08vw)',
                        lineHeight: 'clamp(20px, 40px, 2.78vw)',
                        color: '#ADFF00',
                        whiteSpace: 'nowrap',
                        margin: 0
                      }}
                    >
                      Prisma genera tus reportes
                    </h3>
                  </div>

                  <p
                    style={{
                      maxWidth: 'clamp(280px, 575px, 39.93vw)',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 'clamp(12px, 23px, 1.6vw)',
                      lineHeight: 'clamp(16px, 30px, 2.08vw)',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      padding: '0 clamp(8px, 16px, 1.11vw)'
                    }}
                  >
                    Cada vez que emites o recibes una factura, Prisma la descarga y la{' '}
                    <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#ADFF00' }}>
                      registra automáticamente.
                    </span>
                  </p>
                </div>

                <div className="parallax-image" style={{ width: 'clamp(280px, 833px, 57.85vw)', maxWidth: '90%', height: 'auto' }}>
                  <Image
                    src="/images/image756.svg"
                    alt="Automatic reports generation"
                    width={833}
                    height={700}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
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
                className="w-full flex flex-col items-center justify-center px-4 sm:px-6 rounded-[20px] lg:max-w-[1120px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none lg:h-[clamp(336px,528px,36.67vw)]"
                style={{
                  background: '#E1EBFF',
                  minHeight: '425px',
                  width: '100%',
                  overflow: 'hidden',
                  gap: 'clamp(12px, 24px, 1.67vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)',
                  paddingBottom: 'clamp(16px, 32px, 2.22vw)'
                }}
              >
                <div className="flex items-center justify-center" style={{ gap: 'clamp(6px, 10px, 0.69vw)', paddingTop: 'clamp(12px, 24px, 1.67vw)' }}>
                  <div 
                    className="bg-[#485264] text-[#E1EBFF] font-extrabold rounded-full flex items-center justify-center"
                    style={{
                      fontSize: 'clamp(12px, 20px, 1.39vw)',
                      width: 'clamp(20px, 30px, 2.08vw)',
                      height: 'clamp(20px, 30px, 2.08vw)'
                    }}
                  >
                    2
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 800,
                      fontSize: 'clamp(16px, 30px, 2.08vw)',
                      lineHeight: 'clamp(20px, 40px, 2.78vw)',
                      color: '#485264',
                      whiteSpace: 'nowrap',
                      margin: 0
                    }}
                  >
                    Tómale foto a tus tickets
                  </h3>
                </div>

                <p
                  style={{
                    maxWidth: 'clamp(280px, 575px, 39.93vw)',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: 'clamp(11px, 20px, 1.39vw)',
                    lineHeight: 'clamp(15px, 26px, 1.81vw)',
                    textAlign: 'center',
                    color: '#1a3866',
                    margin: 0,
                    padding: '0 clamp(8px, 16px, 1.11vw)'
                  }}
                >
                  Pagaste algo sin factura? Solo tómale una foto. {' '}Prisma reconoce la información y {' '}
                  <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#485264' }}>
                    registra el gasto por ti.
                  </span>
                </p>

                <div className="parallax-image" style={{ width: 'clamp(160px, 320px, 22.22vw)', height: 'clamp(160px, 320px, 22.22vw)', maxWidth: '90%' }}>
                  <Image
                    src="/images/2ff787b93c4e4adba399f7ac24d7545c84bb22b2 (1).png"
                    alt="Intelligent classification system"
                    width={320}
                    height={320}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      transform: 'rotate(-0.48deg)',
                      opacity: 1
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
                className="w-full flex flex-col items-center justify-between px-4 sm:px-6 rounded-[20px] lg:max-w-[1120px] lg:px-8 lg:rounded-t-[clamp(12px,20px,1.39vw)] lg:rounded-b-none lg:h-[clamp(336px,559px,38.82vw)]"
                style={{
                  background: '#1A73E8',
                  minHeight: '425px',
                  width: '100%',
                  overflow: 'visible',
                  gap: 'clamp(16px, 32px, 2.22vw)',
                  paddingTop: 'clamp(16px, 32px, 2.22vw)',
                  paddingBottom: '0'
                }}
              >
                <div className="flex flex-col items-center" style={{ gap: 'clamp(8px, 32px, 2.22vw)', paddingTop: 'clamp(12px, 24px, 1.67vw)' }}>
                  <div className="flex items-center justify-center" style={{ gap: 'clamp(6px, 10px, 0.69vw)' }}>
                    <div 
                      className="bg-white text-[#1A73E8] font-extrabold rounded-full flex items-center justify-center"
                      style={{
                        fontSize: 'clamp(12px, 20px, 1.39vw)',
                        width: 'clamp(20px, 30px, 2.08vw)',
                        height: 'clamp(20px, 30px, 2.08vw)'
                      }}
                    >
                      3
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 800,
                        fontSize: 'clamp(16px, 30px, 2.08vw)',
                        lineHeight: 'clamp(20px, 40px, 2.78vw)',
                        color: '#FFFFFF',
                        whiteSpace: 'nowrap',
                        margin: 0
                      }}
                    >
                      Tus reportes hechos en automático
                    </h3>
                  </div>

                  <div
                    style={{
                      maxWidth: '',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: 'clamp(11px, 23px, 1.6vw)',
                      lineHeight: 'clamp(15px, 30px, 2.08vw)',
                      textAlign: 'center',
                      color: '#FFFFFF',
                      padding: '0 clamp(8px, 16px, 1.11vw)'
                    }}
                  >
                    <p>Ve cuánto compraste, cuánto gastaste y cuánto vendiste este</p>
                    <p> mes. Todo ordenado y actualizado automáticamente.</p>
                  </div>
                </div>

                <div className='flex justify-between items-end' style={{ 
                  marginTop: 'clamp(8px, 70px, 4.86vw)',
                  gap: 'clamp(8px, 40px, 2.78vw)',
                  width: '100%',
                  maxWidth: 'clamp(280px, 1000px, 69.44vw)',
                  position: 'relative'
                }}>
                  <div className="parallax-image" style={{ 
                    width: 'clamp(90px, 273px, 18.96vw)',
                    flexShrink: 0,
                    position: 'relative',
                    marginBottom: 'clamp(-20px, -50px, -3.47vw)'
                  }}>
                    <Image
                      src="/images/image772.svg"
                      alt="Reports and analysis"
                      width={273}
                      height={0}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="parallax-image" style={{ 
                    width: 'clamp(180px, 600px, 41.67vw)',
                    flexShrink: 0,
                    marginBottom: '0'
                  }}>
                    <Image
                      src="/images/image 7733.svg"
                      alt="Reports and analysis"
                      width={600}
                      height={700}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
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
