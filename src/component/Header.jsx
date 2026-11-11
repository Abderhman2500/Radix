import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from 'react-router-dom';

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // مراقبة حركة الـ Scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // لو إنت في أول الصفحة، أظهر الهيدر دايماً
    if (latest <= 0) {
      setIsHidden(false);
      return;
    }
    
    // لو بتعمل Scroll لتحت وعديت 50 بيكسل، اخفي الهيدر
    // لو بتعمل Scroll لفوق، أظهره تاني
    if (latest > previous && latest > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'ABOUT', href: '/' },
    { name: 'PROJECTS', href: '#PROJECTS' },
    { name: 'MEDIA', href: '#MEDIA' },
    { name: 'CAREERS', href: '#CAREERS' },
  ];

  return (
    <motion.header 
      // الأنيميشن المبدئي أول ما تفتح الصفحة
      initial={{ y: -100, opacity: 0 }}
      // الأنيميشن بيتغير بناءً على حالة الـ Scroll
        animate={{ 
        y: isHidden ? -100 : 0, 
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-[#C4C7C8]  absolute top-0 left-0 w-full z-50 "
    >
      <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center z-1">
           <h1 className='text-[50px] font-caslon text-[white]'>Radix</h1>
        </Link>

       <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`pb-1 transition-all duration-200 uppercase font-[800] font-Outfit text-[14px] text-[#FFFFFFCC]  tracking-[3px] ${
                // تم تعديل Home لتصبح HOME لتتطابق مع المصفوفة فوق
                item.name === 'HOME' 
                  ? 'text-[#F6921E] border-b-2 border-[#F6921E] font-bold' 
                  : 'text-[#001237]' // تم وضع لون افتراضي صالح بدلاً من text-[]
              }`}
            >
              {item.name}
            </a>    
          ))}
        </nav>
         <div className="flex gap-10">
             <p className='my-4 text-[#FFFFFF] font-[400] font-Outfit  text-[13px]'>91150</p>
             <button className="relative w-[146px] h-[50px] tracking-[1.4px] font-grotesk font-[600] bg-[#C5A059] text-[16px] text-[black] px-6 py-2.5  regular shadow-md hover:shadow-lg transition-all duration-300 transform active:translate-y-0 cursor-pointer">
              contact us
               </button>
         </div>
      </div>    
    </motion.header>
  );
}