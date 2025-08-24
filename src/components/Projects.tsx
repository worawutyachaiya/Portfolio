'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Measurement and Assessment System',
      description: 'เว็บไซต์เรียนออนไลน์ที่มี Algorithm ที่จะช่วยให้ผู้เรียนสามารถเรียนได้แบบถูกตามลำดับที่ควรจะเป็นและไม่เสียเวลาไปเรียนเนื้อหาที่ไม่จำเป็น เพราะอาจจะมีความรู้อยู่แล้วบางส่วน และยังสามารถดูความก้าวหน้าหรือผลสรุปความก้าวหน้าของตัวเอง',
      image: '/next.svg', // Replace with actual project image
      tags: ['ReactJS', 'NextJS', 'TailwindCSS', 'PostgreSQL', 'Algorithm'],
      github: 'https://github.com/worawutyachaiya/E-learning-system-Measurement-and-Assessment-System',
      demo: 'https://github.com/worawutyachaiya/E-learning-system-Measurement-and-Assessment-System',
      features: [
        'ระบบ Algorithm สำหรับจัดลำดับการเรียน',
        'ติดตามความก้าวหน้าการเรียน',
        'ประเมินความรู้เดิมของผู้เรียน',
        'Dashboard แสดงผลสรุป',
      ],
    },
    {
      title: 'Amulet E-commerce',
      description: 'เว็บไซต์ขายพระเครื่องออนไลน์หรือเว็บ e-commerce ที่สร้างขึ้นเพื่อวงการพระเครื่อง โดยรวบรวมพระเครื่องยอดนิยมหรือโด่งดังหลากหลายเกจิอาจารย์หลากหลายวัดที่เป็นที่ต้องการ',
      image: '/next.svg', // Replace with actual project image
      tags: ['PHP', 'PDO', 'Bootstrap', 'MySQL', 'E-commerce'],
      github: 'https://github.com/worawutyachaiya/Amulet',
      demo: 'https://github.com/worawutyachaiya/Amulet',
      features: [
        'ระบบจัดการสินค้าพระเครื่อง',
        'ระบบการสั่งซื้อและชำระเงิน',
        'การจัดหมวดหมู่ตามเกจิอาจารย์',
        'ระบบค้นหาและกรองสินค้า',
      ],
    },
    {
      title: 'Portfolio Website',
      description: 'เว็บไซต์แสดงผลงานส่วนตัวที่สร้างด้วย Next.js และ Tailwind CSS พร้อมระบบ responsive design และ dark mode',
      image: '/next.svg', // Replace with actual project image
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/worawutyachaiya',
      demo: '#',
      features: [
        'Responsive Design',
        'Dark/Light Mode',
        'Smooth Animations',
        'SEO Optimized',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            ผลงานของผม
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            โปรเจคที่ผมได้พัฒนาและมีส่วนร่วมในการสร้างสรรค์
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <ExternalLink size={20} className="text-gray-800" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github size={20} className="text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    ฟีเจอร์หลัก:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center text-sm font-medium"
                  >
                    <Eye size={16} className="mr-2" />
                    ดูเดโม
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    โค้ด
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/worawutyachaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            ดูผลงานเพิ่มเติมใน GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
