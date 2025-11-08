'use client';
import Button from '../components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AdministratorSection() {
  const handleGetStarted = () => {
    console.log('Comenzar button clicked')
  }

  const handleScheduleDemo = () => {
    console.log('Agendar demo clicked')
  }

  const notifications = [
    {
      id: 1,
      type: 'error',
      title: 'Gasto inusualmente alto',
      description: 'Erus  | $18,000.00 |  Walmart sa de cv |  14/03/2025  |  G00003',
      color: '#ff0000',
      isNew: true
    },
    {
      id: 2,
      type: 'warning',
      title: 'Cambio significativo en ticket promedio',
      description: 'Variación de +10 % en el ticket promedio mensual.',
      color: '#7839c7',
      isNew: true
    },
    {
      id: 3,
      type: 'error',
      title: 'Venta cancelada',
      description: 'Erus  | $18,000.00 |  Walmart sa de cv |  14/03/2025  |  V00003',
      color: '#ff0000',
      isNew: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Ventas en máximo historico',
      description: 'Este mes registras el monto de ventas más alto del año.',
      color: '#05c776',
      isNew: true
    }
  ]

  const taxData = [
    {
      title: 'IVA a pagar',
      amount: '$4,760.54',
      percentage: '11.2%',
      trend: 'up'
    },
    {
      title: 'ISR a pagar',
      amount: '$7,980.54',
      percentage: '11.2%',
      trend: 'up'
    }
  ]

  return (
    <section id="otras-soluciones" className="w-full bg-secondary-background overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[56px] py-8 sm:py-12 md:py-16 lg:py-[42px]">

        {/* Header Section */}
        <div className="relative w-full max-w-[1186px] mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-[90px] overflow-x-auto">
          <h2 className="text-[14px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-medium leading-[22px] sm:leading-[49px] md:leading-[56px] lg:leading-[70px] text-center text-[#1a3866] w-full whitespace-nowrap"
            style={{ fontFamily: 'Roboto' }}>
            Como tener un{' '}
            <span className="inline-flex items-center align-middle gap-1.5 sm:gap-3 md:gap-4 lg:gap-[10px] bg-[#e5e6ff] rounded-full px-2.5 sm:px-6 md:px-8 lg:px-[30px] py-0.5 sm:py-1.5 md:py-2">
              <img
                src="/images/picon.svg"
                alt="Administrator icon"
                className="w-[8px] h-[10px] sm:w-[18px] sm:h-[21px] md:w-[22px] md:h-[26px] lg:w-[26px] lg:h-[30px]"
              />
              <span className="text-[13px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[18px] sm:leading-[33px] md:leading-[38px] lg:leading-[47px] text-[#353df0]"
                style={{ fontFamily: 'Roboto' }}>
                administrador
              </span>
            </span>
            {' '}pero sin salario
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] w-full mx-auto"
          style={{
            maxWidth: '1130px',
            borderRadius: '20px',
            opacity: 1
          }}>

          {/* Smart Notifications Section */}
          <div className="w-full rounded-3xl p-3 sm:p-6 md:p-8 lg:p-[32px] mx-auto min-h-[420px] sm:min-h-[450px] md:min-h-[400px] lg:h-[367px] pb-4 sm:pb-6 lg:pb-[32px]"
            style={{
              borderRadius: '20px',
              opacity: 1,
              background: '#E5FFF4'
            }}>
            <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-start lg:items-start w-full h-full gap-3 sm:gap-4 md:gap-6 lg:gap-4">

              {/* Left Content - Full Screen Mobile Promo */}
              <div className="w-full lg:w-[46%] shrink-0 flex flex-col justify-start items-start lg:items-start lg:max-w-none px-2 lg:px-0 pt-4 sm:pt-6 lg:pt-0 lg:mt-[4px]">
                <div className="flex items-center justify-start lg:justify-start gap-1.5 sm:gap-3 md:gap-4 lg:gap-[8px] mb-2 sm:mb-3 md:mb-4 lg:mb-[22px]">
                  <img
                    src="/images/message.svg"
                    alt="AI notification icon"
                    className="w-[12px] h-[11px] sm:w-[14px] sm:h-[13px] md:w-[17px] md:h-[15px] lg:w-[20px] lg:h-[18px]"
                  />
                  <h3 className="text-[12px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-extrabold leading-tight sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-[#047043]"
                    style={{ fontFamily: 'Roboto' }}>
                    Prisma te habla
                  </h3>
                </div>
                <h4 className="text-[13px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-medium leading-[18px] sm:leading-[27px] md:leading-[33px] lg:leading-[40px] text-[#033c24] mb-2 sm:mb-3 w-full lg:w-[84%] text-left"
                  style={{ fontFamily: 'Roboto' }}>
                  Tener tus números en tiempo real es un superpoder
                </h4>
                <p className="text-[10px] sm:text-base lg:text-[16px] font-normal leading-[13px] sm:leading-5 lg:leading-[20px] mb-3 sm:mb-4 lg:mb-6 w-full lg:w-[415px] text-left"
                  style={{
                    fontFamily: 'Roboto',
                    opacity: 1,
                    letterSpacing: '0%',
                    color: '#033D25'
                  }}>
                  Prisma no solo muestra tus resultados: te avisa cuando algo cambia. Sabrás si tus ventas suben, si gastas más o si hay algo que revisar.
                </p>
                <div className="flex flex-col w-full sm:flex-row justify-start lg:justify-start items-start sm:items-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-[36px]">
                  <motion.div
                    className="w-full sm:w-auto"
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
                      text_font_size="text-sm sm:text-md"
                      text_font_weight="font-medium"
                      fill_background_color="bg-[#1daa61]"
                      border_border_radius="rounded-[50px]"
                      padding=""
                      className="cursor-pointer transition-all duration-300 hover:brightness-110 active:brightness-95 shadow-[0_4px_12px_rgba(29,170,97,0.25)] hover:shadow-[0_6px_20px_rgba(29,170,97,0.35)] active:shadow-[0_2px_8px_rgba(29,170,97,0.3)] w-full sm:w-auto"
                      style={{
                        width: '151px',
                        height: '34px',
                        borderRadius: '50px',
                        opacity: 1
                      }}
                      onClick={handleGetStarted}
                    />
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 lg:gap-[10px] cursor-pointer transition-all duration-300 px-4 py-2"
                    style={{
                      border: '3px solid white',
                      borderRadius: '50px',
                      boxShadow: '0 4px 12px rgba(255,255,255,0.3)',
                      width: '151px',
                      height: '34px'
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: '0 6px 20px rgba(255,255,255,0.5)',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      boxShadow: '0 2px 8px rgba(255,255,255,0.3)',
                      transition: { duration: 0.1 }
                    }}
                    onClick={handleScheduleDemo}
                  >
                    <img
                      src="/images/phone.svg"
                      alt="Calendar icon"
                      className="w-[10px] h-[10px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"
                    />
                    <span className="text-sm sm:text-md font-medium leading-tight text-center text-[#1daa61]"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      Agendar demo
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Right Content - Notifications - 2/3 width */}
              <div className="flex lg:flex w-full lg:w-[574px] flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-3 px-0 lg:px-2 overflow-x-hidden">

                {/* First Notification */}
                <motion.div 
                  className="rounded-base p-1.5 sm:p-3 md:p-4 lg:p-[10px] cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  style={{
                    background: '#FFFFFFB2',
                    width: '100%',
                    minHeight: '45px',
                    borderRadius: '5px',
                    opacity: 1
                  }}>
                  <div className="flex justify-between items-start w-full mb-0 sm:mb-1 md:mb-2 lg:mb-[4px]">
                    <div className="flex items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[6px]">
                      <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px] lg:w-[6px] lg:h-[6px] rounded-full mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-[4px]"
                        style={{ background: '#FF0000' }}></div>
                      <h5 className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-bold leading-[6px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted"
                        style={{ fontFamily: 'Inter' }}>
                        Gasto inusualmente alto
                      </h5>
                      <span className="text-[6px] font-bold leading-[20px] text-center bg-[#0080ff] rounded-[5px] px-0.5 sm:px-1.5 md:px-2 lg:px-[4px]"
                        style={{ fontFamily: 'Inter', width: '28px', height: '9px', opacity: 1, letterSpacing: '0%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', paddingBottom: '1px' }}>
                        Nuevo
                      </span>
                    </div>
                    <img
                      src="/images/search.svg"
                      alt="Search icon"
                      className="w-[6px] h-[6px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] self-end"
                    />
                  </div>
                  <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-normal leading-[6px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted -mt-0.5 sm:-mt-1 md:-mt-1.5 lg:-mt-[2px]"
                    style={{ fontFamily: 'Inter' }}>
                    Erus  | $18,000.00 |  Walmart sa de cv |  14/03/2025  |  G00003
                  </p>
                </motion.div>

                {/* Notifications List */}
                <div className="flex flex-col gap-2 sm:gap-6 md:gap-7 lg:gap-[26px]">
                  {notifications.slice(1).map((notification, index) => (
                    <motion.div 
                      key={notification.id} 
                      className="rounded-base p-1.5 sm:p-3 md:p-4 lg:p-[10px] cursor-pointer"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.3 }}
                      style={{
                        background: '#FFFFFFB2',
                        width: '100%',
                        minHeight: '45px',
                        borderRadius: '5px',
                        opacity: 1
                      }}>
                      <div className="flex justify-between items-start w-full mb-0 sm:mb-1 md:mb-2 lg:mb-[4px]">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3 lg:gap-[6px]">
                          <div className={`w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] md:w-[6px] md:h-[6px] lg:w-[6px] lg:h-[6px] rounded-full mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-[4px]`}
                            style={{ backgroundColor: notification.color }}></div>
                          <h5 className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-bold leading-[6px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted"
                            style={{ fontFamily: 'Inter' }}>
                            {notification.title}
                          </h5>
                          {notification.isNew && (
                            <span className="text-[6px] font-bold leading-[20px] text-center bg-[#0080ff] rounded-[5px] px-0.5 sm:px-1.5 md:px-2 lg:px-[4px]"
                              style={{ fontFamily: 'Inter', width: '28px', height: '9px', opacity: 1, letterSpacing: '0%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', paddingBottom: '2px' }}>
                              Nuevo
                            </span>
                          )}
                        </div>
                        <img
                          src="/images/search.svg"
                          alt="Search icon"
                          className="w-[6px] h-[6px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px]"
                        />
                      </div>
                      <div className="flex justify-between items-start w-full -mt-0.5 sm:-mt-1 md:-mt-1.5 lg:-mt-[4px]">
                        <p className="text-[5px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-normal leading-[6px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted self-end mt-2 lg:mt-[8px]"
                          style={{ fontFamily: 'Inter' }}>
                          {notification.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Section */}
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-[8px] w-full">

            {/* Left Column - Quotations */}
            <div className="w-full bg-[#e3f2ff] rounded-3xl p-3 sm:p-6 md:p-8 lg:p-[26px] min-h-[420px] sm:min-h-[450px] md:min-h-[400px] lg:h-[367px] flex flex-col relative mx-auto lg:mx-0">
              <div className="flex flex-col gap-2 sm:gap-5 md:gap-6 lg:gap-[20px] mb-4 sm:mb-20 md:mb-24 lg:mb-[98px] ml-1 sm:ml-3 md:ml-4 lg:ml-[12px]">
                <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-[8px]">
                  <img
                    src="/images/file-icon.svg"
                    alt="Calendar icon"
                    className="w-[14px] h-[13px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[16px] lg:h-[14px]"
                  />
                  <h3 className="text-[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-extrabold leading-tight sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-left text-[#007adb]"
                    style={{ fontFamily: 'Roboto' }}>
                    Cotizaciones con un clic
                  </h3>
                </div>
                <div className='relative'>
                  <h4 className="text-[13px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-medium leading-[16px] sm:leading-[21px] md:leading-[26px] lg:leading-[30px] text-left text-[#00355f] w-full lg:w-[86%] mb-0 sm:mb-0"
                    style={{ fontFamily: 'Roboto' }}>
                    Envía cotizaciones formales a tus clientes en segundos.
                  </h4>
                </div>
              </div>
              {/* Inner Image - Positioned at bottom */}
              <div className="absolute bottom-0 left-0 w-full sm:w-[365px] h-auto sm:h-[114px] max-w-[300px] sm:max-w-none sm:left-[26px] lg:left-[38px]"
                style={{
                  opacity: 1
                }}>
                <Image
                  src="/images/Envía-cotizaciones.png"
                  alt="Automatic invoice download system"
                  width={365}
                  height={114}
                  className="w-full h-auto"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Right Column - Tax Calculations */}
            <div className="w-full bg-secondary-background border border-border-primary rounded-3xl p-4 sm:p-6 md:p-8 lg:p-[28px] lg:pr-[16px] min-h-[420px] sm:min-h-[450px] md:min-h-[400px] lg:h-[367px] mx-auto lg:mx-0">
              <div className="flex flex-col lg:flex-row justify-start items-start gap-2 sm:gap-3 md:gap-4 lg:gap-[12px] ml-2 sm:ml-3 md:ml-4 lg:ml-[10px]">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[12px] w-full lg:flex-1">
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-[8px]">
                    <img
                      src="/images/Impuestos.svg"
                      alt="Calendar icon"
                      className="w-[16px] h-[14px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[16px] lg:h-[14px] mt-1"
                    />
                    <h3 className="text-[9px] sm:text-[12px] md:text-[15px] lg:text-[18px] font-extrabold leading-[11px] sm:leading-[15px] md:leading-[18px] lg:leading-[22px] text-left text-text-muted self-center"
                      style={{ fontFamily: 'Roboto' }}>
                      Impuestos calculados
                    </h3>
                  </div>
                  <div className='flex flex-col items-center justify-between'>
                    <h4 className="text-[12px] sm:text-[17px] md:text-[21px] lg:text-[25px] font-medium leading-[15px] sm:leading-[21px] md:leading-[26px] lg:leading-[30px] text-left text-[#1a2c3a] w-full"
                      style={{ fontFamily: 'Roboto' }}>
                      Conoce tus impuesto antes que tu contador
                    </h4>
                    <h5 className="text-[12px] sm:text-[17px] md:text-[21px] lg:text-[16px] font-normal text-left text-[#1a2c3a] w-full pt-14"
                      style={{ fontFamily: 'Roboto' }}>
                      Prisma calcula tu IVA e ISR en tiempo real para que no tengas sorpresas
                    </h5>
                  </div>
                </div>

                {/* Tax Data Cards */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-[14px] self-end w-full lg:w-[34%] mt-2 lg:mt-[8px]">
                  {taxData.map((tax, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-secondary-background border border-border-primary rounded-base p-1 sm:p-2 md:p-3 lg:p-[6px] cursor-pointer"
                      whileHover={{ 
                        y: -4,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[6px] ml-0.5 sm:ml-1 md:ml-1.5 lg:ml-[4px] mr-0.5 sm:mr-1 md:mr-1.5 lg:mr-[4px] mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-[4px]">
                        <div className="flex items-center gap-x-1 w-full">
                          <h5 className="text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-medium leading-[8px] sm:leading-[12px] md:leading-[14px] lg:leading-[17px] text-left text-text-muted"
                            style={{ fontFamily: 'Inter' }}>
                            {tax.title}
                          </h5>
                          <img
                            src="/images/circle-info-solid (12) 7.svg"
                            alt="Expand icon"
                            className="w-[4px] h-[4px] sm:w-[6px] sm:h-[6px] md:w-[7px] md:h-[7px] lg:w-[9px] lg:h-[9px]"
                          />
                        </div>
                        <p className="text-[8px] sm:text-[11px] md:text-[13px] lg:text-[16px] font-semibold leading-[10px] sm:leading-[14px] md:leading-[17px] lg:leading-[20px] text-left text-text-primary mt-2 lg:mt-[8px]"
                          style={{ fontFamily: 'Inter' }}>
                          {tax.amount}
                        </p>
                        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-[4px]">
                          <img
                            src="/images/Growth.svg"
                            alt="Trend icon"
                            className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] md:w-[13px] md:h-[13px] lg:w-[16px] lg:h-[16px]"
                          />
                          <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-normal leading-[7px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted"
                            style={{ fontFamily: 'Roboto' }}>
                            {tax.percentage}
                          </span>
                          <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-[12px] font-medium leading-[7px] sm:leading-[10px] md:leading-[12px] lg:leading-[15px] text-left text-text-muted"
                            style={{ fontFamily: 'Inter' }}>
                            al periodo anterior
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}