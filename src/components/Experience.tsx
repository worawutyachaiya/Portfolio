'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, Eye, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    image: string;
  } | null>(null);
  const [imageLoading, setImageLoading] = useState(false);

  const openCertificate = (title: string, image: string) => {
    setImageLoading(true);
    setSelectedCertificate({ title, image });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setImageLoading(false);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCertificate();
      }
    };
    if (selectedCertificate) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);
  const experiences = [
    {
      title: 'Full-Stack Web Development Bootcamp',
      company: 'Udemy Online Course',
      location: 'ออนไลน์',
      period: '2024',
      description: [
        'คอร์สเรียนออนไลน์ครบครัน 62 ชั่วโมง ที่มีผู้เรียนกว่า 1.4 ล้านคน',
        'เรียนรู้การพัฒนาเว็บไซต์แบบครบวงจร Frontend และ Backend',
        'ฝึกปฏิบัติการสร้างโปรเจคจริงและการแก้ปัญหา',
        'ได้รับใบประกาศนียบัตรผ่านการอบรมเรียบร้อยแล้ว',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    },
    {
      title: 'Speexx Certificate B1.1',
      company: 'Speexx Language Training',
      location: 'ออนไลน์',
      period: '2024',
      description: [
        'การฝึกอบรมภาษาอังกฤษตามกรอบมาตรฐาน CEFR',
        'มาตรฐานสากลสำหรับการเรียน การสอน และการประเมินผล',
        'ผ่านการทดสอบและได้รับผลลัพธ์ระดับ B1.1',
        'พัฒนาทักษะการสื่อสารภาษาอังกฤษในด้านเทคโนโลยี',
      ],
      skills: ['English Communication', 'Technical English', 'Presentation'],
    },
  ];

  const education = [
    {
      degree: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
      school: 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์หันตรา',
      period: '2565 - ปัจจุบัน',
      gpa: '3.89',
    },
    {
      degree: 'ประกาศนียบัตรวิชาชีพชั้นสูง สาขาคอมพิวเตอร์ธุรกิจ',
      school: 'วิทยาลัยอาชีวศึกษาพระนครศรีอยุธยา',
      period: '2562 - 2564',
      gpa: '3.50',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            ประสบการณ์การทำงาน
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            เส้นทางการเติบโตในสายงานพัฒนาเว็บไซต์และแอปพลิเคชัน
          </p>
        </motion.div>

        {/* Certifications & Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            การบรรลุผลสำเร็จ
          </h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
              >
                <div className="flex items-center mb-2">
                  <Briefcase size={20} className="text-blue-600 mr-2" />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.period}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {exp.title}
                </h4>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <span className="font-semibold">{exp.company}</span>
                  <MapPin size={16} className="mx-2" />
                  <span>{exp.location}</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities with Certificates */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            กิจกรรมและการมีส่วนร่วม
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Artificial Intelligence Meeting 2565',
                description: 'การสัมมนาเรื่องระบบปัญญาประดิษฐ์ร่วมกับ Machine Learning และ Deep Learning เพื่อการพัฒนาประเทศในยุคดิจิทัล',
                year: '2565',
                image: '/certificates/AI Meeting 2565.png'
              },
              {
                title: 'ASEAN Digital Literacy Programme (ADLP)',
                description: 'เสริมสร้างความฉลาดรู้ด้านดิจิทัลในระดับอาเซียน',
                year: '2566',
                image: '/certificates/ASEAN Digital Literacy Programme.png'
              },
              {
                title: 'International Conference on Science and Technology',
                description: 'การประชุมวิชาการระดับนานาชาติ คณะวิทยาศาสตร์และเทคโนโลยีเพื่อนำเสนอผลงานวิชาการและแลกเปลี่ยนความคิดเห็น',
                year: '2568',
                image: '/certificates/International Conference on Science and Technology.png'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openCertificate(activity.title, activity.image)}
                      className="bg-white bg-opacity-90 text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-white transition-all duration-200 transform hover:scale-105"
                    >
                      <Eye size={16} />
                      ดูเกียรติบัตร
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.year}
                  </div>
                </div>
                
                {/* Activity Info */}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Award size={20} className="text-blue-600 mr-2" />
                    <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      กิจกรรม {activity.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => openCertificate(activity.title, activity.image)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                    >
                      <Eye size={14} />
                      คลิกเพื่อดูเกียรติบัตรเต็มขนาด
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            การศึกษา
          </h3>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-3"
              >
                <div className="flex items-center mb-2">
                  <Calendar size={20} className="text-blue-600 mr-2" />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{edu.period}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  เกรดเฉลี่ย: <span className="font-semibold">{edu.gpa}</span>
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeCertificate}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
            
            {/* Certificate Image */}
            <div className="relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </div>
            
            {/* Certificate Title and Info */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
                {selectedCertificate.title}
              </h3>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span>คลิกภายนอกหรือกด ESC เพื่อปิด</span>
                <span>•</span>
                <span>ขยายรูปภาพได้</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Experience;
