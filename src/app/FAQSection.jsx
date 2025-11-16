'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0) // First FAQ is open by default

  const faqData = [
    {
      question: '¿Funciona para persona física y moral?',
      answer: 'Sí, Prisma funciona tanto para personas físicas como morales. Nuestro sistema se adapta automáticamente a los requerimientos fiscales de cada régimen.',
      isOpen: true
    },
    {
      question: '¿Qué pasa si me paso del número de facturas o recibos incluidos?',
      answer: 'Si excedes el límite de tu plan, puedes actualizar fácilmente o pagar por facturas adicionales según sea necesario.'
    },
    {
      question: '¿Tiene costo extra si agrego más usuarios o empresas?',
      answer: 'No, dentro de los límites de tu plan no hay costos adicionales. Si necesitas más usuarios o empresas, puedes actualizar tu plan.'
    },
    {
      question: '¿Puedo cancelar cuando quiera?',
      answer: 'Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones.'
    },
    {
      question: '¿Puedo cambiar de plan después?',
      answer: 'Por supuesto, puedes cambiar de plan en cualquier momento según las necesidades de tu negocio.'
    },
    {
      question: '¿Que necesito para arrancar?',
      answer: 'Solo necesitas tu RFC y acceso a tu buzón tributario. Nosotros nos encargamos del resto.'
    },
    {
      question: '¿Incluye timbrado de facturas?',
      answer: 'Sí, todos nuestros planes incluyen timbrado ilimitado de facturas electrónicas.'
    },
    {
      question: '¿Necesito instalar algo?',
      answer: 'No, Prisma es completamente web. Solo necesitas un navegador e internet.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en OXXO.'
    },
    {
      question: '¿Qué tan seguro es Prisma?',
      answer: 'Utilizamos encriptación de grado bancario y cumplimos con todos los estándares de seguridad mexicanos e internacionales.'
    },
    {
      question: '¿Ofrecen soporte personalizado?',
      answer: 'Sí, ofrecemos soporte por chat, email y teléfono. También tenemos un equipo de especialistas fiscales.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <section className="w-full bg-bg-secondary" id="faq">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-[30px]">
        <div className="flex flex-col justify-start items-center w-full lg:w-[88%] mx-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[flex-1]">

          {/* Decorative Line */}
          {/* <img 
            src="/images/img_vector_1650.svg" 
            alt="Decorative line"
            className="w-[1px] h-[1px] sm:w-[1px] sm:h-[1px] md:w-[1px] md:h-[2px] lg:w-[1px] lg:h-[2px] self-start ml-8 sm:ml-12 md:ml-16 lg:ml-[72px]"
          /> */}

          {/* Header */}
          <h2 className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-semibold leading-[27px] sm:leading-[39px] md:leading-[46px] lg:leading-[55px] text-center text-[#1a3866] mt-2 sm:mt-3 md:mt-4 lg:mt-[14px]"
            style={{ fontFamily: 'Inter' }}>
            Preguntas frecuentes
          </h2>

          {/* FAQ List */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-start items-center w-full lg:w-[66%] mt-6 sm:mt-8 md:mt-10 lg:mt-[34px]">
            {faqData?.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className="w-full"
              >
                {/* Gradient Border Container - Only visible when FAQ is open */}
                <div className={`${openFAQ === index ? 'p-[2px] bg-gradient-to-r from-[#ff0000] via-[#cc0000] to-[#353df0] rounded-lg' : ''}`}>
                  <div
                    className={`flex flex-col justify-start items-start w-full bg-secondary-background rounded-lg p-4 sm:p-5 md:p-6 lg:p-6 cursor-pointer transition-all duration-200 ${openFAQ !== index ? 'shadow-[0px_1px_2px_rgba(0,0,0,0.1)]' : ''
                      }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center w-full gap-4">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-left text-text-primary flex-1"
                        style={{ fontFamily: 'Inter' }}>
                        {faq?.question}
                      </h3>

                      {/* Plus/Minus Icon */}
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0"
                      >
                        {openFAQ === index ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          >
                            <path
                              d="M5 10H15"
                              stroke="#485164"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 sm:w-6 sm:h-6"
                          >
                            <path
                              d="M10 5V15M5 10H15"
                              stroke="#485164"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </motion.div>
                    </div>

                    {/* Answer with Animation */}
                    <AnimatePresence initial={false}>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden w-full"
                        >
                          <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6">
                            <p className="text-xs sm:text-sm md:text-base lg:text-base font-normal text-left text-text-muted leading-relaxed"
                              style={{ fontFamily: 'Inter' }}>
                              {faq?.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}