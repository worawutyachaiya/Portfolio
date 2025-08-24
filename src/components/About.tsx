'use client';

import { motion } from 'framer-motion';
import { Award, Coffee, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'GPAX ปัจจุบัน', value: '3.89' },
    { icon: Coffee, label: 'โปรเจคที่ทำ', value: '2' },
    { icon: Users, label: 'Certificate', value: '3+' },
    { icon: Clock, label: 'ชั่วโมงเรียนรู้', value: '100+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            เกี่ยวกับผม
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              ความหลงใหลในการพัฒนา
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                ผมมีความสนใจในด้านการพัฒนาเว็บไซต์ โดยได้มีประสบการณ์ในการทำงานโปรเจคต่างๆ 
                เพื่อสั่งสมประสบการณ์ และปัจจุบันเชื่อมั่นว่าพร้อมที่จะเรียนรู้อะไรใหม่ๆ 
                และเข้าสู่การทำงานจริงเพื่อให้ได้ประสบการณ์ในทางปฏิบัติ
              </p>
              <p>
                ผมกำลังศึกษาระดับปริญญาตรี สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ 
                โดยมีเกรดเฉลี่ย 3.89 และมีความสนใจเป็นพิเศษในด้าน Full-Stack Web Development
              </p>
              <p>
                ผมได้ผ่านการอบรม Full-Stack Web Development Bootcamp จาก Udemy (62 ชั่วโมง) 
                และได้รับ Speexx Certificate ระดับ B1.1 ในการพัฒนาทักษะภาษาอังกฤษ
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                สิ่งที่ผมให้ความสำคัญ:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  การเรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่อง
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  การสร้างผลงานที่มีคุณภาพและใช้งานได้จริง
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean Code และ Best Practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  การพัฒนาทักษะและประสบการณ์ในทางปฏิบัติ
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
