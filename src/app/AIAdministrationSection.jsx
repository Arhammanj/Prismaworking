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

  const [badgeText, setBadgeText] = useState('');

  const handleLearnMore = () => {
    console.log('IA button clicked');
  };

  useEffect(() => {
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
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-secondary-background">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* -------------------- HEADER -------------------- */}
        <div ref={headerRef} className="flex flex-col justify-start items-center gap-16 w-full pt-16 pb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <h2
              className="text-[#1a3866] text-center font-medium text-[50px] leading-[59px]"
              style={{ fontFamily: 'Roboto' }}
            >
              Tu administración hecha con
            </h2>
            <motion.div
              ref={iaBadgeRef}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#edf1fe] text-[#353df0] rounded-full text-[40px] font-medium px-[26px] py-[6px] cursor-pointer"
              onClick={handleLearnMore}
            >
              <Image
                src="/images/Vector2.svg"
                alt="AI icon"
                width={30}
                height={30}
              />
              <span>{badgeText}</span>
            </motion.div>
          </div>
        </div>

        {/* -------------------- CARDS CONTAINER (PINNED) -------------------- */}
        <div
          ref={cardsContainerRef}
          className="relative w-full"
          style={{ minHeight: '100vh' }}
        >
          {/* All three cards stacked with offset positioning */}
          <div className="relative w-full" style={{ height: '100vh' }}>

            {/* ==================== CARD 1 (Outer Blue Layer) ==================== */}
            <div
              ref={card1Ref}
              className="absolute flex items-end justify-center"
              style={{
                top: '62px',
                bottom: 'auto',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 3
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-between gap-8 px-8 pt-8"
                style={{
                  background: '#90A1FA',
                  height: '497px',
                  maxWidth: '1275px',
                  borderRadius: '20px 20px 0 0',
                  overflow: 'hidden'
                }}
              >
                <div className="flex flex-col items-center gap-8">
                  <div className="flex items-center justify-center gap-[10px]">
                    <div className="bg-[#ABFC00] text-[#90A1FA] font-extrabold text-xl rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      1
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 800,
                        fontSize: '30px',
                        lineHeight: '40px',
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
                      maxWidth: '575px',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '23px',
                      lineHeight: '30px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    Cada vez que emites o recibes una factura, Prisma la descarga y la{' '}
                    <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#ADFF00' }}>
                      registra automáticamente.
                    </span>
                  </p>
                </div>

                <div className="parallax-image" style={{ width: '833px', maxWidth: '90%', height: 'auto' }}>
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
              className="absolute flex items-end justify-center"
              style={{
                top: '31px',
                bottom: 'auto',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 2
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-center gap-8 px-8"
                style={{
                  background: '#E1EBFF',
                  height: '497px',
                  maxWidth: '1275px',
                  borderRadius: '20px 20px 0 0',
                  overflow: 'hidden'
                }}
              >
                <div className="flex items-center justify-center gap-[10px]">
                  <div className="bg-[#485264] text-[#E1EBFF] font-extrabold text-xl rounded-full w-[30px] h-[30px] flex items-center justify-center">
                    2
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 800,
                      fontSize: '30px',
                      lineHeight: '40px',
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
                    maxWidth: '575px',
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '23px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    color: '#1a3866'
                  }}
                >
                  Pagaste algo sin factura? Solo tómale una foto. {' '}Prisma reconoce la información y {' '}
                  <span style={{ fontWeight: 700, fontStyle: 'italic', color: '#485264' }}>
                    registra el gasto por ti.
                  </span>
                </p>

                <div className="parallax-image" style={{ width: '633px', maxWidth: '90%', height: 'auto' }}>
                  {/* <Image
                    src="/images/image756.svg"
                    alt="Intelligent classification system"
                    width={633}
                    height={311}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  /> */}
                </div>
              </div>
            </div>

            {/* ==================== CARD 3 (Inner Layer with Content) ==================== */}
            <div
              ref={card3Ref}
              className="absolute flex items-end justify-center"
              style={{
                top: '0px',
                bottom: 'auto',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom',
                zIndex: 1
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-between gap-8 px-8 pt-8"
                style={{
                  background: '#1A73E8',
                  height: '497px',
                  maxWidth: '1275px',
                  borderRadius: '20px 20px 0 0',
                  overflow: 'hidden'
                }}
              >
                <div className="flex flex-col items-center gap-8">
                  <div className="flex items-center justify-center gap-[10px]">
                    <div className="bg-white text-[#1A73E8] font-extrabold text-xl rounded-full w-[30px] h-[30px] flex items-center justify-center">
                      3
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 800,
                        fontSize: '30px',
                        lineHeight: '40px',
                        color: '#FFFFFF',
                        whiteSpace: 'nowrap',
                        margin: 0
                      }}
                    >
                      Tus reportes hechos en automático
                    </h3>
                  </div>

                  <p
                    style={{
                      maxWidth: '',
                      fontFamily: 'Roboto',
                      fontWeight: 400,
                      fontSize: '23px',
                      lineHeight: '30px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    <p>Ve cuánto compraste, cuánto gastaste y cuánto vendiste este</p>
                    <p> mes. Todo ordenado y actualizado automáticamente.</p>
                  </p>
                </div>

                <div className='flex justify-between gap-10 mt-[70px]'>
                  <div className="parallax-image">
                    <Image
                      src="/images/7676.png"
                      alt="Reports and analysis"
                      width={273}
                      height={0}
                      style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="parallax-image" style={{ width: '833px', maxWidth: '90%', height: 'auto' }}>
                    <Image
                      src="/images/image 7733.svg"
                      alt="Reports and analysis"
                      width={300}
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
