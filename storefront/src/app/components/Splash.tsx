"use client";

import React from 'react';

interface SplashProps {
  onFinish: () => void; // تابعی که وقتی اسپلاش تمام شد فراخوانی می‌شود
}

const Splash: React.FC<SplashProps> = ({ onFinish }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // بعد از ۲ ثانیه اسپلاش را غیرفعال می‌کند
    }, 3000);

    return () => clearTimeout(timer); // پاک کردن تایمر در صورت نیاز
  }, [onFinish]);

  return (
    <div className="relative min-h-screen bg-base-200">
      {/* بنر */}
      <img
        src="/images/Hero.jpg"
        alt="Splash"
        className="w-[90%] lg:w-[70%] h-auto mx-auto"
      />    
      {/* loading در پایین بنر */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  );
};

export default Splash;
