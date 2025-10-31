'use client';
import { useState, useRef } from 'react';
import Button from '../components/ui/Button';
import Switch from '../components/ui/Switch';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(false)

  const handlePlanSelect = (planName) => {
    console.log(`${planName} plan selected`)
  }

  const pricingPlans = [
    {
      name: 'Emprendedor',
      price: '$860',
      period: '/mes',
      features: [
        '1 empresa',
        '1 usuario',
        '10 recibos',
        '50 Descargas de facturas del SAT',
        'Captura automática de gastos, compras y ventas',
        '5 Reportes en tiempo real'
      ],
      buttonText: 'Empezar con este plan',
      buttonIcon: '/images/arrow-white.svg',
      buttonStyle: 'bg-primary-background text-primary-foreground',
      cardStyle: 'border-border-secondary',
      textColor: 'text-[#1A3866]',
      priceColor: 'text-[#1A3866]',
      iconColor: '/images/check-blue.svg',
    },
    {
      name: 'Negocio',
      price: '$1,290',
      period: '/mes',
      features: [
        '3 empresas',
        '3 usuarios',
        '30 recibos',
        '200 Descargas de facturas del SAT',
        'Captura automática de gastos, compras y ventas',
        '6 Reportes en tiempo real'
      ],
      buttonText: 'Contratar plan negocio',
      buttonIcon: '/images/arrow-blue.svg',
      buttonStyle: 'bg-secondary-background text-[#155DFC]',
      cardStyle: 'border-primary-background bg-primary-background',
      textColor: 'text-white',
      priceColor: 'text-secondary-background',
      iconColor: '/images/check-white.svg',
      isRecommended: true
    },
    {
      name: 'Empresa',
      price: '$1,990',
      period: '/mes',
      features: [
        '5 empresas',
        '10 usuarios',
        '100 recibos',
        '500 Descargas de facturas del SAT',
        'Captura automática de gastos, compras y ventas',
        '6 Reportes en tiempo real'
      ],
      buttonText: 'Contratar plan Empresa',
      buttonIcon: '/images/arrow-white.svg',
      buttonStyle: 'bg-primary-background text-primary-foreground',
      cardStyle: 'border-[#e2e0e0]',
      textColor: 'text-[#1A3866]',
      priceColor: 'text-[#1A3866]',
      iconColor: '/images/check-blue.svg'
    }
  ]

  return (
    <section ref={ref} className="w-full bg-secondary-background " id="precios">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center  w-full py-16">

          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-semibold leading-[27px] sm:leading-[39px] md:leading-[46px] lg:leading-[55px] text-center text-[#1a3866] mb-1 sm:mb-2 md:mb-3 lg:mb-[px]"
            style={{ fontFamily: 'Inter' }}>
            Elige el plan perfecto para tu <span className="font-extrabold italic">empresa</span>
          </motion.h2>

          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[72px] justify-start items-center w-full max-w-[1548px] mx-auto mt-1 sm:mt-2 md:mt-3 lg:mt-[px]">

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-normal leading-5 text-center text-[#1a3866] w-full max-w-[921px] mx-auto"
              style={{ fontFamily: 'Inter' }}>
              Empieza con lo esencial y escala cuando tu negocio crezca. Todos los planes incluyen descargas automáticas de facturas, reportes en tiempo real y avisos inteligentes.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-[10px] w-auto">
              <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-semibold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-center text-text-primary"
                style={{ fontFamily: 'Inter' }}>
                Mensual
              </span>
              <Switch
                checked={isAnnual}
                onChange={setIsAnnual}
                size="large"
              />
              <span className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-semibold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-center text-text-primary"
                style={{ fontFamily: 'Inter' }}>
                Anual
              </span>
              <span className="text-[4px] sm:text-[6px]  h-[17px] md:text-[7px] lg:text-[9px] font-light leading-[5px] sm:leading-[7px] md:leading-[9px] lg:leading-[11px] text-center text-[#00569b] border border-[#00569b] rounded-md px-2 sm:px-3 md:px-4 lg:px-[12px] py-0.5 sm:py-1 md:py-1.5 lg:py-[2px]"
                style={{ fontFamily: 'Inter' }}>
                30% OFF
              </span>
            </motion.div>

            {/* Pricing Cards */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[24px] justify-center items-center w-full">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className={`w-full lg:h-[520px] lg:w-[400px] border rounded-xl shadow-[0px_2px_4px_#0000003f] p-4 sm:p-6 md:p-8 lg:p-[32px] lg:pt-[16px] lg:pb-[32px] lg:px-[26px] ${plan.cardStyle} ${plan.textColor} ${plan.name === 'Negocio' ? plan.cardStyle : 'bg-secondary-background'}`}>

                  {/* Plan Header */}
                  <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-[2px] justify-start items-start w-full mb-4 sm:mb-6 md:mb-8 lg:mb-[78px]">
                    <div className="flex justify-between items-start w-full ml-1 sm:ml-2 md:ml-3 lg:ml-[6px]">
                      <h3 className={`text-[12px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-bold leading-[15px] sm:leading-[21px] md:leading-[26px] lg:leading-[31px] text-center ${plan.textColor}`}
                        style={{ fontFamily: 'Inter' }}>
                        {plan.name}
                      </h3>
                      {plan.isRecommended && (
                        <span className="text-[7px] text-white bg-[#FFFFFF80] sm:text-[10px] md:text-[12px] lg:text-[14px] font-bold leading-[8px] sm:leading-[12px] md:leading-[14px] lg:leading-[17px] text-center text-secondary-background bg-background-overlay rounded-lg px-2 sm:px-3 md:px-4 lg:px-[12px] py-0.5 sm:py-1 md:py-1.5 lg:py-[2px]"
                          style={{ fontFamily: 'Inter' }}>
                          Recomendado
                        </span>
                      )}
                    </div>
                    <div className={`text-[12px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-bold leading-[15px] sm:leading-[21px] md:leading-[26px] lg:leading-[31px] text-center mt-2 ${plan.priceColor} ml-0`}
                      style={{ fontFamily: 'Inter' }}>
                      <span className="text-[17px] sm:text-[24px] md:text-[29px] lg:text-[35px] font-black leading-[15px] sm:leading-[21px] md:leading-[26px] lg:leading-[31px]">
                        {plan.price}
                      </span>
                      <span className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[15px] sm:leading-[21px] md:leading-[26px] lg:leading-[31px]">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col justify-start items-center w-full mb-4 sm:mb-6 md:mb-8 lg:mb-[26px] mr-2 sm:mr-3 md:mr-4 lg:mr-[12px]">
                    <div className="flex flex-col w-full">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex}
                          className={`flex justify-start items-start w-full ${featureIndex > 0 ? 'mt-2 sm:mt-3 md:mt-4 lg:mt-[12px]' : ''} ${featureIndex === 3 ? 'mt-3 sm:mt-4 md:mt-5 lg:mt-[18px]' : ''} ${featureIndex === 4 ? 'mt-2 sm:mt-3 md:mt-4 lg:mt-[14px]' : ''}`}>
                          <img
                            src={plan.iconColor}
                            alt="Feature check"
                            className={`w-[8px] h-[5px] sm:w-[11px] sm:h-[7px] md:w-[13px] md:h-[8px] lg:w-[16px] lg:h-[10px] ${featureIndex > 0 ? 'mt-1 sm:mt-1.5 md:mt-2 lg:mt-[4px]' : ''}`}
                          />
                          <p className={`text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-normal leading-[10px] sm:leading-[14px] md:leading-[17px] lg:leading-[20px] text-left ${plan.textColor} self-center ml-2 sm:ml-3 md:ml-4 lg:ml-[12px] ${featureIndex === 4 ? 'w-full lg:w-[94%]' : 'w-auto'}`}
                            style={{ fontFamily: 'Inter' }}>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className={`flex justify-start items-center`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${plan.buttonStyle} lg:h-[34px]  rounded-2xl flex items-center justify-start gap-x-2 font-medium px-4 sm:px-5 md:px-6 lg:px-[24px] py-2 sm:py-2.5 md:py-3 lg:py-[10px] ${plan.name === 'Negocio' ? 'mb-4 sm:mb-5 md:mb-6 lg:mb-[20px]' : ''}`}
                      onClick={() => handlePlanSelect(plan.name)}
                    >
                      {plan.buttonText}
                      <Image
                        src={plan.buttonIcon}
                        alt="Arrow Icon"
                        width={12}
                        height={12}
                        className=""
                      />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}