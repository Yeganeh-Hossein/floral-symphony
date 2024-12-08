// src/app/page.tsx
"use client";

import { useState } from "react";
import Splash from "./components/Splash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  // تابعی برای پنهان کردن Splash
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div>
      {showSplash ? (
        <Splash onFinish={handleSplashFinish} />
      ) : (
        <main>
          {/* بخش Navbar */}
          <Navbar />

          {/* بخش اصلی محتوای صفحه */}
          <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-16">
            <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
              Welcome to Your Website!
            </h1>
            <p className="mt-4 text-center text-sm text-gray-600 sm:text-base lg:text-lg">
              This is a fully responsive layout with Tailwind CSS.
            </p>
          </section>

          {/* بخش Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
};

export default Home;
