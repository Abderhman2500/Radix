import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "motion/react"; // تأكد من استيراد كل الدوال دي
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img31 from '../img/img31.jpg';
import img32 from '../img/img32.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img71 from '../img/img71.png'
import img72 from '../img/img72.png'
import img73 from '../img/img73.png'
import img74 from '../img/img74.png'
import img75 from '../img/img75.png'
import img9 from '../img/img9.jpg';
import img11 from '../img/img11.jpg';




import { IoIosArrowRoundForward } from "react-icons/io";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { VscArrowSmallRight } from "react-icons/vsc";
import { FaDraftingCompass } from "react-icons/fa";
import { MdOutlineEco } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { LuBadgeSwissFranc } from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";







// 1. مكون العداد (الأفضل يكون بره الـ Hero عشان ميتمش إعادة بناءه مع كل Render)
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  // once: true عشان يعد مرة واحدة بس لما تنزل بالماوس
  const isInView = useInView(ref, { once: true, margin: "-50px" }); 
  
  const count = useMotionValue(0);
  // تقريب الرقم وإضافة الرمز (زي + أو %)
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      // duration: 2 معناها العداد هياخد ثانيتين عشان يوصل للرقم النهائي
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};


export default function Hero() {
  const targetRef = useRef(null);

  // 2. تتبع السكرول جوه السكشن ده
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // 3. تحويل السكرول الطولي (من 0 لـ 1) لحركة عرضية (من 0% لـ -66%)
  // استخدمنا -66% لأننا عندنا 3 كروت، فمحتاجين نحرك كارتين بس بره الشاشة
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <>
      <div className="sec1 relative w-full h-screen flex items-center">
        <img src={img1} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
    
        <div className="container relative z-20 w-[80%] mx-auto">
          <div className="head-sec1">
            <motion.p 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "linear" }}
                className="text-[#FFFFFF] font-playfair font-[400] text-[96px] leading-[96px]">
                Building Tomorrow's Landmarks
            </motion.p>
            <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "linear" }}
            >
                <p className="w-[500px] font-Outfit font-[300] text-[20px] text-[#FFFFFFCC] mt-5">
                Creating premium residential, commercial, and mixed-use
                destinations that redefine modern living and investment.
            </p>
            <button className="my-15 border w-[200px] h-[50px] text-center py-3 font-Outfit font-[700] text-[12px] text-[#FFFFFF]">EXPLORE PROJECTS</button>
            <button className=" w-[200px] h-[50px] text-center py-3 font-Outfit font-[700] text-[12px] text-[#FFFFFF]">WATCH BRAND STORY</button>
            </motion.div>
          </div>
        </div>    
      </div>
      
      {/* ********************************************************************************* */}
    
      <div className="sec2 w-full h-screen">
        <div className="container w-[80%] h-screen mx-auto py-25 flex gap-20 ">
          <div className="info-sec2">
            <p className='text-[#C5A059]  font-Outfit font-[700] text-[12px] font-bold tracking-[3.6px]'>SINCE</p>
            <p className='text-[#111111] font-playfair font-[400] text-[120px] -my-10'>201<span className='text-[160px]'>8</span></p>
            <p className='w-140 text-[#111111] font-playfair font-[400] text-[36px] my-5 leading-[40px]'>Building trust. Delivering value.Creating impact.</p>
            <p className='w-110 text-[#4B5563] font-Outfit font-[400] text-[16px] my-7'>
                Radix Development was founded with a vision to develop integrated
                communities that combine innovative design, superior quality, and long-
                term value. Today, we stand as one of Egypt's most prominent reale state developers.
            </p>
            <p className='inline text-[#111111] font-Outfit font-[700] text-[12px] font-bold leading-[16px] tracking-[3px]'>OUR STORY <IoIosArrowRoundForward className='inline text-[25px]' /></p>
          </div>
        
          <div className="img-sec2 w-[450px] h-[500px] overflow-hidden  group cursor-pointer rounded-md ">
            <img src={img2} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-115'/>
          </div>
        </div>
      </div>

      {/* ******************************************************************************************* */}
      
      <div className="sec3 w-full h-screen my-10">
        <div className="container w-[80%] mx-auto">
           <div className="head-sec3 flex justify-between">
             <p className="text-[#111111] font-playfair font-[400] text-[64px] ">The Portfolio</p>
             <div className="arrow flex gap-5 my-10">
                <p className="border w-[30px] h-[30px] border-[#0000001A] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"><VscArrowSmallLeft className='text-[30px]'/></p>
                <p className="border w-[30px] h-[30px] border-[#0000001A] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"><VscArrowSmallRight className='text-[30px]'/></p>
             </div>
           </div>

          <div ref={targetRef} className="relative h-[300vh] -my-20">
           <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div 
               style={{ x }} // ربط الحركة بالـ x
              className="flex gap-10 px-10"
            >
              {/* الكارت الأول */}
              <div className="w-screen max-w-[600px] h-[500px]  rounded-2xl flex justify-center ">
                <img src={img3} alt="" className="w-full h-full object-cover rounded-2xl" />
              </div>

              {/* الكارت الثاني */}
              <div className="w-screen max-w-[600px] h-[500px]  rounded-2xl flex ">
                <img src={img31} alt="" className="w-full h-full object-cover rounded-2xl" />
              </div>

              {/* الكارت الثالث */}
              <div className="w-screen max-w-[600px] h-[500px]  rounded-2xl flex ">
                <img src={img32} alt="" className="w-full h-full object-cover rounded-2xl" />
              </div>

            </motion.div>
           </div>
          </div>
        </div>
      {/* ************************************************************************************** */}
        <div className="sec4 relative w-full h-screen flex items-center my-10">
          <img src={img4} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/60 z-10"></div>

          <div className="flex w-full">
            <div className="container relative z-20 w-[80%] mx-auto text-white flex gap-50">
                <div>
                  <h2 className="w-[580px] text-[#F8F7F4] font-playfair font-[500] text-[64px] text-5xl font-bold leading-tight">A Place Designed For Generations.</h2>
                  <p className="w-[580px] text-[#E5E2E199] font-Outfit font-[300] text-[20px] mt-11 text-xl">Our commitment to excellence is reflected in every square meter we develop, ensuring value and beauty for decades to come.</p>
                </div>
                 
                <div className="grid grid-flow-col grid-rows-2 gap-4 mt-8 lg:mt-0">
                   
                   {/* العداد الأول */}
                   <div className="stat">
                      <p className='font-playfair font-[500] text-[64px] text-[#B68A35]'>
                         <AnimatedCounter value={15} suffix="+" />
                      </p>
                      <p className='w-70  text-[#E5E2E199] font-Outfit font-[400] text-[16px] tracking-[1.6px]'>YEARS OF MASTERY</p>
                   </div>
                   
                   {/* العداد الثاني */}
                   <div className="stat">
                      <p className='font-playfair font-[500] text-[64px] text-[#B68A35]'>
                         <AnimatedCounter value={20} suffix="+" />
                      </p>
                      <p className='w-70 text-[#E5E2E199] font-Outfit font-[400] text-[16px] tracking-[1.6px]'>LANDMARK PROJECTS</p>
                   </div> 
                   
                   {/* العداد الثالث */}
                   <div className="stat">
                      <p className='font-playfair font-[500] text-[64px] text-[#B68A35]'>
                         <AnimatedCounter value={5} suffix="K+" />
                      </p>
                      <p className='w-70 text-[#E5E2E199] font-Outfit font-[400] text-[16px] tracking-[1.6px]'>UNITS DELIVERED</p>
                   </div> 
                   
                   {/* العداد الرابع */}
                   <div className="stat">
                      <p className='font-playfair font-[500] text-[64px] text-[#B68A35]'>
                         <AnimatedCounter value={98} suffix="%" />
                      </p>
                      <p className='w-70 text-[#E5E2E199] font-Outfit font-[400] text-[16px] tracking-[1.6px]'>CLIENT SATISFACTION</p>
                   </div>   

                </div>
            </div>
          </div>
      </div>
     {/* ********************************************************************************************** */}
     <div className="sec5 w-full h-screen my-30">
        <div className="container w-[80%] mx-auto">
            <div className="head-sec5">
              <p className='font-Outfit font-[400] text-[16px] text-[#B68A35] leading-[24px] text-center'>OUR CAPABILITIES</p>
              <h2 className="font-playfair font-[500] text-[64px] text-[#111111] text-center">The Art of the Infinite.</h2>
           </div>
       <div className="img-sec5 my-15 flex gap-5">
         <div className="img5 w-120 h-[400px] group relative overflow-hidden ">
            <img src={img5} alt="" className='absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110' />
           <div className="absolute inset-0 bg-black/90 transition-colors duration-500 group-hover:bg-black/40 z-10"></div>
            <div className="absolute left-8 z-10">
                <FaDraftingCompass className='absolute top-5  text-4xl  text-[#B68A35]' />
                <p className='absolute top-20 font-playfair font-[400] text-[48px] text-[#FFFFFF] leading-[48px]'>Strategic Masterplanning</p>
                <p className=' my-50 font-Outfit font-[400] text-[16px] text-[#FFFFFF99]'>
                    We don't just build structures; we curate ecosystems that
                    redefine how human life interacts with the built environment.
                </p>
                <button className="absolute top-80 w-50 h-10 border border-[#FFFFFF33] tracking-[0.7px] font-Outfit font-[500] text-[14px] text-[#FFFFFF]">OUR METHODOLOGY</button>
            </div>
         </div>

         <div className="grid grid-flow-col grid-rows-3 gap-y-5">
            <div className="img5 w-160 h-[190px] relative overflow-hidden bg-[#E5E2E1]">
            <div className="absolute left-8 z-10 top-10">
                <p className='text-[#111111] font-playfair font-[400] text-[30px] '>Eternal Sustainability</p>
                <p className='w-[319px] font-playfair font-[400] text-[16px] text-[#444748] leading-[24px] my-3'>
                    Integrating regenerative energy systems with
                    materials that age gracefully across centuries.
                </p>
                <MdOutlineEco className='absolute top-10  left-125 text-4xl  text-[#B68A35]' /> 
            </div>
         </div>
         <div className="flex gap-4 ">
             <div className="img5 w-78 h-[190px] relative overflow-hidden bg-[#0000000D]">
            <div className="absolute left-8 z-10 top-10">
                <HiOutlineBanknotes className='absolute -top-5  text-4xl text-[#111111]' /> 
                <p className='my-3 text-[#111111] font-playfair font-[400] text-[24px] '>Asset Liquidity</p>
                <p className=' w-[200px] font-Outfit font-[400] text-[16px] text-[#111111] leading-[24px] my-3'>
                   Maximizing ROIthrough architectural prestige.
                </p>  
            </div>
         </div>

          <div className="img5 w-78 h-[190px] relative overflow-hidden bg-[#B68A35]">
            <div className="absolute left-8 z-10 top-10">
                <LuBadgeSwissFranc className='absolute -top-5  text-4xl text-[#FFFFFF]' /> 
                <p className='my-3 text-[#FFFFFF] font-playfair font-[400] text-[24px] '>Swiss Precision</p>

                <p className=' w-[200px] font-Outfit font-[400] text-[16px] text-[#FFFFFF] leading-[24px] my-3'>
                   Tolerances measured in microns.
                </p>  
            </div>
         </div>
         </div>

         </div>
       </div>
     </div>
   </div> 
      {/* *********************************************************************************** */}
      <div className="sec6 w-full h-screen bg-[#111111] -my-20">
        <div className="container w-[80%] mx-auto flex">
            <div className="info-sec6 py-25">
              <p className='font-Outfit font-[700] text-[12px] font-bold text-[#C5A059] tracking-[3px]'>EXPERT LEADERSHIP</p>
              <p className='w-[580px] text-[#FFFFFF] font-playfair font-[400] text-[96px] leading-[96px] my-15 scale-95 hover:scale-120 hover:-translate-y-15 transition duration-1000 linear '>The Minds Behind Radix</p>
              <p className='w-[350px] font-Outfit font-[400] text-[16px] text-[#FFFFFF80] leading-[26px]'>
                Our leadership team brings decades of collective
                experience in real estate development, investment,
                and strategic planning.
              </p>
            </div>
            <div className="name-sec6 flex ">
                <p className="border border-[#FFFFFF1A] w-[1px] h-[575px] my-25 mx-10"></p>
                <div className="flex-col">
                  <div className=" my-27 scale-95 hover:scale-110 transition duration-110 linear ">
                     <p className="text-[#C5A059] font-Outfit font-[700] text-[10px] font-bold tracking-[2px]">CHAIRMAN & FOUNDER</p>
                     <p className='font-playfair font-[400] text-[36px] text-[#FFFFFF] leading-[50px]'>Mr. Salman Bin Khalil Al Sabaan</p>
                 </div>
                 <div className=" my-27 scale-95 hover:scale-110 transition duration-110 linear ">
                     <p className="text-[#C5A059] font-Outfit font-[700] text-[10px] font-bold tracking-[2px]">FOUNDER & C.E.O AL SALMANYA</p>
                     <p className='font-playfair font-[400] text-[36px] text-[#FFFFFF] leading-[50px]'>Mr. Ahmed Zaghloul</p>
                 </div>
                 <div className=" my-27 scale-95 hover:scale-110 transition duration-110 linear ">
                     <p className="text-[#C5A059] font-Outfit font-[700] text-[10px] font-bold tracking-[2px]">CEO RADIX</p>
                     <p className='font-playfair font-[400] text-[36px] text-[#FFFFFF] leading-[50px]'>Mr. Mohammed Salah</p>
                 </div> 
                    <div className="line border border-[#FFFFFF1A] w-[500px] h-[1px] -my-15"></div>
                    <div className="my-20 flex gap-19">
                        <div className="stat-sec6 ">
                            <p className='text-[#FFFFFF] font-Outfit font-[700] text-[12px] font-bold leading-[16px]'>SAMIR SHAHAT</p>
                            <p className='py-3 text-[#FFFFFF66] font-Outfit font-[400] text-[9px] font-bold leading-[13.5px] tracking-[2.5px]'>GENERAL MANAGER</p>
                        </div>
                        <div className="stat-sec6 ">
                            <p className='text-[#FFFFFF] font-Outfit font-[700] text-[12px] font-bold leading-[16px]'>KAREEM ELGENDY</p>
                            <p className='py-3 text-[#FFFFFF66] font-Outfit font-[400] text-[9px] font-bold leading-[13.5px] tracking-[2.5px]'>CHIEF COMMERCIAL</p>
                            <p className=' text-[#FFFFFF66] font-Outfit font-[400] text-[9px] font-bold leading-[13.5px] tracking-[2.5px]'>OFFICER</p>

                        </div>
                        <div className="stat-sec6 ">
                            <p className='text-[#FFFFFF] font-Outfit font-[700] text-[12px] font-bold leading-[16px]'>AHMED SALAH</p>
                            <p className='py-3 text-[#FFFFFF66] font-Outfit font-[400] text-[9px] font-bold leading-[13.5px] tracking-[2.5px]'>RE-INVESTMENT</p>
                            <p className=' text-[#FFFFFF66] font-Outfit font-[400] text-[9px] font-bold leading-[13.5px] tracking-[2.5px]'>MANAGER</p>

                        </div>
                    </div>

               </div>
            </div>
        </div>
      </div>
      {/* ********************************************************************************** */}
      <div className="sec7 w-full h-screen my-20 py-20 bg-[#EBEBEB] ">
           <div className="head-sec7 text-center">
                 <p className='font-Outfit font-[700] text-[10px] font-bold text-[#C5A059] leading-[15px] tracking-[2.5px]'>LEADERSHIP</p>
                 <p className='py-4 text-[#111111] font-playfair font-[400] text-[48px] leading-[48px] '>Our Board Members</p>
            </div>
          <div className="container w-[80%] mx-auto flex justify-between my-20">
             <div className="img-sec7 w-[220px] h-[400px] overflow-hidden  group cursor-pointer ">
                <img src={img71} alt="" className='w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <p className='my-3 w-[150px] text-center mx-auto text-[#111111] font-playfair font-[700] text-[20px] font-bold'>Mr. Salman Bin Khalil Al Sabaan</p>
                <p className='my-7 text-center font-Outfit font-[700] text-[9px] font-bold text-[#C5A059] leading-[13.5px] tracking-[2.75px]'>CHAIRMAN & FOUNDER</p>
             </div>
             <div className="img-sec7 w-[220px] h-[400px] overflow-hidden  group cursor-pointer ">
                <img src={img72} alt="" className='w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <p className='my-3 w-[150px] text-center mx-auto text-[#111111] font-playfair font-[700] text-[20px] font-bold'>Mr. Ahmed Zaghloul</p>

                <p className='my-7 text-center font-Outfit font-[700] text-[9px] font-bold text-[#C5A059] leading-[13.5px] tracking-[2.75px]'>FOUNDER & CEO AL SALMANYA</p>
             </div>
             <div className="img-sec7 w-[220px] h-[400px] overflow-hidden  group cursor-pointer ">
                <img src={img73} alt="" className='w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <p className='my-3 w-[150px] text-center mx-auto text-[#111111] font-playfair font-[700] text-[20px] font-bold'>Mr. Mohammed Salah</p>

                <p className='my-7 text-center font-Outfit font-[700] text-[9px] font-bold text-[#C5A059] leading-[13.5px] tracking-[2.75px]'>CEO RADIX</p>
             </div>
             <div className="img-sec7 w-[220px] h-[400px] overflow-hidden  group cursor-pointer ">
                <img src={img74} alt="" className='w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <p className='my-3 w-[150px] text-center mx-auto text-[#111111] font-playfair font-[700] text-[20px] font-bold'>Mr. Samir Shahat</p>
                <p className='my-7 text-center font-Outfit font-[700] text-[9px] font-bold text-[#C5A059] leading-[13.5px] tracking-[2.75px]'>GM</p>
             </div>
             <div className="img-sec7 w-[220px] h-[400px] overflow-hidden  group cursor-pointer ">
                <img src={img75} alt="" className='w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <p className='my-3 w-[150px] text-center mx-auto text-[#111111] font-playfair font-[700] text-[20px] font-bold'>Mr. Kareem Elgendy</p>

                <p className='my-7 text-center font-Outfit font-[700] text-[9px] font-bold text-[#C5A059] leading-[13.5px] tracking-[2.75px]'>CCO</p>
             </div>
          </div>
      </div>
        {/* ****************************************************************************************************************** */}
        <div className="sec8 w-full h-screen  ">
            <div className="container w-[80%] mx-auto">
                <div className="head-sec8">
                   <p className='text-[#C6A43F] font-Outfit font-[400] text-[16px] leading-[24px]'>OUR STORY</p>
                   <p className="py-5 text-[#111111] font-playfair font-[500] text-[64px] leading-[63px] tracking-[-0.64px]">Excellence in Motion</p>
                </div>
               <div className="box-contain my-20 flex justify-between ">
                 <div className="info-sec8 group relative overflow-hidden w-[370px] h-[406px] bg-[#0A0A0A] py-20 px-15 cursor-pointer">
                     <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                        <div className="relative z-10">
                          <p className='font-playfair font-[400] text-[30px] leading-[36px] text-[#F7F5F0]'>MISSION </p>
                           <p className="py-10 text-[#F7F5F099] font-Outfit font-[400] text-[16px] leading-[24px]">
                             Transforming innovative ideas into tangible, high-quality developments where your vision truly thrives.
                           </p>
                           <IoIosArrowRoundForward className='text-[#C6A43F] text-[50px] transition-all duration-500 group-hover:translate-x-50'/>
                       </div>
                  </div>

                  <div className="info-sec8 group relative overflow-hidden w-[370px] h-[406px] bg-[#0A0A0A] py-20 px-15 cursor-pointer">
                     <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                        <div className="relative z-10">
                          <p className='font-playfair font-[400] text-[30px] leading-[36px] text-[#F7F5F0]'>MISSION </p>
                           <p className="py-10 text-[#F7F5F099] font-Outfit font-[400] text-[16px] leading-[24px]">
                             Transforming innovative ideas into tangible, high-quality developments where your vision truly thrives.
                           </p>
                           <IoIosArrowRoundForward className='text-[#C6A43F] text-[50px] transition-all duration-500 group-hover:translate-x-50'/>
                       </div>
                  </div>

                  <div className="info-sec8 group relative overflow-hidden w-[370px] h-[406px] bg-[#0A0A0A] py-20 px-15 cursor-pointer">
                     <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
                        <div className="relative z-10">
                          <p className='font-playfair font-[400] text-[30px] leading-[36px] text-[#F7F5F0]'>MISSION </p>
                           <p className="py-10 text-[#F7F5F099] font-Outfit font-[400] text-[16px] leading-[24px]">
                             Transforming innovative ideas into tangible, high-quality developments where your vision truly thrives.
                           </p>
                           <IoIosArrowRoundForward className='text-[#C6A43F] text-[50px] transition-all duration-500 group-hover:translate-x-50'/>
                       </div>
                  </div>

              </div>
            </div>
        </div>
     {/* ************************************************************************************************************ */}
     <div className="sec1 relative w-full h-[900px] flex items-center">
        <img src={img9} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container w-[80%] mx-auto flex z-10">
            <div className="info-sec9 -my-70">
               <p className="text-[#C5A059] font-Outfit font-[700] text-[10px] font-bold leading-[15px] tracking-[5px]">OUR JOURNEY</p>
               <p className='py-10 w-[620px] text-[#FFFFFF] font-playfair font-[400] text-[96px] leading-[96px]'>The Evolution of Excellence</p>
               <p className=" w-[380px] font-Outfit font-[300] text-[16px] text-[#FFFFFF90] light ">
                 Our growth is measured by the landmarks we leave
                 behind. From initial concepts in 2018 to future horizons that redefine luxury.
               </p>
            </div>
            <div className="date-sec9 relative">
              <div className="absolute -top-110 left-[27px] w-[2px] h-[920px] bg-gradient-to-b from-transparent via-[#FFFFFF99] to-transparent z-0"></div>
               <div  className="relative z-10 flex items-center gap-10 cursor-pointer"> 
               <div className="w-4 h-4 bg-[#0A0A0A] rounded-full shadow-[0_0_15px_#0A0A0A] shrink-0 absolute -top-85 left-5 "></div>
                  <div className="absolute left-10 -top-100">
                    <p className="text-[#FFFFFF] font-playfair font-[400] text-[90px] "> 2018 </p>
                    <p className='text-[#FFFFFF]  font-Outfit font-[700] text-[18px] font-bold leading-[28px] tracking-[4.5px] py-2'>FOUNDATIONS LAID</p>
                    <p className='w-[350px] font-outfit font-[300] text-[#FFFFFF90] text-[14px]'>
                       Radix is established with a mission to bring international engineering
                       standards to regional development.
                    </p>
                  </div>  
                    <div className="w-4 h-4 bg-[#0A0A0A] rounded-full shadow-[0_0_15px_#0A0A0A] shrink-0 absolute -top-15 left-5 "></div>
                   <div className="absolute left-10 -top-32">
                    <p className="text-[#FFFFFF] font-playfair font-[400] text-[96px] "> 2020 </p>
                    <p className='text-[#FFFFFF]  font-Outfit font-[700] text-[18px] font-bold leading-[28px] tracking-[4.5px] py-2'>RAPID EXPANSION</p>
                    <p className='w-[350px] font-outfit font-[300] text-[#FFFFFF90] text-[14px]'>
                      Expansion into multi-use commercial hubs, setting new occupancy
                       records in the capital's central districts.
                    </p>
                  </div>   

                   <div className="w-4 h-4 bg-[#0A0A0A] rounded-full shadow-[0_0_15px_#0A0A0A] shrink-0 absolute top-50 left-5 "></div>
                   <div className="absolute left-10 top-32">
                    <p className="text-[#FFFFFF] font-playfair font-[400] text-[96px] "> 2022 </p>
                    <p className='text-[#FFFFFF]  font-Outfit font-[700] text-[18px] font-bold leading-[28px] tracking-[4.5px] py-2'>INNOVATIVE LIVING</p>
                    <p className='w-[350px] font-outfit font-[300] text-[#FFFFFF90] text-[14px]'>
                       Launch of signature residential towers and complexes integrating
                        advanced technologies and green living.
                    </p>
                  </div>                     
             </div>
            </div>
        </div>
    </div>
    {/* ************************************************************************************* */}
     <div className="sec10 w-full h-screen  bg-[#EBEBEB]">
        <div className="container w-[80%] mx-auto">
            <div className="head-sec3 py-30">
                <p className='font-Outfit font-[700] text-[10px] font-bold leading-[15px] tracking-[2.5px] text-[#C5A059]'>TESTIMONIALS</p>
                <div className='flex  justify-between'>
                  <h2 className='font-playfair font-[400] text-[48px] text-[#111111]'>What Our Clients Say</h2>
                  <p className="text-[#11111199] font-Outfit font-[400] text-[10px] leading-[15px] tracking-[2.5px] underline underline-offset-8 my-5">VIEW ALL TESTIMONIALS →</p>
                </div>
            </div>

            <div className="img-sec10 flex justify-between  -my-15 ">
              <div className="w-[390px] h-[315px] relative cursor-pointer bg-white py-10 px-20">
                  <RiDoubleQuotesL className='text-[#C5A059] text-[36px]' />
                  <p className=' my-10 Regular font-Outfit font-[400] text-[14px] text-[#111111B2]'>Radix Development exceeded our expectations. The quality, design, and attention to detail are truly unmatched.</p>
                  <div className="flex">
                    <p className="  w-15 h-15 rounded-[999px] text-[55px] bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-[0.5]"></p> 
                     <p className='my-5 mx-3 text-[#111111] font-Outfit font-[700] font-bold text-[10px] tracking-[2.5px]'>AHMED M.</p>
                  </div>
             </div>

              <div className="w-[390px] h-[315px] relative cursor-pointer bg-white py-10 px-20">
                  <RiDoubleQuotesL className='text-[#C5A059] text-[36px]' />
                  <p className=' my-10 Regular font-Outfit font-[400] text-[14px] text-[#111111B2]'>Radix Development exceeded our expectations. The quality, design, and attention to detail are truly unmatched.</p>
                  <div className="flex">
                    <p className="  w-15 h-15 rounded-[999px] text-[55px] bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-[0.5]"></p> 
                     <p className='my-5 mx-3 text-[#111111] font-Outfit font-[700] font-bold text-[10px] tracking-[2.5px]'>AHMED M.</p>
                  </div>
             </div>

              <div className=" w-[390px] h-[315px] relative cursor-pointer bg-white py-10 px-20">
                  <RiDoubleQuotesL className='text-[#C5A059] text-[36px]' />
                  <p className=' my-10 Regular font-Outfit font-[400] text-[14px] text-[#111111B2]'>Radix Development exceeded our expectations. The quality, design, and attention to detail are truly unmatched.</p>
                  <div className="flex">
                    <p className="  w-15 h-15 rounded-[999px] text-[55px] bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-[0.5]"></p> 
                     <p className='my-5 mx-3 text-[#111111] font-Outfit font-[700] font-bold text-[10px] tracking-[2.5px]'>AHMED M.</p>
                  </div>
             </div>
             </div>
        </div>
      </div>
      {/* ******************************************************************************************************* */}
       <div className="section-11 w-full -my-15">
    <div className="container relative w-full h-[700px] overflow-hidden">
        
        {/* الصورة */}
        <img src={img11} alt="" className='w-full h-full object-cover' />
        
        <div className="absolute inset-0 bg-[black] opacity-60 pointer-events-none "></div>

        <div className="info-sec8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center justify-center gap-4 mt-10 ">
            <h2 className='w-250 text-center font-playfair font-[600] text-[96px] text-[#FFFFFF]'>Let's Build The Future Together.</h2>

            <div className="btn-sec11 flex items-center justify-center gap-4 mt-10">
              <button className='w-[350px] h-[65px]  bg-[#C6A43F] text-[#0A0A0A] font-Outfit tracking-[4.2px] font-[500] text-[14px]'>BOOK A CONSULTATION</button>

            </div>
        </div>
    </div>
 </div>

{/* ***************************************************************************************************** */}
    <div className="section12 bg-[#111111] w-full h-[500px] my-15">
       <div className="container w-[80%] mx-auto">
          <div className='flex justify-between'>
                <div className="info-sec12 my-20 ">
                  <h2 className='text-[50px] font-caslon text-[white]'>Radix</h2>
                  <p className='my-8 w-[250px] h-[77px] font-Outfit font-[400] text-[16px] text-[#FFFFFF80]'>
                     Radix Development is one of
                      the Al-Salmanya Group
                      companies. We have added
                      value to the Egyptian real
                      estate market through passion
                      and precision.
                  </p>
                  <div className="flex gap-10 -my-15">
                    <p className="my-20 border w-12 h-12 rounded-[999px] border-[#F9F9F933] text-[#FFFFFF]"><FaEarthAfrica className='my-3 mx-auto text-[22px]' /> </p>
                    <p className="my-20 border w-12 h-12 rounded-[999px] border-[#F9F9F933] text-[#FFFFFF]"><MdLanguage className='my-3 mx-auto text-[22px]' /> </p>
                  </div>
               </div>
                   <div className="stat-info my-20">
                     <p className='text-[#B68A35] font-Outfit font-[400] text-[16px] py-5'>WHO WE ARE</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px]">About Us</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px] py-3">Our Team</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px]">Careers</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px] py-3">Contact Us</p>
                   </div>
                   <div className="stat-info my-20">
                     <p className='text-[#B68A35] font-Outfit font-[400] text-[16px] py-5'>PROJECTS</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px]">Radix B2</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px] py-3">Agile Complex</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px]">Spinner Towers</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px] py-3">Ray Residence</p>
                   </div>
                   <div className="stat-info my-20">
                     <p className='text-[#B68A35] font-Outfit font-[400] text-[16px] py-5'>GET IN TOUCH</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px]">Hotline: 19238</p>
                     <p className=" text-[#FFFFFF99] font-Outfit font-[400] text-[16px] py-3">info@radix-development.com</p>
                     <input type="text" placeholder='Subscribe to Newsletter'  className='w-[220px] h-[40px] font-Outfit font-[400] text-[16px] border border-[#F9F9F933] text-[#F9F9F933] px-5'/>
                   </div>
            </div>
        </div>
             
    </div>  















      </div>

      
      
    </>
  )
}