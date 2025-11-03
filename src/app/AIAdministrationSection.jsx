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
          end: '+=4000',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Set initial states - all cards start from below with lower opacity
      gsap.set(card1Ref.current, { opacity: 0, y: 200 });
      gsap.set(card2Ref.current, { opacity: 0, y: 200 });
      gsap.set(card3Ref.current, { opacity: 0, y: 200 });

      // First timeline: First card moves with heading
      tl.to(card1Ref.current, {
        opacity: 1,
        y: 0,
        ease: 'cubic-bezier(0.33, 1, 0.68, 1)'
      });

      // Second timeline: Remaining cards appear slowly one by one during pin
      tl2
        .to({}, { duration: 0.5 }) // Pause to let first card settle

        // ===== CARD 2 ENTER (slowly from bottom, stacks on card 1) =====
        .to(card2Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'cubic-bezier(0.33, 1, 0.68, 1)'
        })
        // Parallax on card 2 image
        .to(card2Ref.current.querySelector('.parallax-image'), {
          y: -15,
          duration: 0.8,
          ease: 'none'
        }, '<')
        .to({}, { duration: 0.8 }) // Hold card 2

        // ===== CARD 3 ENTER (slowly from bottom, stacks on card 2) =====
        .to(card3Ref.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'cubic-bezier(0.33, 1, 0.68, 1)'
        })
        // Parallax on card 3 image
        .to(card3Ref.current.querySelector('.parallax-image'), {
          y: -15,
          duration: 0.8,
          ease: 'none'
        }, '<')
        .to({}, { duration: 1 }); // Final hold

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
              className="absolute inset-0 flex items-end justify-center"
              style={{
                transformOrigin: 'center bottom'
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-between gap-8 px-8 pt-8"
                style={{
                  background: '#90A1FA',
                  height: '92vh',
                  borderRadius: '20px',
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

                <div className="parallax-image" style={{ width: '100%', maxWidth: '833px', height: 'auto' }}>
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
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom'
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-center gap-8 px-8"
                style={{
                  background: '#E1EBFF',
                  height: '90vh',
                  borderRadius: '20px',
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

                <div className="parallax-image" style={{ width: '100%', maxWidth: '633px', height: 'auto' }}>
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
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                transformOrigin: 'center bottom'
              }}
            >
              <div
                className="w-full flex flex-col items-center justify-between gap-8 px-8 pt-8"
                style={{
                  background: '#1A73E8',
                  height: '88vh',
                  borderRadius: '20px',
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
                  <div className="parallax-image" style={{ width: '100%', maxWidth: '833px', height: 'auto' }}>
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
