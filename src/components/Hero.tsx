'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8">
            {/* <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full border-4 border-white shadow-2xl dark:border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">👨‍💻</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Profile Photo</div>
              </div>
            </div> */}
            {/* Uncomment when you add profile.jpg */}
            <Image
              src="/profile.jpg"
              alt="Worawut Yachaiya Profile"
              width={192}
              height={192}
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl dark:border-gray-700 mt-4"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-600 opacity-20"></div>
            {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              สวัสดี! ผม
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            Worawut Yachaiya
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
            Full Stack Web Developer
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            ผมมีความสนใจในด้านการพัฒนาเว็บไซต์ พร้อมที่จะเรียนรู้อะไรใหม่ๆ และเข้าสู่การทำงานจริง เพื่อให้ได้ประสบการณ์ในทางปฏิบัติ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="/portfolio.pdf"
            download
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            ดาวน์โหลด File
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
          >
            ติดต่อผม
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: 'https://github.com/worawutyachaiya', label: 'GitHub' },
            { icon: Mail, href: 'mailto:worawut.ycy@gmail.com', label: 'Email' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
            >
              <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
            <ChevronDown size={32} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
